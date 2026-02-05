import { NextRequest, NextResponse } from 'next/server'

// Middleware pour vérifier l'authentification
export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value

  // Routes protégées
  const protectedRoutes = ['/dashboard', '/wallets', '/affiliate']
  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/wallets/:path*', '/affiliate/:path*'],
}
