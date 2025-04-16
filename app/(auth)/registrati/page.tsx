'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { register } from '@/app/actions/auth'
import { toast } from 'react-hot-toast'

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showLoginLink, setShowLoginLink] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setShowLoginLink(false)

    try {
      const formData = new FormData(e.currentTarget as HTMLFormElement)
      
      // Salva temporaneamente la password per il login automatico dopo la verifica
      const password = formData.get('password')?.toString()
      if (password) {
        sessionStorage.setItem('tempPassword', password)
      }
      
      const result = await register(formData)
      
      if (result.success) {
        toast.success('Registrazione completata! Controlla la tua email per verificare l\'account.')
        window.location.href = `/verifica-email?email=${encodeURIComponent(result.email)}`
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Si è verificato un errore durante la registrazione'
      setError(errorMessage)
      toast.error(errorMessage)
      
      // Se c'è un errore, rimuovi la password temporanea
      sessionStorage.removeItem('tempPassword')
      
      // Se l'errore indica che l'email è già registrata, mostriamo il link per l'accesso
      if (errorMessage.includes('già registrata')) {
        setShowLoginLink(true)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left section - Form */}
      <div className="w-full lg:w-1/2 p-6 md:p-12">
        <div className="max-w-md mx-auto space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-gray-900">Registrati</h1>
            <p className="mt-2 text-sm text-gray-600">
              Hai già un account?{' '}
              <Link href="/accedi" className="font-medium text-[#00A5A5] hover:text-[#008585]">
                Accedi
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <p className="font-medium text-gray-900">Quale opzione ti descrive meglio?</p>
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="host"
                    className="w-4 h-4 text-[#00A5A5] border-gray-300 focus:ring-[#00A5A5]"
                    required
                  />
                  <span className="ml-3 font-medium text-gray-700">Sono un Host/Property Manager</span>
                </label>
                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="cleaner"
                    className="w-4 h-4 text-[#00A5A5] border-gray-300 focus:ring-[#00A5A5]"
                    required
                  />
                  <span className="ml-3 font-medium text-gray-700">Sono un Addetto alle Pulizie/Impresa di Pulizie</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Il tuo nome"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00A5A5] focus:ring-[#00A5A5] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Cognome</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Il tuo cognome"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00A5A5] focus:ring-[#00A5A5] sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="nome@esempio.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00A5A5] focus:ring-[#00A5A5] sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Minimo 8 caratteri"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00A5A5] focus:ring-[#00A5A5] sm:text-sm"
                required
                minLength={8}
              />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="h-4 w-4 text-[#00A5A5] border-gray-300 rounded focus:ring-[#00A5A5]"
                  required
                />
              </div>
              <div className="ml-3">
                <label htmlFor="privacy" className="text-sm text-gray-500">
                  Accetto la{' '}
                  <Link href="/privacy-policy" className="font-medium text-[#00A5A5] hover:text-[#008585]">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <div className="text-sm text-red-800">
                      {error}
                      {showLoginLink && (
                        <>
                          {' '}
                          <Link href="/accedi" className="text-teal-600 hover:text-teal-500 font-medium">
                            Vai alla pagina di accesso
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00A5A5] hover:bg-[#008585] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A5A5] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Registrazione in corso...' : 'Registrati'}
            </button>
          </form>
        </div>
      </div>

      {/* Right section - Hero */}
      <div className="hidden lg:block lg:w-1/2 bg-[#00A5A5]">
        <div className="h-full flex items-center justify-center p-12">
          <div className="max-w-xl text-center">
            <div className="bg-white rounded-xl p-8 mb-8 inline-block">
              <Image
                src="/logo.svg"
                alt="Host Hero"
                width={300}
                height={80}
                priority
                style={{ width: 'auto', height: 'auto' }}
                className="h-20 w-auto"
              />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Gestisci il tuo business con Host Hero
            </h2>
            <p className="text-xl text-white opacity-90">
              La piattaforma all-in-one per host di case vacanza.
              Automatizza le pulizie, gestisci i pagamenti e migliora
              l'esperienza dei tuoi ospiti.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 