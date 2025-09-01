// app/services/[slug]/page.tsx
import { getServiceBySlug, getAllServices } from '@/lib/services'; // Adjust import path if needed
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  if (!service) {
    notFound(); // This will render the app's not-found page
  }

  const calendlyMap: Record<string, string> = {
    'new-car-check-out': 'https://calendly.com/david-toptechmobile/new-car-inspection-100',
    'check-engine-light-diagnostic': 'https://calendly.com/david-toptechmobile/check-engine-light-diagnostic-100',
    'battery-electrical-check': 'https://calendly.com/david-toptechmobile/battery-electrical-check-80',
    'general-vehicle-diagnostic': 'https://calendly.com/david-toptechmobile/general-vehicle-diagnostic-100',
    'ac-diagnostic-check': 'https://calendly.com/david-toptechmobile/ac-diagnostic-check-80',
    'brake-inspection': 'https://calendly.com/david-toptechmobile/brake-inspection-80',
    'mobile-oil-change': 'https://calendly.com/david-toptechmobile/mobil-1-oil-change-fluid-check-120',
  } as const;

  const embedUrl = calendlyMap[resolvedParams.slug as keyof typeof calendlyMap] || '';

  // Get related services (exclude current, pick 3 random or hardcoded based on logic)
  const allServices = getAllServices().filter(s => s.slug !== resolvedParams.slug);
  const relatedServices = allServices.slice(0, 3); // Simple: first 3 others; customize per slug if needed

  return (
    <main className="container mx-auto py-8 px-4">
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.desc,
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 30.1658,
              "longitude": -95.4613
            },
            "geoRadius": 50000 // 50km ~31 miles
          },
          // No priceRange or similar fields
        })}
      </Script>
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="mb-6">{service.fullContent || service.desc}</p>
      <p className="text-lg font-semibold">Please call or text us for details.</p>
      {embedUrl && (
        <div className="calendly-embed mt-6">
          <div className="calendly-inline-widget" data-url={embedUrl} style={{ minWidth: '320px', height: '630px' }}></div>
          <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>
      )}
      {/* Related Services Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Services</h2>
        <ul className="list-disc pl-5 space-y-2">
          {relatedServices.map(rel => (
            <li key={rel.slug}>
              <Link href={`/services/${rel.slug}`} className="text-blue-600 hover:underline">
                {`Need ${rel.title.toLowerCase()} too? Check out our ${rel.title}`}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* Add any other content here, without pricing */}
    </main>
  );
}