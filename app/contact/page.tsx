// app/contact/page.tsx
'use client';

import QuoteForm from '@/components/QuoteForm';

export default function Contact() {
  const handleGoogleConversion = () => {
    // Google Ads conversion tracking — EXACTLY as it was in your original code
    if (typeof gtag_report_conversion === 'function') {
      gtag_report_conversion();
    }
  };

  return (
    <main className="py-16 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-black text-center mb-12">Contact Top Tech Mobile</h1>
      <p className="text-xl text-center mb-8">Get a Free Quote in Minutes – No Shop Visit Needed!</p>

      <div className="grid md:grid-cols-[2fr,1fr] gap-12">
        {/* Left: Form gets 2/3 width so labels NEVER wrap — alignment now perfect */}
        <div className="w-full">
          <QuoteForm onSuccess={handleGoogleConversion} />
        </div>

        {/* Right sidebar — exactly like your original, just a bit narrower */}
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Faster? Call or Text Me</h2>
            <p className="text-xl mb-4">936-529-4748</p>
            <div className="flex justify-center space-x-4">
              <a href="tel:9365294748" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition">Call Now</a>
              <a href="sms:9365294748?body=Hey%20David%2C%20need%20a%20quote%20for..." className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition">Text Now</a>
            </div>
            <p className="mt-6 text-lg">International? Use WhatsApp</p>
            <a
              href="https://wa.me/19365294748?text=Hey%20David%2C%20saw%20the%20%24129%20winterizing%20special!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition mt-2"
            >
              Start WhatsApp Chat
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Service Area</h3>
            <p className="text-center mb-2">Serving The Woodlands, Conroe, Kingwood, and surrounding areas</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333755.123456789!2d-95.489!3d30.158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864735e5a5b8f93f%3A0x6e7288658d971203!2sMontgomery%20County%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}