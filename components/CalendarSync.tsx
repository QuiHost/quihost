'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const calendarServices = [
  {
    name: 'Google Calendar',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6h2v-6h-2v6zm0-8h2V6h-2v2z" />
      </svg>
    ),
  },
  {
    name: 'Outlook Calendar',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6h2v-6h-2v6zm0-8h2V6h-2v2z" />
      </svg>
    ),
  },
  {
    name: 'Apple Calendar',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6h2v-6h-2v6zm0-8h2V6h-2v2z" />
      </svg>
    ),
  },
]

export default function CalendarSync() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sincronizza con i tuoi calendari preferiti
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Integra Turno con i principali servizi di calendario per una gestione ancora più efficiente dei tuoi appuntamenti.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <Image
              src="/calendar-sync.png"
              alt="Sincronizzazione calendari"
              width={500}
              height={500}
              className="rounded-2xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {calendarServices.map((service) => (
                <div key={service.name} className="flex items-center gap-x-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">{service.name}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/funzionalita"
                className="text-sm font-semibold leading-6 text-indigo-600"
              >
                Scopri tutte le funzionalità <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 