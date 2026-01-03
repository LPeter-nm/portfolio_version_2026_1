import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  localePrefix: 'always', // ou 'as-needed'
});

export const config = {
  matcher: ['/', '/(pt|en|es)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
