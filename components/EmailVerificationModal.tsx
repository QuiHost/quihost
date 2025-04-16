'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface EmailVerificationModalProps {
  isOpen: boolean
  onClose: () => void
  email: string
  onResendEmail: () => Promise<void>
}

const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
  isOpen,
  onClose,
  email,
  onResendEmail
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Verifica la tua email</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            Ti abbiamo inviato un link di verifica al tuo indirizzo email ({email}). 
            Clicca sul link per completare la registrazione.
          </p>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Chiudi
            </Button>
            <Button onClick={onResendEmail}>
              Rinvio email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EmailVerificationModal 