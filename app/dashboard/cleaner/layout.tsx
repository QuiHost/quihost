'use client'

import { usePathname } from 'next/navigation'
import DashboardHeader from '@/components/DashboardHeader'
import PhoneVerificationBanner from '@/components/PhoneVerificationBanner'
import Sidebar from '@/components/Sidebar'
import { HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  const getPageTitle = (path: string) => {
    const segments = path.split('/')
    const lastSegment = segments[segments.length - 1]
    switch(lastSegment) {
      case 'profilo':
        return 'Profilo'
      case 'account':
        return 'Account'
      case 'progetti':
        return 'Progetti'
      case 'calendario':
        return 'Calendario'
      case 'trova-clienti':
        return 'Trova nuovi clienti'
      case 'opportunita':
        return 'Opportunità del Marketplace'
      case 'clienti':
        return 'I miei clienti'
      case 'pagamenti':
        return 'Pagamenti'
      case 'recensioni':
        return 'Le mie recensioni'
      case 'formazione':
        return 'Centro di formazione'
      default:
        return 'Dashboard'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-20'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Link href="/dashboard/cleaner" className="text-gray-500 hover:text-gray-700">
                <HomeIcon className="h-5 w-5" />
              </Link>
              <span className="text-xl font-semibold text-gray-900">{getPageTitle(pathname)}</span>
            </div>
            <DashboardHeader />
          </div>
          <div className="mb-8">
            <PhoneVerificationBanner />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
} 