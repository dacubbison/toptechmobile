'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: name,           // ← matches {{from_name}} in template
      reply_to: email,           // ← matches {{reply_to}} in template
      custom_params: {           // ← nest phone here to match {{custom_params.phone}}
        phone: phone || 'Not provided',
      },
      message: message,          // ← matches {{message}} in template
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
        setName(''); setEmail(''); setPhone(''); setMessage('');
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

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
            <input type="tel" placeholder="Your Phone (for fast quotes)" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
            <textarea placeholder="Message – e.g., $129 winterizing quote, brake job, etc." value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"></textarea>

            <button type="submit" disabled={status === 'sending'} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition disabled:opacity-70">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p className="text-green-600 font-bold text-center">Message sent! I’ll hit you back ASAP 🔥</p>}
            {status === 'error' && <p className="text-red-600 text-center">Oops – try again or WhatsApp me at 936-529-4748</p>}
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Faster? Just WhatsApp Me</h2>
            <p className="text-xl mb-4">936-529-4748</p>
            <a href="https://wa.me/19365294748?text=Hey%20David%2C%20saw%20the%20%24129%20winterizing%20special!" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition">
              Start WhatsApp Chat
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Service Area</h3>
            <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="350" style={{ border: 0, borderRadius: '12px' }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}