import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const telegramSchema = z.object({
  username: z.string().min(5),
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
    const { username } = telegramSchema.parse(body)

    // Aggiorna l'utente con l'username Telegram
    await prisma.user.update({
      where: { id: session.user.id },
      data: { telegramUsername: username },
    })

    return NextResponse.json({ 
      message: 'Username Telegram salvato con successo'
    })
  } catch (error) {
    console.error('Errore durante il salvataggio dell\'username Telegram:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Username Telegram non valido' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Errore durante il salvataggio dell\'username Telegram' },
      { status: 500 }
    )
  }
} 