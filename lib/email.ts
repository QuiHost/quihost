import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
})

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`

  await transporter.sendMail({
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