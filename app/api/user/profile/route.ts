import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(options)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
    }

    const data = await request.json()
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: data.name,
        phone: data.phone
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        userType: true
      }
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json(
      { error: 'Errore durante l\'aggiornamento del profilo' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const session = await getServerSession(options)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        userType: true
      }
    })

    if (!user) {
      return NextResponse.json({ error: 'Utente non trovato' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Profile fetch error:', error)
    return NextResponse.json(
      { error: 'Errore durante il recupero del profilo' },
      { status: 500 }
    )
  }
} 