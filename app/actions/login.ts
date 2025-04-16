'use server'

import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  if (!email || !password) {
    throw new Error('Email e password sono obbligatorie')
  }

  try {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      throw new Error(result.error)
    }

    // Reindirizza alla dashboard
    redirect('/dashboard/cleaner')
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Errore durante il login')
  }
} 