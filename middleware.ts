import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    const pathname = req.nextUrl.pathname
    const token = req.nextauth.token
    
    console.log('Middleware - Pathname:', pathname)
    console.log('Middleware - Token:', JSON.stringify(token, null, 2))
    
    // Se l'utente sta cercando di accedere alla dashboard del cleaner
    if (pathname.startsWith('/dashboard/cleaner')) {
      // Verifica se l'utente è un cleaner
      const userType = token?.userType || token?.role
      if (userType !== 'cleaner') {
        console.log('Middleware - User is not a cleaner, redirecting to home')
        // Se non è un cleaner, reindirizza alla home
        return NextResponse.redirect(new URL('/', req.url))
      }
      console.log('Middleware - User is a cleaner, allowing access')
    }

    // Se l'utente sta cercando di accedere alla dashboard dell'host
    if (pathname.startsWith('/dashboard/host')) {
      // Verifica se l'utente è un host
      const userType = token?.userType || token?.role
      if (userType !== 'host') {
        console.log('Middleware - User is not a host, redirecting to home')
        // Se non è un host, reindirizza alla home
        return NextResponse.redirect(new URL('/', req.url))
      }
      console.log('Middleware - User is a host, allowing access')
    }

    // Procedi normalmente per tutte le altre richieste
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log('Middleware - Authorized check, token exists:', !!token)
        return !!token
      }
    },
  }
)

// Configura quali percorsi devono essere protetti
export const config = {
  matcher: ['/dashboard/cleaner/:path*', '/dashboard/host/:path*']
} 