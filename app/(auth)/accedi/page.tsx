'use client'

import { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (session?.user) {
      const userRole = session.user.role || session.user.userType
      if (userRole === 'cleaner') {
        router.push('/dashboard/cleaner')
      } else if (userRole === 'host') {
        router.push('/dashboard/host')
      }
    }
  }, [session, router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get('email')?.toString()
      const password = formData.get('password')?.toString()

      if (!email || !password) {
        throw new Error('Email e password sono obbligatorie')
      }

      // Effettua il login
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      if (result?.error) {
        throw new Error(result.error)
      }

      // Recupera il tipo di utente
      const userResponse = await fetch('/api/auth/user', {
        headers: {
          'Cache-Control': 'no-cache'
        }
      })

      if (!userResponse.ok) {
        throw new Error('Errore nel recupero dei dati utente')
      }

      const userData = await userResponse.json()
      console.log('User data:', userData)

      // Reindirizza in base al tipo di utente
      if (userData.role === 'cleaner' || userData.userType === 'cleaner') {
        console.log('Redirecting to cleaner dashboard...')
        router.push('/dashboard/cleaner')
      } else if (userData.role === 'host' || userData.userType === 'host') {
        console.log('Redirecting to host dashboard...')
        router.push('/dashboard/host')
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Errore durante il login'
      console.error('Login error:', error)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  if (session?.user) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Accedi al tuo account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Non hai un account?{' '}
            <Link href="/registrati" className="text-teal-600 hover:text-teal-500">
              Registrati
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50"
            >
              {isLoading ? 'Accesso in corso...' : 'Accedi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}