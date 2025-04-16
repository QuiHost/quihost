'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Phone } from "lucide-react"

interface UserData {
  id: string
  name: string | null
  email: string | null
  phoneNumber: string | null
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
  const [phone, setPhone] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

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
        if (data.phoneNumber) {
          setPhone(data.phoneNumber)
        }
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

  const handleSavePhone = async () => {
    setIsSaving(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch('/api/auth/update-phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Errore nel salvataggio del numero')
      }

      setSuccess('Numero di telefono salvato con successo')
      // Aggiorna i dati utente locali
      setUserData(prev => prev ? { ...prev, phoneNumber: phone } : null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nel salvataggio del numero')
    } finally {
      setIsSaving(false)
    }
  }

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

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Gestisci le impostazioni del tuo account
        </p>
      </div>

      {success && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-600">{success}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6">
        <div className="rounded-lg border p-4">
          <h4 className="mb-4 font-medium">Informazioni Personali</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm">
                <span className="font-medium">Nome:</span> {userData.name} {userData.surname}
              </p>
              <p className="text-sm">
                <span className="font-medium">Email:</span> {userData.email}
              </p>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Numero di telefono
              </label>
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+39 123 456 7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button 
                  onClick={handleSavePhone} 
                  disabled={isSaving}
                >
                  {isSaving ? "Salvataggio..." : "Salva"}
                </Button>
                {!userData.phoneVerified && (
                  <Link href="/dashboard/cleaner/account/verify-phone">
                    <Button 
                      variant="outline"
                      type="button"
                    >
                      Verifica
                    </Button>
                  </Link>
                )}
              </div>
              {userData.phoneVerified && (
                <p className="text-sm text-green-600">
                  ✓ Numero verificato
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 