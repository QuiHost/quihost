'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PhoneVerification } from '@/components/PhoneVerification'

interface PhoneVerificationCardProps {
  user: {
    phoneVerified: boolean | null
    phone: string | null
  } | null
}

export function PhoneVerificationCard({ user }: PhoneVerificationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Verifica del numero di telefono</CardTitle>
        <CardDescription>
          {user?.phoneVerified
            ? 'Il tuo numero di telefono è verificato'
            : 'Verifica il tuo numero di telefono per sbloccare tutte le funzionalità'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {user?.phoneVerified ? (
          <p className="text-sm text-muted-foreground">
            Numero di telefono verificato: {user.phone}
          </p>
        ) : (
          <PhoneVerification />
        )}
      </CardContent>
    </Card>
  )
} 