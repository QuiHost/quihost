'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showFeatures, setShowFeatures] = useState(false)
  const [showLanguage, setShowLanguage] = useState(false)

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/images/logo.svg" 
                alt="Host Hero" 
                width={320} 
                height={85} 
                className="w-auto h-14" 
                priority 
              />
            </Link>
            
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/per-host" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium">
                Per Host
              </Link>
              <Link href="/per-addetti" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium">
                Per Addetti
              </Link>
              
              {/* Features Menu */}
              <div 
                className="static" 
                onMouseEnter={() => setShowFeatures(true)}
                onMouseLeave={() => setShowFeatures(false)}
              >
                <button className={`text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium ${showFeatures ? 'border-b-2 border-teal-500' : ''}`}>
                  Funzionalità
                </button>
                
                {showFeatures && (
                  <div className="fixed left-0 right-0 bg-[#ebedef] border-t border-gray-100" style={{ top: '64px' }}>
                    <div className="max-w-7xl mx-auto py-12 px-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-8">FUNZIONALITÀ</h2>
                      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                        <Link 
                          href="/funzionalita/programmazione-automatica" 
                          className="group flex items-center gap-3 text-gray-600 hover:text-teal-500"
                        >
                          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 21h18M3 10h18M3 7l9-4 9 4" />
                          </svg>
                          Auto Scheduling
                        </Link>

                        <Link 
                          href="/funzionalita/pagamenti-automatici" 
                          className="group flex items-center gap-3 text-gray-600 hover:text-teal-500"
                        >
                          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                          </svg>
                          Automatic Payments
                        </Link>

                        <Link 
                          href="/funzionalita/marketplace" 
                          className="group flex items-center gap-3 text-gray-600 hover:text-teal-500"
                        >
                          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          Cleaner Marketplace
                        </Link>

                        <Link 
                          href="/funzionalita/checklist" 
                          className="group flex items-center gap-3 text-gray-600 hover:text-teal-500"
                        >
                          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          Photo Checklists
                        </Link>

                        <Link 
                          href="/funzionalita/inventario" 
                          className="group flex items-center gap-3 text-gray-600 hover:text-teal-500"
                        >
                          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          Inventory Management
                        </Link>

                        <Link 
                          href="/funzionalita/segnalazione-problemi" 
                          className="group flex items-center gap-3 text-gray-600 hover:text-teal-500"
                        >
                          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          Problem Reporting
                        </Link>

                        <Link 
                          href="/funzionalita/chat-in-app" 
                          className="group flex items-center gap-3 text-gray-600 hover:text-teal-500"
                        >
                          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          In-App Chat
                        </Link>

                        <Link 
                          href="/funzionalita/quality-center" 
                          className="group flex items-center gap-3 text-gray-600 hover:text-teal-500"
                        >
                          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          Quality Center for Airbnb
                        </Link>

                        <Link 
                          href="/funzionalita/garanzia-cleaner" 
                          className="group flex items-center gap-3 text-gray-600 hover:text-teal-500"
                        >
                          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          Cleaner Guarantee
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/prezzi" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium">
                Prezzi
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <div 
              className="relative"
              onMouseEnter={() => setShowLanguage(true)}
              onMouseLeave={() => setShowLanguage(false)}
            >
              <button className="text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium flex items-center gap-1">
                Italiano
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showLanguage && (
                <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-lg py-2 w-32">
                  <Link 
                    href="/en" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600"
                  >
                    English
                  </Link>
                </div>
              )}
            </div>
            <Link href="/accedi" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">
              Accedi
            </Link>
            <Link href="/registrati" className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-600">
              Registrati
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Apri menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/per-host" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md">
              Per Host
            </Link>
            <Link href="/per-addetti" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md">
              Per Addetti
            </Link>
            <Link href="/funzionalita" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md">
              Funzionalità
            </Link>
            <Link href="/prezzi" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md">
              Prezzi
            </Link>
            <Link href="/accedi" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md">
              Accedi
            </Link>
            <Link href="/registrati" className="block w-full px-3 py-2 text-base font-medium text-center text-white bg-teal-500 hover:bg-teal-600 rounded-md">
              Registrati
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 