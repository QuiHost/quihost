'use client'

import React from 'react'
import Image from 'next/image'

export default function GestioneInventario() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Gestione dell'inventario
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Gli host ricevono notifiche quando specifici articoli dell'inventario sono in esaurimento o vuoti. Articoli da toeletta, biancheria e altri servizi saranno sempre organizzati e disponibili per ogni prenotazione. Quando gli host e gli addetti alle pulizie mantengono le proprietà adeguatamente rifornite, sono preparati per qualsiasi ospite e svolgono un ruolo attivo nell'aiutare gli ospiti a vivere esperienze positive degne di recensioni a 5 stelle.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
            <Image
              src="/inventory-illustration.png"
              alt="Illustrazione gestione inventario"
              width={500}
              height={500}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
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
                  <h3 className="text-lg font-medium text-gray-900">Tieni traccia dell'inventario</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Turno semplifica il rifornimento degli elementi essenziali con la funzione di inventario. Gli host possono facilmente personalizzare l'elenco dei servizi che desiderano controllare durante i turnover.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Personalizza la quantità dell'articolo</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host possono scegliere una soglia precisa o stimata per il momento in cui desiderano ricevere una notifica in caso di inventario mancante. Gli host possono anche richiedere ragionamenti specifici sulla quantità di inventario agli addetti alle pulizie.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Ricevi notifiche istantanee</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli addetti alle pulizie possono controllare l'inventario designato di un host uno per uno e segnalare gli articoli esauriti o in esaurimento. Gli host ricevono immediatamente una notifica dei servizi mancanti per un facile rifornimento.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Evita viaggi extra</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Poiché gli host ricevono una notifica quando mancano degli oggetti, possono evitare viaggi non necessari nelle loro proprietà per monitorare automaticamente i livelli di inventario, risolvendo i loro impegni.
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
                  src="/carol-profile.png"
                  alt="Carol N."
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <blockquote>
                  <div className="max-w-3xl text-xl leading-9 font-medium text-white">
                    <p>
                      "Niente più viaggi dell'ultimo minuto per consegnare la carta igienica, la funzione di inventario mi fa sapere quando il mio posto sta per esaurirsi, quindi pianifichiamo in anticipo."
                    </p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-medium text-white">Carol N.</p>
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
 