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
      {/* Add any other content here, without pricing */}
    </main>
  );
}