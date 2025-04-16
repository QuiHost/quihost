import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface TelegramUpdate {
  message?: {
    text?: string
    from?: {
      id: number
      username?: string
    }
    chat?: {
      id: number
    }
  }
}

export async function POST(req: Request) {
  try {
    const update: TelegramUpdate = await req.json()
    const message = update.message
    
    if (!message?.text || !message.from?.id || !message.chat?.id) {
      return NextResponse.json({ ok: true })
    }

    const chatId = message.chat.id
    const text = message.text.toLowerCase()
    const username = message.from.username

    // Gestisci il comando /start
    if (text === '/start') {
      await sendTelegramMessage(chatId, 
        `👋 Benvenuto nel bot di verifica di Turno!\n\n` +
        `Per completare la verifica, assicurati di:\n` +
        `1. Avere un username Telegram impostato\n` +
        `2. Inserire il tuo username nella pagina di verifica\n\n` +
        `Una volta fatto, riceverai qui i codici di verifica.`
      )
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Errore nel webhook Telegram:', error)
    return NextResponse.json({ ok: false, error: 'Errore interno' }, { status: 500 })
  }
}

async function sendTelegramMessage(chatId: number, text: string) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  if (!BOT_TOKEN) {
    throw new Error('Token del bot Telegram non configurato')
  }

  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
    }),
  })

  const data = await response.json()
  if (!data.ok) {
    throw new Error('Errore nell\'invio del messaggio Telegram')
  }

  return data
} 