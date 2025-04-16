'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  CalendarIcon,
  UserGroupIcon,
  BanknotesIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  StarIcon,
  AcademicCapIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    {
      name: 'Home',
      href: '/dashboard/cleaner',
      icon: HomeIcon
    },
    {
      name: 'Progetti',
      href: '/dashboard/cleaner/progetti',
      icon: ClipboardDocumentListIcon
    },
    {
      name: 'Calendario',
      href: '/dashboard/cleaner/calendario',
      icon: CalendarIcon
    },
    {
      name: 'Trova nuovi clienti',
      href: '/dashboard/cleaner/trova-clienti',
      icon: UsersIcon
    },
    {
      name: 'Opportunità del Marketplace',
      href: '/dashboard/cleaner/opportunita',
      icon: BuildingStorefrontIcon
    },
    {
      name: 'I miei clienti',
      href: '/dashboard/cleaner/clienti',
      icon: UserGroupIcon
    },
    {
      name: 'Pagamenti',
      href: '/dashboard/cleaner/pagamenti',
      icon: BanknotesIcon
    },
    {
      name: 'Le mie recensioni',
      href: '/dashboard/cleaner/recensioni',
      icon: StarIcon
    },
    {
      name: 'Centro di formazione',
      href: '/dashboard/cleaner/formazione',
      icon: AcademicCapIcon
    }
  ]

  return (
    <div className={`fixed top-0 left-0 h-screen bg-[#1a1a1a] border-r border-gray-800 transition-all duration-300 ${
      isOpen ? 'w-72' : 'w-20'
    }`}>
      <div className="p-4">
        <div className={`flex items-center ${isOpen ? 'justify-between' : 'justify-center'} mb-8`}>
          {isOpen ? (
            <Link href="/dashboard/cleaner">
              <Image
                src="/images/turno-logo.svg"
                alt="Turno"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          ) : (
            <Link href="/dashboard/cleaner">
              <Image
                src="/images/turno-icon.svg"
                alt="Turno"
                width={36}
                height={36}
                className="h-9 w-9"
              />
            </Link>
          )}
          <button 
            onClick={onToggle}
            className="text-gray-400 hover:text-white"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center ${isOpen ? 'px-5' : 'px-3 justify-center'} py-3.5 text-base font-medium rounded-md group relative ${
                  isActive
                    ? 'text-[#00A5A5] bg-[#2a2a2a]'
                    : 'text-gray-300 hover:bg-[#2a2a2a] hover:text-white'
                }`}
              >
                <Icon
                  className={`${isOpen ? 'mr-4' : ''} h-6 w-6 flex-shrink-0 ${
                    isActive ? 'text-[#00A5A5]' : 'text-gray-400 group-hover:text-white'
                  }`}
                />
                {isOpen && item.name}
                {!isOpen && (
                  <div className="absolute left-full ml-2 px-2 py-1.5 bg-[#2a2a2a] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      {isOpen && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center px-4 py-3 text-sm text-gray-300">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-300 text-base">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-base text-white">sfas</span>
                <span className="text-sm text-gray-400">jitek46514@ptiong.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isOpen && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="h-10 w-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-300 text-base group relative cursor-pointer">
            S
            <div className="absolute left-full ml-2 px-2 py-1.5 bg-[#2a2a2a] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              sfas<br />
              jitek46514@ptiong.com
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 