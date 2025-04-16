'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface OnboardingData {
  mainGoal: string
  businessType: string
  referralSource: string
  timestamp: string
  userId: string
}

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
}

export default function OnboardingModal({ isOpen, onClose, onComplete }: OnboardingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Benvenuto su Turno!</DialogTitle>
          <DialogDescription>
            Completa il tuo profilo per iniziare a ricevere richieste di lavoro
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {/* Qui puoi aggiungere i campi del form di onboarding */}
          <Button onClick={onComplete}>Completa profilo</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 