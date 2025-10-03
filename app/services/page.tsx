// app/services/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getAllServices } from '@/lib/services';
import Script from 'next/script';
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
        className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center ml-2"
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

async function ServicesContent() {
  const services = getAllServices();

  return (
    <main className="container mx-auto py-8 px-4">
      <Script id="services-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'itemListElement': services.map((service, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'item': {
              '@type': 'Service',
              'name': service.title,
              'description': service.desc,
              'image': service.image,
              'url': `https://toptechmobile.com/services/${service.slug}`,
            },
          })),
        })}
      </Script>
      <h1 className="text-3xl font-bold mb-6 text-center">Our Mobile Mechanic Services</h1>
      <p className="text-center mb-8 text-lg">ASE-certified repairs at your door in The Woodlands, Kingwood, and Montgomery County. Pick a service below to learn more and book!</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.slug} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={`${service.title} - Mobile Mechanic Service`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{service.desc}</p>
              <div className="flex justify-between mt-auto space-x-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
                >
                  Learn More
                </Link>
                {service.calendlyLink ? (
                  <BookButton calendlyLink={service.calendlyLink} />
                ) : (
                  <Link href="/contact" className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center ml-2">
                    Get Quote
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-lg">Not sure what you need? Call us at <a href="tel:9365294748" className="text-blue-600 hover:underline">936-529-4748</a> for a free quote.</p>
      </div>
    </main>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="text-center py-8">Loading services...</div>}>
      <ServicesContent />
    </Suspense>
  );
}