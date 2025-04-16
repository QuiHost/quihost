'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

interface EmailVerificationModalProps {
  isOpen: boolean
  onClose: () => void
  email: string
  onResendEmail: () => Promise<void>
}

export default function EmailVerificationModal({
  isOpen,
  onClose,
  email,
  onResendEmail
}: EmailVerificationModalProps) {
  const [isResending, setIsResending] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)

  const handleResendEmail = async () => {
    setIsResending(true)
    try {
      await onResendEmail()
      setResendSuccess(true)
      setTimeout(() => {
        setResendSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Errore nell\'invio dell\'email:', error)
    } finally {
      setIsResending(false)
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md rounded-lg bg-white p-6">
          <div className="flex flex-col items-center">
            {/* Icona di avviso */}
            <div className="mb-4 rounded-full bg-orange-100 p-3">
              <svg className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <Dialog.Title className="text-xl font-medium text-center mb-2">
              Conferma dell&apos;e-mail
            </Dialog.Title>

            <p className="text-center text-gray-600 mb-4">
              Per favore, conferma la tua email
            </p>

            <div className="bg-gray-50 p-4 rounded-lg w-full mb-4">
              <p className="text-center font-medium">{email}</p>
            </div>

            <p className="text-center text-gray-600 mb-6">
              per assicurarci che tu sia una persona reale.
            </p>

            {resendSuccess && (
              <div className="mb-4 text-green-600 text-center">
                Email di verifica inviata con successo!
              </div>
            )}

            <div className="flex flex-col w-full gap-3">
              <button
                onClick={handleResendEmail}
                disabled={isResending}
                className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isResending ? 'Invio in corso...' : 'Confermare la mia e-mail'}
              </button>

              <button
                onClick={onClose}
                className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Annullare
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
} 