import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Gestisci il tuo business con Host Hero</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Semplifica la gestione delle pulizie e migliora l'esperienza dei tuoi ospiti</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-teal-50 rounded-2xl p-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-semibold mb-3">Pianificazione Automatica</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Host Hero sincronizza automaticamente il tuo calendario Airbnb e assegna gli addetti alle pulizie in base alla loro disponibilità.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-teal-50 rounded-2xl p-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-semibold mb-3">Pagamenti Automatici</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Gestisci i pagamenti in modo sicuro e automatico. Host Hero si occupa di tutto, dalla fatturazione ai pagamenti degli addetti alle pulizie.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-teal-50 rounded-2xl p-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-semibold mb-3">Controllo Qualità</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Verifica la qualità del servizio attraverso foto e checklist dettagliate. Host Hero ti aiuta a mantenere gli standard elevati.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/auto-payments.jpg"
              alt="Dashboard di Host Hero con calendario e gestione prenotazioni"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 