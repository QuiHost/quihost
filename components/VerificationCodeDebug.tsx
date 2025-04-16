'use client'

import { useEffect, useState } from 'react'
import { mockVerificationService } from '@/lib/mock-verification'

export function VerificationCodeDebug() {
  const [verificationData, setVerificationData] = useState<{ phone: string; code: string } | null>(null)

  useEffect(() => {
    const handleCodeSent = (data: { phone: string; code: string }) => {
      setVerificationData(data)
    }

    mockVerificationService.onCodeSent(handleCodeSent)

    return () => {
      mockVerificationService.removeCodeSentListener(handleCodeSent)
    }
  }, [])

  if (process.env.NODE_ENV !== 'development' || !verificationData) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded-lg shadow-lg">
      <h3 className="font-bold mb-2">Debug: Codice di Verifica</h3>
      <p className="text-sm">
        <span className="font-medium">Telefono:</span> {verificationData.phone}
      </p>
      <p className="text-sm">
        <span className="font-medium">Codice:</span>{' '}
        <code className="bg-yellow-50 px-2 py-1 rounded">{verificationData.code}</code>
      </p>
      <p className="text-xs mt-2 text-yellow-600">
        Questo messaggio è visibile solo in modalità sviluppo
      </p>
    </div>
  )
} 