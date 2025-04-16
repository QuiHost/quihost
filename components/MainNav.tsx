"use client";

import { useState } from "react";
import Link from "next/link";

export default function MainNav() {
  const [showFeatures, setShowFeatures] = useState(false);

  const features = [
    { name: "Mercato pulizia", href: "/funzionalita/mercato-pulizia" },
    { name: "Segnalazione problemi", href: "/funzionalita/segnalazione-problemi" },
    { name: "Garanzia pulizie", href: "/funzionalita/garanzia-pulizie" },
    { name: "Programmazione automatica", href: "/funzionalita/programmazione-automatica" },
    { name: "Liste di controllo foto", href: "/funzionalita/liste-controllo-foto" },
    { name: "Pagamenti automatici", href: "/funzionalita/pagamenti-automatici" },
    { name: "Gestione inventario", href: "/funzionalita/gestione-inventario" },
    { name: "Centro qualità Airbnb", href: "/funzionalita/centro-qualita-airbnb" },
    { name: "In app chat", href: "/funzionalita/in-app-chat" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Turno
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/per-host"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Per gli host
              </Link>
              <Link
                href="/per-addetti"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Per gli addetti alle pulizie
              </Link>
              <div className="relative">
                <button
                  onClick={() => setShowFeatures(!showFeatures)}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Funzionalità
                </button>
                {showFeatures && (
                  <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-[#29c2af]">
                    <div className="py-1">
                      {features.map((feature) => (
                        <Link
                          key={feature.href}
                          href={feature.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#1fa899]"
                        >
                          {feature.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/prezzi"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Prezzi
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/accedi"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Accedi
            </Link>
            <Link
              href="/registrazione"
              className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#29c2af] hover:bg-[#1fa899]"
            >
              Registrati
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 