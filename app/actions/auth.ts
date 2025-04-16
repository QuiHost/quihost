'use server'

import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { redirect } from 'next/navigation'
import { prisma } from '../lib/prisma'
import { sendVerificationEmail } from '../lib/email'

export async function register(formData: FormData) {
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const userType = formData.get('userType')?.toString()
  const name = formData.get('name')?.toString()
  const surname = formData.get('surname')?.toString()
  const privacyAccepted = formData.get('privacy')?.toString()

  if (!email || !password || !userType || !name || !surname || !privacyAccepted) {
    throw new Error('Tutti i campi sono obbligatori')
  }

  try {
    // Verifica se l'email esiste già
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (existingUser) {
      throw new Error('Questa email è già registrata. Vai alla pagina di accesso se sei già registrato.')
    }

    // Crea l'utente
    const user = await prisma.user.create({
      data: {
        email: email,
        password: await bcrypt.hash(password, 10),
        userType: userType,
        name: name,
        surname: surname,
        emailVerified: null
      }
    })

    // Crea il token di verifica
    const verificationToken = crypto.randomBytes(32).toString('hex')
    await prisma.verificationToken.create({
      data: {
        identifier: user.email,
        token: verificationToken,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 ore
      }
    })

    // Invia l'email di verifica
    await sendVerificationEmail(user.email, verificationToken, user.name || '')

    // Ritorna i dati necessari per il login lato client
    return {
      success: true,
      email: user.email,
      userType: user.userType
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    console.error('Errore durante la registrazione:', error)
    throw new Error('Si è verificato un errore durante la registrazione')
  }
}