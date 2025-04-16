import type { NextAuthOptions } from 'next-auth'
import type { User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'

// Extend the built-in User type
declare module 'next-auth' {
  interface User {
    id: string
    email: string
    name?: string | null
    role: string
    userType: string
    image?: string | null
    emailVerified?: Date | null
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email e password sono richiesti')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.password) {
          throw new Error('Utente non trovato')
        }

        const isPasswordValid = await compare(credentials.password, user.password)

        if (!isPasswordValid) {
          throw new Error('Password non valida')
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.userType,
          userType: user.userType,
          image: null,
          emailVerified: user.emailVerified
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userType = user.userType
        token.id = user.id
        token.role = user.userType
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.userType = token.userType as string
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    }
  },
  pages: {
    signIn: '/accedi',
    error: '/auth/error'
  }
} 