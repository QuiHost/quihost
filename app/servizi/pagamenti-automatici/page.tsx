'use client'

import React from 'react'
import Image from 'next/image'

export default function PagamentiAutomatici() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Automatizza i tuoi pagamenti
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Gli host impiegano in media cinque minuti per pagare manualmente un addetto alle pulizie. I pagamenti automatizzati aiutano gli host a risparmiare oltre quaranta ore all'anno e a garantire che gli addetti alle pulizie vengano pagati all'istante.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
            <Image
              src="/payment-illustration.png"
              alt="Illustrazione pagamenti automatici"
              width={500}
              height={500}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Invia transazioni sicure</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Ci integriamo con Stripe in modo che ogni transazione venga elaborata in modo sicuro. Turno non conserva mai le informazioni di pagamento, come i dettagli della carta di credito/debito o i numeri di conto bancario.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Ricevi i pagamenti all'istante</h3>
                  <p className="mt-2 text-base text-gray-500">
                    I pagamenti vengono avviati una volta che l'addetto alle pulizie completa un progetto di pulizia. Viene quindi inviata una notifica automatica agli host per informarli che il pagamento è stato elaborato.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Gestisci e monitora le fatture</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli addetti alle pulizie e gli host possono gestire e tenere traccia delle loro fatture da un unico posto. Scopri facilmente quali pagamenti sono in sospeso, in fase di elaborazione o completati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 bg-teal-500 rounded-lg overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="relative lg:flex lg:items-center">
              <div className="relative">
                <Image
                  src="/spencer-profile.png"
                  alt="Spencer G."
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <blockquote>
                  <div className="max-w-3xl text-xl leading-9 font-medium text-white">
                    <p>
                      "Pagare i miei addetti alle pulizie direttamente nell'app mi fa risparmiare automaticamente tempo e fatica. Per non parlare del fatto che non devo maneggiare i 1099."
                    </p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-medium text-white">Spencer G.</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-12">
            Caratteristiche aggiuntive
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex items-start space-x-6">
              <Image
                src="/marketplace-icon.png"
                alt="Mercato delle pulizie"
                width={200}
                height={200}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-medium text-teal-600">Mercato delle pulizie</h3>
                <p className="mt-4 text-base text-gray-500">
                  Il nostro marketplace offre agli host l'accesso a decine di migliaia di professionisti delle pulizie affidabili ed esperti, sia che stiano programmando in anticipo sia che abbiano bisogno di trovare un addetto alle pulizie di riserva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
 