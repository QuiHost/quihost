import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PhotoChecklist() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-teal-500 pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Checklist Fotografica per<br />
            Pulizie a 5 Stelle
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Gli host possono creare e condividere checklist con i loro addetti per ogni progetto. Tutte le attività necessarie possono essere facilmente gestite attraverso le foto dal vivo che gli addetti possono caricare in qualsiasi momento.
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
            <div>
              <Image
                src="/images/checklist-demo.png"
                alt="Esempio di checklist fotografica"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Gestisci e Aggiorna le Attività</h3>
                </div>
                <p className="text-gray-600">
                  Gli host hanno la possibilità di gestire tutte le checklist di pulizia relative alle loro proprietà. Questo dà loro il controllo completo su ciò su cui i loro addetti dovrebbero concentrarsi durante la pulizia delle case.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Caricamento Immagini Semplificato</h3>
                </div>
                <p className="text-gray-600">
                  Gli addetti possono caricare immagini delle attività completate nella loro checklist assegnata. Questa funzionalità permette agli addetti di mostrare le loro capacità di pulizia e fornisce agli host una garanzia di qualità.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Qualità Costante</h3>
                </div>
                <p className="text-gray-600">
                  Gli host utilizzano le checklist fotografiche per ottimizzare l'efficienza del lavoro e comunicare le aspettative agli addetti. Gli addetti sono così attrezzati per fornire costantemente un servizio di alto livello.
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
                  src="/images/testimonial-jessica.jpg"
                  alt="Jessica B."
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <blockquote className="text-xl text-gray-600 italic mb-4">
                  "Adoro poter condividere le mie aspettative su come le cose dovrebbero essere pulite e presentate con i miei addetti e loro possono inviarmi foto del lavoro direttamente nell'app. Mi aiuta a mantenere gli standard elevati che mi hanno fatto ottenere recensioni a 5 stelle."
                </blockquote>
                <cite className="text-gray-800 font-semibold">Jessica B.</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Funzionalità Aggiuntive</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Monitoraggio in Tempo Reale</h3>
              <p className="text-gray-600">
                Segui il progresso delle pulizie in tempo reale attraverso le foto caricate dagli addetti.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Checklist Personalizzabili</h3>
              <p className="text-gray-600">
                Crea checklist su misura per ogni proprietà, con requisiti specifici e istruzioni dettagliate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Verifica Automatica</h3>
              <p className="text-gray-600">
                Sistema di verifica automatica delle attività completate attraverso le foto caricate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto a Migliorare la Qualità delle tue Pulizie?</h2>
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