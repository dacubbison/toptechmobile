import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mobile Mechanic Humble TX | ASE Master Certified On-Site Repair',
  description: 'ASE Master mobile mechanic serving Humble, Atascocita, and Summerwood TX. Diagnostics, brakes, AC, batteries, and oil changes at your home or work. Call or text (936) 529-4748.',
};

export default function HumbleMechanicPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile Mechanic - Humble TX",
            "description": "ASE Master certified mobile mechanic serving Humble, Atascocita, and Summerwood TX.",
            "telephone": "936-529-4748",
            "url": "https://toptechmobile.com/mobile-mechanic-humble-tx",
            "areaServed": "Humble, TX"
          })
        }}
      />

      {/* Stronger Hero - Cleaner CTAs */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-5 text-sm md:text-base">
            Humble • Atascocita • Summerwood
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Mobile Mechanic<br />Humble TX
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
              href="https://wa.me/19365294748?text=Hey%20David%2C%20Humble%20vehicle%20issue%20-%20here%27s%20pics"
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
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Mobile Mechanic Service Built for Humble Drivers</h2>
          <p className="text-xl leading-relaxed mb-6 text-gray-700">
            If you’re searching for a reliable mobile mechanic in Humble TX, Top Tech Mobile brings full ASE Master level diagnostics and repairs directly to you. We regularly work in Humble proper, Atascocita, Summerwood, and along the FM 1960 and US 59 corridors. Whether you’re near Humble High School, Deerbrook Mall, or further out toward Atascocita Road, we come to your driveway or office parking lot.
          </p>
          <p className="text-xl leading-relaxed mb-10 text-gray-700">
            Texas heat, humidity, and heavy traffic on FM 1960 create the same problems we see across the area: weak batteries, AC systems that can’t keep up, worn brakes from stop-and-go driving, and check engine lights from sensor or emissions issues. We diagnose and repair these on-site so you don’t lose half a day at a shop.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-gray-900">Areas We Cover Around Humble</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700 mb-12">
            <li>• Humble proper and downtown Humble</li>
            <li>• Atascocita and Summerwood</li>
            <li>• Along FM 1960 and Will Clayton Parkway</li>
            <li>• US 59 / I-69 corridor</li>
            <li>• Near Deerbrook Mall and Humble Civic Center</li>
            <li>• Local schools and residential neighborhoods</li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Common Issues We Fix in Humble</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">AC & Cooling System Problems</h3>
              <p className="text-lg text-gray-700">Humble summers are hard on air conditioning. We diagnose refrigerant leaks, compressors, condensers, and electrical controls on-site so you get cold air back without a shop visit.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Battery & No-Start Issues</h3>
              <p className="text-lg text-gray-700">Heat and short trips kill batteries. We perform full load tests, check the alternator and starter, and replace the battery on the spot when needed.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Brakes</h3>
              <p className="text-lg text-gray-700">Stop-and-go traffic on FM 1960 wears pads and rotors quickly. We inspect, replace, and bed in brakes at your location.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Check Engine Light & Diagnostics</h3>
              <p className="text-lg text-gray-700">Accurate first-visit diagnosis using professional scan tools. We find the real cause instead of guessing and replacing parts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Services Available in Humble</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/check-engine-light-diagnostic" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Check Engine Light Diagnostic</Link>
            <Link href="/services/brake-inspection" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Brake Inspection & Service</Link>
            <Link href="/services/ac-diagnostic-check" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">AC Diagnostic & Repair</Link>
            <Link href="/services/battery-electrical-check" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Battery & No-Start</Link>
            <Link href="/services/mobile-oil-change" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Mobile Oil Change</Link>
            <Link href="/services/general-vehicle-diagnostic" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">General Diagnostic</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Humble Mobile Mechanic FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Do you really come to homes and businesses in Humble?</h3>
              <p className="text-lg text-gray-700">Yes. Most repairs are done at your home, work, or a convenient parking lot. Just text your location and vehicle details.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">How fast can you get to me?</h3>
              <p className="text-lg text-gray-700">Same-day or next-day service is often available. Text or call for the quickest response.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Are you ASE certified?</h3>
              <p className="text-lg text-gray-700">Yes. ASE Master Automobile Technician with Advanced Level Specialist certification (ASE ID: ASE-2000-2319). Certifications are current through 2027–2029.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Mobile Mechanic in Humble?</h2>
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