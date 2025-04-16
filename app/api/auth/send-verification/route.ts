import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

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

    // Genera un codice casuale a 6 cifre
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    
    // Imposta la scadenza a 10 minuti da ora
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

    // Crea una nuova verifica nel database
    await prisma.phoneVerification.create({
      data: {
        userId: session.user.id,
        phone,
        code,
        expiresAt,
      },
    })

    // Recupera l'username Telegram dell'utente
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { telegramUsername: true },
    })

    if (user?.telegramUsername) {
      // Se l'utente ha un username Telegram, invia il codice tramite Telegram
      try {
        await sendTelegramMessage(
          user.telegramUsername,
          `<b>Codice di verifica Turno</b>\n\nEcco il tuo codice di verifica: <code>${code}</code>\n\nQuesto codice scadrà tra 10 minuti.`
        )
      } catch (error) {
        console.error('Errore nell\'invio del messaggio Telegram:', error)
        // Se c'è un errore con Telegram, logghiamo il codice per il testing
        if (process.env.NODE_ENV === 'development') {
          console.log('Codice di verifica:', code)
        }
      }
    } else {
      // Se l'utente non ha un username Telegram, logghiamo il codice per il testing
      if (process.env.NODE_ENV === 'development') {
        console.log('Codice di verifica:', code)
      }
    }

    return NextResponse.json({ 
      message: 'Codice di verifica inviato con successo',
      // In produzione, non inviare mai il codice nella risposta
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