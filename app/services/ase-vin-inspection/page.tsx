import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ASE VIN Inspection & Track Tech Inspection | The Woodlands, Conroe, Kingwood TX',
  description: 'ASE Master certified VIN inspections and Track Tech inspections for race cars, hot rods, and custom builds. Serving The Woodlands, Conroe, Kingwood and Montgomery County. Call or text (936) 529-4748.',
};

export default function ASEVINTrackInspectionPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "ASE VIN Inspection & Track Tech Inspection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Top Tech Mobile Mechanic",
              "telephone": "936-529-4748"
            },
            "areaServed": ["The Woodlands", "Conroe", "Kingwood", "Humble", "Porter", "Atascocita", "Montgomery County"]
          })
        }}
      />

      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-45 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            ASE Master Certified
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            ASE VIN Inspection<br />& Track Tech Inspection
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-100">
            Official-style VIN certifications and Track Tech inspections for race cars, hot rods, and custom builds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9365294748" className="bg-white text-gray-900 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition">
              Call or Text (936) 529-4748
            </a>
            <a href="https://wa.me/19365294748?text=Hey%20David%2C%20I%20need%20a%20VIN%20or%20Track%20Tech%20inspection" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition">
              WhatsApp / Text Photos
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Two Services, One Expert</h2>
          <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-700">
            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">ASE VIN Inspection</h3>
              <p>Proper VIN verification and certification for titles, insurance, registration, and custom builds. Useful for hot rods, specialty vehicles, and any situation where documentation matters.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Track Tech Inspection</h3>
              <p>Safety and mechanical tech inspections for cars going on track. We check the critical items required for most club and open-track events so you can focus on driving instead of failing tech.</p>
            </div>
          </div>
          <p className="text-center text-lg mt-10 text-gray-600">
            Both services use the same booking calendar. Just choose the one you need when you schedule.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Service Area</h2>
          <p className="text-xl text-gray-700">
            The Woodlands, Conroe, Kingwood, Humble, Porter, Atascocita, and Montgomery County.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Book Your Inspection</h2>
        <p className="text-2xl mb-8">(936) 529-4748</p>
        <a href="tel:9365294748" className="bg-white text-gray-900 font-bold py-4 px-10 rounded-xl text-lg hover:bg-gray-100 transition">
          Call or Text Now
        </a>
      </section>
    </>
  );
}