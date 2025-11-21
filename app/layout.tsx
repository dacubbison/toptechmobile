// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import ClientWrapper from '../components/ClientWrapper';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';   // ← NEW LINE

export const metadata: Metadata = {
  title: 'Top Tech Mobile Mechanic',
  description: 'ASE-certified mobile mechanic in The Woodlands, TX',
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" as="style" />
        <link rel="preload" href="/images/mobile-mechanic-kingwood-tx.png" as="image" />
      </head>
      <body>
        <ClientWrapper>
          {/* Navbar */}
          <nav className="bg-navy-900 text-white p-4">
            <ul className="flex justify-center gap-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>

          {children}

          {/* 🔥 FLOATING WHATSAPP BUTTON 🔥 */}
          <FloatingWhatsApp />

        </ClientWrapper>
      </body>
    </html>
  );
}