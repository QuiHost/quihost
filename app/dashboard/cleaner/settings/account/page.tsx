'use client'

import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

interface User {
  email: string
  emailVerified: boolean
  phoneVerified: boolean
}

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [timeFormat, setTimeFormat] = useState('24 ore')
  const [firstDayOfWeek, setFirstDayOfWeek] = useState('Lunedì')
  const [distanceUnit, setDistanceUnit] = useState('Kilometri')

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/api/auth/user')
        if (response.ok) {
          const data = await response.json()
          setUser(data)
        }
      } catch (error) {
        console.error('Errore nel recupero dei dati utente:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const handleSavePreferences = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Qui implementeremo il salvataggio delle preferenze
      toast.success('Impostazioni salvate con successo')
    } catch (error) {
      toast.error('Errore durante il salvataggio delle impostazioni')
    }
  }

  const handleDeleteAccount = async () => {
    if (confirm('Sei sicuro di voler eliminare il tuo account? Questa azione non può essere annullata.')) {
      // Implementare l'eliminazione dell'account
    }
  }

  if (loading) return null
  if (!user) return null

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Account</h1>

      {/* Banner di verifica */}
      {(!user.emailVerified || !user.phoneVerified) && (
        <div className="bg-coral-100 p-4 rounded-lg mb-6">
          <p className="text-coral-800">
            Si prega di verificare il proprio indirizzo e-mail e numero di telefono, per invitare i
            tuoi clienti o per unirti al Marketplace di Host Hero
          </p>
          <div className="mt-3 flex gap-3">
            {!user.phoneVerified && (
              <button className="bg-white text-coral-600 px-4 py-2 rounded hover:bg-coral-50">
                Confermare il mio numero di telefono
              </button>
            )}
            {!user.emailVerified && (
              <button 
                onClick={() => setIsEmailModalOpen(true)}
                className="bg-white text-coral-600 px-4 py-2 rounded hover:bg-coral-50"
              >
                Confermare la mia e-mail
              </button>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSavePreferences} className="space-y-8">
        {/* Preferenze dell'utente */}
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Preferenze</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Formato orario
              </label>
              <select 
                className="w-full border-gray-300 rounded-md shadow-sm"
                value={timeFormat}
                onChange={(e) => setTimeFormat(e.target.value)}
              >
                <option>24 ore</option>
                <option>AM-PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primo giorno della settimana
              </label>
              <select 
                className="w-full border-gray-300 rounded-md shadow-sm"
                value={firstDayOfWeek}
                onChange={(e) => setFirstDayOfWeek(e.target.value)}
              >
                <option>Lunedì</option>
                <option>Domenica</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unità di misura per le distanze
              </label>
              <select 
                className="w-full border-gray-300 rounded-md shadow-sm"
                value={distanceUnit}
                onChange={(e) => setDistanceUnit(e.target.value)}
              >
                <option>Kilometri</option>
                <option>Miglia</option>
              </select>
            </div>
          </div>
        </section>

        {/* Informazioni di contatto */}
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Informazioni di contatto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Numero di telefono
              </label>
              <div className="flex">
                <select className="w-20 border-gray-300 rounded-l-md shadow-sm">
                  <option>🇮🇹 +39</option>
                </select>
                <input
                  type="tel"
                  placeholder="Numero di telefono"
                  className="flex-1 border-gray-300 border-l-0 rounded-r-md shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pulsante Salva */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
          >
            Salva preferenze
          </button>
        </div>
      </form>

      {/* Sezione Elimina Account */}
      <section className="mt-12 border-t pt-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Elimina account</h2>
        <p className="text-sm text-gray-600 mb-4">
          Una volta eliminato il tuo account, non sarà possibile recuperarlo. Per favore, sii sicuro.
        </p>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Elimina il mio account
        </button>
      </section>
    </div>
  )
} 