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
      from_name: name,
      reply_to: email,
      phone: phone || 'Not provided',
      message: message,
    };

    emailjs
      .send(
        'service_qwd7ppr',         // ← your service ID
        'template_eshjegs',        // ← your template ID
        templateParams,
        'user_GKtBdMlfFWUKUn7M7'   // ← your public key
      )
      .then(
        () => {
          setStatus('success');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (error) => {
          console.error('EmailJS failed:', error);
          setStatus('error');
        }
      );
  };

  return (
    <main className="py-16 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-black text-center mb-12">Contact Top Tech Mobile</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Your Phone (for fast quotes)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
            <textarea
              placeholder="Message – e.g., $129 winterizing quote, brake job, etc."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition transform hover:scale-105 disabled:opacity-70"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 font-bold text-center">Message sent! I’ll hit you back ASAP 🔥</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">
                Oops – something went wrong. WhatsApp me directly → 936-529-4748
              </p>
            )}
          </form>
        </div>

        {/* Right side – WhatsApp + Map */}
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Faster? Just WhatsApp Me</h2>
            <p className="text-xl mb-4">936-529-4748</p>
            <a
              href="https://wa.me/19365294748?text=Hey%20David%2C%20saw%20the%20%24129%20winterizing%20special!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition transform hover:scale-105"
            >
              Start WhatsApp Chat
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Service Area</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d-95.4613!3d30.1658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzU2LjkiTiA5NcKwMjcnNDEuNyJX!5e0!3m2!1sen!2sus!4v1627489200000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}