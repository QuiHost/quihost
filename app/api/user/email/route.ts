import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
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
    const verificationToken = crypto.randomBytes(32).toString('hex')

    // Update user with new email and verification token
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        email: email,
        emailVerified: false,
        verificationToken: verificationToken
      }
    })

    // Send verification email
    await sendVerificationEmail(email, verificationToken, user.name)

    return NextResponse.json({
      message: 'Email aggiornata con successo',
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