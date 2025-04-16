'use client'

import { useSession } from 'next-auth/react'

interface DashboardProps {
  userType: 'cleaner' | 'host'
}

export function Dashboard({ userType }: DashboardProps) {
  const { data: session } = useSession()
  const userName = session?.user?.name || 'Utente'

  console.log('Dashboard component rendered with userType:', userType)
  console.log('Session in Dashboard:', session)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Benvenuto, {userName}!
          </h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Contenuto specifico per il tipo di utente */}
          {userType === 'cleaner' ? (
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Dashboard Cleaner</h2>
                
                {/* Statistiche */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">Lavori Completati</h3>
                    <p className="text-3xl font-bold text-teal-600">0</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">Lavori in Corso</h3>
                    <p className="text-3xl font-bold text-teal-600">0</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">Valutazione Media</h3>
                    <p className="text-3xl font-bold text-teal-600">-</p>
                  </div>
                </div>

                {/* Azioni Rapide */}
                <div className="bg-white rounded-lg shadow mb-8">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Azioni Rapide</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700">
                        Cerca Nuovi Lavori
                      </button>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700">
                        Visualizza Calendario
                      </button>
                    </div>
                  </div>
                </div>

                {/* Prossimi Lavori */}
                <div className="bg-white rounded-lg shadow">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Prossimi Lavori</h3>
                    <p className="text-gray-500">Non ci sono lavori programmati.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Dashboard Host (da implementare)
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
                <h2 className="text-xl font-semibold">Dashboard Host</h2>
                <p className="mt-4">Contenuto della dashboard host...</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 