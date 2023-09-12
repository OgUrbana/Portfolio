import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Nav/Navigation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Matthew Gajo',
  description: 'Portfolio Website',
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
          <main className=''>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
