'use client'

import VerificationBanner from '@/components/VerificationBanner'

export default function TrovaNuoviClientiPage() {
  return (
    <div>
      <VerificationBanner />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Ciao Ciccio Trippa, ti spieghiamo come funziona la tua candidatura.
        </h1>

        <div className="space-y-6">
          {/* Esperienza di pulizia */}
          <div className="border border-teal-500 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-900">Esperienza di pulizia</h2>
                <p className="mt-1 text-gray-600">
                  Il nostro Marketplace ti aiuta a trovare nuovi clienti di case vacanza nella tua zona.
                </p>
                <button className="mt-4 bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-colors">
                  Iniziare
                </button>
              </div>
            </div>
          </div>

          {/* Area di servizio */}
          <div className="border border-gray-200 rounded-lg p-6 opacity-50">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-900">Area di servizio</h2>
                <p className="mt-1 text-gray-600">
                  Definire dove si vuole lavorare.
                </p>
              </div>
            </div>
          </div>

          {/* Profilo */}
          <div className="border border-gray-200 rounded-lg p-6 opacity-50">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-900">Profilo</h2>
                <p className="mt-1 text-gray-600">
                  I clienti amano una biografia dettagliata, quindi assicurati di mettere in evidenza la tua esperienza di pulizia.
                </p>
              </div>
            </div>
          </div>

          {/* Referenze di lavoro */}
          <div className="border border-gray-200 rounded-lg p-6 opacity-50">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-900">Referenze di lavoro</h2>
                <p className="mt-1 text-gray-600">
                  Chiedi le referenze ai tuoi ex clienti o gestori di case vacanza.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione informativa a destra */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Fai crescere la tua azienda di pulizie con il Marketplace di Host Hero
          </h3>
          <p className="text-gray-600 mb-4">
            Trova i clienti delle case vacanza che cercano addetti alle pulizie nella tua zona.
          </p>
          <div className="flex justify-center">
            {/* Qui puoi aggiungere le immagini/icone come nell'esempio */}
          </div>
          <p className="mt-4 text-gray-600">
            Gli addetti alle pulizie che fanno parte del Marketplace di Host Hero hanno realizzato migliaia di progetti di pulizia, secondo le proprie tariffe e i propri orari.
          </p>
        </div>
      </div>
    </div>
  )
} 