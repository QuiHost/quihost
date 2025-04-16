import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function GaranziaCleaner() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Garanzia Cleaner Host Hero
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Dì addio alle preoccupazioni per le cancellazioni dell'ultimo minuto o ai temuti "no-show" dei cleaner - con Host Hero sei coperto!
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Il nostro team di supporto clienti è disponibile 24/7 via live chat ed è pronto ad assisterti in ogni momento. Lavoreremo rapidamente per aiutarti a programmare un backup o trovare un nuovo cleaner dal nostro vasto Marketplace.
              </p>
              <p className="text-lg text-gray-600">
                La Garanzia Cleaner di Host Hero assicura la tua soddisfazione con il servizio e la qualità di ogni pulizia del Marketplace - fino a €100 del tuo prossimo servizio è su Host Hero.*
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/cleaner-guarantee-badge.png"
                alt="Host Hero Cleaner Guarantee Badge"
                width={400}
                height={400}
                className="w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Protection Feature */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Protezione dalle Cancellazioni dell'Ultimo Minuto e No-Show
                  </h3>
                  <p className="text-gray-600">
                    Il nostro team di supporto clienti 24/7 coinvolgerà la vasta rete di cleaner verificati di Host Hero per trovare un professionista che possa svolgere il lavoro. Se c'è una differenza tra la tariffa del nuovo cleaner e quella originale, Host Hero pagherà la differenza come credito futuro. Se Host Hero non riesce a trovare un cleaner, fino a €100 del tuo prossimo servizio è su di noi. *Applicabile solo negli USA.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Feature */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Impegno per la Qualità e Soddisfazione Garantita
                  </h3>
                  <p className="text-gray-600">
                    I cleaner del Marketplace di Host Hero si impegnano a fornire un servizio 5 stelle ogni volta. Tuttavia, se non sei soddisfatto della qualità di una pulizia, faccelo sapere subito e ti aiuteremo ad avviare un rimborso parziale o totale per il servizio. Ti aiuteremo a trovare un nuovo cleaner e forniremo un credito di €100* per il tuo primo servizio con il nuovo cleaner.
                  </p>
                </div>
              </div>
            </div>

            {/* Marketplace Feature */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Pulizie Senza Preoccupazioni con il Marketplace Cleaner
                  </h3>
                  <p className="text-gray-600">
                    Il Marketplace di Host Hero include 55K+ professionisti esperti e verificati a lungo termine situati nei principali mercati di affitti brevi in tutti gli Stati Uniti, Canada, Europa e Australia. Inoltre, il nostro processo di pagamento Stripe fornisce ai Cleaner del Marketplace la documentazione fiscale annuale richiesta, così puoi eliminare il cleaner "in nero" dalla tua lista di cose da fare!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-teal-500">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image
                src="/images/cleaner-guarantee-badge.png"
                alt="Host Hero Cleaner Guarantee Badge"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
            <p className="text-xl text-white italic mb-6">
              "Host Hero è stata una risorsa straordinaria per i miei affitti. Abbiamo proprietà in cinque stati e ogni cleaner di Host Hero che abbiamo utilizzato è stato eccellente. E il processo di pagamento automatico è così fluido, un vero game-changer per me e il mio team!"
            </p>
            <p className="text-white font-semibold">Ken B.</p>
            <p className="text-white opacity-75">Seattle, WA</p>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Funzionalità Aggiuntive</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/images/marketplace-search.png"
                  alt="Ricerca nel Marketplace dei Cleaner"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Cleaner Marketplace</h3>
                <p className="text-gray-600">
                  Il nostro marketplace offre agli host l'accesso a decine di migliaia di professionisti delle pulizie affidabili ed esperti, sia che stiano programmando in anticipo o che abbiano bisogno di trovare un cleaner di backup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto a Iniziare?</h2>
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