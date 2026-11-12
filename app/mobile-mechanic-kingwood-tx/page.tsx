import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mobile Mechanic Kingwood TX | ASE Master Certified On-Site Repair All Villages',
  description: 'ASE Master mobile mechanic serving all Kingwood TX villages including Kingwood Greens, Forest Cove, Trailwood, Elm Grove, Bear Branch, and more. Brakes, AC, diagnostics, batteries at your home. Call or text (936) 529-4748.',
};

export default function KingwoodMechanicPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile Mechanic - Kingwood TX",
            "description": "ASE Master certified mobile mechanic serving all Kingwood TX villages.",
            "telephone": "936-529-4748",
            "url": "https://toptechmobile.com/mobile-mechanic-kingwood-tx",
            "areaServed": "Kingwood, TX"
          })
        }}
      />

      {/* Stronger Hero - Cleaner CTAs */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-5 text-sm md:text-base">
            All Villages • Kingwood TX
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Mobile Mechanic<br />Kingwood TX
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
              href="https://wa.me/19365294748?text=Hey%20David%2C%20Kingwood%20vehicle%20issue%20-%20here%27s%20pics"
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
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Trusted Mobile Mechanic Across All of Kingwood</h2>
          <p className="text-xl leading-relaxed mb-6 text-gray-700">
            Kingwood residents know the convenience of a true mobile mechanic. Top Tech Mobile serves every village so you never have to deal with shop traffic or waiting rooms. We come to your driveway, office parking lot, or near Kingwood Town Center.
          </p>
          <p className="text-xl leading-relaxed mb-10 text-gray-700">
            The humidity and heat around Lake Houston and the San Jacinto River create unique challenges: frequent AC failures, battery drain, and brake wear from stop-and-go traffic on Kingwood Drive, Northpark Drive, and FM 1960. Our ASE Master technician diagnoses and repairs these issues on-site with professional-grade tools.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-gray-900">Kingwood Villages We Cover</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700 mb-12">
            <li>• Kingwood Greens</li>
            <li>• Forest Cove</li>
            <li>• Trailwood</li>
            <li>• Elm Grove</li>
            <li>• Bear Branch</li>
            <li>• Sand Creek</li>
            <li>• Greentree</li>
            <li>• Hunters Ridge</li>
            <li>• Kings Forest</li>
            <li>• Fosters Mill</li>
            <li>• Near Kingwood Town Center & Kingwood High School</li>
            <li>• Along Kingwood Drive, Northpark Drive & West Lake Houston Parkway</li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Common Problems We Solve in Kingwood</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">AC Failures in High Humidity</h3>
              <p className="text-lg text-gray-700">Weak or warm AC is one of the top calls we get. Refrigerant leaks, compressor issues, and condenser problems are common after long Texas summers.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Battery & Electrical No-Starts</h3>
              <p className="text-lg text-gray-700">Heat and short trips around the villages kill batteries quickly. We test and replace on the spot.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Brake Service</h3>
              <p className="text-lg text-gray-700">Heavy traffic on the main roads means frequent brake jobs. We inspect, replace pads/rotors, and address noise or vibration.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Check Engine Light Diagnostics</h3>
              <p className="text-lg text-gray-700">Accurate first-visit diagnosis using professional scan tools so the light stays off.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Services Available in Kingwood</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/ac-diagnostic-check" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">AC Diagnostic & Repair</Link>
            <Link href="/services/brake-inspection" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Brake Inspection & Service</Link>
            <Link href="/services/battery-electrical-check" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Battery & No-Start Repair</Link>
            <Link href="/services/mobile-oil-change" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Mobile Oil Change</Link>
            <Link href="/services/check-engine-light-diagnostic" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Check Engine Light Diagnostic</Link>
            <Link href="/services/general-vehicle-diagnostic" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">General Diagnostic</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a Mobile Mechanic in Kingwood?</h2>
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