// components/Services.tsx
'use client'; // Client Component for state

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getAllServices } from '@/lib/services';

export default function Services() {
  const services = getAllServices();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const [zip, setZip] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const safeZips = ['77301', '77302', '77303', '77304', '77305', '77306', '77316', '77318', '77327', '77328', '77333', '77338', '77339', '77345', '77346', '77353', '77354', '77355', '77356', '77357', '77362', '77365', '77372', '77373', '77378', '77379', '77380', '77381', '77382', '77384', '77385', '77386', '77388', '77389', '77393', '77447', '77873', '77014', '77032', '77073', '77090', '77096', '77396'];

  const handleBookClick = (link: string) => {
    setSelectedLink(link);
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
    // If valid, redirect to Calendly
    window.location.href = selectedLink;
    setIsBookingOpen(false);
  };

  const handleCloseModal = () => {
    setIsBookingOpen(false);
    setErrorMessage('');
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Mobile Auto Services in The Woodlands TX and Montgomery County</h2>
        <p className="text-center mb-8">As your local ASE-certified mobile mechanic near The Woodlands TX, we specialize in convenient, on-site services. From routine maintenance to complex repairs, we handle it all with precision and care right at your home or office in Kingwood TX or Montgomery County. Limited time: 10% off first service!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.desc}</p>
                <div className="flex justify-between mt-auto">
                  <Link href={`/services/${service.slug}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Learn More
                  </Link>
                  {service.calendlyLink ? (
                    <button onClick={() => handleBookClick(service.calendlyLink)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                      Book Now
                    </button>
                  ) : (
                    <Link href="/contact" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                      Get Free Quote
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Booking Modal - Fixed with Tailwind for overlay/z-index */}
        {isBookingOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
              <h3 className="text-xl font-bold mb-4">Confirm Service Area</h3>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <label htmlFor="zip" className="block text-sm font-medium">Enter Your ZIP Code to Check Availability</label>
                <input 
                  id="zip" 
                  type="text" 
                  value={zip} 
                  onChange={(e) => setZip(e.target.value)} 
                  required 
                  aria-label="Enter ZIP code to confirm service area" 
                  placeholder="e.g., 77381" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                <div className="flex justify-end space-x-3">
                  <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                    Close
                  </button>
                  <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Check & Book</button>
                </div>
              </form>
            </div>
          </div>
        )}
        <h3 className="text-2xl font-bold mt-8 mb-4 text-center">Additional Services</h3>
        <p className="text-center mb-4">We specialize in convenient, on-site mobile mechanic services for a wide range of vehicles. From routine maintenance to complex repairs, our expert team handles it all with precision and care. Here's a list of some common services we offer to give you an idea of how we can help:</p>
        <ul className="list-disc pl-5 max-w-2xl mx-auto space-y-2 mb-4">
          <li><strong>Tune-Ups:</strong> Optimize your engine's performance for smoother operation and better fuel efficiency.</li>
          <li><strong>Oil and Oil Filter Changes:</strong> Keep your engine lubricated and protected with quick, mess-free oil services.</li>
          <li><strong>Brake Pads, Rotors, and Shoes:</strong> Inspect, replace, and ensure your braking system is safe and responsive.</li>
          <li><strong>Air Filter Replacement:</strong> Improve air flow to your engine for enhanced performance and reduced emissions.</li>
          <li><strong>A/C Repairs:</strong> Diagnose and fix air conditioning issues to keep you cool on the road.</li>
          <li><strong>Fuel Injection or Fuel Filter Services:</strong> Clean or replace components to maintain efficient fuel delivery.</li>
          <li><strong>Preventive Maintenance:</strong> Scheduled check-ups to catch issues early and extend your vehicle's lifespan.</li>
          <li><strong>Cooling Systems and Radiator Repairs:</strong> Flush, repair, or replace parts to prevent overheating.</li>
          <li><strong>Alternator Repairs or Replacement:</strong> Restore your vehicle's electrical charging system.</li>
          <li><strong>Water Pump Services:</strong> Address leaks or failures to keep your cooling system functioning.</li>
          <li><strong>Starter/Solenoid Repairs:</strong> Get your engine cranking reliably again.</li>
          <li><strong>Electric Window Repairs:</strong> Fix power windows that are stuck or malfunctioning.</li>
          <li><strong>Lockouts:</strong> Quick and damage-free assistance to regain access to your vehicle.</li>
          <li><strong>Flat Tire Repairs or Changes:</strong> On-the-spot fixes or swaps to get you moving.</li>
          <li><strong>Suspension Services:</strong> Inspect and repair for a smoother, safer ride.</li>
          <li><strong>Shocks and Struts:</strong> Replace worn components to improve handling and comfort.</li>
          <li><strong>Gaskets, Belts, and Hoses:</strong> Seal leaks, replace frayed belts, and secure hoses to prevent breakdowns.</li>
          <li><strong>Timing Belts and Chains:</strong> Timely replacements to avoid major engine damage.</li>
        </ul>
        <p className="text-center">If you don't see your specific need listed, contact us—we handle a variety of other repairs and can provide a custom quote. Visit toptechmobile.com to schedule your service today!</p>
      </div>
    </section>
  );
}