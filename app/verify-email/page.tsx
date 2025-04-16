'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-hot-toast'

export default function VerifyEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isVerifying, setIsVerifying] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token')
      
      if (!token) {
        setError('Token di verifica mancante')
        setIsVerifying(false)
        return
      }

      try {
        const response = await fetch('/api/auth/verify-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        })

        if (!response.ok) {
          throw new Error('Errore durante la verifica dell\'email')
        }

        toast.success('Email verificata con successo!')
        router.push('/dashboard')
      } catch (error) {
        setError('Errore durante la verifica dell\'email')
        console.error(error)
      } finally {
        setIsVerifying(false)
      }
    }

    verifyEmail()
  }, [searchParams, router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {isVerifying ? 'Verifica in corso...' : error ? 'Errore' : 'Email verificata!'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isVerifying
              ? 'Stiamo verificando la tua email...'
              : error
              ? error
              : 'La tua email è stata verificata con successo. Verrai reindirizzato alla dashboard.'}
          </p>
        </div>
      </div>
    </div>
  )
} 