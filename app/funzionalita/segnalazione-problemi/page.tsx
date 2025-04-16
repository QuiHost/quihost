import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SegnalazioneProblemi() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-teal-500 pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Segnalazione Problemi<br />
            in Tempo Reale
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Gli addetti possono utilizzare l'app per segnalare danni alla proprietà, inventario mancante e altri problemi in tempo reale, così che gli host possano risolvere il problema senza dover fare viaggi extra alla proprietà.
          </p>
          <Link href="/registrazione" className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
            Inizia Ora
          </Link>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Segnala Danni</h3>
                </div>
                <p className="text-gray-600">
                  I danni alla proprietà vengono comunemente scoperti durante il processo di turnover, rendendo gli addetti la prima linea di difesa. Quando un addetto identifica un problema, può istantaneamente notificare l'host.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Condividi Dettagli del Problema</h3>
                </div>
                <p className="text-gray-600">
                  Quando un addetto identifica un problema in una proprietà, può inviare informazioni e foto all'host. Gli host possono poi inoltrare questi dettagli al servizio di riparazione o al tuttofare appropriato.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Mantieni l'Organizzazione</h3>
                </div>
                <p className="text-gray-600">
                  Mantieni i problemi risolti e non risolti organizzati all'interno dell'app per assicurarti che nulla sfugga e eliminare la necessità di comunicazioni avanti e indietro su più piattaforme.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/problem-reporting.png"
                alt="Interfaccia segnalazione problemi"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Funzionalità Aggiuntive</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Coordina le Riparazioni</h3>
                <p className="text-gray-600">
                  Gli host spesso si affidano a aiuti esterni per i danni o per eseguire manutenzione di routine sulle loro proprietà. Direttamente dall'app, gli host possono inviare le loro richieste di assistenza a un contatto esterno.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Tracciamento dello Stato</h3>
                <p className="text-gray-600">
                  Tieni traccia dello stato di ogni problema segnalato, dalla segnalazione iniziale alla risoluzione, con aggiornamenti in tempo reale e notifiche per tutte le parti coinvolte.
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
                  src="/images/testimonial-ken.jpg"
                  alt="Ken B."
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <blockquote className="text-xl text-gray-600 italic mb-4">
                  "Poter segnalare i problemi con le mie proprietà direttamente su Turno significa che riusciamo sempre ad affrontare i problemi prima che diventino dei deal breaker."
                </blockquote>
                <cite className="text-gray-800 font-semibold">Ken B.</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto a Migliorare la Gestione dei Problemi?</h2>
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