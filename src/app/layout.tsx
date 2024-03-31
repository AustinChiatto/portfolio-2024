import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './reset.min.css';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Austin Chiatto | Full-Stack Developer',
  description: 'todo:'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
        <Footer className={inter.className} />
      </html>
    </ThemeProvider>
  );
}
