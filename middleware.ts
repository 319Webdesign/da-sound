import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAllCategorySlugs } from '@/lib/categories';
import { getAllProductIds } from '@/lib/products';

/** Exakt erlaubte Pfade (statische Seiten) */
const ALLOWED_STATIC_PATHS = new Set([
  '/',
  '/kontakt',
  '/booking',
  '/ueber-uns',
  '/datenschutz',
  '/impressum',
  '/agb',
  '/liefergebiet',
  '/dashboard',
]);

/** Pfade und Dateitypen, die nie mit 410 beantwortet werden (API, Next, Statik) */
const SKIP_PREFIXES = ['/api/', '/_next/', '/favicon', '/icon'];
const STATIC_EXTENSIONS = /\.(ico|png|jpg|jpeg|webp|gif|svg|css|js|woff2?|ttf|eot|map)(\?.*)?$/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Immer durchlassen: API, Next.js, Favicon, Icon
  if (SKIP_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }
  // Statische Dateien (Bilder, Fonts, etc.)
  if (STATIC_EXTENSIONS.test(pathname) || pathname.startsWith('/images/')) {
    return NextResponse.next();
  }

  // Exakt erlaubte statische Pfade
  if (ALLOWED_STATIC_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  // Erlaubte Kategorien: /kategorien/:slug
  const categoryMatch = pathname.match(/^\/kategorien\/([^/]+)\/?$/);
  if (categoryMatch) {
    const slug = categoryMatch[1];
    const allowedSlugs = getAllCategorySlugs();
    if (allowedSlugs.includes(slug)) {
      return NextResponse.next();
    }
  }

  // Erlaubte Produkte: /produkte/:id
  const productMatch = pathname.match(/^\/produkte\/([^/]+)\/?$/);
  if (productMatch) {
    const id = productMatch[1];
    const allowedIds = getAllProductIds();
    if (allowedIds.includes(id)) {
      return NextResponse.next();
    }
  }

  // Alles andere: 410 Gone (für Google-Index-Bereinigung)
  return new NextResponse(null, { status: 410 });
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next (Next.js intern)
     * - api (API routes)
     * - static files
     */
    '/((?!_next|api).*)',
  ],
};
