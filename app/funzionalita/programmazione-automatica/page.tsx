import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProgrammazioneAutomatica() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-teal-500 pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            App di Pianificazione Pulizie<br />
            per una Gestione Semplice
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Gli host possono pianificare, automatizzare e delegare i progetti di pulizia agli addetti attuali e nuovi. Questa automazione riduce il tempo speso in chiamate e messaggi di testo e aiuta a evitare errori manuali.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sincronizza il Tuo Calendario</h3>
              <p className="text-gray-600">
                Gli host possono importare automaticamente le prenotazioni da Airbnb, Vrbo, Trip Advisor, Booking.com e altri e generare progetti di pulizia associati alle date di check-in e check-out degli ospiti.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trova e Invita Addetti</h3>
              <p className="text-gray-600">
                Gli host possono invitare il loro attuale team di pulizie sulla piattaforma o utilizzare il marketplace per trovare nuovi professionisti. I progetti di pulizia possono essere assegnati automaticamente agli addetti attuali o nuovi.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automatizza le Tue Pulizie</h3>
              <p className="text-gray-600">
                Gli host ricevono notifiche sui progetti di pulizia completati, permettendo loro di conoscere lo stato di avanzamento di ogni cambio ospiti senza dover inviare email o chiamare l'addetto per chiarimenti.
              </p>
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
                  src="/images/testimonial1.jpg"
                  alt="Tom S."
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <blockquote className="text-xl text-gray-600 italic mb-4">
                  "Un vero GAME CHANGER! La pianificazione automatica delle pulizie quando arrivano le prenotazioni mi fa risparmiare tempo, denaro e mal di testa."
                </blockquote>
                <cite className="text-gray-800 font-semibold">Tom S.</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Funzionalità Aggiuntive</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/calendar-sync.jpg"
                    alt="Marketplace degli Addetti"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Marketplace degli Addetti</h3>
                  <p className="text-gray-600">
                    Il nostro marketplace offre agli host accesso a decine di migliaia di professionisti delle pulizie affidabili ed esperti, sia che stiano pianificando in anticipo o che abbiano bisogno di trovare un sostituto.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/cleaning-service.jpg"
                    alt="Gestione del Team"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Gestione del Team</h3>
                  <p className="text-gray-600">
                    Gestisci facilmente il tuo team di pulizie, assegna compiti, monitora le prestazioni e mantieni una comunicazione efficace attraverso la nostra piattaforma intuitiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto a Semplificare la Gestione delle Pulizie?</h2>
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