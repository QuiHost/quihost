import { prisma } from '../lib/prisma'
import { hash } from 'bcrypt'

async function main() {
  const password = await hash('password123', 12)
  
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test',
      surname: 'User',
      password: password,
      userType: 'cleaner',
      emailVerified: new Date(),
      verificationToken: '',
    },
  })
  
  console.log({ user })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 