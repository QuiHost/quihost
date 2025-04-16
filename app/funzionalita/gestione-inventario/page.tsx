import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function GestioneInventario() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-teal-500 pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gestione Inventario<br />
            Intelligente
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Ricevi notifiche quando specifici articoli dell'inventario stanno per esaurirsi. Articoli da bagno, biancheria e altri comfort saranno sempre organizzati e disponibili per ogni prenotazione.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Tieni Traccia dell'Inventario</h3>
                </div>
                <p className="text-gray-600">
                  Turno rende semplice tenere sotto controllo il rifornimento degli elementi essenziali con la funzione inventario. Gli host possono facilmente personalizzare la lista dei comfort che vogliono controllare durante i turnover.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Notifiche Istantanee</h3>
                </div>
                <p className="text-gray-600">
                  Gli addetti possono spuntare l'inventario designato dall'host uno per uno e segnalare gli articoli che sono esauriti o in esaurimento. Gli host vengono notificati degli articoli mancanti istantaneamente per un facile rifornimento.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Personalizza le Quantità</h3>
                </div>
                <p className="text-gray-600">
                  Gli host possono scegliere una soglia precisa o stimata per quando vogliono essere notificati dell'inventario mancante. Possono anche richiedere aggiornamenti specifici sulle quantità dell'inventario dagli addetti.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/inventory-dashboard.png"
                alt="Dashboard gestione inventario"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
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
                  src="/images/testimonial-carol.jpg"
                  alt="Carol N."
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <blockquote className="text-xl text-gray-600 italic mb-4">
                  "Niente più viaggi dell'ultimo minuto per consegnare carta igienica, la funzione inventario ci fa sapere quando il posto sta per esaurire le scorte così possiamo pianificare in anticipo."
                </blockquote>
                <cite className="text-gray-800 font-semibold">Carol N.</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Vantaggi Aggiuntivi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Evita Viaggi Extra</h3>
                <p className="text-gray-600">
                  Poiché gli host vengono avvisati quando gli articoli stanno per esaurirsi, possono evitare viaggi non necessari alle loro proprietà per monitorare i livelli dell'inventario, liberando i loro programmi impegnati.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Esperienza a 5 Stelle</h3>
                <p className="text-gray-600">
                  Quando gli host e gli addetti mantengono le proprietà adeguatamente rifornite, sono preparati per qualsiasi ospite e giocano un ruolo attivo nell'aiutare gli ospiti ad avere esperienze positive degne di recensioni a 5 stelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto a Semplificare la Gestione del tuo Inventario?</h2>
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