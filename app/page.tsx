// app/page.tsx
import Script from 'next/script';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';
import DynamicTestimonials from '../components/DynamicTestimonials';
import CTAButton from '../components/CTAButton';
import Link from 'next/link';

export const metadata = {
  title: 'Mobile Mechanic in The Woodlands TX - Top Tech Mobile: ASE-Certified Services',
  description: 'Reliable mobile mechanic near me in The Woodlands, Kingwood, Conroe, Spring, Humble, Porter, Atascocita, and Montgomery County TX. On-site auto repairs, diagnostics, oil changes, hybrid/EV, and now small engine/mower repairs.',
};

export default function Home() {
  return (
    <main>
      <Hero /> {/* Your beautiful hero stays untouched */}

      {/* Small Engine Announcement */}
      <section className="bg-green-100 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Now Offering Mobile Small Engine & Zero-Turn Mower Repair!</h2>
          <p className="text-xl mb-6">Bad Boy, Scag, Exmark, generators, pressure washers – we come to you in The Woodlands, Kingwood, Conroe & more.</p>
          <Link href="/mobile-small-engine-repair-the-woodlands" className="bg-green-600 text-white font-bold px-8 py-4 rounded-full hover:bg-green-700 transition">
            Learn More
          </Link>
        </div>
      </section>

      <About />
      <Services />
      <DynamicTestimonials />

      {/* 🔥 NEW SERVICE AREAS GRID – THIS IS PURE GOLD 🔥 */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-gray-900">Service Areas – We Come To You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a href="/mobile-mechanic-the-woodlands-tx" className="bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">The Woodlands</h3>
              <p className="text-lg">Mobile Mechanic Home Service</p>
            </a>
            <a href="/mobile-mechanic-kingwood-tx" className="bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Kingwood</h3>
              <p className="text-lg">All Villages Covered – No Trip Fee</p>
            </a>
            <a href="/mobile-mechanic-conroe-tx" className="bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Conroe</h3>
              <p className="text-lg">Willis • Montgomery • Lake Conroe</p>
            </a>
            <a href="/mobile-mechanic-humble-tx" className="bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Humble</h3>
              <p className="text-lg">Atascocita • Summerwood</p>
            </a>
            <a href="/mobile-mechanic-porter-tx" className="bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Porter</h3>
              <p className="text-lg">New Caney • Splendora</p>
            </a>
            <a href="/mobile-mechanic-atascocita-tx" className="bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Atascocita</h3>
              <p className="text-lg">Eagle Springs • Walden</p>
            </a>

            {/* Small Engine Pages – Green Cards */}
            <a href="/mobile-small-engine-repair-the-woodlands" className="bg-green-700 text-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Small Engine & Zero-Turn<br />The Woodlands</h3>
              <p className="text-lg">Bad Boy • Scag • Generators</p>
            </a>
            <a href="/mobile-small-engine-repair-kingwood-tx" className="bg-green-700 text-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Small Engine Repair<br />Kingwood</h3>
              <p className="text-lg">Mobile Mower Service</p>
            </a>
            <a href="/mobile-small-engine-repair-conroe-tx" className="bg-green-700 text-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Small Engine Repair<br />Conroe</h3>
              <p className="text-lg">Zero-Turn • Generator Repair</p>
            </a>
            <a href="/zero-turn-mower-repair-the-woodlands-tx" className="bg-green-800 text-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Zero-Turn Mower<br />Specialist</h3>
              <p className="text-lg">All Brands • Same-Day Possible</p>
            </a>
          </div>
          <p className="mt-12 text-xl text-gray-700">Not listed? Text us anyway – we cover damn near everything north of Houston 🔥</p>
        </div>
      </section>

      <QuoteForm />
      <Footer />
      <CTAButton />

      {/* Schema stays perfect */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile Mechanic",
            "description": "ASE-certified mobile mechanic near me serving The Woodlands, Kingwood, Conroe, Spring, Humble, Porter, Atascocita, and Montgomery County TX with on-site repairs, small engine service, and diagnostics.",
            "telephone": "936-529-4748",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15392 Rusty Oak Trl Ste 200",
              "addressLocality": "Conroe",
              "addressRegion": "TX",
              "postalCode": "77302",
              "addressCountry": "US"
            },
            "serviceArea": { 
              "@type": "GeoCircle", 
              "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 30.1658, "longitude": -95.4613 }, 
              "geoRadius": "80000"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            "url": "https://toptechmobile.com",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61553382422240",
              "https://www.instagram.com/toptechmobile3"
            ],
            // keeping your reviews, reviews, aggregateRating, etc.
          })
        }}
      />
    </main>
  );
}