'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: name,           
      reply_to: email,           
      custom_params: {           
        phone: phone || 'Not provided',
        year: year || 'Not provided',
        make: make || 'Not provided',
        model: model || 'Not provided',
        engine_size: engineSize || 'Not provided',
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
        setName(''); setEmail(''); setPhone(''); setYear(''); setMake(''); setModel(''); setEngineSize(''); setMessage('');
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
            <input type="text" placeholder="Vehicle Year (e.g., 2019)" value={year} onChange={(e) => setYear(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
            <input type="text" placeholder="Vehicle Make (e.g., Hyundai)" value={make} onChange={(e) => setMake(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
            <input type="text" placeholder="Vehicle Model (e.g., Santa Fe)" value={model} onChange={(e) => setModel(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
            <input type="text" placeholder="Engine Size (e.g., 2.4L)" value={engineSize} onChange={(e) => setEngineSize(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333755.123456789!2d-95.489!3d30.158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864735e5a5b8f93f%3A0x6e7288658d971203!2sMontgomery%20County%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="350" style={{ border: 0, borderRadius: '12px' }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}