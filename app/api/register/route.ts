import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { sendVerificationEmail } from '@/lib/email'
import crypto from 'crypto'

export async function POST(req: Request) {
  try {
    if (!req.body) {
      return NextResponse.json(
        { message: 'Dati mancanti' },
        { status: 400 }
      )
    }

    const body = await req.json()
    const { name, email, password, userType } = body

    if (!name || !email || !password || !userType) {
      return NextResponse.json(
        { message: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      )
    }

    // Split name into first name and surname
    const [firstName, ...lastNameParts] = name.split(' ')
    const surname = lastNameParts.join(' ') || firstName // Use firstName as surname if no space in name

    // Validation
    if (password.length < 8) {
      return NextResponse.json(
        { message: 'La password deve contenere almeno 8 caratteri' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { message: 'Email non valida' },
        { status: 400 }
      )
    }

    if (!['host', 'cleaner'].includes(userType)) {
      return NextResponse.json(
        { message: 'Tipo utente non valido' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'Email già registrata' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
      // Create user
      const user = await prisma.user.create({
        data: {
          name: firstName,
          surname,
          email,
          password: hashedPassword,
          userType,
        }
      })

      // Create verification token
      const verificationToken = crypto.randomUUID();
      const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

      await prisma.verificationToken.create({
        data: {
          identifier: email,
          token: verificationToken,
          expires: expiryDate
        }
      });

      // Send verification email
      await sendVerificationEmail(email, verificationToken);

      return NextResponse.json(
        { message: 'Utente registrato con successo. Controlla la tua email per verificare l\'account.' },
        { status: 201 }
      )
    } catch (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { message: 'Errore durante la creazione dell\'utente' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Errore durante la registrazione' },
      { status: 500 }
    )
  }
} 