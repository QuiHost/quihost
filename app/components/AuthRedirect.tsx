'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function AuthRedirect() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      // Reindirizza solo alle dashboard specifiche
      if (session.user.userType === 'cleaner') {
        router.push('/dashboard-cleaner')
      } else if (session.user.userType === 'host') {
        router.push('/dashboard-host')
      }
    }
  }, [status, session, router])

  return null
} 