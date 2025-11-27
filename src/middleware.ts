import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiting (for development - use Redis/DB in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || realIP || 'unknown';
  return `${ip}:${request.nextUrl.pathname}`;
}

function isRateLimited(key: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rate limiting for API routes
  if (pathname.startsWith('/api/')) {
    const key = getRateLimitKey(request);
    
    // Contact API: 5 requests per 2 minutes
    if (pathname === '/api/contact') {
      if (isRateLimited(key, 5, 2 * 60 * 1000)) {
        return new NextResponse(
          JSON.stringify({ ok: false, error: 'Too many requests. Please try again later.' }),
          { 
            status: 429, 
            headers: { 
              'Content-Type': 'application/json',
              'Retry-After': '120'
            } 
          }
        );
      }
    }
  }

  // Origin check for POST requests
  if (request.method === 'POST') {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    
    // Allow same-origin requests and local development
    const allowedOrigins = [
      `https://${host}`,
      `http://${host}`,
      'http://localhost:3000',
      'http://localhost:3001',
      'https://modernmhh.com',
      'https://www.modernmhh.com'
    ];

    if (origin && !allowedOrigins.includes(origin)) {
      return new NextResponse(
        JSON.stringify({ ok: false, error: 'Forbidden' }),
        { 
          status: 403, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
