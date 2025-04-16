import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CleanerMarketplace() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-teal-500 pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cleaner Marketplace<br />
            per Professionisti Affidabili
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Non perdere mai più una pulizia. Trova e connettiti con addetti alle pulizie professionali nelle vicinanze per progetti continuativi o per trovare un addetto last-minute.
          </p>
          <Link href="/registrazione" className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
            Trova il Tuo Prossimo Addetto
          </Link>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ricerca Semplificata</h3>
              <p className="text-gray-600">
                Usa il nostro Marketplace per cercare facilmente e selezionare offerte da addetti alle pulizie professionali in base a posizione, budget e altre preferenze.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Professionisti Verificati</h3>
              <p className="text-gray-600">
                Accedi a una rete di addetti alle pulizie professionali verificati, con recensioni e valutazioni da altri host.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prenotazione Immediata</h3>
              <p className="text-gray-600">
                Trova un addetto alle pulizie last-minute quando ne hai bisogno, con prenotazione e conferma immediate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Scopri cosa dice Stephanie</h2>
              <p className="text-xl text-gray-600 mb-8">
                Superhost Airbnb risparmia ore ogni settimana automatizzando le pulizie con il nostro Marketplace.
              </p>
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/testimonial-video-cover.jpg"
                  alt="Stephanie racconta la sua esperienza"
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Gestione Semplificata</h3>
                <p className="text-gray-600">
                  Gestisci tutti i tuoi addetti alle pulizie in un unico posto, con calendario integrato e comunicazione diretta.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Backup Garantito</h3>
                <p className="text-gray-600">
                  Accedi a una rete di addetti alle pulizie di backup verificati per non rimanere mai scoperto.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Qualità Garantita</h3>
                <p className="text-gray-600">
                  Tutti gli addetti alle pulizie sono valutati e recensiti dalla community per garantire standard elevati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-teal-500 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/images/testimonial-lindsay.jpg"
                  alt="Lindsay H."
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <blockquote className="text-xl text-gray-600 italic mb-4">
                  "Trovare buoni addetti alle pulizie è difficile. Gli addetti che ho trovato sul Marketplace sono affidabili e con prezzi ragionevoli. Puoi anche aggiungere addetti di backup!"
                </blockquote>
                <cite className="text-gray-800 font-semibold">Lindsay H.</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto a Trovare il Tuo Prossimo Addetto alle Pulizie?</h2>
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
  )
} 