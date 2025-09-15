// app/services/[slug]/page.tsx
"use client"; // Required for client-side hooks (useState, useEffect)
import { getServiceBySlug, getAllServices } from '@/lib/services';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import { Suspense, useState } from 'react';

function BookButton({ embedUrl }: { embedUrl: string }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [zip, setZip] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Sample ZIP codes for The Woodlands, Kingwood, Montgomery County
  const safeZips = ['77380', '77381', '77382', '77384', '77385', '77386', '77339', '77345', '77316', '77356'];

  const handleBookClick = () => {
    setIsBookingOpen(true);
    setZip('');
    setErrorMessage('');
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedZip = zip.trim().replace(/-/g, '');
    if (!safeZips.includes(cleanedZip)) {
      setErrorMessage('Sorry, you may be outside our service area. Please call 936-529-4748 for confirmation.');
      return;
    }
    window.location.href = embedUrl;
    setIsBookingOpen(false);
  };

  const handleClose = () => {
    setIsBookingOpen(false);
    setErrorMessage('');
  };

  return (
    <>
      <button
        onClick={handleBookClick}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
      >
        Book Now
      </button>
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Enter Your ZIP Code</h2>
            <form onSubmit={handleBookingSubmit}>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Enter ZIP code"
                className="w-full p-2 border rounded mb-4"
                required
              />
              {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

async function ServiceContent({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const calendlyMap: Record<string, string> = {
    'oil-change': 'https://calendly.com/toptechmobile/oil-change',
    'brake-service': 'https://calendly.com/toptechmobile/brake-service',
    'battery-replacement': 'https://calendly.com/toptechmobile/battery-replacement',
    'tire-services': 'https://calendly.com/toptechmobile/tire-services',
    'ac-repair': 'https://calendly.com/toptechmobile/ac-repair',
    'diagnostic-services': 'https://calendly.com/toptechmobile/diagnostic-services',
    'ev-maintenance': 'https://calendly.com/toptechmobile/ev-maintenance',
    // Add more as needed
  } as const;

  const embedUrl = calendlyMap[slug as keyof typeof calendlyMap] || '';

  const allServices = getAllServices().filter((s) => s.slug !== slug);
  const relatedServices = allServices.slice(0, 3);

  return (
    <main className="container mx-auto py-8 px-4">
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          'serviceType': service.title,
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Top Tech Mobile Mechanic',
            'telephone': '936-529-4748',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'The Woodlands',
              'addressRegion': 'TX',
              'postalCode': '77380',
              'addressCountry': 'US',
            },
          },
          'areaServed': [
            {
              '@type': 'City',
              'name': 'The Woodlands',
            },
            {
              '@type': 'City',
              'name': 'Kingwood',
            },
            {
              '@type': 'AdministrativeArea',
              'name': 'Montgomery County',
            },
          ],
        })}
      </Script>
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="mb-6">{service.fullContent || service.desc}</p>
      <p className="text-lg font-semibold">Please call or text us for details.</p>
      {embedUrl && <BookButton embedUrl={embedUrl} />}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Services</h2>
        <ul className="list-disc pl-5 space-y-2">
          {relatedServices.map((rel) => (
            <li key={rel.slug}>
              <Link href={`/services/${rel.slug}`} className="text-blue-600 hover:underline">
                {`Need ${rel.title.toLowerCase()} too? Check out our ${rel.title}`}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceContent slug={slug} />
    </Suspense>
  );
}