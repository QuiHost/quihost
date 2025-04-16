'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MercatoPulizie() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Mercato delle pulizie per professionisti di fiducia
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Gli host non perderanno mai più una pulizia con il Cleaner Marketplace. Trova e connettiti con gli addetti alle pulizie professionisti nelle vicinanze. Ricevi offerte da addetti alle pulizie di fiducia per i progetti in corso o trova un addetto alle pulizie dell'ultimo minuto in caso di necessità.
            </p>
            <div className="mt-8">
              <Link 
                href="/registrati"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600"
              >
                Trova il tuo prossimo addetto alle pulizie
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/stephanie-video-thumbnail.png"
                  alt="Video di Stephanie"
                  width={640}
                  height={360}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/30 p-4 backdrop-blur-sm">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60">
                  <p className="text-white text-sm">Scopri cosa sa Stephanie</p>
                  <p className="text-white/80 text-xs">Il Supervisor fa lavare ogni settimana automatizzando le pulizie con Turno.</p>
                </div>
              </div>
            </div>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Trova nuovi addetti alle pulizie</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Usa il nostro Marketplace per cercare e selezionare facilmente le offerte di addetti alle pulizie professionali in base alla loro posizione, al budget e ad altre preferenze.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Invia pagamenti automaticamente</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host possono impostare pagamenti automatici in modo che, una volta completato un progetto di pulizia, non debbano muovere un dito per assicurarsi che gli addetti alle pulizie vengano pagati.
                  </p>
                </div>
              </div>
            </div>

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
                  <h3 className="text-lg font-medium text-gray-900">Automatizza la tua pianificazione</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host possono sincronizzare i loro calendari di prenotazione e impostare i progetti di pulizia in modo che si ripetano automaticamente in base a un programma prestabilito. Questo aiuta a bilanciare i carichi di lavoro e a tenere traccia delle attività in tempo reale.
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
                  <h3 className="text-lg font-medium text-gray-900">Lavora con gli addetti alle pulizie esistenti</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Gli host possono invitare il loro team di pulizia esistente sulla piattaforma, consentendo loro di conservare tutte le informazioni sul progetto di pulizia in un unico posto e di mantenere i rapporti con gli addetti alle pulizie fidati.
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
                  src="/lindsay-profile.png"
                  alt="Lindsay H."
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <blockquote>
                  <div className="max-w-3xl text-xl leading-9 font-medium text-white">
                    <p>
                      "Trovare buoni addetti alle pulizie è difficile. I detergenti che ho trovato sul Marketplace sono stati affidabili e hanno un buon prezzo. Puoi anche aggiungere detergenti come backup!"
                    </p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-medium text-white">Lindsay H.</p>
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
                src="/checklist-icon.png"
                alt="Liste di controllo per le foto"
                width={200}
                height={200}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-medium text-teal-600">Liste di controllo per le foto</h3>
                <p className="mt-4 text-base text-gray-500">
                  Per garantire sempre una pulizia di qualità, gli host possono scegliere tra migliaia di liste di controllo e personalizzarle in base alle loro proprietà, oppure possono creare la propria lista di controllo unica da zero. Man mano che gli addetti alle pulizie completano ogni attività, possono inviare foto del loro lavoro agli host per infondere fiducia e mostrare la loro completezza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
 