import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { sendVerificationEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return new NextResponse('Non autorizzato', { status: 401 })
    }

    const { email } = await req.json()

    // Verifica se l'email è già in uso da un altro utente
    const existingUser = await prisma.user.findFirst({
      where: {
        email,
        id: {
          not: session.user.id
        }
      }
    })

    if (existingUser) {
      return new NextResponse('Email già in uso', { status: 400 })
    }

    // Se l'email è diversa da quella attuale, richiedi la verifica
    if (email !== session.user.email) {
      // Genera un token di verifica
      const verificationToken = await prisma.verificationToken.create({
        data: {
          identifier: email,
          token: Math.random().toString(36).substring(2),
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 ore
        }
      })

      // Invia l'email di verifica
      await sendVerificationEmail(email, verificationToken.token)

      // Aggiorna l'email dell'utente ma imposta emailVerified a null
      await prisma.user.update({
        where: { id: session.user.id },
        data: {
          email,
          emailVerified: null
        }
      })

      return NextResponse.json({ requiresVerification: true })
    }

    // Se l'email è la stessa, aggiorna semplicemente
    await prisma.user.update({
      where: { id: session.user.id },
      data: { email }
    })

    return NextResponse.json({ requiresVerification: false })
  } catch (error) {
    console.error('Errore durante l\'aggiornamento dell\'email:', error)
    return new NextResponse('Errore interno del server', { status: 500 })
  }
} 