import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function QualityCenter() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-teal-500 pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quality Center Innovativo<br />
            per Operatori Airbnb
          </h1>
          <p className="text-xl text-white mb-4">Partner Software Ufficiale Airbnb</p>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Boost delle Recensioni e Valutazioni di Pulizia con il Quality Center di Turno per Host e Property Manager Airbnb!
          </p>
          <Link href="/registrazione" className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
            Inizia Ora
          </Link>
        </div>
      </section>

      {/* Performance Insights Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Insights Personalizzati</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 mb-6">
                Il nostro Quality Center per Airbnb è una soluzione completa che offre una potente analisi delle prestazioni di pulizia. Aiuta gli host a tenere traccia e migliorare:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Recensioni delle proprietà</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Valutazioni di pulizia</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Soddisfazione degli ospiti</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/quality-center-dashboard.png"
                alt="Dashboard del Quality Center"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Integrazione API con Airbnb</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/api-integration.png"
                alt="Integrazione API con Airbnb"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                La nostra integrazione API con Airbnb rappresenta un vantaggio competitivo per te. Grazie alla nostra partnership ufficiale, offriamo:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sincronizzazione rapida attraverso API ufficiali</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Connessione affidabile e stabilità migliorata</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dati degli ospiti e recensioni avanzati</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Actions Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Azioni Raccomandate</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gestione Pulizie Efficiente</h3>
              <p className="text-gray-600">
                Suggerimenti pratici per migliorare l'efficienza delle pulizie basati sui dati delle recensioni.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Standard di Qualità</h3>
              <p className="text-gray-600">
                Mantieni alti standard di pulizia con checklist personalizzate e feedback in tempo reale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analisi delle Performance</h3>
              <p className="text-gray-600">
                Monitora e migliora le performance di pulizia con analisi dettagliate e report personalizzati.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">App Mobile per Host e Addetti</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Centralizza comunicazione e gestione per tutti i progetti</h3>
              <p className="text-lg text-gray-600">
                Gestisci, monitora e ottimizza attraverso l'interfaccia mobile. Rimani aggiornato in tempo reale comunicando con il tuo team, accedendo alle metriche chiave e alle notifiche direttamente dal tuo smartphone.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="inline-block">
                  <Image
                    src="/images/app-store-badge.png"
                    alt="Scarica su App Store"
                    width={140}
                    height={42}
                    className="h-14 w-auto"
                  />
                </Link>
                <Link href="#" className="inline-block">
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Disponibile su Google Play"
                    width={140}
                    height={42}
                    className="h-14 w-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/mobile-app-preview.png"
                alt="App mobile Turno"
                width={400}
                height={800}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto a Migliorare la Qualità delle tue Proprietà?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/registrazione" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Inizia Gratuitamente
            </Link>
            <Link href="/demo" className="inline-block bg-white text-teal-600 border-2 border-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
              Richiedi una Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 