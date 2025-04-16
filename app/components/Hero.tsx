import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-teal-50 to-white pt-32 pb-24">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gestisci il tuo business con Host Hero
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              La piattaforma all-in-one per host di case vacanza. Automatizza le pulizie, gestisci i pagamenti e migliora l'esperienza dei tuoi ospiti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/registrazione" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center">
                Inizia Gratuitamente
              </Link>
              <Link href="/demo" className="inline-block bg-white text-teal-600 border-2 border-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-center">
                Richiedi una Demo
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={`/images/testimonial${i}.jpg`}
                      alt={`User ${i}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                Più di 1000 host si fidano di Host Hero
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/cleaning-service.jpg"
                alt="Servizio di Pulizia Professionale"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Pulizia Completata</p>
                  <p className="text-sm text-gray-600">Appartamento Centro</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">10 minuti fa</span>
                <span className="text-teal-600 font-medium">Visualizza</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 