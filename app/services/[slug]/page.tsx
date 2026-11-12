import { getServiceBySlug, getAllServices } from '@/lib/services';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import { Metadata } from 'next';
import BookButton from './BookButton';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Top Tech Mobile Mechanic The Woodlands TX`,
    description: service.desc || service.fullContent?.slice(0, 155) + '...',
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // Simple formatter: turn fullContent into paragraphs and lists
  const contentBlocks = (service.fullContent || service.desc || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <main className="bg-white">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.desc,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Top Tech Mobile Mechanic",
              "telephone": "936-529-4748",
              "url": "https://toptechmobile.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "The Woodlands",
                "addressRegion": "TX",
                "addressCountry": "US"
              }
            },
            "areaServed": ["The Woodlands", "Conroe", "Kingwood", "Humble", "Porter", "Atascocita", "Montgomery County"]
          })
        }}
      />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-10">
          {contentBlocks.map((block, i) => {
            if (block.startsWith('- ') || block.startsWith('• ')) {
              return (
                <li key={i} className="ml-5 list-disc">
                  {block.replace(/^[-•]\s*/, '')}
                </li>
              );
            }
            return <p key={i}>{block}</p>;
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:9365294748"
            className="inline-block bg-green-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-green-700 transition text-center"
          >
            Call or Text (936) 529-4748
          </a>
          <a
            href="https://wa.me/19365294748"
            className="inline-block bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-900 transition text-center"
          >
            WhatsApp
          </a>
        </div>

        {service.calendlyLink && (
          <div className="mt-6">
            <BookButton calendlyLink={service.calendlyLink} />
          </div>
        )}

        <section className="mt-16 pt-10 border-t">
          <h2 className="text-2xl font-bold mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {getAllServices()
              .filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block p-4 border rounded-xl hover:border-gray-400 hover:shadow-sm transition"
                >
                  {s.title}
                </Link>
              ))}
          </div>
          <Link href="/services" className="inline-block mt-6 text-blue-600 font-medium hover:underline">
            View All Services →
          </Link>
        </section>
      </section>
    </main>
  );
}