import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
    }

    const { phone } = await req.json()

    if (!phone) {
      return NextResponse.json({ error: 'Numero di telefono mancante' }, { status: 400 })
    }

    // Aggiorna il numero di telefono dell'utente
    const updatedUser = await prisma.user.update({
      where: {
        id: session.user.id
      },
      data: {
        phoneNumber: phone,
        phoneVerified: false // Resetta lo stato di verifica quando il numero viene cambiato
      }
    })

    return NextResponse.json({ success: true, user: updatedUser })
  } catch (error) {
    console.error('Error updating phone number:', error)
    return NextResponse.json({ error: 'Errore durante l\'aggiornamento del numero' }, { status: 500 })
  }
} 