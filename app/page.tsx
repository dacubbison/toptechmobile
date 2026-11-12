import Script from 'next/script';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import WallOfWork from '../components/WallOfWork';
import GoogleReviewsCarousel from '../components/GoogleReviewsCarousel';
import Link from 'next/link';

export const metadata = {
  title: 'Mobile Mechanic The Woodlands, Conroe, Kingwood & Montgomery County TX | Top Tech Mobile',
  description: 'ASE Master certified mobile mechanic serving The Woodlands, Conroe, Kingwood, Humble, Porter, Atascocita, and all of Montgomery County TX. On-site diagnostics, brakes, AC, oil changes, batteries, and more. Text or call (936) 529-4748.',
};

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Reviews Banner */}
      <div className="bg-yellow-400 text-gray-900 text-center py-4 px-6 font-bold text-lg md:text-xl">
        <a 
          href="https://www.google.com/search?q=Top+Tech+Mobile+Mechanic+Woodlands+reviews" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          READ OUR REVIEWS — 33 Five-Star Google Reviews!
        </a>
      </div>

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

      {/* ASE Master Certification Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">ASE Master Automobile Technician</h2>
          <p className="text-2xl text-green-700 font-semibold mb-8">Advanced Level Specialist • ASE ID: ASE-2000-2319</p>
          <div className="bg-gray-50 rounded-2xl p-10 shadow-xl max-w-3xl mx-auto">
            <p className="text-xl mb-6">
              All certifications are current through 2027–2029. You’re working with a verified ASE Master Technician who brings full shop-quality diagnostics and repairs straight to your driveway across The Woodlands, Conroe, Kingwood, and Montgomery County.
            </p>
            <ul className="text-left text-lg space-y-3 max-w-md mx-auto">
              <li>✔ ASE Master Automobile Technician</li>
              <li>✔ Advanced Level Specialist</li>
              <li>✔ 20+ years shop experience</li>
              <li>✔ Certifications current through 2027–2029</li>
            </ul>
            <p className="mt-8 text-lg font-medium">Trust the certification. Get the convenience of mobile service.</p>
          </div>
        </div>
      </section>

      {/* 🔥 WALL OF WORK – RIGHT AFTER ABOUT 🔥 */}
      <WallOfWork />

      {/* 🔥 GOOGLE REVIEWS CAROUSEL – SMOOTH FADE + PERFECT FLOW 🔥 */}
      <GoogleReviewsCarousel />

      <Services />

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
              <p className="text-lg">All Villages Covered</p>
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
            "description": "ASE Master certified mobile mechanic serving The Woodlands, Conroe, Kingwood, Humble, Porter, Atascocita, and Montgomery County TX with on-site repairs, diagnostics, brakes, AC, oil changes, and small engine service.",
            "telephone": "936-529-4748",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15392 Rusty Oak Trl Ste 200",
              "addressLocality": "Conroe",
              "addressRegion": "TX",
              "postalCode": "77302",
              "addressCountry": "US"
            },
            "areaServed": [
              {"@type": "City", "name": "The Woodlands"},
              {"@type": "City", "name": "Conroe"},
              {"@type": "City", "name": "Kingwood"},
              {"@type": "City", "name": "Humble"},
              {"@type": "City", "name": "Porter"},
              {"@type": "City", "name": "Atascocita"},
              {"@type": "AdministrativeArea", "name": "Montgomery County"}
            ],
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
          })
        }}
      />
    </main>
  );
}