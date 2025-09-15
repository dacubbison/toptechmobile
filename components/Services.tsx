// components/Services.tsx
'use client'; // Add this to make it a Client Component for state (though no state needed now)

import Image from 'next/image';
import Link from 'next/link';
import { getAllServices } from '@/lib/services';

export default function Services() {
  const services = getAllServices();

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Mobile Auto Services in The Woodlands TX and Montgomery County</h2>
        <p className="text-center mb-8">As your local ASE-certified mobile mechanic near The Woodlands TX, we specialize in convenient, on-site services. From routine maintenance to complex repairs, we handle it all with precision and care right at your home or office in Kingwood TX or Montgomery County. Limited time: 10% off first service!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"> {/* flex-col to push buttons to bottom */}
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow"> {/* flex-grow to expand content */}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.desc}</p> {/* flex-grow on desc to push buttons down */}
                <div className="flex justify-between mt-auto"> {/* mt-auto to align at bottom */}
                  <Link href={`/services/${service.slug}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Learn More
                  </Link>
                  <Link href="/contact" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-center">Additional Services</h3>
        <p className="text-center mb-4">We specialize in convenient, on-site mobile mechanic services for a wide range of vehicles. From routine maintenance to complex repairs, our expert team handles it all with precision and care. Here's a list of some common services we offer to give you an idea of how we can help:</p>
        <ul className="list-disc pl-5 max-w-2xl mx-auto space-y-2 mb-4">
          <li><strong>Tune-Ups:</strong> Optimize your engine's performance for smoother operation and better fuel efficiency, including spark plug replacement, ignition timing adjustment, and fuel system cleaning.</li>
          <li><strong>Oil and Oil Filter Changes:</strong> Keep your engine lubricated and protected with quick, mess-free oil services using high-quality oils and filters tailored to your vehicle's needs.</li>
          <li><strong>Brake Pads, Rotors, and Shoes:</strong> Inspect, replace, and ensure your braking system is safe and responsive, including caliper checks and brake fluid flush for optimal stopping power.</li>
          <li><strong>Air Filter Replacement:</strong> Improve air flow to your engine for enhanced performance, reduced emissions, and better fuel economy by replacing clogged filters with premium alternatives.</li>
          <li><strong>A/C Repairs:</strong> Diagnose and fix air conditioning issues, including refrigerant recharges, compressor repairs, and leak detection to keep you cool in Texas heat.</li>
          <li><strong>Fuel Injection or Fuel Filter Services:</strong> Clean or replace components to maintain efficient fuel delivery, prevent clogs, and improve engine responsiveness and mileage.</li>
          <li><strong>Preventive Maintenance:</strong> Scheduled check-ups to catch issues early, including multi-point inspections, fluid top-offs, and belt/hose checks to extend your vehicle's lifespan.</li>
          <li><strong>Cooling Systems and Radiator Repairs:</strong> Flush, repair, or replace parts to prevent overheating, including thermostat checks and coolant system pressure testing.</li>
          <li><strong>Alternator Repairs or Replacement:</strong> Restore your vehicle's electrical charging system with testing, repairs, or full replacements to prevent battery drain.</li>
          <li><strong>Water Pump Services:</strong> Address leaks or failures with inspections, repairs, or replacements to keep your cooling system circulating properly.</li>
          <li><strong>Starter/Solenoid Repairs:</strong> Get your engine cranking reliably again by diagnosing and fixing starter motor or solenoid issues.</li>
          <li><strong>Electric Window Repairs:</strong> Fix power windows that are stuck or malfunctioning, including motor, switch, or regulator replacements.</li>
          <li><strong>Lockouts:</strong> Quick and damage-free assistance to regain access to your vehicle using professional tools and techniques.</li>
          <li><strong>Flat Tire Repairs or Changes:</strong> On-the-spot fixes, patches, or spare tire swaps to get you moving safely.</li>
          <li><strong>Suspension Services:</strong> Inspect and repair for a smoother, safer ride, including alignment checks and component replacements.</li>
          <li><strong>Shocks and Struts:</strong> Replace worn components to improve handling, comfort, and vehicle stability on rough roads.</li>
          <li><strong>Gaskets, Belts, and Hoses:</strong> Seal leaks, replace frayed belts, and secure hoses to prevent breakdowns and maintain engine health.</li>
          <li><strong>Timing Belts and Chains:</strong> Timely replacements with high-quality parts to avoid major engine damage and costly repairs.</li>
        </ul>
        <p className="text-center">If you don't see your specific need listed, contact us—we handle a variety of other repairs and can provide a custom quote. Visit toptechmobile.com to schedule your service today!</p>
      </div>
    </section>
  );
}