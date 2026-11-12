"use client";

import { useState } from 'react';
import { isInServiceArea } from '@/lib/serviceArea';

export default function BookButton({ calendlyLink }: { calendlyLink: string }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [zip, setZip] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBookClick = () => {
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
    window.location.href = calendlyLink;
    setIsBookingOpen(false);
  };

  const handleClose = () => {
    setIsBookingOpen(false);
    setErrorMessage('');
  };

  return (
    <>
      <button
        onClick={handleBookClick}
        className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
      >
        Book Now
      </button>
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
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
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              {errorMessage && <p className="text-red-600 font-medium text-center">{errorMessage}</p>}
              <div className="flex gap-4">
                <button type="button" onClick={handleClose} className="flex-1 py-3 bg-gray-200 rounded-2xl font-medium hover:bg-gray-300">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-3 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-700">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}