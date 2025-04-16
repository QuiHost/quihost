'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { BellIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'

export default function Header() {
  const pathname = usePathname()
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const submenuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [showAccountMenu, setShowAccountMenu] = useState(false)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        submenuRef.current && 
        !submenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [submenuRef, buttonRef])

  // Non mostrare l'header nelle pagine della dashboard
  if (pathname?.startsWith('/dashboard')) {
    return null
  }

  return (
    <div className="relative">
      <header className="bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/turno-logo-white.svg"
                  alt="Turno"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>

              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/per-gli-host" className="text-white hover:text-teal-400">
                  Per gli Host
                </Link>
                <Link href="/per-gli-addetti-alle-pulizie" className="text-white hover:text-teal-400">
                  Per gli Addetti alle Pulizie
                </Link>
                
                <div className="relative group">
                  <button 
                    ref={buttonRef}
                    className="flex items-center space-x-1 text-white group-hover:text-teal-400 py-2"
                  >
                    <span>Servizi</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Submenu */}
                  <div 
                    ref={submenuRef}
                    className="fixed left-0 right-0 w-full bg-[#ebedef] shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"
                    style={{
                      top: '64px'
                    }}
                  >
                    <div className="max-w-7xl mx-auto px-4 py-6">
                      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                        {/* Servizi items */}
                        <Link href="/servizi/programmazione-automatica" className="flex items-center gap-2 group hover:bg-white rounded-lg p-2 transition-colors">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-medium">Programmazione automatica</h3>
                            <p className="text-gray-600 text-sm">Gestisci gli appuntamenti in automatico</p>
                          </div>
                        </Link>

                        <Link href="/servizi/liste-di-controllo-foto" className="flex items-center gap-2 group hover:bg-white rounded-lg p-2 transition-colors">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-medium">Liste di controllo foto</h3>
                            <p className="text-gray-600 text-sm">Verifica la qualità con le foto</p>
                          </div>
                        </Link>

                        <Link href="/servizi/centro-qualita-airbnb" className="flex items-center gap-2 group hover:bg-white rounded-lg p-2 transition-colors">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-medium">Centro qualità Airbnb</h3>
                            <p className="text-gray-600 text-sm">Mantieni alta la qualità</p>
                          </div>
                        </Link>

                        <Link href="/servizi/gestione-inventario" className="flex items-center gap-2 group hover:bg-white rounded-lg p-2 transition-colors">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-medium">Gestione inventario</h3>
                            <p className="text-gray-600 text-sm">Tieni traccia di tutto</p>
                          </div>
                        </Link>

                        <Link href="/servizi/in-app-chat" className="flex items-center gap-2 group hover:bg-white rounded-lg p-2 transition-colors">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-medium">In-App Chat</h3>
                            <p className="text-gray-600 text-sm">Comunica direttamente nell'app</p>
                          </div>
                        </Link>

                        <Link href="/servizi/pagamenti-automatici" className="flex items-center gap-2 group hover:bg-white rounded-lg p-2 transition-colors">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-medium">Pagamenti automatici</h3>
                            <p className="text-gray-600 text-sm">Gestisci i pagamenti in automatico</p>
                          </div>
                        </Link>

                        <Link href="/servizi/segnalazione-problemi" className="flex items-center gap-2 group hover:bg-white rounded-lg p-2 transition-colors">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-medium">Segnalazione problemi</h3>
                            <p className="text-gray-600 text-sm">Gestisci le problematiche in tempo reale</p>
                          </div>
                        </Link>

                        <Link href="/servizi/sincronizzazione-calendario" className="flex items-center gap-2 group hover:bg-white rounded-lg p-2 transition-colors">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-medium">Sincronizzazione calendario</h3>
                            <p className="text-gray-600 text-sm">Sincronizza con i tuoi calendari</p>
                          </div>
                        </Link>

                        <Link href="/servizi/marketplace" className="flex items-center gap-2 group hover:bg-white rounded-lg p-2 transition-colors">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-medium">Marketplace</h3>
                            <p className="text-gray-600 text-sm">Trova nuovi clienti e opportunità</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/prezzi" className="text-white hover:text-teal-400">
                  Prezzi
                </Link>
                <Link href="/risorse" className="text-white hover:text-teal-400">
                  Risorse
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/accedi" className="text-white hover:text-teal-400">
                Accedi
              </Link>
              <Link
                href="/registrati"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Registrati
              </Link>
            </div>
          </div>
        </div>
      </header>

      <header className="fixed top-0 right-0 left-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-16 gap-4">
            {/* Notification Icon */}
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <BellIcon className="h-6 w-6" />
            </button>

            {/* Help Icon */}
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <QuestionMarkCircleIcon className="h-6 w-6" />
            </button>

            {/* Account Menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowAccountMenu(!showAccountMenu)}
                className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <UserCircleIcon className="h-6 w-6" />
              </button>

              {showAccountMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  <Link
                    href="/dashboard/cleaner/profilo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profilo
                  </Link>
                  <Link
                    href="/dashboard/cleaner/account"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Account
                  </Link>
                  <button
                    onClick={() => {
                      // Implementare il logout
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Esci
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}