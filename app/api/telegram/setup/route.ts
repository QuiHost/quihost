import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const PUBLIC_URL = process.env.PUBLIC_URL

    if (!BOT_TOKEN) {
      throw new Error('Token del bot Telegram non configurato')
    }

    if (!PUBLIC_URL) {
      throw new Error('URL pubblico non configurato. Assicurati di aver configurato PUBLIC_URL nel file .env')
    }

    // Prima verifichiamo che il bot sia attivo
    console.log('Verifico il bot...')
    const botInfoResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getMe`
    )
    const botInfo = await botInfoResponse.json()
    console.log('Informazioni bot:', botInfo)

    if (!botInfo.ok) {
      throw new Error(`Errore nel recupero delle informazioni del bot: ${botInfo.description}`)
    }

    // Prima rimuoviamo qualsiasi webhook esistente
    console.log('Rimuovo webhook esistenti...')
    const deleteResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/deleteWebhook`
    )
    const deleteResult = await deleteResponse.json()
    console.log('Risultato rimozione webhook:', deleteResult)

    // Aspettiamo un secondo prima di impostare il nuovo webhook
    await new Promise(resolve => setTimeout(resolve, 1000))

    const webhookUrl = `${PUBLIC_URL}/api/telegram/webhook`
    console.log('Configuro nuovo webhook:', webhookUrl)

    // Imposta il webhook
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: webhookUrl,
          allowed_updates: ['message'],
          drop_pending_updates: true
        }),
      }
    )

    const data = await response.json()
    console.log('Risposta setWebhook:', data)
    
    if (!data.ok) {
      throw new Error(`Errore nella configurazione del webhook: ${data.description}`)
    }

    // Verifichiamo il nuovo webhook
    console.log('Verifico la configurazione del webhook...')
    const verifyResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getWebhookInfo`
    )
    const verifyResult = await verifyResponse.json()
    console.log('Informazioni webhook:', verifyResult)

    return NextResponse.json({
      success: true,
      message: 'Webhook configurato con successo',
      webhookUrl,
      botInfo: botInfo.result,
      webhookInfo: verifyResult.result
    })
  } catch (error) {
    console.error('Errore dettagliato:', error)
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Errore sconosciuto nella configurazione del webhook',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
} 