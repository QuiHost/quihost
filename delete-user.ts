import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function deleteUser() {
  try {
    await prisma.user.deleteMany({
      where: {
        email: 'oltreilbuio455@gmail.com'
      }
    })
    console.log('User deleted successfully')
  } catch (error) {
    console.error('Error deleting user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

deleteUser() 