import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// Schema di validazione per la verifica del codice
const verifySchema = z.object({
  phone: z.string().min(10).max(15),
  code: z.string().length(6),
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
    const { phone, code } = verifySchema.parse(body)

    // Cerca la verifica più recente per questo utente e numero
    const verification = await prisma.phoneVerification.findFirst({
      where: {
        userId: session.user.id,
        phone: phone,
        verified: false,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    if (!verification) {
      return NextResponse.json(
        { error: 'Nessuna verifica in corso per questo numero' },
        { status: 404 }
      )
    }

    // Verifica se il codice è scaduto
    if (verification.expiresAt < new Date()) {
      return NextResponse.json(
        { error: 'Codice scaduto' },
        { status: 400 }
      )
    }

    // Verifica se il codice è corretto
    if (verification.code !== code) {
      return NextResponse.json(
        { error: 'Codice non valido' },
        { status: 400 }
      )
    }

    // Aggiorna lo stato della verifica
    await prisma.phoneVerification.update({
      where: { id: verification.id },
      data: { verified: true },
    })

    // Aggiorna il numero di telefono verificato dell'utente
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        phone: phone,
        phoneVerified: true,
      },
    })

    return NextResponse.json(
      { message: 'Numero di telefono verificato con successo' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Errore durante la verifica del numero:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dati di verifica non validi' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Errore durante la verifica del numero' },
      { status: 500 }
    )
  }
} 