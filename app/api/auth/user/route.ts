import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    console.log("GET /api/auth/user - Inizio")
    const session = await getServerSession(authOptions)
    console.log("Session:", session)

    if (!session) {
      console.log("Nessuna sessione trovata")
      return NextResponse.json({ error: "Non autorizzato" }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email as string
      },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        userType: true,
        phoneVerified: true,
        emailVerified: true,
        hasCompletedOnboarding: true,
        image: true
      }
    })
    console.log("User trovato:", user)

    if (!user) {
      console.log("Utente non trovato nel database")
      return NextResponse.json({ error: "Utente non trovato" }, { status: 404 })
    }

    return NextResponse.json({
      ...user,
      role: user.userType,
      isVerified: user.emailVerified && user.phoneVerified,
      address: "",
      profileImage: user.image
    })
  } catch (error) {
    console.error("Errore nel recupero dei dati utente:", error)
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    )
  }
} 