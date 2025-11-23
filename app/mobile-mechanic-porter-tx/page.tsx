import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Mobile Mechanic Porter TX | Car & Truck Repair At Your Home',
  description: 'ASE certified mobile mechanic Porter TX – brakes, no-start, AC, diagnostics. We come to you in Porter, New Caney, Splendora & beat shop quotes by 50%+. Text photos - (936) 529-4748',
};

export default function PorterMechanicPage() {
  return (
    <>
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544636331-9576b8bf12ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/90"></div>
        
        <div className="relative z-10 px-6 pt-32 pb-20 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
            Mobile Mechanic<br />Porter TX
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-10 drop-shadow-2xl">
            Car • Truck • SUV Repair<br />
            At Your Home or Work – Porter Heights to Splendora
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CTAButton />
            <a
              href="https://wa.me/19365294748?text=Hey%20David%2C%20Porter%20vehicle%20down%20-%20here%27s%20pics"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-xl text-xl shadow-2xl transition transform hover:scale-105"
            >
              WhatsApp / Text Photos Now
            </a>
          </div>
          <p className="mt-10 text-lg opacity-95">
            ★ ASE Certified ★ Beat Shop Quotes by 50%+
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Why Porter & New Caney Choose Top Tech Mobile
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-xl">
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>ASE-certified 20+ years – brakes, diagnostics, AC, check engine, hybrids/EVs</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>We come to Porter Heights, Kingwood border, Splendora, New Caney, Valley Ranch</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>Beat any written shop quote by 50% or more – guaranteed</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>Text photos → quote in minutes → same/next day</p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-center mt-16 mb-8">
            Common Repairs in Porter TX
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-xl">
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>Suspension fixes for bumpy rural roads in Porter Heights and New Caney</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>No-start diagnostics for trucks in Valley Ranch after heavy rains</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>AC repairs for humid commutes along East River Drive</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>Brake service for stop-and-go in Splendora traffic</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <CTAButton />
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-700 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Porter – Your Mechanic Comes to You<br />(936) 529-4748
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton />
            <a
              href="https://wa.me/19365294748"
              className="bg-white text-green-700 hover:bg-gray-100 font-bold py-5 px-10 rounded-xl text-xl shadow-2xl transition transform hover:scale-105"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}