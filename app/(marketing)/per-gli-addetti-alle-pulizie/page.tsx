import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CleaningStaffPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#1C1C1C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Trova più lavoro come addetto alle pulizie
              </h1>
              <p className="text-xl mb-8">
                Unisciti a Host Hero e trova nuove opportunità di lavoro nella tua zona. Gestisci i tuoi appuntamenti e guadagna di più.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/registrati"
                  className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors inline-flex items-center"
                >
                  Inizia Gratuitamente
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/cleaning-service.jpg"
                alt="Addetto alle pulizie"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-teal-600 mb-2">4.9/5</div>
              <p className="text-gray-600">Rating medio dei nostri addetti</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-teal-600 mb-2">10k+</div>
              <p className="text-gray-600">Pulizie completate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-teal-600 mb-2">1000+</div>
              <p className="text-gray-600">Addetti attivi sulla piattaforma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tutto quello che ti serve in una sola app
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gestione Calendario</h3>
              <p className="text-gray-600">Organizza i tuoi appuntamenti e visualizza la tua agenda in modo semplice</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pagamenti Automatici</h3>
              <p className="text-gray-600">Ricevi i pagamenti in automatico dopo ogni servizio completato</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Nuove Opportunità</h3>
              <p className="text-gray-600">Trova nuovi clienti e aumenta il tuo business nella tua zona</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Guadagna di più con Host Hero
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                I nostri addetti guadagnano in media il 30% in più rispetto al mercato tradizionale. Gestisci il tuo tempo in autonomia e aumenta i tuoi guadagni.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pagamenti settimanali garantiti</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bonus per le recensioni positive</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premi per la fedeltà</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/mobile-app.png"
                alt="App Host Hero"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Scarica l'app e inizia subito
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Disponibile per iOS e Android. Scarica l'app, completa la registrazione e inizia a ricevere richieste di lavoro nella tua zona.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#" className="inline-block">
              <Image
                src="/images/app-store.png"
                alt="Download on App Store"
                width={140}
                height={42}
              />
            </Link>
            <Link href="#" className="inline-block">
              <Image
                src="/images/google-play.png"
                alt="Get it on Google Play"
                width={140}
                height={42}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 