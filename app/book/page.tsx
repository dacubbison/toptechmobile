"use client";

import { useState } from 'react';
import { getAllServices } from '@/lib/services';

export default function BookPage() {
  const servicesWithCalendly = getAllServices().filter(s => s.calendlyLink && s.calendlyLink.length > 10);

  const initialService = servicesWithCalendly[0];
  const [selectedService, setSelectedService] = useState(initialService || null);
  const [selectedCalendly, setSelectedCalendly] = useState(initialService?.calendlyLink || '');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [zip, setZip] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const safeZips = ['77301', '77302', '77303', '77304', '77305', '77306', '77316', '77318', '77327', '77328', '77333', '77338', '77339', '77345', '77346', '77353', '77354', '77355', '77356', '77357', '77362', '77365', '77372', '77373', '77378', '77379', '77380', '77381', '77382', '77384', '77385', '77386', '77388', '77389', '77393', '77447', '77873', '77014', '77032', '77073', '77090', '77096', '77396'];

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
    const cleanedZip = zip.trim().replace(/-/g, '');
    if (!safeZips.includes(cleanedZip)) {
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
      {/* Shorter, punchier hero - no more green blob! */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 text-sm font-medium">
            ASE-Certified • Comes To You
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Book Your Mobile<br />Mechanic
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto">
            Professional service at your doorstep in The Woodlands, Conroe, Kingwood & surrounding areas
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-3xl font-semibold">
            <a href="tel:9365294748" className="hover:text-green-200 transition-all flex items-center gap-3 group">
              📞 Call <span className="group-hover:underline">936-529-4748</span>
            </a>
            <span className="hidden sm:block text-green-300">•</span>
            <a href="sms:9365294748" className="hover:text-green-200 transition-all flex items-center gap-3 group">
              ✉️ Text <span className="group-hover:underline">936-529-4748</span>
            </a>
          </div>
        </div>
      </div>

      {/* ASE Master Certification Trust Section - Your real certs front & center */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">ASE Master Automobile Technician</h2>
            <p className="text-green-700 font-semibold text-lg mb-8">Advanced Level Specialist • ASE ID: ASE-2000-2319</p>
            
            <img 
              src="/images/ase-master-certification.png" 
              alt="ASE Master Certification - David A. Cubbison" 
              className="mx-auto rounded-2xl shadow-md max-w-full h-auto"
            />
            
            <p className="mt-8 text-gray-600 max-w-md mx-auto">
              All certifications are current through 2027–2029. You’re booking with a verified ASE Master Technician who brings shop-quality service straight to your driveway.
            </p>
          </div>
        </div>
      </div>

      {/* Main Booking Card - Clean & modern like Services page */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-12">
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
                className="w-full p-6 text-xl border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-600 transition-all bg-white"
              >
                {servicesWithCalendly.map((service) => (
                  <option key={service.slug} value={service.calendlyLink}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Dynamic service description - big UX upgrade */}
            {selectedService && (
              <div className="p-8 bg-gray-50 border border-gray-100 rounded-2xl">
                <p className="text-gray-700 leading-relaxed text-[17px]">
                  {selectedService.desc}
                </p>
              </div>
            )}

            <button
              onClick={handleBookClick}
              className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-2xl font-semibold py-8 rounded-2xl transition-all duration-200 shadow-lg shadow-green-600/30 active:scale-[0.985]"
            >
              Book Now – Let's Get You Fixed
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Mobile service • No shop wait • ASE Certified technician
          </p>
        </div>
      </div>

      {/* ZIP Modal - Exact same logic as before */}
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

      {/* Hidden Google test field */}
      <input type="hidden" name="google-test-field" value="" />
    </main>
  );
}