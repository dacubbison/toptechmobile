// app/contact/page.tsx
'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface Window {
  gtag_report_conversion: (url?: string) => boolean;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [message, setMessage] = useState('');
  const [contactPreferences, setContactPreferences] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContactPreferences((prev) =>
      prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: name,           
      reply_to: email,           
      custom_params: {           
        phone: phone || 'Not provided',
        vehicle_details: vehicleDetails || 'Not provided',
        contact_preferences: contactPreferences.join(', ') || 'Any method',
      },
      message: message,          
    };

    emailjs
      .send(
        'service_qwd7ppr',
        'template_eshjegs',
        templateParams,
        'GKtBdMlfFWUKUn7M7'
      )
      .then(() => {
        setStatus('success');
        setName(''); setEmail(''); setPhone(''); setVehicleDetails(''); setMessage(''); setContactPreferences([]);

        // Trigger Google Ads conversion on success
        if (typeof window.gtag_report_conversion === 'function') {
          gtag_report_conversion();  // No URL needed since no redirect
        }
      })
      .catch((err: any) => {
        console.error('EmailJS error:', err);
        if (err.text) {
          err.text().then((text: string) => console.error('Error details:', text));
        }
        setStatus('error');
      });
  };

  return (
    <main className="py-16 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-black text-center mb-12">Contact Top Tech Mobile</h1>
      <p className="text-xl text-center mb-8">Get a Free Quote in Minutes – No Shop Visit Needed!</p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
            <input type="tel" placeholder="Your Phone – for lightning-fast quotes via text or call" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
            {phone && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Preferred contact method (optional):</p>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="checkbox" value="Call" checked={contactPreferences.includes('Call')} onChange={handleCheckboxChange} className="mr-2" />
                    Call
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" value="Text" checked={contactPreferences.includes('Text')} onChange={handleCheckboxChange} className="mr-2" />
                    Text
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" value="Email" checked={contactPreferences.includes('Email')} onChange={handleCheckboxChange} className="mr-2" />
                    Email
                  </label>
                </div>
              </div>
            )}
            <input type="text" placeholder="Vehicle Details (optional, e.g., 2019 Hyundai Santa Fe 2.4L)" value={vehicleDetails} onChange={(e) => setVehicleDetails(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
            <textarea placeholder="Message – e.g., $129 winterizing quote, brake job, etc." value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"></textarea>

            <button type="submit" disabled={status === 'sending'} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition disabled:opacity-70">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="text-green-600 font-bold text-center">
                <p>Message sent! I’ll hit you back ASAP 🔥</p>
                <a href="/" className="text-blue-600 underline">Back to Home</a>
              </div>
            )}
            {status === 'error' && <p className="text-red-600 text-center">Oops – try again or call/text me at 936-529-4748</p>}
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Faster? Call or Text Me</h2>
            <p className="text-xl mb-4">936-529-4748</p>
            <div className="flex justify-center space-x-4">
              <a href="tel:9365294748" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition">Call Now</a>
              <a href="sms:9365294748?body=Hey%20David%2C%20need%20a%20quote%20for..." className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition">Text Now</a>
            </div>
            <p className="mt-6 text-lg">International? Use WhatsApp</p>
            <a href="https://wa.me/19365294748?text=Hey%20David%2C%20saw%20the%20%24129%20winterizing%20special!" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition mt-2">
              Start WhatsApp Chat
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Service Area</h3>
            <p className="text-center mb-2">Serving The Woodlands, Conroe, Kingwood, and surrounding areas</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333755.123456789!2d-95.489!3d30.158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864735e5a5b8f93f%3A0x6e7288658d971203!2sMontgomery%20County%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="350" style={{ border: 0, borderRadius: '12px' }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}