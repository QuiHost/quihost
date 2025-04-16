'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  FolderIcon, 
  CalendarIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  CreditCardIcon, 
  StarIcon, 
  AcademicCapIcon 
} from '@heroicons/react/24/outline'

const navigationItems = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Progetti', href: '/dashboard/progetti', icon: FolderIcon },
  { name: 'Calendario', href: '/dashboard/calendario', icon: CalendarIcon },
  { name: 'Trova nuovi clienti', href: '/dashboard/trova-clienti', icon: UserGroupIcon },
  { name: 'Opportunità del Marketplace', href: '/dashboard/marketplace', icon: BriefcaseIcon },
  { name: 'I miei clienti', href: '/dashboard/clienti', icon: UserGroupIcon },
  { name: 'Pagamenti', href: '/dashboard/pagamenti', icon: CreditCardIcon },
  { name: 'Le mie recensioni', href: '/dashboard/recensioni', icon: StarIcon },
  { name: 'Centro di formazione', href: '/dashboard/formazione', icon: AcademicCapIcon },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="h-full">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <Link href="/dashboard" className="text-white font-semibold text-lg">
          Turno
        </Link>
      </div>
      <div className="space-y-1 py-4">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                isActive
                  ? 'bg-[#2D3B4E] text-white'
                  : 'text-gray-300 hover:bg-[#2D3B4E] hover:text-white'
              } group flex items-center px-4 py-3 text-sm font-medium`}
            >
              <item.icon
                className={`${
                  isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                } mr-3 h-5 w-5`}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
} 