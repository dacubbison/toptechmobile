// app/page.tsx
import Script from 'next/script';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';
import DynamicTestimonials from '../components/DynamicTestimonials'; // Ensure this file exists as DynamicTestimonials.tsx in components/

export const metadata = {
  title: 'Mobile Mechanic in The Woodlands TX - Top Tech Mobile: ASE-Certified Services',
  description: 'Reliable mobile mechanic near me in The Woodlands, Kingwood, and Montgomery County TX. On-site auto repairs, diagnostics, oil changes, and hybrid/EV services.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <DynamicTestimonials />
      <QuoteForm />
      <Footer />
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Top Tech Mobile Mechanic",
          "description": "ASE-certified mobile mechanic near me serving The Woodlands, Kingwood, and Montgomery County TX with on-site repairs and diagnostics.",
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
            "geoRadius": "50000" 
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          "url": "https://toptechmobile.com",
          "sameAs": [
            "https://twitter.com/toptechmobile", // Replace with real links or remove
            "https://facebook.com/toptechmobile"
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
          "review": [ // All 5-star reviews
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Mandie Vaughn" },
              "reviewBody": "I highly recommend Top Tech Mobile! They showed up on time, finished my brakes on the same day. No mess left behind!!! Job well done Top Tech!",
              "datePublished": "2025-07-24"
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "David Ridgely" },
              "reviewBody": "Top Tech Mobile did great replacing my compressor. They came out, replaced the part in my yard, and left no mess. The owner was very helpful with diagnosing the issue and getting my car fixed quickly.",
              "datePublished": "2025-07-26"
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Joseph Quinn" },
              "reviewBody": "Excellent service—highly recommended!",
              "datePublished": "2025-07-21"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5", // All 5-star
            "reviewCount": "3" // Total reviews
          },
          "potentialAction": {
            "@type": "ReserveAction",
            "target": "https://calendly.com/your-username/your-event",
            "result": { "@type": "Reservation", "name": "Book Mobile Mechanic Service" }
          },
          "faqPage": {
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What areas do you serve as a mobile mechanic?",
              "acceptedAnswer": { "@type": "Answer", "text": "I serve The Woodlands, Kingwood, and Montgomery County TX." }
            },
            {
              "@type": "Question",
              "name": "Do you offer emergency roadside assistance?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, including flat tire changes and lockouts in The Woodlands area." }
            }]
          }
        })}
      </Script>
    </main>
  );
}