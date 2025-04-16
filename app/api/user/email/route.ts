import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { sendVerificationEmail } from '@/lib/email'
import crypto from 'crypto'

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
    }

    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
    }

    // Check if email is already taken by another user
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
        NOT: {
          email: session.user.email // Exclude current user
        }
      }
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Email già in uso' }, { status: 400 })
    }

    // Generate new verification token
    const verificationToken = crypto.randomUUID()
    const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now

    // Update user with new email and set emailVerified to null
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        email: email,
        emailVerified: null
      }
    })

    // Create verification token in the VerificationToken model
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token: verificationToken,
        expires: expiryDate
      }
    })

    // Send verification email
    await sendVerificationEmail(email, verificationToken)

    return NextResponse.json({
      message: 'Email aggiornata con successo. Controlla la tua email per verificare il nuovo indirizzo.',
      user: {
        ...user,
        password: undefined // Don't send password back
      }
    })
  } catch (error) {
    console.error('Error updating email:', error)
    return NextResponse.json(
      { error: 'Errore durante l\'aggiornamento dell\'email' },
      { status: 500 }
    )
  }
} 