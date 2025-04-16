import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Button,
  Section,
  Hr,
  Img,
} from '@react-email/components'
import * as React from 'react'

interface VerificationEmailProps {
  name: string
  verificationUrl: string
}

export const VerificationEmail = ({
  name,
  verificationUrl,
}: VerificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Conferma il tuo indirizzo e-mail per completare la registrazione</Preview>
      <Body style={main}>
        {/* Header con logo */}
        <Container style={container}>
          <Section style={{ backgroundColor: '#38bdf8', padding: '20px 0', marginBottom: '24px' }}>
            <Img
              src={`${process.env.NEXT_PUBLIC_APP_URL}/images/logo-white.svg`}
              width="120"
              height="40"
              alt="Host Hero"
              style={{ margin: '0 auto' }}
            />
          </Section>

          {/* Contenuto principale */}
          <Heading style={h1}>Ciao {name},</Heading>
          
          <Text style={text}>
            Rendiamolo ufficiale. Conferma il tuo indirizzo e-mail per completare la registrazione. 
            Se il tuo account viene bloccato, questo ci aiuterà a farti rientrare.
          </Text>

          {/* Pulsante di verifica */}
          <Section style={buttonContainer}>
            <Button style={{...button, padding: '12px 20px'}} href={verificationUrl}>
              Confermare l'indirizzo e-mail
            </Button>
          </Section>

          <Text style={text}>
            Una volta confermata l'e-mail, puoi iniziare a ottenere il massimo da Host Hero visitando il nostro{' '}
            <Link style={link} href={`${process.env.NEXT_PUBLIC_APP_URL}`}>
              sito web
            </Link>
            {' '}e scaricando l'App Host Hero - Addetti alle pulizie per{' '}
            <Link style={link} href="#">iOS</Link>
            {' '}o{' '}
            <Link style={link} href="#">Android</Link>.
          </Text>

          <Hr style={hr} />

          {/* Sezione servizio clienti */}
          <Section>
            <Text style={footer}>
              <strong>Servizio Clienti</strong>
              <br />
              Visita il{' '}
              <Link style={link} href={`${process.env.NEXT_PUBLIC_APP_URL}/centro-assistenza`}>
                Centro assistenza
              </Link>
              {' '}- {' '}
              <Link style={link} href={`${process.env.NEXT_PUBLIC_APP_URL}/contatti`}>
                Contatta Host Hero
              </Link>
            </Text>
          </Section>

          <Text style={footerText}>
            Non rispondere a questa e-mail
          </Text>

          {/* Social Links */}
          <Section style={socialLinks}>
            <Link href="#" style={socialLink}>
              <Img
                src={`${process.env.NEXT_PUBLIC_APP_URL}/images/app-store.png`}
                width="120"
                height="40"
                alt="App Store"
              />
            </Link>
            <Link href="#" style={socialLink}>
              <Img
                src={`${process.env.NEXT_PUBLIC_APP_URL}/images/play-store.png`}
                width="120"
                height="40"
                alt="Play Store"
              />
            </Link>
          </Section>

          {/* Social Icons */}
          <Section style={socialIcons}>
            <Link href="#" style={iconLink}>Facebook</Link>
            <Link href="#" style={iconLink}>Instagram</Link>
            <Link href="#" style={iconLink}>LinkedIn</Link>
            <Link href="#" style={iconLink}>Pinterest</Link>
            <Link href="#" style={iconLink}>TikTok</Link>
            <Link href="#" style={iconLink}>YouTube</Link>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  maxWidth: '600px',
}

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.25',
  marginBottom: '24px',
  textAlign: 'left' as const,
  padding: '0 24px',
}

const text = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  padding: '0 24px',
}

const buttonContainer = {
  padding: '24px',
  textAlign: 'center' as const,
}

const button = {
  backgroundColor: '#38bdf8',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  width: 'auto',
}

const link = {
  color: '#38bdf8',
  textDecoration: 'underline',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
}

const footer = {
  color: '#4b5563',
  fontSize: '14px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  padding: '0 24px',
}

const footerText = {
  color: '#6b7280',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center' as const,
  padding: '24px',
}

const socialLinks = {
  padding: '24px',
  textAlign: 'center' as const,
}

const socialLink = {
  margin: '0 8px',
  textDecoration: 'none',
}

const socialIcons = {
  padding: '0 24px 24px',
  textAlign: 'center' as const,
}

const iconLink = {
  color: '#6b7280',
  fontSize: '12px',
  textDecoration: 'none',
  margin: '0 8px',
}

export default VerificationEmail 