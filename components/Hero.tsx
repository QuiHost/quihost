'use client'

import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Gestisci i tuoi appuntamenti in modo semplice ed efficiente
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Turno è la soluzione perfetta per gestire i tuoi appuntamenti, sincronizzare il calendario e migliorare la produttività del tuo team.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link 
              href="/register" 
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Inizia Gratis
            </Link>
            <Link 
              href="/funzionalita" 
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Scopri di più <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 