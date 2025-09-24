import Link from 'next/link';
import { getAllServices } from '@/lib/services';

export default function ServicesPage() {
  const services = getAllServices();
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <p className="mb-8">On-site magic in The Woodlands/Kingwood/Montgomery—book via chat or below!</p>
      <ul className="space-y-6">
        {services.map((service) => (
          <li key={service.slug} className="border-b pb-4">
            <Link href={`/services/${service.slug}`} className="text-blue-600 hover:underline text-xl font-semibold">
              {service.title}
            </Link>
            <p className="mt-2 text-gray-600">{service.desc.substring(0, 150)}...</p>
            <p className="mt-2 text-sm text-gray-500">Details/book on page.</p>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mt-8 mb-4">Lowered Prices - Deals That Drive!</h2>
      <table className="service-table">
        <thead><tr><th>Service</th><th>Price</th></tr></thead>
        <tbody>
          <tr><td>New Car Check Out</td><td>$100</td></tr>
          <tr><td>Check Engine Light Diagnostic</td><td>$100</td></tr>
          <tr><td>Battery & Electrical Check</td><td>$50</td></tr>
          <tr><td>General Vehicle Diagnostic</td><td>$50</td></tr>
          <tr><td>AC Diagnostic Check</td><td>$50 + freon</td></tr>
          <tr><td>Brake Inspection</td><td>$50 (free w/ approved brake job)</td></tr>
          <tr><td>Mobil 1 Oil Change & Fluid Check</td><td>$120 (up to 6 quarts)</td></tr>
        </tbody>
      </table>
      <p>Beat comp? Share quote—we undercut!</p>
    </div>
  );
}