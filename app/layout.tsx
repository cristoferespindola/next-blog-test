import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { getAuthors } from '@/models/author/api';
import { getPosts } from '@/models/posts/api';

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

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await Promise.all([getAuthors(), getPosts()]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="py-12">
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
