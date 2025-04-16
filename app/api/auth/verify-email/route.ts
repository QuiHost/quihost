import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { sendVerificationEmail } from '@/lib/email'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: Request) {
  try {
    const { token } = await req.json()

    if (!token) {
      return NextResponse.json({ message: 'Token mancante' }, { status: 400 })
    }

    // Trova il token di verifica che inizia con il codice fornito (6 caratteri)
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        token: {
          startsWith: token.toUpperCase()
        }
      },
    })

    if (!verificationToken) {
      return NextResponse.json({ message: 'Token non valido' }, { status: 400 })
    }

    // Verifica se il token è scaduto
    if (verificationToken.expires < new Date()) {
      await prisma.verificationToken.delete({
        where: { token: verificationToken.token },
      })
      return NextResponse.json({ message: 'Token scaduto' }, { status: 400 })
    }

    // Trova l'utente associato all'email
    const user = await prisma.user.findUnique({
      where: { email: verificationToken.identifier },
      select: {
        id: true,
        userType: true,
        email: true
      }
    })

    if (!user) {
      return NextResponse.json({ message: 'Utente non trovato' }, { status: 404 })
    }

    // Aggiorna lo stato di verifica dell'email
    await prisma.user.update({
      where: { id: user.id },
      data: { emailVerified: new Date() },
    })

    // Elimina il token di verifica
    await prisma.verificationToken.delete({
      where: { token: verificationToken.token },
    })

    return NextResponse.json({ 
      message: 'Email verificata con successo',
      userType: user.userType
    })
  } catch (error) {
    console.error('Errore durante la verifica dell\'email:', error)
    return NextResponse.json({ message: 'Errore interno del server' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { token } = await request.json()
    
    if (!token) {
      return NextResponse.json({ error: 'Token required' }, { status: 400 })
    }

    // Trova l'utente con il token di verifica
    const user = await prisma.user.findFirst({
      where: { verificationToken: token }
    })

    if (!user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
    }

    // Aggiorna l'utente rimuovendo il token di verifica (indica che l'email è verificata)
    await prisma.user.update({
      where: { id: user.id },
      data: { verificationToken: null }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email verification error:', error)
    return NextResponse.json(
      { error: 'Failed to verify email' },
      { status: 500 }
    )
  }
} 