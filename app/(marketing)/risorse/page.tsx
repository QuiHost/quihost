import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#1C1C1C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Risorse per Host e Addetti alle Pulizie
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Guide, tutorial e consigli per ottimizzare la gestione delle tue proprietà e dei servizi di pulizia.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Guide per Host */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Guide per Host</h3>
              <p className="text-gray-600 mb-4">
                Consigli e best practice per gestire al meglio le tue proprietà in affitto.
              </p>
              <Link href="/risorse/guide-host" className="text-teal-600 hover:text-teal-700 font-medium">
                Scopri di più →
              </Link>
            </div>

            {/* Guide per Addetti alle Pulizie */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Guide per Addetti alle Pulizie</h3>
              <p className="text-gray-600 mb-4">
                Tutorial e checklist per fornire un servizio di pulizia professionale.
              </p>
              <Link href="/risorse/guide-pulizie" className="text-teal-600 hover:text-teal-700 font-medium">
                Scopri di più →
              </Link>
            </div>

            {/* Centro Assistenza */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Centro Assistenza</h3>
              <p className="text-gray-600 mb-4">
                Risposte alle domande più frequenti e supporto tecnico.
              </p>
              <Link href="/risorse/assistenza" className="text-teal-600 hover:text-teal-700 font-medium">
                Scopri di più →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Domande Frequenti
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Come funziona Host Hero?</h3>
              <p className="text-gray-600">
                Host Hero è una piattaforma che connette host di affitti brevi con addetti alle pulizie professionisti. 
                Automatizziamo la gestione degli appuntamenti, i pagamenti e il controllo qualità.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Quanto costa il servizio?</h3>
              <p className="text-gray-600">
                Host Hero è gratuito per gli addetti alle pulizie. Per gli host, offriamo diversi piani di abbonamento 
                in base al numero di proprietà gestite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto a iniziare?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Unisciti a Host Hero oggi stesso e scopri come possiamo aiutarti a gestire meglio il tuo business.
          </p>
          <Link 
            href="/registrati" 
            className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors inline-flex items-center"
          >
            Inizia Gratuitamente
          </Link>
        </div>
      </section>
    </main>
  )
} 