import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.update({
    where: {
      id: 'cm9kiwzmo00014gyz8k7am2fg'  // ID dell'utente dai log
    },
    data: {
      telegramUsername: null
    }
  })
  console.log('Username Telegram resettato con successo')
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  }) 