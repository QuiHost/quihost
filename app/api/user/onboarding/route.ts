import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

interface OnboardingData {
  mainGoal: string
  businessType: string
  referralSource: string
  timestamp: string
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const data = await request.json() as OnboardingData

    // Trova l'utente usando l'email dalla sessione
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email
      }
    })

    if (!user) {
      return new NextResponse("User not found", { status: 404 })
    }

    // Aggiorna i dati dell'utente con le informazioni di onboarding
    const updatedUser = await prisma.user.update({
      where: {
        email: session.user.email
      },
      data: {
        hasCompletedOnboarding: true,
        mainGoal: data.mainGoal,
        businessType: data.businessType,
        referralSource: data.referralSource
      }
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error("Errore durante il salvataggio dei dati di onboarding:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
} 