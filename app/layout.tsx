import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReCaptchaProvider } from 'next-recaptcha-v3';

import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Nav/Navigation';
import Footer from '@/components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Matthew Gajo',
  description: 'Portfolio - Matthew Gajo',
  openGraph: {
    title: 'Matthew Gajo',
    description: 'Full Stack React/NextJS Developer',
    url: 'https://gajo.dev',
    siteName: 'Matthew Gajo - Portfolio',
    images: [
      {
        url: '/assets/me.png',
        width: 400,
        height: 400,
        alt: 'Picture of Matthew Gajo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.className} bg-background-2`}>
        <ThemeProvider attribute='data-theme'>
          <header className='sticky top-0 z-40 backdrop-blur transition-colors duration-500 lg:z-50'>
            <Navigation />
          </header>
          <main>
            <ReCaptchaProvider>{children}</ReCaptchaProvider>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
