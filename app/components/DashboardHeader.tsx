'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BellIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'

export default function DashboardHeader() {
  const [showAccountMenu, setShowAccountMenu] = useState(false)

  return (
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
  )
} 