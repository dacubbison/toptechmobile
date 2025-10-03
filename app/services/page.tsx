// app/services/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getAllServices } from '@/lib/services';
import Script from 'next/script';

export default async function ServicesPage() {
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
                  <a href={service.calendlyLink} className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center ml-2">
                    Book Now
                  </a>
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