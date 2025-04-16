'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ChatInApp() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-teal-500 pt-32 pb-16">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Chat in App<br />
              Comunicazione Semplificata
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Gestisci tutte le comunicazioni con il tuo team di pulizie in un'unica piattaforma centralizzata. Dimentica email, WhatsApp e telefonate!
            </p>
            <Link href="/registrazione" className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
              Prova Gratuitamente
            </Link>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="py-16">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">Messaggistica Istantanea per il Tuo Team</h2>
                <p className="text-lg text-gray-600 mb-6">
                  La nostra chat in-app migliorata permette agli host di case vacanza di comunicare rapidamente e facilmente con gli addetti alle pulizie, centralizzando la comunicazione e garantendo una proprietà impeccabile ad ogni cambio ospite.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Messaggi istantanei con il team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Condivisione di foto e documenti</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Notifiche in tempo reale</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/chat-interface.png"
                  alt="Interfaccia della chat in app"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Vantaggi della Chat Integrata</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Comunicazione Centralizzata</h3>
                <p className="text-gray-600">
                  Tutte le conversazioni in un unico posto, facilmente accessibili e organizzate per proprietà.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Condivisione File</h3>
                <p className="text-gray-600">
                  Condividi facilmente foto, documenti e checklist direttamente nella chat.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Notifiche Smart</h3>
                <p className="text-gray-600">
                  Ricevi notifiche immediate per messaggi importanti e aggiornamenti sullo stato delle pulizie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-teal-500">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white italic mb-6">
                "La chat in-app di Host Hero ha rivoluzionato il modo in cui comunichiamo con il nostro team di pulizie. Niente più confusione con messaggi sparsi su diverse piattaforme!"
              </p>
              <p className="text-white font-semibold">Marco R.</p>
              <p className="text-white opacity-75">Property Manager, Milano</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Pronto a Semplificare la Comunicazione?</h2>
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
      <Footer />
    </>
  )
} 
 