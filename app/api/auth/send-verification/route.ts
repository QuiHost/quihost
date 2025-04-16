import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { generateVerificationCode } from '@/lib/utils'
import { sendEmail } from '@/lib/email'

// Schema di validazione per il numero di telefono
const phoneSchema = z.object({
  phone: z.string().min(10).max(15),
})

async function sendTelegramMessage(username: string, message: string) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  if (!BOT_TOKEN) {
    throw new Error('Token del bot Telegram non configurato')
  }

  // Prima otteniamo il chat_id dell'utente
  const getUserResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getChat?chat_id=@${username}`)
  const userData = await getUserResponse.json()
  
  if (!userData.ok) {
    throw new Error('Username Telegram non trovato')
  }

  // Invia il messaggio
  const sendMessageResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: userData.result.id,
      text: message,
      parse_mode: 'HTML',
    }),
  })

  const messageData = await sendMessageResponse.json()
  if (!messageData.ok) {
    throw new Error('Errore nell\'invio del messaggio Telegram')
  }

  return messageData
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Non autorizzato' },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { phone } = phoneSchema.parse(body)

    // Genera un codice di 6 cifre
    const code = generateVerificationCode()
    
    // Imposta la scadenza a 10 minuti
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

    // Crea una nuova verifica nel database
    await prisma.verificationToken.create({
      data: {
        identifier: `${session.user.id}:${phone}`,
        token: code,
        expires: expiresAt,
      },
    })

    // Invia il codice via email
    if (session.user.email) {
      await sendEmail({
        to: session.user.email,
        subject: 'Codice di verifica Turno',
        text: `Il tuo codice di verifica per il numero ${phone} è: ${code}. Questo codice scadrà tra 10 minuti.`,
        html: `
          <h2>Codice di verifica Turno</h2>
          <p>Il tuo codice di verifica per il numero ${phone} è:</p>
          <h1 style="font-size: 32px; letter-spacing: 5px; background: #f5f5f5; padding: 20px; text-align: center; font-family: monospace;">${code}</h1>
          <p>Questo codice scadrà tra 10 minuti.</p>
        `
      })
    }

    if (process.env.NODE_ENV === 'development') {
      // In development, usa il mock service
      mockVerificationService.sendVerificationCode(phone, code)
    } else {
      // In production, usa Telegram o SMS
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { telegramUsername: true },
      })

      if (user?.telegramUsername) {
        try {
          await sendTelegramMessage(
            user.telegramUsername,
            `<b>Codice di verifica Turno</b>\n\nEcco il tuo codice di verifica: <code>${code}</code>\n\nQuesto codice scadrà tra 10 minuti.`
          )
        } catch (error) {
          console.error('Errore nell\'invio del messaggio Telegram:', error)
          throw new Error('Errore nell\'invio del codice di verifica')
        }
      } else {
        // TODO: Implementare l'invio via SMS
        throw new Error('Invio SMS non ancora implementato')
      }
    }

    return NextResponse.json({ 
      message: 'Codice di verifica inviato con successo',
      // In development, includi il codice nella risposta
      code: process.env.NODE_ENV === 'development' ? code : undefined
    })
  } catch (error) {
    console.error('Errore durante l\'invio del codice:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Numero di telefono non valido' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Errore durante l\'invio del codice di verifica' },
      { status: 500 }
    )
  }
} 