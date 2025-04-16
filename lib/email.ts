import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  subject: string
  text: string
  html: string
}

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    text,
    html,
  })
}

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`

  await nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  }).sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Verifica la tua email',
    html: `
      <h1>Verifica la tua email</h1>
      <p>Clicca sul link sottostante per verificare la tua email:</p>
      <a href="${verificationUrl}">Verifica Email</a>
      <p>Se non hai richiesto questa verifica, puoi ignorare questa email.</p>
    `,
  })
} 