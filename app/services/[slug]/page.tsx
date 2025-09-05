// app/services/[slug]/page.tsx
import { getServiceBySlug, getAllServices } from '@/lib/services';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import { Suspense } from 'react';

async function ServiceContent({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const calendlyMap: Record<string, string> = {
    // ... same as before
  } as const;

  const embedUrl = calendlyMap[slug as keyof typeof calendlyMap] || '';

  const allServices = getAllServices().filter(s => s.slug !== slug);
  const relatedServices = allServices.slice(0, 3);

  return (
    <main className="container mx-auto py-8 px-4">
      {/* Schema and content */}
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          // ... same
        })}
      </Script>
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="mb-6">{service.fullContent || service.desc}</p>
      <p className="text-lg font-semibold">Please call or text us for details.</p>
      {embedUrl && <BookButton embedUrl={embedUrl} />}
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
    </main>
  );
}

function BookButton({ embedUrl }: { embedUrl: string }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [zip, setZip] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const safeZips = [/* array */];

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

  return (
    <>
      <button onClick={handleBookClick} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
        Book Now
      </button>
      {isBookingOpen && (
        // Modal code same as before
      )}
      <div className="calendly-embed mt-6" style={{ display: 'none' }}>
        {/* Embed only after check, but since redirect, no need */}
      </div>
    </>
  );
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceContent slug={(await params).slug} />
    </Suspense>
  );
}