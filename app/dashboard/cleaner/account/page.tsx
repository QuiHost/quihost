'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface UserData {
  id: string
  name: string | null
  email: string | null
  phone: string | null
  phoneVerified: boolean
  surname: string | null
  hasCompletedOnboarding: boolean
  emailVerified: string | null
}

export default function AccountPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/accedi')
      return
    }

    const fetchUserData = async () => {
      if (!session?.user) return

      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch('/api/auth/user')
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || `Errore ${response.status}`)
        }
        const data = await response.json()
        console.log('User data received:', data)
        setUserData(data)
      } catch (err) {
        console.error('Error fetching user data:', err)
        setError(err instanceof Error ? err.message : 'Errore nel caricamento dei dati')
      } finally {
        setIsLoading(false)
      }
    }

    if (status === 'authenticated') {
      fetchUserData()
    }
  }, [session?.user, status, router])

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="p-4 border border-red-200 bg-red-50 rounded-md">
          <h3 className="text-lg font-medium text-red-800">Errore</h3>
          <p className="text-sm text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  if (!userData) {
    return (
      <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-md">
        <p className="text-sm text-yellow-600">Nessun dato utente disponibile</p>
      </div>
    )
  }

  const handleVerifyPhone = () => {
    router.push('/dashboard/cleaner/account/verify-phone')
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Gestisci le impostazioni del tuo account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="rounded-lg border p-4">
          <h4 className="mb-4 font-medium">Informazioni Personali</h4>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Nome:</span> {userData.name} {userData.surname}
            </p>
            <p className="text-sm">
              <span className="font-medium">Email:</span> {userData.email}
            </p>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <h4 className="mb-4 font-medium">Verifica Telefono</h4>
          {userData.phoneVerified ? (
            <div className="flex items-center gap-2 text-sm text-green-600">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Numero di telefono verificato: {userData.phone}
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Verifica il tuo numero di telefono per iniziare a ricevere prenotazioni
              </p>
              <button 
                onClick={handleVerifyPhone}
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Verifica Numero
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 