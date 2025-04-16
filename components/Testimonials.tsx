'use client'

import React from 'react'
import Image from 'next/image'

const testimonials = [
  {
    content: "Turno ha rivoluzionato il modo in cui gestiamo gli appuntamenti nel nostro studio. La sincronizzazione con Google Calendar è perfetta e ci ha permesso di ridurre gli errori di prenotazione.",
    author: {
      name: "Marco Rossi",
      role: "Proprietario, Studio Dentistico Rossi",
      image: "/testimonials/marco-rossi.jpg"
    }
  },
  {
    content: "Come libero professionista, Turno mi ha aiutato a gestire il mio tempo in modo più efficiente. L'interfaccia è intuitiva e le notifiche automatiche sono un vero punto di forza.",
    author: {
      name: "Laura Bianchi",
      role: "Avvocato, Studio Legale Bianchi",
      image: "/testimonials/laura-bianchi.jpg"
    }
  },
  {
    content: "La nostra azienda ha implementato Turno per gestire gli appuntamenti dei clienti e siamo rimasti impressionati dalla facilità d'uso e dall'affidabilità del sistema.",
    author: {
      name: "Giuseppe Verdi",
      role: "CEO, Tech Solutions Srl",
      image: "/testimonials/giuseppe-verdi.jpg"
    }
  }
]

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonianze</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cosa dicono i nostri clienti
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.content}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 