'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PrezziPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-teal-500 pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prezzi Trasparenti, Nessun Costo Nascosto
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Scegli il piano più adatto alle tue esigenze
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="border rounded-lg p-8 bg-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Base</h3>
              <p className="text-4xl font-bold mb-6">€29<span className="text-lg text-gray-600">/mese</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fino a 5 proprietà</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestione base delle pulizie</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Supporto email</span>
                </li>
              </ul>
              <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                Inizia Ora
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-teal-500 rounded-lg p-8 bg-white shadow-lg relative">
              <div className="absolute top-0 right-0 bg-teal-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Più Popolare
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">€79<span className="text-lg text-gray-600">/mese</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fino a 20 proprietà</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestione avanzata delle pulizie</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Supporto prioritario</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Report avanzati</span>
                </li>
              </ul>
              <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                Inizia Ora
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border rounded-lg p-8 bg-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">€199<span className="text-lg text-gray-600">/mese</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proprietà illimitate</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestione completa delle pulizie</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Supporto dedicato 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>API personalizzata</span>
                </li>
              </ul>
              <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Domande Frequenti</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Come funziona la fatturazione?</h3>
              <p className="text-gray-600">La fatturazione è mensile e puoi disdire in qualsiasi momento. Non ci sono contratti vincolanti.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Posso cambiare piano?</h3>
              <p className="text-gray-600">Sì, puoi passare a un piano superiore o inferiore in qualsiasi momento. La differenza verrà calcolata automaticamente.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">È previsto un periodo di prova?</h3>
              <p className="text-gray-600">Sì, offriamo 14 giorni di prova gratuita per tutti i piani, senza bisogno di carta di credito.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Che tipo di supporto offrite?</h3>
              <p className="text-gray-600">Offriamo supporto via email per tutti i piani e supporto telefonico dedicato per i piani Pro ed Enterprise.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 