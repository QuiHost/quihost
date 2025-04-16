export function getVerificationEmailTemplate(name: string, verificationUrl: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Ciao ${name},</h2>
      
      <p style="color: #666; font-size: 16px; line-height: 1.5;">
        Rendiamolo ufficiale. Conferma il tuo indirizzo e-mail per completare la registrazione. 
        Se il tuo account viene bloccato, questo ci aiuterà a farti rientrare.
      </p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationUrl}" 
           style="background-color: #00A5A5; 
                  color: white; 
                  padding: 12px 24px; 
                  text-decoration: none; 
                  border-radius: 4px; 
                  font-weight: bold;">
          Confermare l'indirizzo e-mail
        </a>
      </div>

      <p style="color: #666; font-size: 16px; line-height: 1.5;">
        Una volta confermata l'e-mail, puoi iniziare a ottenere il massimo da HostHero visitando il nostro 
        sito web e scaricando l'App HostHero per iOS o Android.
      </p>

      <div style="margin: 30px 0; text-align: center;">
        <img src="${process.env.NEXT_PUBLIC_APP_URL}/images/logo.svg" 
             alt="HostHero logo" 
             style="max-width: 200px;">
      </div>

      <p style="color: #666; font-size: 16px;">
        Cordiali saluti,<br>
        Team HostHero
      </p>
    </div>
  `
} 