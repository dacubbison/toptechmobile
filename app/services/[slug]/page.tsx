// app/services/[slug]/page.tsx
import { getServiceBySlug } from '@/lib/services'; // Adjust import path if needed
import { notFound } from 'next/navigation';
import Script from 'next/script';

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

  return (
    <main className="container mx-auto py-8 px-4">
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.desc,
          "areaServed": {
            // Your existing geo data...
            "geoRadius": 50000,
          },
          // No priceRange or similar fields
        })}
      </Script>
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="mb-6">{service.fullContent || service.desc}</p> {/* Use fullContent if available, fallback to desc */}
      <p className="text-lg font-semibold">Please call or text us for details.</p>
      {embedUrl && (
        <div className="calendly-embed mt-6">
          <div className="calendly-inline-widget" data-url={embedUrl} style={{ minWidth: '320px', height: '630px' }}></div>
          <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>
      )}
      {/* Add any other content here, without pricing */}
    </main>
  );
}