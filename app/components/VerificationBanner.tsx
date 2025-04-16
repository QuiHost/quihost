'use client'

import { useState } from 'react'

interface VerificationBannerProps {
  emailVerified: boolean
  phoneVerified: boolean
}

export default function VerificationBanner({ emailVerified, phoneVerified }: VerificationBannerProps) {
  return (
    <div className="bg-orange-500 text-white px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <p className="font-medium">
            Si prega di verificare il proprio indirizzo e-mail e numero di telefono
            <br />
            per unirsi al Marketplace di Host Hero
          </p>
        </div>
        <div className="flex space-x-2">
          {!phoneVerified && (
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 text-white px-4 py-1 rounded-md text-sm">
              Confermare il mio numero di telefono
            </button>
          )}
          {!emailVerified && (
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 text-white px-4 py-1 rounded-md text-sm">
              Confermare la mia e-mail
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 