'use client'

import React from 'react'
import Image from 'next/image'

export default function GaranziaPulizie() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Garanzia Turno Cleaner
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Di addio alle preoccupazioni per le cancellazioni dell'ultimo minuto o per il temuto Cleaner No Show: con Turno sei coperto!
            </p>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5">
              Il nostro team di assistenza clienti qualificato è disponibile 24 ore su 24, 7 giorni su 7 tramite chat dal vivo e pronto ad assisterti in qualsiasi necessità. Lavoreremo rapidamente per aiutarti a pianificare un backup o per trovarti un nuovo addetto alle pulizie dal nostro ampio Marketplace.
            </p>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5">
              La Garanzia Turno Cleaner garantisce la tua soddisfazione per il servizio e la qualità di ogni lavoro di pulizia su Marketplace, o fino a $ 100 della tua prossima pulizia su Turno* Pulizia, risolto.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 flex justify-center">
            <Image
              src="/turno-guarantee-badge.png"
              alt="Turno Cleaner Guarantee"
              width={400}
              height={400}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div>
              <div className="flex flex-col items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Protezione da cancellazioni dell'ultimo minuto e mancata presentazione</h3>
                <p className="mt-2 text-base text-gray-500">
                  Il nostro team di assistenza clienti in tempo reale, attivo 24 ore su 24, 7 giorni su 7, coinvolgerà la vasta rete di addetti alle pulizie controllati di Turno per trovare un professionista in grado di svolgere il lavoro. Se c'è una differenza tra la tariffa del nuovo addetto alle pulizie e la tariffa di pulizia originale, Turno pagherà la differenza come credito futuro. Se Turno non riesce a trovare un addetto alle pulizie, fino a $ 100 della tua prossima pulizia sono a nostro carico. *Applicabile solo negli Stati Uniti.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Impegno per la pulizia di qualità e la soddisfazione dell'ospite</h3>
                <p className="mt-2 text-base text-gray-500">
                  Turno Marketplace Cleaners si impegna a fornire sempre un servizio 5 stelle. Tuttavia, se mai non sei soddisfatto della qualità di una pulizia, informa subito il nostro team e ti aiuteremo ad avviare un rimborso totale o parziale per le spese di pulizia. Ti aiuteremo anche a trovare un nuovo addetto alle pulizie e ti forniremo un credito di $ 100* per il tuo primo progetto con il nuovo addetto alle pulizie.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Pulizia senza preoccupazioni con il Cleaner Marketplace di Turno</h3>
                <p className="mt-2 text-base text-gray-500">
                  Il Marketplace di Turno include 55K+ addetti alle pulizie esperti e controllati per affitti a breve termine situati in proprietà di tutte le dimensioni negli Stati Uniti, Canada, Europa e Australia. Inoltre, il nostro processore di pagamenti, Stripe, fornisce ai Marketplace Cleaners, con sede negli Stati Uniti, la documentazione fiscale annuale richiesta, in modo da poter cancellare i 1099 dalla tua lista di cose da fare per l'hosting!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 bg-teal-500 rounded-lg overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="relative lg:flex lg:items-center">
              <div className="relative lg:flex items-center space-x-8">
                <Image
                  src="/turno-guarantee-badge.png"
                  alt="Turno Guarantee"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <div>
                  <blockquote>
                    <div className="max-w-3xl text-xl leading-9 font-medium text-white">
                      <p>
                        "Turno è stata una risorsa formidabile per i miei affitti. Abbiamo proprietà in cinque stati e ogni detergente Turno che abbiamo usato è stato fantastico. E il processo di pagamento automatico è così fluido, un punto di svolta per me e il mio team!"
                      </p>
                    </div>
                    <footer className="mt-4">
                      <p className="text-base font-medium text-white">Ken B. - Seattle, WA</p>
                    </footer>
                  </blockquote>
                </div>
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
 