import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    id: string
    email: string
    name?: string | null
    role: string
    userType: string
  }

  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      role: string
      userType: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    email: string
    name?: string | null
    role: string
    userType: string
  }
} 