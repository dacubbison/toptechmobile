// app/services/[slug]/page.tsx
"use client"; // Client for BookButton hooks
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import { Suspense, useState } from 'react';

function BookButton({ calendlyLink }: { calendlyLink: string }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [zip, setZip] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const safeZips = ['77301', '77302', '77303', '77304', '77305', '77306', '77316', '77318', '77327', '77328', '77333', '77338', '77339', '77345', '77346', '77353', '77354', '77355', '77356', '77357', '77362', '77365', '77372', '77373', '77378', '77379', '77380', '77381', '77382', '77384', '77385', '77386', '77388', '77389', '77393', '77447', '77873', '77014', '77032', '77073', '77090', '77096', '77396'];

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
    window.location.href = calendlyLink;
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Confirm Service Area</h3>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <label htmlFor="zip" className="block text-sm font-medium">Enter Your ZIP Code</label>
              <input
                id="zip"
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="e.g., 77381"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                aria-label="Enter ZIP code to confirm service area"
              />
              {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
              <div className="flex justify-end space-x-3">
                <button type="button" onClick={handleClose} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
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

  return (
    <main className="container mx-auto py-8 px-4">
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.desc,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile Mechanic",
            "telephone": "936-529-4748",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "The Woodlands",
              "addressRegion": "TX",
              "postalCode": "77380",
              "addressCountry": "US",
            },
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "The Woodlands",
            },
            {
              "@type": "City",
              "name": "Kingwood",
            },
            {
              "@type": "AdministrativeArea",
              "name": "Montgomery County",
            },
          ],
        })}
      </Script>
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="mb-6">{service.fullContent || service.desc}</p>
      <p className="text-lg font-semibold mb-4">Please call or text us for details.</p>
      {service.calendlyLink && <BookButton calendlyLink={service.calendlyLink} />}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Services</h2>
        <ul className="list-disc pl-5 space-y-2">
          {/* Add related logic if needed; placeholder */}
          <li><Link href="/services" className="text-blue-600 hover:underline">View All Services</Link></li>
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