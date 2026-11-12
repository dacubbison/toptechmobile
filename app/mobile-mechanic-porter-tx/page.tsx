import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mobile Mechanic Porter TX | ASE Master Certified On-Site Repair New Caney & Splendora',
  description: 'ASE Master mobile mechanic serving Porter, New Caney, and Splendora TX. Diagnostics, brakes, AC, batteries at your location. Call or text (936) 529-4748.',
};

export default function PorterMechanicPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile Mechanic - Porter TX",
            "description": "ASE Master certified mobile mechanic serving Porter, New Caney, and Splendora.",
            "telephone": "936-529-4748",
            "url": "https://toptechmobile.com/mobile-mechanic-porter-tx",
            "areaServed": "Porter, TX"
          })
        }}
      />

      {/* Stronger Hero - Cleaner CTAs */}
<section className="relative bg-gray-900 text-white overflow-hidden">
  <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
  <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">
    <p className="text-blue-400 font-semibold tracking-widest uppercase mb-5 text-sm md:text-base">
      Porter • New Caney • Splendora
    </p>
    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
      Mobile Mechanic<br />Porter TX
    </h1>
    <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto text-gray-100">
      ASE Master Certified technician comes to your home or work. Diagnostics, brakes, AC, batteries, and more.
    </p>

    {/* Cleaner button row */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
  <a
    href="tel:9365294748"
    className="bg-white text-gray-900 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition shadow-lg"
  >
    Call or Text (936) 529-4748
  </a>
  <a
    href="https://wa.me/19365294748?text=Hey%20David%2C%20Porter%20vehicle%20issue%20-%20here%27s%20pics"
    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition shadow-lg"
  >
    WhatsApp / Text Photos
  </a>
</div>

    <p className="text-sm text-gray-300">
      ASE Master Automobile Technician • ASE ID ASE-2000-2319 • Certifications current through 2027–2029
    </p>
  </div>
</section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Mobile Mechanic Service for Porter, New Caney & Splendora</h2>
          <p className="text-xl leading-relaxed mb-6 text-gray-700">
            Porter and the growing New Caney and Splendora areas get full ASE Master mobile service. We come to homes along US 59, FM 1485, and near the newer developments, as well as the more rural stretches toward Splendora. Whether you’re in the 77365 area or further out, we bring diagnostics and repairs to your driveway.
          </p>
          <p className="text-xl leading-relaxed mb-10 text-gray-700">
            Heat, humidity, and longer drives create the usual Texas issues: AC problems, battery failures, and brake wear from local traffic. We handle them on-site so you don’t have to deal with shop wait times.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-gray-900">Coverage Area</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700 mb-12">
            <li>• Porter and the 77365 area</li>
            <li>• New Caney and the US 59 corridor</li>
            <li>• Splendora and surrounding rural roads</li>
            <li>• Along FM 1485</li>
            <li>• Near local schools and commercial areas</li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Common Issues We Fix in the Porter Area</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">AC & Cooling System</h3>
              <p className="text-lg text-gray-700">Texas summers are tough on AC systems. We diagnose and repair refrigerant issues, compressors, and condensers at your location.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Battery & No-Start</h3>
              <p className="text-lg text-gray-700">Heat and short trips kill batteries. We test and replace on the spot when needed.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Brakes</h3>
              <p className="text-lg text-gray-700">Local traffic wears brakes. Full inspections and repairs available at your home or work.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Diagnostics</h3>
              <p className="text-lg text-gray-700">Accurate check engine light diagnosis the first time with professional scan tools.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Services Available</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/check-engine-light-diagnostic" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Check Engine Light Diagnostic</Link>
            <Link href="/services/brake-inspection" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Brake Inspection & Service</Link>
            <Link href="/services/ac-diagnostic-check" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">AC Diagnostic & Repair</Link>
            <Link href="/services/battery-electrical-check" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Battery & No-Start</Link>
            <Link href="/services/mobile-oil-change" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Mobile Oil Change</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Porter Area Mobile Mechanic</h2>
          <p className="text-2xl mb-8">(936) 529-4748</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton />
            <a href="https://wa.me/19365294748" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition">
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}