import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Funzionalita() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            App per Pulizie Airbnb<br />per Cambi Ospiti Perfetti
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Turno aiuta gli host di case vacanza a pianificare e gestire automaticamente i loro servizi di pulizia professionale. Il nostro sito web e app mobile offrono numerose funzionalità per rendere i cambi ospiti semplici ed efficienti.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        {/* Feature 1 - Scheduling */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <Image
              src="/images/scheduling-app.svg"
              alt="App di Pianificazione Pulizie"
              width={300}
              height={375}
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">
              App di Pianificazione Pulizie per una Gestione Semplice
            </h2>
            <p className="text-gray-600 mb-6">
              Gli host possono pianificare progetti di pulizia con assegnazioni automatiche, deleghe e accettazione. Dopo aver sincronizzato il calendario degli affitti, la nostra piattaforma importerà le prenotazioni e creerà automaticamente le date di check-in e check-out degli ospiti da condividere con gli addetti.
            </p>
            <Link 
              href="/funzionalita/programmazione-automatica"
              className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Scopri di più
            </Link>
          </div>
        </div>

        {/* Feature 2 - Payments */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Automatizza i Tuoi Pagamenti
            </h2>
            <p className="text-gray-600 mb-6">
              Gli host possono inviare transazioni sicure e hanno l'opzione di pagare automaticamente gli addetti quando completano i progetti. Ci vogliono in media cinque minuti per transazione manuale per gli host per pagare i loro addetti. Con Turno, gli host possono risparmiare oltre quaranta ore all'anno.
            </p>
            <Link 
              href="/funzionalita/pagamenti-automatici"
              className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Scopri di più
            </Link>
          </div>
          <div>
            <Image
              src="/images/payments.svg"
              alt="Sistema di Pagamenti Automatici"
              width={300}
              height={375}
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
        </div>

        {/* Feature 3 - Marketplace */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <Image
              src="/images/marketplace.svg"
              alt="Marketplace Professionisti delle Pulizie"
              width={300}
              height={375}
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">
              Marketplace Pulizie per Professionisti Affidabili
            </h2>
            <p className="text-gray-600 mb-6">
              Il nostro marketplace offre agli host accesso a decine di migliaia di professionisti delle pulizie affidabili ed esperti, sia che stiano pianificando in anticipo o che abbiano bisogno di trovare un sostituto.
            </p>
            <Link 
              href="/funzionalita/marketplace"
              className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Scopri di più
            </Link>
          </div>
        </div>

        {/* Feature 4 - Checklist */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Checklist Pulizie Airbnb per Cambi Ospiti a 5 Stelle
            </h2>
            <p className="text-gray-600 mb-6">
              Per garantire una pulizia di qualità ogni volta, gli host possono scegliere tra migliaia di combinazioni di checklist da condividere con i loro addetti, oppure possono creare la propria checklist da zero. Una lista attività ideale assicura che possano inviare i dettagli del loro lavoro agli host per costruire fiducia.
            </p>
            <Link 
              href="/funzionalita/checklist"
              className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Scopri di più
            </Link>
          </div>
          <div>
            <Image
              src="/images/checklist.svg"
              alt="Interfaccia Checklist Pulizie"
              width={300}
              height={375}
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
        </div>

        {/* Feature 5 - Problem Reporting */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <Image
              src="/images/problem-reporting.svg"
              alt="Sistema di Segnalazione Problemi"
              width={300}
              height={375}
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">
              Segnalazione Problemi
            </h2>
            <p className="text-gray-600 mb-6">
              Quando un addetto sta completando un cambio ospiti, può inviare agli host informazioni e foto dei problemi che vede nella proprietà. Gli host possono poi decidere come gestire il problema. Il problema segnalato può essere risolto esternamente con un contatto come un tuttofare o un servizio di riparazione.
            </p>
            <Link 
              href="/funzionalita/segnalazione-problemi"
              className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Scopri di più
            </Link>
          </div>
        </div>

        {/* Feature 6 - Inventory */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Gestione Inventario
            </h2>
            <p className="text-gray-600 mb-6">
              La funzione inventario di Turno permette a host e addetti di tenere traccia degli articoli specifici nelle loro proprietà. Gli host possono scegliere di essere notificati quando mancano o stanno per esaurirsi. Gli host possono impostare una soglia specifica per quando vogliono ricevere una notifica che un determinato articolo deve essere rifornito.
            </p>
            <Link 
              href="/funzionalita/gestione-inventario"
              className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Scopri di più
            </Link>
          </div>
          <div>
            <Image
              src="/images/inventory.svg"
              alt="Sistema di Gestione Inventario"
              width={300}
              height={375}
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
        </div>

        {/* Feature 7 - Chat */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/images/chat.svg"
              alt="Interfaccia Chat In-App"
              width={300}
              height={375}
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">
              Chat In-App
            </h2>
            <p className="text-gray-600 mb-6">
              La funzione di chat in-app serve come occhi e orecchie dell'host durante ogni cambio ospiti. Gli host possono inviare e ricevere istantaneamente messaggi, foto e altri allegati da e verso gli addetti utilizzando la funzione di comunicazione bidirezionale. Questa comoda funzione permette a host e addetti di centralizzare le comunicazioni, aumentare l'efficienza e garantire un servizio di alta qualità.
            </p>
            <Link 
              href="/funzionalita/chat"
              className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Scopri di più
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 