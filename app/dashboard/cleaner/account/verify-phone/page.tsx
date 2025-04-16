'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
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
}

export default function VerifyPhonePage() {
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [verificationCode, setVerificationCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/auth/user')
        if (!response.ok) {
          throw new Error('Errore nel caricamento dei dati')
        }
        const data = await response.json()
        setUserData(data)

        // Se l'utente non ha un numero di telefono salvato, reindirizza alla pagina del profilo
        if (!data.phoneNumber) {
          router.push('/dashboard/cleaner/account')
          return
        }

        // Invia automaticamente il codice di verifica quando si carica la pagina
        handleSendCode(data.phoneNumber)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Errore nel caricamento dei dati')
      }
    }

    fetchUserData()
  }, [router])

  const handleSendCode = async (phoneNumber: string) => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch('/api/auth/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          phone: phoneNumber,
          type: 'PHONE'
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Errore nell\'invio del codice')
      }

      setSuccess('Codice di verifica inviato alla tua email')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nell\'invio del codice')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userData?.phoneNumber) {
      setError('Numero di telefono non trovato')
      return
    }

    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch('/api/auth/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: verificationCode,
          phone: userData.phoneNumber,
          type: 'PHONE'
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Codice di verifica non valido')
      }

      setSuccess('Numero di telefono verificato con successo')
      setTimeout(() => {
        router.push('/dashboard/cleaner/account')
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nella verifica del codice')
    } finally {
      setIsLoading(false)
    }
  }

  if (!userData?.phoneNumber) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  return (
    <div className="container max-w-2xl py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Verifica numero di telefono</h1>
        <p className="text-muted-foreground">
          Ti abbiamo inviato un codice di verifica via email per confermare il numero {userData.phoneNumber}
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mb-4 bg-green-50 border-green-200">
          <AlertDescription className="text-green-600">{success}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleVerifyCode} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="code" className="text-sm font-medium">
            Codice di verifica
          </label>
          <Input
            id="code"
            type="text"
            placeholder="Inserisci il codice ricevuto via email"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Verifica in corso..." : "Verifica"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => handleSendCode(userData.phoneNumber!)}
            disabled={isLoading}
          >
            Invia nuovo codice
          </Button>
        </div>
      </form>
    </div>
  )
} 