'use client'

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSearchParams } from 'next/navigation'

export default function RegistrationSuccess() {
  const searchParams = useSearchParams()
  const registration = searchParams.get('registration')

  useEffect(() => {
    if (registration === 'success') {
      toast.success(
        'Registrazione completata! Ti abbiamo inviato una email di conferma. Per favore, verifica il tuo account.',
        {
          duration: 6000,
          position: 'top-center',
        }
      )
    }
  }, [registration])

  return null
} 