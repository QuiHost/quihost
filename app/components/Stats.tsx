import React from 'react'

const Stats = () => {
  return (
    <section className="bg-teal-500 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
            <div className="text-gray-600">Valutazione 4.9 stelle</div>
          </div>
          
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-4xl font-bold text-teal-600 mr-2">55.000+</div>
            <div className="text-gray-600">Addetti alle Pulizie nel Mondo</div>
          </div>
          
          <div className="text-gray-600 max-w-xs text-center md:text-left">
            Ottieni cambi ospiti senza problemi con pianificazione automatica, pagamenti automatici, checklist fotografiche, segnalazione problemi e gestione inventario.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats 