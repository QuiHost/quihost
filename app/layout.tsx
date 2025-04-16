import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './components/ClientLayout'
import { VerificationCodeDebug } from '@/components/VerificationCodeDebug'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Host Hero - Gestione Pulizie per Host',
  description: 'La piattaforma completa per la gestione delle pulizie per host e addetti alle pulizie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>
        <VerificationCodeDebug />
      </body>
    </html>
  )
} 