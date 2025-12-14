// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';  // New import for handling scripts
import ClientWrapper from '../components/ClientWrapper';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

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

        {/* Google Ads tracking code */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11405049920"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11405049920');
            `,
          }}
        />

        {/* Conversion event snippet for Request quote */}
        <Script
          id="conversion-event"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-11405049920/-fyICIrmodEbEMCArb4q',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
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