'use client'

import React from 'react'
import Image from 'next/image'

export default function ListeDiControlloFoto() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Lista di controllo per la pulizia di Airbnb per fatturati a 5 stelle
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Gli host possono creare e condividere liste di controllo con i loro addetti alle pulizie per ogni progetto. Tutte le attività necessarie possono essere facilmente gestite attraverso le foto dal vivo che gli addetti alle pulizie possono caricare in qualsiasi momento.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
            <Image
              src="/checklist-screenshot.png"
              alt="Screenshot delle liste di controllo"
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
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16">
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
                  <h3 className="text-lg font-medium text-gray-900">Gestire e aggiornare le attività</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host hanno la possibilità di gestire tutte le liste di controllo per la pulizia relative alle loro proprietà. Questo dà loro il controllo su ciò cui i loro addetti alle pulizie dovrebbero concentrarsi quando puliscono le loro case.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Tieni traccia dei progressi di Cleaner</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host e i proprietari di imprese di pulizie possono monitorare i progressi dei progetti di pulizia. Questa funzione consente di vedere facilmente quali attività possono essere completate in tempo e dove cadono gli addetti alle pulizie.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Facile caricamento delle immagini</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli addetti alle pulizie possono caricare le immagini delle attività completate nell'elenco di controllo assegnato per consentire agli host di visualizzarle. Questa funzione consente agli addetti alle pulizie di mostrare le loro abilità di pulizia e offre agli host una garanzia di qualità.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Garantisci una qualità costante</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host utilizzano liste di controllo fotografiche per semplificare l'efficienza del lavoro e comunicare le aspettative con gli addetti alle pulizie in un unico posto. Gli addetti alle pulizie sono quindi attrezzati per fornire costantemente un servizio di prim'ordine.
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
                      "Mi piace poter condividere le mie aspettative su come le cose dovrebbero essere pulite e presentate con i miei addetti alle pulizie e loro possono inviarmi le foto del lavoro direttamente nell'app. Mi aiuta a mantenere gli standard elevati che mi fanno ottenere recensioni a 5 stelle."
                    </p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-medium text-white">Jessica B.</p>
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
 