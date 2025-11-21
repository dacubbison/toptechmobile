// app/services/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getAllServices } from '@/lib/services';
import Script from 'next/script';
import CTAButton from '@/components/CTAButton'; // Import the new CTA

export const metadata = {
  title: 'Mobile Mechanic Services The Woodlands TX - Top Tech Mobile',
  description: 'On-site auto repairs in The Woodlands, Kingwood, Conroe, Humble. Brakes, diagnostics, AC, oil changes, hybrid/EV – beat shop quotes by 50%!',
};

function ServicesContent() {
  const services = getAllServices();
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-12">Our Mobile Mechanic Services</h1>
        <p className="text-xl text-center mb-16">
          ASE-certified repairs at your door in The Woodlands, Kingwood, Conroe, Humble, and Montgomery County. Pick a service below to learn more!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <Link href={`/services/${service.slug}`} className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700">
                Learn More
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-2xl mb-8">Not sure what you need? Get a fast quote!</p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesContent />
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Mobile Auto Repair",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile Mechanic",
            "telephone": "936-529-4748"
          },
          // Add more schema if needed
        })}
      </Script>
    </main>
  );
}