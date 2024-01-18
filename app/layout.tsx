'use client';

import './globals.css';
// import { Noto_Sans_JP } from 'next/font/google';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import TopNavbar from './TopNavbar';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider } from 'next-themes';

// const inter = Noto_Sans_JP({ subsets: ['latin'], weight: '300' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>nop</title>
      </head>
      {/* <body className={inter.className}> */}
      <body>
        <NextUIProvider>
          <ThemeProvider attribute="class">
            <Analytics />
            <TopNavbar />
            <main className="px-4">{children}</main>
            <footer className="flex flex-row justify-center pb-2">
              <p>
                Created by <Link href={'https://twitter.com/NOP_LAB'}>nop</Link>
              </p>
            </footer>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
