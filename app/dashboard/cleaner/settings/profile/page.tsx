'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'

export default function ProfilePage() {
  const { data: session, update } = useSession()
  const [email, setEmail] = useState(session?.user?.email || '')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/update-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Errore durante l\'aggiornamento dell\'email')
      }

      const data = await response.json()
      
      if (data.requiresVerification) {
        toast.success('Email inviata per la verifica')
        // Aggiorna la sessione con il nuovo stato
        await update({
          ...session,
          user: {
            ...session?.user,
            emailVerified: false,
          },
        })
      } else {
        toast.success('Email aggiornata con successo')
        // Aggiorna la sessione con la nuova email
        await update({
          ...session,
          user: {
            ...session?.user,
            email,
            emailVerified: true,
          },
        })
      }
    } catch (error) {
      toast.error('Si è verificato un errore durante l\'aggiornamento dell\'email')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-semibold text-gray-900">Profilo</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Modifica Email</h2>
          
          <form onSubmit={handleEmailChange} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            {!session?.user?.emailVerified && (
              <div className="text-yellow-600 text-sm">
                La tua email non è ancora verificata. Controlla la tua casella di posta per il link di verifica.
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isLoading ? 'Salvataggio...' : 'Salva Modifiche'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 