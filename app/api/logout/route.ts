import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { prisma } from '../../lib/prisma'

export async function POST() {
  const sessionToken = cookies().get('session')?.value
  
  if (sessionToken) {
    // Elimina la sessione dal database
    await prisma.session.delete({
      where: { sessionToken }
    })
    
    // Elimina il cookie
    cookies().delete('session')
  }
  
  redirect('/accedi')
} 