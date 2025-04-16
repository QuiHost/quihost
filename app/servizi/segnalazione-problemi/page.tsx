'use client'

import React from 'react'
import Image from 'next/image'

export default function SegnalazioneProblemi() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Segnalazione dei problemi
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Gli addetti alle pulizie possono utilizzare la loro app per segnalare danni alla proprietà, inventario mancante e altri problemi in tempo reale, in modo che gli host possano risolvere il problema senza dover fare viaggi extra presso la proprietà.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <Image
              src="/problem-reporting-hero.png"
              alt="Segnalazione problemi illustrazione"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Affrontare i danni</h3>
                  <p className="mt-2 text-base text-gray-500">
                    I danni agli immobili in affitto vengono comunemente scoperti durante il processo di turnover, rendendo gli addetti alle pulizie la prima linea di difesa. Quando un addetto alle pulizie identifica un problema, può avvisare immediatamente l'host.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Coordina le riparazioni</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host spesso si affidano a un aiuto esterno per riparare i danni o eseguire la manutenzione ordinaria delle loro proprietà. Direttamente dalla loro app, gli host possono inviare le loro richieste di servizio a un contatto esterno.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Condividi i dettagli del problema</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Quando un addetto alle pulizie identifica un problema in una proprietà, è in grado di inviare informazioni e foto all'host. Gli host possono quindi inviare questi dettagli al tuttofare o al servizio di riparazione appropriato.
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
                  <h3 className="text-lg font-medium text-gray-900">Rimani organizzato</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Mantieni organizzati i problemi risolti e i risultati all'interno dell'app per assicurarti che nulla sfugga ed eliminare la necessità di comunicazioni avanti e indietro su più piattaforme.
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
                  src="/ken-profile.png"
                  alt="Ken B."
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <blockquote>
                  <div className="max-w-3xl text-xl leading-9 font-medium text-white">
                    <p>
                      "Essere in grado di segnalare problemi con le mie proprietà direttamente su Turno significa che ci troviamo sempre di fronte ai problemi prima che diventino un problema."
                    </p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-medium text-white">Ken B.</p>
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
 