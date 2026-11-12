import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mobile Mechanic The Woodlands TX | ASE Master Certified On-Site Service',
  description: 'ASE Master mobile mechanic in The Woodlands TX. Serving all villages with diagnostics, brakes, AC, oil changes, batteries and more at your home or office. Call or text (936) 529-4748.',
};

export default function WoodlandsMechanicPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile Mechanic - The Woodlands TX",
            "description": "ASE Master certified mobile mechanic serving The Woodlands TX and Montgomery County.",
            "telephone": "936-529-4748",
            "url": "https://toptechmobile.com/mobile-mechanic-the-woodlands-tx",
            "areaServed": "The Woodlands, TX"
          })
        }}
      />

      {/* Stronger Hero - Cleaner CTAs */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-5 text-sm md:text-base">
            All Villages • The Woodlands
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Mobile Mechanic<br />The Woodlands TX
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto text-gray-100">
            ASE Master Certified technician comes to your home or work. Diagnostics, brakes, AC, batteries, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:9365294748"
              className="bg-white text-gray-900 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Call or Text (936) 529-4748
            </a>
            <a
              href="https://wa.me/19365294748?text=Hey%20David%2C%20The%20Woodlands%20vehicle%20issue%20-%20here%27s%20pics"
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
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Why The Woodlands Chooses Top Tech Mobile</h2>
          <p className="text-xl leading-relaxed mb-6 text-gray-700">
            From Cochran’s Crossing and Grogan’s Mill to Sterling Ridge, Panther Creek, and Creekside Park, residents of The Woodlands rely on a mobile mechanic who actually shows up and does the job right. We bring full diagnostic capability and repair tools to your driveway or office parking lot near The Woodlands Mall, Market Street, or along Research Forest Drive.
          </p>
          <p className="text-xl leading-relaxed mb-10 text-gray-700">
            Texas heat, humidity, and heavy traffic on I-45 and the Hardy Toll Road create predictable vehicle problems: failed air conditioning, weak batteries, worn brakes, and check engine lights from sensor issues. Our ASE Master technician handles these on-site so you avoid the shop entirely.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-gray-900">Villages & Landmarks We Serve</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700 mb-12">
            <li>• Cochran’s Crossing, Grogan’s Mill, Panther Creek</li>
            <li>• Sterling Ridge, Indian Springs, Alden Bridge</li>
            <li>• College Park and Creekside Park</li>
            <li>• Near The Woodlands Mall and Market Street</li>
            <li>• Along Research Forest Drive, Woodlands Parkway, and Gosling Road</li>
            <li>• Near Memorial Hermann The Woodlands</li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Frequent Issues in The Woodlands</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">AC & Cooling System</h3>
              <p className="text-lg text-gray-700">Long hot summers mean constant AC demand. We diagnose refrigerant leaks, compressors, and condensers on-site.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Battery & Starting Problems</h3>
              <p className="text-lg text-gray-700">Heat and short trips around the villages kill batteries. We test and replace quickly.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Brakes</h3>
              <p className="text-lg text-gray-700">Stop-and-go traffic on the major roads requires regular brake service. Full inspections and repairs available.</p>
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
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Popular Services in The Woodlands</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/check-engine-light-diagnostic" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Check Engine Light Diagnostic</Link>
            <Link href="/services/brake-inspection" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Brake Service</Link>
            <Link href="/services/ac-diagnostic-check" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">AC Repair</Link>
            <Link href="/services/mobile-oil-change" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Mobile Oil Change</Link>
            <Link href="/services/battery-electrical-check" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Battery Replacement</Link>
            <Link href="/services/new-car-check-out" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">New Car Check-Out</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Book Your Woodlands Mobile Mechanic</h2>
          <p className="text-2xl mb-8">(936) 529-4748</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9365294748" className="bg-white text-gray-900 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition">
              Call or Text
            </a>
            <a href="https://wa.me/19365294748" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition">
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}