'use client'

export default function PhoneVerificationBanner() {
  return (
    <div className="bg-[#FF9966] text-white rounded-lg mb-8">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Verifica il tuo numero di telefono per iniziare a ricevere prenotazioni</span>
          </div>
          <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors ml-4">
            Confermare il mio numero di telefono
          </button>
        </div>
      </div>
    </div>
  )
}
