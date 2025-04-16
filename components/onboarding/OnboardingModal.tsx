'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  onComplete
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Benvenuto su Turno</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            Completa il tuo profilo per iniziare a ricevere prenotazioni.
          </p>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Salta
            </Button>
            <Button onClick={onComplete}>
              Inizia
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default OnboardingModal 