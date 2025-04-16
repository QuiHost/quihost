import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// Schema di validazione per il numero di telefono
const phoneSchema = z.object({
  phone: z.string().min(10).max(15),
})

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
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    
    // Imposta la scadenza a 10 minuti
    const expiresAt = new Date()
    expiresAt.setMinutes(expiresAt.getMinutes() + 10)

    // Crea o aggiorna la verifica telefonica
    await prisma.phoneVerification.create({
      data: {
        userId: session.user.id,
        phone,
        code,
        expiresAt,
      },
    })

    // TODO: Invia il codice via SMS usando un servizio di terze parti
    console.log(`Codice di verifica per ${phone}: ${code}`)

    return NextResponse.json(
      { message: 'Codice di verifica inviato' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Errore durante l\'invio del codice di verifica:', error)
    
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