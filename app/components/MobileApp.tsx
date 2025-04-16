import React from 'react'
import Image from 'next/image'

const MobileApp = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px]">
            <Image
              src="/images/mobile-app.png"
              alt="App Mobile"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              App Mobile per Host
            </h2>
            <p className="text-gray-600 mb-8">
              Centralizza tutta la gestione delle pulizie Airbnb e le comunicazioni in un unico posto. Chiamare, inviare messaggi ed email attraverso più app è una perdita di tempo. Gestisci i tuoi addetti alle pulizie dalla stessa pagina. Disponibile gratuitamente per iOS e Android.
            </p>
            <div className="flex gap-4">
              <a href="#" className="inline-block">
                <Image
                  src="/images/app-store.png"
                  alt="Scarica su App Store"
                  width={140}
                  height={42}
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/images/google-play.png"
                  alt="Disponibile su Google Play"
                  width={140}
                  height={42}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileApp 