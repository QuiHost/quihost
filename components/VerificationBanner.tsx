'use client'

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function VerificationBanner() {
  return (
    <div className="bg-[#FFF3E6] mb-8 rounded-xl overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ExclamationTriangleIcon className="h-5 w-5 text-[#FF9500]" />
            <span className="text-[#CC7A00] font-medium">
              Verifica il tuo numero di telefono per iniziare a ricevere prenotazioni
            </span>
          </div>
          <button className="px-4 py-2 bg-white text-[#FF9500] rounded-lg hover:bg-[#FFF8F0] font-medium text-sm">
            Confermare il mio numero di telefono
          </button>
        </div>
      </div>
    </div>
  )
} 