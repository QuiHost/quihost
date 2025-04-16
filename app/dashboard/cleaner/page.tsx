'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

export default function CleanerDashboard() {
  const { data: session } = useSession()

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header with welcome message */}
      <div className="mb-8">
        <h1 className="text-xl font-medium text-gray-900">
          Benvenuto {session?.user?.name || 'Utente'}
        </h1>
      </div>

      {/* Getting Started */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Come iniziare</h2>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-24 bg-gray-200 rounded-full">
              <div className="h-2 w-0 bg-[#00A5A5] rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-gray-500">0%</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 bg-[#E6FFFF] rounded-xl mb-4">
              <svg className="w-6 h-6 text-[#00A5A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trova più clienti</h3>
            <p className="text-sm text-gray-500">Ottieni il massimo da Turno</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 bg-[#EBF5FF] rounded-xl mb-4">
              <svg className="w-6 h-6 text-[#0066FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Invita i clienti esistenti</h3>
            <p className="text-sm text-gray-500">Gestisci i tuoi clienti attuali su Turno</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F0FFF4] rounded-xl mb-4">
              <svg className="w-6 h-6 text-[#00B341]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vieni pagato</h3>
            <p className="text-sm text-gray-500">Ricevi i pagamenti direttamente sul tuo conto</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F3F0FF] rounded-xl mb-4">
              <svg className="w-6 h-6 text-[#6B46FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lavora da qualsiasi luogo</h3>
            <p className="text-sm text-gray-500">Gestisci il tuo business ovunque tu sia</p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#00A5A5] to-[#008F8F] p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-white/90 mb-4">Richieste di progetto</h3>
          <div className="text-3xl font-bold text-white">0</div>
        </div>
        <div className="bg-gradient-to-br from-[#0066FF] to-[#0052CC] p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-white/90 mb-4">Progetti di oggi</h3>
          <div className="text-3xl font-bold text-white">0</div>
        </div>
        <div className="bg-gradient-to-br from-[#6B46FF] to-[#5538CC] p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-white/90 mb-4">Progetti questa settimana</h3>
          <div className="text-3xl font-bold text-white">0</div>
        </div>
        <div className="bg-gradient-to-br from-[#FF3366] to-[#CC295C] p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-white/90 mb-4">Notifiche non lette</h3>
          <div className="text-3xl font-bold text-white">0</div>
        </div>
      </div>

      {/* Messages */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Messaggi</h2>
        <div className="flex items-center justify-center py-12 text-gray-500">
          <p>Non ci sono messaggi non letti</p>
        </div>
      </div>

      {/* Payments */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Vieni pagato in modo facile e veloce</h2>
            <p className="text-gray-500">
              Invita i tuoi clienti attuali a pagare tramite Turno e ricevi il denaro direttamente sul tuo conto bancario!
            </p>
          </div>
          <button className="px-4 py-2 text-[#00A5A5] hover:text-[#008F8F] font-medium">
            Inizia a ricevere i pagamenti
          </button>
        </div>
      </div>

      {/* Insurance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Assicurazione, licenze e cauzioni</h2>
            <p className="text-gray-500">Distinguiti dalla massa e vinci più offerte sul Marketplace</p>
          </div>
          <button className="px-4 py-2 text-[#00A5A5] hover:text-[#008F8F] font-medium">
            Ottieni subito i tuoi distintivi!
          </button>
        </div>
      </div>
    </div>
  )
}