'use client'

import React from 'react'
import Image from 'next/image'

export default function ProgrammazioneAutomatica() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              App per la pianificazione delle pulizie per una facile gestione
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Gli host possono programmare, automatizzare e delegare i progetti di pulizia agli addetti alle pulizie attuali e nuovi. Questa automazione riduce il tempo dedicato alle chiamate e ai messaggi di testo e aiuta a evitare errori manuali.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
            <Image
              src="/app-screenshot.png"
              alt="Screenshot dell'app Turno"
              width={500}
              height={600}
              className="relative z-10"
            />
            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <path d="M40 100C40 67.9086 65.9086 42 98 42C130.091 42 156 67.9086 156 100C156 132.091 130.091 158 98 158C65.9086 158 40 132.091 40 100Z" fill="#F97316" fillOpacity="0.2"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Sincronizza il tuo calendario</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host possono importare automaticamente le prenotazioni da Airbnb, Vrbo, Trip Advisor, Booking.com e altri e generare progetti di pulizia associati alle date di check-in e check-out degli ospiti.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Trova e invita gli addetti alle pulizie</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host possono invitare i loro attuali team di pulizie sulla piattaforma o utilizzare il marketplace per trovare un nuovo professionista. I progetti di pulizia possono essere assegnati automaticamente agli addetti alle pulizie attuali o nuovi.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Automatizza la tua pulizia</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host ricevono notifiche che i progetti di pulizia completati, che consentono loro di conoscere lo stato di avanzamento di ogni fatturato senza dover inviare messaggi e-mail o chiamare l'addetto alle pulizie per chiarire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-teal-500 rounded-lg overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="relative lg:flex lg:items-center">
              <div className="relative">
                <blockquote className="mt-8">
                  <div className="max-w-3xl mx-auto text-xl leading-9 font-medium text-white">
                    <p>
                      "SFIDATORE DI GIOCO assoluto! Programmare automaticamente le mie pulizie quando le prenotazioni avvengono mi fa risparmiare tempo, denaro e mal di testa."
                    </p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-medium text-white">Tom S.</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
 