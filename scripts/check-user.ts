import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: 'hicey98520@ptiong.com'
      },
      select: {
        email: true,
        userType: true,
        emailVerified: true,
        hasCompletedOnboarding: true
      }
    })
    
    console.log('User details:', user)
  } catch (error) {
    console.error('Error finding user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 