import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  // Always show locale prefix in URL: /en/... and /ar/...
  // This avoids the redirect loop caused by 'as-needed' + app/layout.tsx redirect
  localePrefix: 'always'
});

export const config = {
  // Match all routes except static files and Next.js internals
  matcher: ['/((?!_next|api|favicon|.*\\..*).*)']
};
