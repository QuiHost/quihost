'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CentroQualitaAirbnb() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-teal-500 text-white text-center py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Turno offre un innovativo centro di qualità per gli operatori Airbnb di tutto il mondo
          </h1>
          <p className="mt-4 text-xl">
            Partner software ufficiale di Airbnb
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Sezione Principale */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-500 italic">
            Migliora le recensioni e la scalabilità sulla pulizia delle proprietà con il Quality Center di Turno per host e gestori di prenotazioni
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Aumenta la qualità delle pulizie</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Aumenta la qualità delle pulizie</li>
            <li>Migliora l'esperienza e la soddisfazione degli ospiti</li>
          </ul>

          <p className="mt-6 text-gray-600">
            Il Quality Center è guidato per tutti i clienti Turno e i manager grazie a una serie di strumenti aggiuntivi. Questi strumenti sono stati creati per semplificare la gestione della qualità e migliorare l'esperienza degli ospiti con una comunicazione efficace tra host e addetti alle pulizie.
          </p>

          {/* Screenshot della Dashboard */}
          <div className="mt-12">
            <Image
              src="/quality-center-dashboard.png"
              alt="Dashboard del Quality Center"
              width={800}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Video Tutorial Section */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6">Recommended Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <Image
                  src="/video-thumbnail-1.png"
                  alt="Video tutorial"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <p className="text-sm text-gray-600">Practice Tips to Improve Property Checklists & Ratings</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <Image
                  src="/video-thumbnail-2.png"
                  alt="Video tutorial"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <p className="text-sm text-gray-600">How to Set Cleanliness Review Strategies</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <Image
                  src="/video-thumbnail-3.png"
                  alt="Video tutorial"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <p className="text-sm text-gray-600">Tips to Boost Your Cleanliness Rating</p>
              </div>
            </div>
          </div>

          {/* Sezione App Mobile */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8">Soluzioni end-to-end per gli host Airbnb</h2>
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6">
                  La nostra tecnologia e il nostro servizio ottimizzano l'esperienza delle pulizie per il settore degli affitti.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-600">
                  <li>Ottimizza la tecnologia nel 2024: utilizziamo l'intelligenza artificiale per aiutare gli host a gestire meglio le pulizie che si svolgono nelle loro proprietà.</li>
                  <li>L'app mobile è ora disponibile con una migliore esperienza utente e nuove funzionalità per host e addetti alle pulizie.</li>
                </ul>
              </div>
              <div className="mt-8 lg:mt-0">
                <Image
                  src="/app-screenshots.png"
                  alt="Screenshot dell'app mobile"
                  width={400}
                  height={600}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Sezione Miglioramenti */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8">Migliorare la soddisfazione degli ospiti e le valutazioni di pulizia</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                La nostra tecnologia offre un'ottima esperienza per gli operatori delle pulizie e per gli host. Turno può aiutare a migliorare la soddisfazione degli ospiti e le valutazioni di pulizia attraverso il nostro servizio di supporto per l'ospite e le nostre funzionalità di gestione.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Integrazione efficace integrata di Airbnb, la nostra comunità offre:</li>
                <li>Miglioramento delle prestazioni in tempo reale tramite verifiche accurate</li>
                <li>Maggior controllo e affidabilità delle recensioni</li>
                <li>Dati integrati con gli ospiti e le prenotazioni</li>
              </ul>
            </div>
          </div>

          {/* Sezione Promessa Turno */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8">Mantenere la promessa di Turno</h2>
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6">
                  La piattaforma Turno ha due modelli precisi definiti per gli host e gli addetti alle pulizie. Questi modelli sono stati creati per aiutare a mantenere gli standard elevati.
                </p>
                <p className="text-gray-600">
                  Garantiamo qualità e gli progetti Cleaner Maintenance sono progettati per aiutare gli host a mantenere standard elevati e una comunicazione efficace con i loro addetti alle pulizie.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <Image
                  src="/app-promise.png"
                  alt="App Turno Promise"
                  width={300}
                  height={600}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
 