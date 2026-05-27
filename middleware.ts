import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  // Secure Admin Route
  const isOnAdminRoute = req.nextUrl.pathname.startsWith(
    '/hb-secure-panel-92'
  );

  // Login Page
  const isOnLoginPage =
    req.nextUrl.pathname === '/hb-secure-panel-92/login';

  // Allow Login Page
  if (isOnLoginPage) {
    if (isLoggedIn) {
      // Already logged in
      return NextResponse.redirect(
        new URL('/hb-secure-panel-92', req.url)
      );
    }

    return NextResponse.next();
  }

  // Protect Admin Routes
  if (isOnAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(
      new URL('/hb-secure-panel-92/login', req.url)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/hb-secure-panel-92/:path*'],
};