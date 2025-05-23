import type { Metadata } from 'next';
import { Geist, Geist_Mono, Roboto_Mono } from 'next/font/google';

import { Container } from '@/components/ui/Container';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mock Blog',
  description: 'Mock Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} antialiased`}
      >
        <div className="py-12">
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
