import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkUser() {
  try {
    await prisma.$connect()
    console.log('Connected to database')

    const user = await prisma.user.findFirst({
      where: {
        verificationToken: '03126779f5aa1166a59674ba07dbf64c9abb51c73ed424e542e63319602120a8'
      }
    })

    console.log('User found:', user)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkUser() 