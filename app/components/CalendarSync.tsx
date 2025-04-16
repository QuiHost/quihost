import React from 'react'
import Image from 'next/image'

const CalendarSync = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sincronizzazione Automatica del Calendario
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Importa il calendario dei tuoi ospiti da Airbnb, Vrbo e tutte le principali piattaforme di prenotazione in un'unica posizione centrale.
        </p>
        <div className="relative h-[400px] max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/calendar-sync.jpg"
            alt="Sincronizzazione Calendario"
            fill
            className="object-cover"
          />
        </div>
        <button className="mt-12 bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
          Inizia a Sincronizzare
        </button>
      </div>
    </section>
  )
}

export default CalendarSync 