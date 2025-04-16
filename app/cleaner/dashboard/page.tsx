'use client'

import { useSession } from 'next-auth/react'
import { Dashboard } from '@/app/components/Dashboard'

export default function CleanerDashboardPage() {
  const { data: session } = useSession()

  return (
    <Dashboard userType="cleaner" />
  )
} 