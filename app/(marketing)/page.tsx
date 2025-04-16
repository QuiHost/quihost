'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { images } from '@/app/config/images'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Trova il tuo servizio di pulizie ideale
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Prenota un servizio di pulizie professionale in pochi click. Servizio affidabile e garantito.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Prenota Ora
                </Button>
                <Button size="lg" variant="outline">
                  Scopri di più
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[images.avatar1, images.avatar2, images.avatar3].map((avatar, i) => (
                    <Image
                      key={i}
                      src={avatar}
                      alt={`User avatar ${i + 1}`}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  +2,000 clienti soddisfatti
                </p>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src={images.cleanerHero}
                alt="Professional cleaner"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perché scegliere noi
            </h2>
            <p className="text-xl text-gray-600">
              Offriamo un servizio completo e professionale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Prenotazione Automatica',
                description: 'Prenota il tuo servizio in pochi click e gestisci i tuoi appuntamenti facilmente.',
                icon: '📅'
              },
              {
                title: 'Pagamenti Sicuri',
                description: 'Pagamenti automatici e sicuri con le principali carte di credito.',
                icon: '💳'
              },
              {
                title: 'Controllo Qualità',
                description: 'Monitoriamo costantemente la qualità del servizio per garantire la tua soddisfazione.',
                icon: '✨'
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Image
              src={images.securityFeatures}
              alt="Security and payment features"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div>
              <div className="flex items-center justify-center mb-2">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">{star}</span>
                ))}
              </div>
              <p className="text-xl font-semibold">5.0 rating medio</p>
            </div>
            <div className="h-12 w-px bg-indigo-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-indigo-600 mb-2">55,000+</p>
              <p className="text-xl">Addetti alle pulizie in tutto il mondo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Sync Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sincronizza con il tuo calendario
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Non perdere mai un appuntamento. Sincronizza automaticamente i tuoi servizi di pulizia con il tuo calendario preferito.
              </p>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Sincronizza ora
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src={images.calendarSync}
                alt="Calendar synchronization"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Cosa dicono i nostri clienti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Roberto',
                image: images.roberto,
                text: 'Servizio eccellente! Professionale e puntuale.'
              },
              {
                name: 'Sara',
                image: images.sara,
                text: 'La mia casa non è mai stata così pulita. Consigliatissimo!'
              },
              {
                name: 'Michele',
                image: images.michele,
                text: 'Prenotazione facile e risultati garantiti.'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {'★★★★★'.split('').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Scarica la nostra app
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Gestisci i tuoi servizi di pulizia ovunque tu sia
          </p>
          <div className="flex justify-center gap-4">
            <Image
              src={images.appStore}
              alt="Download on App Store"
              width={140}
              height={42}
            />
            <Image
              src={images.googlePlay}
              alt="Get it on Google Play"
              width={140}
              height={42}
            />
          </div>
        </div>
      </section>
    </div>
  )
} 