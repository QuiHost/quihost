'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function VerifyPhonePage() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [telegramUsername, setTelegramUsername] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [step, setStep] = useState<'telegram' | 'phone' | 'code'>('telegram')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSaveTelegram = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/save-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: telegramUsername }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Errore nel salvataggio dell\'username Telegram')
      }

      setStep('phone')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nel salvataggio dell\'username Telegram')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Errore nell\'invio del codice')
      }

      setStep('code')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nell\'invio del codice')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/verify-phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, code: verificationCode }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Errore nella verifica del codice')
      }

      router.push('/dashboard/cleaner/account')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nella verifica del codice')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div>
        <h3 className="text-lg font-medium">Verifica Numero di Telefono</h3>
        <p className="text-sm text-muted-foreground">
          Verifica il tuo numero di telefono per iniziare a ricevere prenotazioni
        </p>
      </div>

      {error && (
        <div className="p-4 border border-red-200 bg-red-50 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {step === 'telegram' && (
        <div className="space-y-4">
          <div className="p-4 border border-blue-200 bg-blue-50 rounded-md">
            <h4 className="font-medium text-blue-800 mb-2">Verifica tramite Telegram</h4>
            <p className="text-sm text-blue-600 mb-4">
              Per ricevere il codice di verifica su Telegram, segui questi passaggi:
            </p>
            <ol className="list-decimal list-inside text-sm text-blue-600 space-y-2">
              <li>Apri Telegram e cerca il bot <code className="bg-blue-100 px-1">@TurnoVerifyBot</code></li>
              <li>Avvia il bot cliccando su Start</li>
              <li>Inserisci il tuo username Telegram qui sotto</li>
            </ol>
          </div>

          <form onSubmit={handleSaveTelegram} className="space-y-4">
            <div>
              <label htmlFor="telegram" className="block text-sm font-medium text-gray-700">
                Username Telegram
              </label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">@</span>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={telegramUsername}
                  onChange={(e) => setTelegramUsername(e.target.value)}
                  placeholder="il_tuo_username"
                  className="block w-full pl-8 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  required
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Inserisci il tuo username Telegram senza il simbolo @
              </p>
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Usa SMS invece
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
              >
                {isLoading ? 'Salvataggio...' : 'Continua'}
              </button>
            </div>
          </form>
        </div>
      )}

      {step === 'phone' && (
        <form onSubmit={handleSendCode} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Numero di telefono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+39 123 456 7890"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              required
            />
            <p className="mt-1 text-sm text-gray-500">
              Inserisci il tuo numero di telefono completo di prefisso internazionale
            </p>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => setStep('telegram')}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Usa Telegram invece
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
            >
              {isLoading ? 'Invio in corso...' : 'Invia codice di verifica'}
            </button>
          </div>
        </form>
      )}

      {step === 'code' && (
        <form onSubmit={handleVerifyCode} className="space-y-4">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700">
              Codice di verifica
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="123456"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              required
              maxLength={6}
              pattern="\d{6}"
            />
            <p className="mt-1 text-sm text-gray-500">
              Inserisci il codice di verifica a 6 cifre ricevuto
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep('phone')}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Modifica numero
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
            >
              {isLoading ? 'Verifica in corso...' : 'Verifica codice'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
} 