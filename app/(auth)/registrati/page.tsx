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
      const formData = new FormData(e.currentTarget)
      
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
      if (errorMessage.includes('già registrata')) {
        setShowLoginLink(true)
      }
      toast.error(errorMessage)
      
      // Se c'è un errore, rimuovi la password temporanea
      sessionStorage.removeItem('tempPassword')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          className="mx-auto h-12 w-auto"
          src="/logo.png"
          alt="QuiHost"
          width={48}
          height={48}
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Crea il tuo account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                        <Link href="/accedi" className="ml-1 text-teal-600 hover:text-teal-500 font-medium">
                          Vai alla pagina di accesso
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Registrazione in corso...' : 'Registrati'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Hai già un account?{' '}
            <Link href="/accedi" className="text-teal-600 hover:text-teal-500 font-medium">
              Accedi
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 