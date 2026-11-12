import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mobile Mechanic Conroe TX | ASE Master Certified On-Site Car & Truck Repair',
  description: 'ASE Master mobile mechanic in Conroe TX. Serving Willis, Montgomery, Lake Conroe, Walden, Panorama Village & Cut and Shoot. Diagnostics, brakes, AC, batteries at your location. Call or text (936) 529-4748.',
};

export default function ConroeMechanicPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile Mechanic - Conroe TX",
            "description": "ASE Master certified mobile mechanic serving Conroe, Willis, Montgomery, Lake Conroe, and Walden TX.",
            "telephone": "936-529-4748",
            "url": "https://toptechmobile.com/mobile-mechanic-conroe-tx",
            "areaServed": "Conroe, TX"
          })
        }}
      />

      {/* Stronger Hero - Cleaner CTAs */}
<section className="relative bg-gray-900 text-white overflow-hidden">
  <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
  <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">
    <p className="text-blue-400 font-semibold tracking-widest uppercase mb-5 text-sm md:text-base">
      Conroe • Willis • Montgomery • Lake Conroe
    </p>
    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
      Mobile Mechanic<br />Conroe TX
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
        href="https://wa.me/19365294748?text=Hey%20David%2C%20Conroe%20vehicle%20issue%20-%20here%27s%20pics"
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
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Reliable Mobile Mechanic Service in Conroe and Surrounding Areas</h2>
          <p className="text-xl leading-relaxed mb-6 text-gray-700">
            Looking for a trustworthy mobile mechanic in Conroe TX? Top Tech Mobile brings ASE Master certified expertise directly to you. Whether you’re in downtown Conroe, out by Lake Conroe, in Willis, Montgomery, Panorama Village, Cut and Shoot, or the Walden community on Lake Conroe, we handle everything from check engine lights to full brake jobs without you ever leaving home or work.
          </p>
          <p className="text-xl leading-relaxed mb-10 text-gray-700">
            Texas heat takes a toll on vehicles around Conroe. We regularly see failed AC systems, weak batteries from short trips and high temperatures, warped brake rotors, and cooling system issues. Our mobile service means you avoid towing fees and shop wait times while getting the same quality diagnostics and repairs you’d expect from a top shop.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-gray-900">Neighborhoods & Areas We Serve in Conroe</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700 mb-12">
            <li>• Willis and the FM 1097 / SH 75 corridor</li>
            <li>• Montgomery and historic downtown Montgomery</li>
            <li>• Lake Conroe and waterfront communities</li>
            <li>• Walden on Lake Conroe</li>
            <li>• Panorama Village and Cut and Shoot</li>
            <li>• Along I-45, SH 105, and FM 1484</li>
            <li>• Near Conroe Regional Medical Center and Lone Star College-Montgomery</li>
            <li>• Grand Parkway (SH 99) corridor</li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Common Vehicle Issues We Fix in Conroe TX</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">AC & Cooling System Problems</h3>
              <p className="text-lg text-gray-700">Conroe summers are brutal. Weak AC, refrigerant leaks, bad compressors, and overheating are extremely common. We diagnose and repair on-site so you stay cool.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Brakes & Suspension</h3>
              <p className="text-lg text-gray-700">Stop-and-go traffic on I-45 and local roads wears brakes quickly. We do full brake inspections, pad and rotor replacement, and address grinding or pulsating issues.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Battery & No-Start Issues</h3>
              <p className="text-lg text-gray-700">Heat kills batteries. If your vehicle won’t start or has slow cranking, we test the battery, alternator, and starter and replace what’s needed.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Check Engine Light & Diagnostics</h3>
              <p className="text-lg text-gray-700">Modern vehicles need proper scanning. We use professional tools to diagnose codes accurately the first time — no guessing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Services Available from Your Mobile Mechanic in Conroe</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/check-engine-light-diagnostic" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Check Engine Light Diagnostic</Link>
            <Link href="/services/brake-inspection" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Brake Inspection & Service</Link>
            <Link href="/services/ac-diagnostic-check" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">AC Diagnostic & Repair</Link>
            <Link href="/services/mobile-oil-change" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Mobile Oil Change</Link>
            <Link href="/services/battery-electrical-check" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">Battery & Electrical / No-Start</Link>
            <Link href="/services/general-vehicle-diagnostic" className="block p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition text-lg font-medium">General Vehicle Diagnostic</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Mobile Mechanic in Conroe?</h2>
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