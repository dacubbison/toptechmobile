// components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Select, { SingleValue } from 'react-select';
import { differenceInDays } from 'date-fns';

export default function Hero() {
  const [daysLeft, setDaysLeft] = useState(0);
  useEffect(() => {
    const promoEndDate = new Date('2025-08-20');
    const updateCountdown = () => {
      const now = new Date();
      const diff = differenceInDays(promoEndDate, now);
      setDaysLeft(diff > 0 ? diff : 0);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [year, setYear] = useState<SingleValue<{ value: string; label: string }>>(null);
  const [make, setMake] = useState<SingleValue<{ value: string; label: string }>>(null);
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleCallModal = () => setIsCallModalOpen(!isCallModalOpen);
  const toggleQuoteModal = () => setIsQuoteModalOpen(!isQuoteModalOpen);

  const safeZips = ['77301', '77302', '77303', '77304', '77305', '77306', '77316', '77318', '77327', '77328', '77338', '77339', '77345', '77346', '77354', '77355', '77356', '77357', '77362', '77365', '77372', '77373', '77378', '77379', '77380', '77381', '77382', '77384', '77385', '77386', '77388', '77389', '77393', '77447', '77873', '77014', '77032', '77073', '77090', '77096'];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedZip = zip.trim().replace(/-/g, '');
    if (!safeZips.includes(cleanedZip)) {
      setErrorMessage('You may be outside our service area. Please call us at 936-529-4748 for assistance.');
      return;
    }
    setErrorMessage('');
    alert("I'll review your shop quote and call you back soon!");
    toggleQuoteModal();
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'submit_quote', { 'event_category': 'engagement' });
    }
  };

  const years = Array.from({ length: 46 }, (_, i) => ({ value: (2025 - i).toString(), label: (2025 - i).toString() }));
  const makes = ['Acura', 'Audi', 'BMW', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'].map(m => ({ value: m, label: m }));

  return (
    <div className="hero-section relative">
      {/* ASE Logos */}
      <Image
        src="/images/ASE-Logo-GOLD.png"
        alt="ASE Certified Master Technician"
        width={120}
        height={120}
        className="absolute left-4 top-4 md:left-10 md:top-10 w-20 md:w-32 opacity-90"
      />
      <Image
        src="/images/ASE-logo.png"
        alt="We Support ASE"
        width={120}
        height={120}
        className="absolute right-4 top-4 md:right-10 md:top-10 w-20 md:w-32 opacity-90"
      />
      {/* Hero text */}
      <div className="hero-text">
        <h1>Top Tech Mobile Mechanic: ASE-Certified</h1>
        <p>I'm your trusted on-site auto service in The Woodlands, Montgomery County, and Kingwood areas.</p>
        <p>Fair pricing—share your shop quote, and I'll often beat it by up to 50%!</p>
        <p>Call or Text me for a Free Quote: 936-529-4748</p>
        {/* Removed expired special; added new ongoing one */}
        <p className="text-green-500 font-bold">Ongoing Special: 10% off your first service! Contact us to claim.</p>
      </div>
      <div className="hero-buttons">
        <button onClick={toggleCallModal} className="call-now-btn" aria-label="Open contact modal for mobile mechanic in The Woodlands">Call Now</button>
        <a 
          href="mailto:david@toptechmobile.com?subject=Shop%20Quote%20for%20Price%20Beat&body=Hi%20David,%0A%0APlease%20find%20attached%20my%20shop%20quote%20(PDF%20or%20screenshot).%20I'd%20like%20to%20see%20if%20you%20can%20beat%20it!%0A%0AVehicle%20Details:%20[Year/Make/Model]%0AAddress/ZIP:%20[Your%20Address]%0AContact:%20[Phone/Email]%0A%0AThanks!" 
          className="book-now-btn" 
          aria-label="Email shop quote for auto service in Montgomery County"
        >
          Beat Quote Now
        </a>
      </div>
      {isCallModalOpen && (
        <div className="modal-overlay" aria-modal="true" role="dialog">
          <div className="book-modal-content">
            <div className="modal-header">Contact Me</div>
            <div className="book-form">
              <button onClick={() => window.location.href = 'tel:9365294748'} className="modal-btn call-btn">Call 936-529-4748</button>
              <button onClick={() => window.location.href = 'sms:9365294748'} className="modal-btn text-btn">Text 936-529-4748</button>
              <button type="button" onClick={toggleCallModal} className="modal-btn close-btn">Close</button>
            </div>
          </div>
        </div>
      )}
      {isQuoteModalOpen && (
        <div className="modal-overlay" aria-modal="true" role="dialog">
          <div className="book-modal-content">
            <div className="modal-header">Send Shop Quote</div>
            <form onSubmit={handleQuoteSubmit} className="book-form">
              <label htmlFor="address">Full Address</label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
                aria-label="Enter full address for auto service in The Woodlands"
              />
              <label htmlFor="zip">ZIP Code</label>
              <input id="zip" type="text" value={zip} onChange={(e) => setZip(e.target.value)} required aria-label="Enter ZIP code for on-site repair in Montgomery County" placeholder="e.g., 77381" />
              <label htmlFor="year">Vehicle Year</label>
              <Select options={years} value={year} onChange={(newValue) => setYear(newValue)} placeholder="Select Year" isSearchable />
              <label htmlFor="make">Vehicle Make</label>
              <Select options={makes} value={make} onChange={(newValue) => setMake(newValue)} placeholder="Select Make" isSearchable />
              <label htmlFor="model">Vehicle Model</label>
              <input id="model" type="text" value={model} onChange={(e) => setModel(e.target.value)} required aria-label="Enter vehicle model for diagnostics" />
              <label htmlFor="vin">VIN (Optional)</label>
              <input id="vin" type="text" value={vin} onChange={(e) => setVin(e.target.value)} aria-label="Enter VIN for quote" />
              <label htmlFor="licensePlate">License Plate (Optional)</label>
              <input id="licensePlate" type="text" value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} aria-label="Enter license plate for additional vehicle info" />
              {errorMessage && <p className="error-message">{errorMessage} <a href="tel:9365294748">Call Now</a></p>}
              <button type="submit" className="modal-btn submit-btn" aria-label="Submit shop quote">Submit Shop Quote</button>
              <button type="button" onClick={toggleQuoteModal} className="modal-btn close-btn">Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}