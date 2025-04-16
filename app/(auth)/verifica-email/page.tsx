'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

// Componente che usa useSearchParams
function VerifyEmailContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const email = searchParams.get('email')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsVerifying(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const code = formData.get('code')?.toString().toUpperCase()

      if (!code || code.length !== 6) {
        throw new Error('Inserisci un codice di verifica valido')
      }

      const response = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: code }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Errore durante la verifica')
      }

      toast.success(data.message || 'Email verificata con successo!')
      
      console.log('User type received:', data.userType)
      
      const result = await signIn('credentials', {
        email: email,
        password: sessionStorage.getItem('tempPassword'),
        redirect: false,
        callbackUrl: data.userType === 'cleaner' ? '/dashboard/cleaner' : '/dashboard/host'
      })

      if (result?.error) {
        console.error('Login error:', result.error)
        throw new Error('Errore durante il login automatico')
      }

      console.log('Login successful, redirecting...')
      
      sessionStorage.removeItem('tempPassword')

      if (data.userType === 'cleaner') {
        console.log('Redirecting to cleaner dashboard...')
        router.push('/dashboard/cleaner')
      } else if (data.userType === 'host') {
        router.push('/dashboard/host')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Errore durante la verifica'
      setError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Verifica il tuo account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {email ? (
              <>Abbiamo inviato un codice di verifica a <span className="font-medium">{email}</span></>
            ) : (
              'Inserisci il codice di verifica che ti abbiamo inviato via email'
            )}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="code" className="sr-only">
              Codice di verifica
            </label>
            <input
              id="code"
              name="code"
              type="text"
              maxLength={6}
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm text-center tracking-[0.5em] uppercase"
              placeholder="CODICE"
              style={{ letterSpacing: '0.5em' }}
            />
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isVerifying}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isVerifying ? 'Verifica in corso...' : 'Verifica'}
          </button>
        </form>
      </div>
    </div>
  )
}

// Loading fallback
function LoadingVerifyEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Caricamento...
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Stiamo caricando la pagina di verifica...
          </p>
        </div>
      </div>
    </div>
  )
}

// Pagina principale avvolta in Suspense
export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<LoadingVerifyEmail />}>
      <VerifyEmailContent />
    </Suspense>
  )
}

// Configurazione per il pre-rendering
export const dynamic = 'force-dynamic' 
 