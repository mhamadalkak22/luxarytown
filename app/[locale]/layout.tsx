import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Playfair_Display, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { locales } from '@/i18n';
import '../globals.css';

const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: '--font-playfair' });
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: '--font-inter' });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'ar' 
      ? 'مدينة الترف | حلول البناء والتشطيبات الرائدة' 
      : 'Town of Luxury | Premier Construction & Fit-out Solutions',
    description: locale === 'ar'
      ? 'تقدم مدينة الترف حلول بناء وتشطيبات عالية الجودة في المملكة العربية السعودية. من الرؤية إلى الواقع - نبني كل شيء.'
      : 'Town of Luxury delivers high-quality construction and fit-out solutions in KSA. From vision to reality - we build it all.',
    generator: 'v0.app',
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  
  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
