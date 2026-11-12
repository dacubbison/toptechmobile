"use client";

import { useState } from 'react';
import { getAllServices } from '@/lib/services';
import { isInServiceArea } from '@/lib/serviceArea';

export default function BookPage() {
  const servicesWithCalendly = getAllServices().filter(s => s.calendlyLink && s.calendlyLink.length > 10);

  const initialService = servicesWithCalendly[0];
  const [selectedService, setSelectedService] = useState<typeof initialService | null>(initialService || null);
  const [selectedCalendly, setSelectedCalendly] = useState(initialService?.calendlyLink || '');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [zip, setZip] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const link = e.target.value;
    setSelectedCalendly(link);
    const service = servicesWithCalendly.find(s => s.calendlyLink === link) || null;
    setSelectedService(service);
  };

  const handleBookClick = () => {
    if (!selectedCalendly) return;
    setIsBookingOpen(true);
    setZip('');
    setErrorMessage('');
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isInServiceArea(zip)) {
      setErrorMessage('Sorry, you may be outside our service area. Please call 936-529-4748 for confirmation.');
      return;
    }
    window.location.href = selectedCalendly;
    setIsBookingOpen(false);
  };

  const handleClose = () => {
    setIsBookingOpen(false);
    setErrorMessage('');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero with background image */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-50 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            ASE Master Certified • Comes To You
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Book Your Mobile<br />Mechanic
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-100">
            Professional service at your doorstep in The Woodlands, Conroe, Kingwood & surrounding areas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9365294748" className="bg-white text-gray-900 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition">
              Call or Text (936) 529-4748
            </a>
            <a href="sms:9365294748" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition">
              Text Us
            </a>
          </div>
        </div>
      </section>

      {/* Booking Card — moved up */}
      <section className="max-w-3xl mx-auto px-6 -mt-12 relative z-10 pb-16">
        <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Choose Your Service</h2>
            <p className="text-gray-600 text-lg">Select what you need and we'll take it from there</p>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Service Type</label>
              <select
                value={selectedCalendly}
                onChange={handleServiceChange}
                className="w-full p-5 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-600 transition-all bg-white"
              >
                {servicesWithCalendly.map((service) => (
                  <option key={service.slug} value={service.calendlyLink}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            {selectedService && (
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                <p className="text-gray-700 leading-relaxed">
                  {selectedService.desc}
                </p>
              </div>
            )}

            <button
              onClick={handleBookClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-6 rounded-2xl transition shadow-lg"
            >
              Book Now – Let's Get You Fixed
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Mobile service • No shop wait • ASE Certified technician
          </p>
        </div>
      </section>

      {/* Lighter ASE mention — moved down and smaller */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">ASE Master Automobile Technician</h2>
          <p className="text-green-700 font-medium mb-4">Advanced Level Specialist • ASE ID: ASE-2000-2319</p>
          <p className="text-gray-600 max-w-md mx-auto text-sm">
            Certifications current through 2027–2029. You’re booking with a verified ASE Master Technician.
          </p>
        </div>
      </section>

      {/* ZIP Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[200] p-4">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full">
            <h3 className="text-2xl font-bold mb-6 text-center">Confirm Service Area</h3>
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Enter Your ZIP Code</label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="77381"
                  required
                  className="w-full px-5 py-4 text-xl border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              {errorMessage && <p className="text-red-600 font-medium text-center">{errorMessage}</p>}
              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={handleClose} 
                  className="flex-1 py-4 bg-gray-200 rounded-2xl font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 py-4 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Continue to Scheduling
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}