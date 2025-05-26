import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

import { Footer } from '@/components/ui/Footer';
import './globals.css';

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mock Blog',
  description: 'Blog for testing purposes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
