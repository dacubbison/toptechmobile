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
      <Hero /> {/* Your beautiful hero stays */}
      {/* New subtle small engine announcement – matches your green buttons */}
      <section className="bg-green-100 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Now Offering Mobile Small Engine & Zero-Turn Mower Repair!</h2>
          <p className="text-xl mb-6">Bad Boy, Scag, Exmark, generators, pressure washers – we come to you in The Woodlands, Kingwood, Conroe & more.</p>
          <Link href="/mobile-small-engine-repair-the-woodlands" className="bg-green-600 text-white font-bold px-8 py-4 rounded-full hover:bg-green-700">
            Learn More
          </Link>
        </div>
      </section>
      <About />
      <Services />
      <DynamicTestimonials />
      <QuoteForm />
      <Footer />
      <CTAButton /> {/* Add extra CTA at bottom if wanted */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
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
            "geoRadius": "80000" // Expanded radius
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
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://toptechmobile.com"
            }]
          },
          "review": [ // Kept your reviews
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Mandie Vaughn" },
              "reviewBody": "I highly recommend Top Tech Mobile! They showed up on time, finished my brakes on the same day. No mess left behind!!! Job well done Top Tech!",
              "datePublished": "2025-07-24"
            },
            // ... (keep the others)
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "3"
          },
          "potentialAction": { // Removed Calendly, replaced with call
            "@type": "ReserveAction",
            "target": "tel:936-529-4748",
            "result": { "@type": "Reservation", "name": "Call for Mobile Mechanic Service" }
          },
          "faqPage": {
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What areas do you serve as a mobile mechanic?",
              "acceptedAnswer": { "@type": "Answer", "text": "I serve The Woodlands, Kingwood, Conroe, Spring, Humble, Porter, Atascocita, and Montgomery County TX." }
            },
            {
              "@type": "Question",
              "name": "Do you offer emergency roadside assistance?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, including flat tire changes and lockouts in The Woodlands area." }
            },
            {
              "@type": "Question",
              "name": "Do you repair small engines and mowers?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, on-site repairs for zero-turn mowers, generators, pressure washers, and more." }
            }]
          }
        })}
      </Script>
    </main>
  );
}