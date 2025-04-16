import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

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
    const verification = await prisma.verificationToken.findFirst({
      where: {
        identifier: `${session.user.id}:${phone}`,
        token: code,
      },
    })

    if (!verification) {
      return NextResponse.json(
        { error: 'Codice non valido o scaduto' },
        { status: 400 }
      )
    }

    // Verifica se il codice è scaduto
    if (verification.expires < new Date()) {
      return NextResponse.json(
        { error: 'Codice scaduto' },
        { status: 400 }
      )
    }

    // Elimina il token di verifica
    await prisma.verificationToken.delete({
      where: { identifier_token: {
        identifier: verification.identifier,
        token: verification.token
      }},
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
    console.error('Errore durante la verifica del codice:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dati di verifica non validi' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Errore durante la verifica del codice' },
      { status: 500 }
    )
  }
} 