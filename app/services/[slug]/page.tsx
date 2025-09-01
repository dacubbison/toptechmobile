import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  if (!service) notFound();

  // Map slug to Calendly embed
  const calendlyMap = {
    'new-car-check-out': 'https://calendly.com/david-toptechmobile/new-car-inspection-100',
    'check-engine-light-diagnostic': 'https://calendly.com/david-toptechmobile/check-engine-light-diagnostic-100',
    'battery-electrical-check': 'https://calendly.com/david-toptechmobile/battery-electrical-check-80',
    'general-vehicle-diagnostic': 'https://calendly.com/david-toptechmobile/general-vehicle-diagnostic-100',
    'ac-diagnostic-check': 'https://calendly.com/david-toptechmobile/ac-diagnostic-check-80',
    'brake-inspection': 'https://calendly.com/david-toptechmobile/brake-inspection-80',
    'mobil-1-oil-change-fluid-check': 'https://calendly.com/david-toptechmobile/mobil-1-oil-change-fluid-check-120'
  };
  const embedUrl = calendlyMap[resolvedParams.slug] || '';

  return (
    <main className="container mx-auto py-8 px-4">
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.desc,
          "areaServed": { "geoRadius": 50000 },
        })}
      </Script>
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="mb-6">{service.desc}</p>
      <p className="text-lg font-semibold">Call/text for deets or book below!</p>
      {embedUrl && (
        <div className="calendly-inline-widget" data-url={embedUrl} style={{ minWidth: '320px', height: '700px' }}></div>
      )}
      <Script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />
    </main>
  );
}