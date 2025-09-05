// app/service-area/page.tsx
'use client';

import { useState } from 'react';
import Script from 'next/script';

export default function ServiceArea() {
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [message, setMessage] = useState('');
  const [available, setAvailable] = useState(false);

  const safeZips = ['77301', '77302', '77303', '77304', '77305', '77306', '77316', '77318', '77327', '77328', '77338', '77339', '77345', '77346', '77354', '77355', '77356', '77357', '77362', '77365', '77372', '77373', '77378', '77379', '77380', '77381', '77382', '77384', '77385', '77386', '77388', '77389', '77393', '77447', '77873', '77014', '77032', '77073', '77090', '77096'];

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiKey = 'AIzaSyCKagUl-ly5KIR8_dK1TgOr1eOGoka6kmg'; // From Botpress code
    const fullAddress = address ? `${address}, ${zip}` : zip;
    if (!fullAddress) {
      setMessage('Please enter an address or ZIP code.');
      return;
    }

    try {
      const encodedAddress = encodeURIComponent(fullAddress);
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}&region=us`);
      const data = await response.json();
      if (data.status !== 'OK') throw new Error('Geocode failed');

      const lat = data.results[0].geometry.location.lat;
      const lng = data.results[0].geometry.location.lng;
      const shopLat = 30.1658;
      const shopLng = -95.4613;
      const radius = 50; // miles

      const distance = getDistance(lat, lng, shopLat, shopLng);
      const isAvailable = distance <= radius || (zip && safeZips.includes(zip.trim().replace(/-/g, '')));
      setAvailable(!!isAvailable); // Convert to boolean
      setMessage(isAvailable ? `We service your area! Distance: ${distance.toFixed(1)} miles.` : 'Sorry, outside our service area—call 936-529-4748!');
    } catch (error) {
      setMessage('Error checking address—try again or call us.');
      console.error(error);
    }
  };

  function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 3958.8; // miles
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <Script id="service-area-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Mobile Mechanic",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 30.1658,
              "longitude": -95.4613
            },
            "geoRadius": 80467 // 50 miles in meters
          }
        })}
      </Script>
      <h1 className="text-3xl font-bold mb-6 text-center">Our Service Area in Montgomery County TX</h1>
      <p className="text-center mb-8">We cover The Woodlands, Kingwood, and all ZIP codes in Montgomery County. Enter your address or ZIP to check availability!</p>

      {/* Service Area Check Form */}
      <form onSubmit={handleCheck} className="max-w-md mx-auto space-y-4 mb-8">
        <input
          type="text"
          placeholder="Full Address (optional)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="ZIP Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Check Availability</button>
        {message && <p className={available ? 'text-green-500' : 'text-red-500'}>{message}</p>}
      </form>

      {/* ZIP Table */}
      <h2 className="text-2xl font-bold mb-4 text-center">Covered ZIP Codes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ZIP Code</th>
              <th className="py-2 px-4 border-b">Area</th>
            </tr>
          </thead>
          <tbody>
            {safeZips.map(zip => (
              <tr key={zip}>
                <td className="py-2 px-4 border-b">{zip}</td>
                <td className="py-2 px-4 border-b">Montgomery County / Surrounding</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Embedded Google Map */}
      <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Our Service Map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d-95.4613!3d30.1658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzU2LjkiTiA5NcKwMjcnNDEuNyJX!5e0!3m2!1sen!2sus!4v1627489200000!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Service Area Map"
      ></iframe>
    </main>
  );
}