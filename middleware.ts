import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header
  const requestHeaders = new Headers(request.headers);
  
  // Optimize image and font delivery
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|webp|avif|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    // Cache static assets for 1 year
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );

    return response;
  }

  // Add security headers to all responses
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Only set these headers for HTML documents
  if (request.nextUrl.pathname.match(/\.(html|htm|js|css|json|xml)$/)) {
    response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com;");
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
