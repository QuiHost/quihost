import nodemailer from 'nodemailer'
import { VerificationEmail } from '../emails/VerificationEmail'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
})

export async function sendVerificationEmail(email: string, token: string, name: string) {
  // Create a simple HTML email template
  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Verifica il tuo indirizzo email</title>
      </head>
      <body style="font-family: sans-serif; padding: 20px;">
        <h1>Ciao ${name}!</h1>
        <p>Grazie per esserti registrato su Host Hero. Per completare la registrazione, inserisci il seguente codice di verifica nella pagina di verifica:</p>
        <div style="margin: 30px 0; text-align: center;">
          <div style="background-color: #f3f4f6; 
                      padding: 20px; 
                      border-radius: 8px; 
                      font-size: 24px; 
                      font-family: monospace; 
                      letter-spacing: 4px;
                      display: inline-block;">
            ${token.substring(0, 6).toUpperCase()}
          </div>
        </div>
        <p>Il codice di verifica scadrà tra 24 ore.</p>
        <p>Se non hai creato tu questo account, puoi ignorare questa email.</p>
        <p>Cordiali saluti,<br>Il team di Host Hero</p>
      </body>
    </html>
  `

  const mailOptions = {
    from: `"Host Hero" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Codice di verifica - Host Hero',
    html: emailHtml,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Verification email sent successfully')
  } catch (error) {
    console.error('Error sending verification email:', error)
    throw error
  }
} 