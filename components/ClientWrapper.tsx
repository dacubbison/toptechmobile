// components/ClientWrapper.tsx (Bot backed off - commented out Botpress scripts and button)
'use client';

import Script from 'next/script';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}
      </Script>
      {/* Botpress commented out 
      <Script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js" strategy="afterInteractive" />
      <Script src="https://files.bpcontent.cloud/2025/08/14/21/20250814211712-CBR5TXVR.js" strategy="afterInteractive" defer />
      */}
      {children}
      {/* Global Chatbot button commented out */}
    </>
  );
}