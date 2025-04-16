import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: "oltreilbuio455@gmail.com"
      }
    })

    return NextResponse.json({ user })
  } catch (error) {
    console.error("Errore debug:", error)
    return NextResponse.json({ error: "Errore interno del server" }, { status: 500 })
  }
} 