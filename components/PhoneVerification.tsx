import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export function PhoneVerification() {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showCodeInput, setShowCodeInput] = useState(false)

  const handleSendCode = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/auth/send-phone-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Errore durante l\'invio del codice')
      }

      toast.success('Codice di verifica inviato')
      setShowCodeInput(true)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Errore durante l\'invio del codice')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyCode = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/auth/verify-phone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Errore durante la verifica del codice')
      }

      toast.success('Numero di telefono verificato con successo')
      // Ricarica la pagina per aggiornare lo stato dell'utente
      window.location.reload()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Errore durante la verifica del codice')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Input
          type="tel"
          placeholder="Inserisci il tuo numero di telefono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={isLoading || showCodeInput}
        />
        {!showCodeInput && (
          <Button
            onClick={handleSendCode}
            disabled={!phone || isLoading}
            className="w-full"
          >
            {isLoading ? 'Invio in corso...' : 'Invia codice di verifica'}
          </Button>
        )}
      </div>

      {showCodeInput && (
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Inserisci il codice di verifica"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            disabled={isLoading}
            maxLength={6}
          />
          <div className="flex gap-2">
            <Button
              onClick={handleVerifyCode}
              disabled={!code || isLoading}
              className="flex-1"
            >
              {isLoading ? 'Verifica in corso...' : 'Verifica codice'}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowCodeInput(false)
                setCode('')
              }}
              disabled={isLoading}
            >
              Cambia numero
            </Button>
          </div>
        </div>
      )}
    </div>
  )
} 