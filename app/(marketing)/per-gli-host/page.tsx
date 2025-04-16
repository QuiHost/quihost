'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PerHost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-teal-500 pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gestisci i Tuoi Affitti Brevi con Host Hero
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            La piattaforma completa per gestire le pulizie dei tuoi affitti brevi su Airbnb, Booking.com e Vrbo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Inizia Gratuitamente
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-teal-500">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 flex flex-col md:flex-row justify-between items-center gap-8 -mb-16 relative z-10 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="text-yellow-400 text-2xl">★★★★★</div>
              <div className="text-gray-600">Valutazione 4.9 stelle</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-teal-600">50K+</div>
              <div className="text-gray-600">Proprietà Gestite</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-teal-600">1M+</div>
              <div className="text-gray-600">Check-in Completati</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gestione Completa delle Pulizie per i Tuoi Affitti Brevi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Automatizza la gestione delle pulizie e risparmia tempo prezioso
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pianificazione Automatica</h3>
                  <p className="text-gray-600">Le pulizie vengono programmate automaticamente in base ai tuoi check-in e check-out</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pagamenti Automatici</h3>
                  <p className="text-gray-600">Gestione automatica dei pagamenti agli addetti alle pulizie</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Controllo Qualità</h3>
                  <p className="text-gray-600">Verifica la qualità delle pulizie con foto e checklist digitali</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/scheduling-app.jpg"
                alt="Host Hero Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Integrazione con i Principali Portali
              </h2>
              <p className="text-gray-600 mb-8">
                Host Hero si integra perfettamente con Airbnb, Booking.com e Vrbo per sincronizzare automaticamente le tue prenotazioni.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24">
                      <path 
                        fill="currentColor" 
                        d="M9.707 17.707l10-10-1.414-1.414L9 15.586l-4.293-4.293-1.414 1.414 5 5a1 1 0 001.414 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-lg">Sincronizzazione automatica del calendario</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24">
                      <path 
                        fill="currentColor" 
                        d="M9.707 17.707l10-10-1.414-1.414L9 15.586l-4.293-4.293-1.414 1.414 5 5a1 1 0 001.414 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-lg">Gestione multi-proprietà</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24">
                      <path 
                        fill="currentColor" 
                        d="M9.707 17.707l10-10-1.414-1.414L9 15.586l-4.293-4.293-1.414 1.414 5 5a1 1 0 001.414 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-lg">Report e statistiche dettagliate</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/calendar-sync.jpg"
                alt="Integrazione Calendario"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-500 py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Inizia a Gestire i Tuoi Affitti Brevi in Modo Intelligente
            </h2>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
              Prova Host Hero gratuitamente e scopri come semplificare la gestione delle pulizie
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Inizia Ora
            </button>
          </div>
        </div>
      </section>
    </main>
  )
} 