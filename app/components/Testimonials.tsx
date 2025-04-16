import React from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Roberto',
    role: 'Property Manager',
    content: 'Host Hero ha completamente trasformato il modo in cui gestiamo le pulizie dei nostri affitti vacanze. Le funzionalità di automazione e pianificazione sono incredibili.',
    image: '/images/testimonial1.jpg'
  },
  {
    id: 2,
    name: 'Sara',
    role: 'Host Airbnb',
    content: 'I pagamenti automatici e le checklist fotografiche hanno reso la gestione degli addetti alle pulizie molto più semplice. Finalmente posso fidarmi che tutto sia fatto correttamente.',
    image: '/images/testimonial2.jpg'
  },
  {
    id: 3,
    name: 'Michele',
    role: 'Proprietario Immobili',
    content: 'Da quando utilizziamo Host Hero, i punteggi di soddisfazione dei nostri ospiti sono migliorati significativamente. La qualità delle pulizie è costantemente eccellente.',
    image: '/images/testimonial3.jpg'
  }
]

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Cosa Dicono i Nostri Host
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 