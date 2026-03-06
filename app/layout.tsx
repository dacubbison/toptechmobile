// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
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
          {/* Navbar - O.G. clean version with FIXED matching green */}
          <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 p-4">
            <ul className="flex justify-center gap-6 flex-wrap text-green-700 font-medium">
              <li><Link href="/" className="hover:text-green-600 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-green-600 transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-green-600 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-green-600 transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-green-600 transition-colors">About</Link></li>
              <li><Link href="/book" className="text-green-600 font-semibold hover:text-green-700 transition-colors">Book Now</Link></li>
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