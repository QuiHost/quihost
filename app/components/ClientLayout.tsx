'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { SessionProvider } from 'next-auth/react'
import Navbar from './Navbar'
import { Footer } from './Footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAuthPage = pathname === '/accedi' || pathname === '/registrati'
  const isDashboard = pathname?.startsWith('/dashboard')

  return (
    <SessionProvider>
      <div className={isDashboard ? 'dashboard-page' : ''}>
        {!isAuthPage && !isDashboard && <Navbar />}
        {children}
        {!isAuthPage && !isDashboard && <Footer />}
      </div>
    </SessionProvider>
  )
} 