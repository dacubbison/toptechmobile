import Link from 'next/link';
import { getAllServices } from '@/lib/services';

export default function ServicesPage() {
  const services = getAllServices();
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <p className="mb-8">Wide range of mobile fixes—call/text for deets or book via AI chat!</p>
      <ul className="space-y-6">
        {services.map((service) => (
          <li key={service.slug} className="border-b pb-4">
            <Link href={`/services/${service.slug}`} className="text-blue-600 hover:underline text-xl font-semibold">
              {service.title}
            </Link>
            <p className="mt-2 text-gray-600">{service.desc.substring(0, 150)}...</p>
            <p className="mt-2 text-sm text-gray-500">Call or chat AI for details/bookings.</p>
          </li>
        ))}
      </ul>
      {/* New Pricing Section - Fluffy Placeholder */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Lowered Prices - We Beat Shops!</h2>
      <table className="service-table">
        <thead><tr><th>Service</th><th>Price</th></tr></thead>
        <tbody>
          <tr><td>Oil Change</td><td>$49 (was $59)</td></tr> {/* User: Fill real lowered prices */}
          <tr><td>Brakes</td><td>$199 (was $249)</td></tr>
          {/* Add more */}
        </tbody>
      </table>
      <p>Prices beat competition—share quote for custom beat!</p>
    </div>
  );
}