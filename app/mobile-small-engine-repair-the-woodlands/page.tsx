

import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Mobile Small Engine Repair The Woodlands TX | Zero Turn Mower Repair',
  description: 'On-site zero-turn mower repair, generator & pressure washer service in The Woodlands, Kingwood, Conroe TX. Bad Boy, Scag, Exmark specialists. Text photos for instant quote - (936) 529-4748',
};

export default function SmallEngineRepairPage() {
  return (
    <>
      {/* Bulletproof Hero – always readable, nav-safe, WhatsApp added */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592417817098-21c8c8b9f3a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/90"></div>
        
        <div className="relative z-10 px-6 pt-32 pb-20 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl leading-tight">
            Mobile Small Engine<br className="sm:hidden" /> & Zero-Turn Mower Repair
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-8 drop-shadow-2xl">
            Bad Boy • Scag • Exmark • Ferris • Gravely<br />
            Generators • Pressure Washers
          </p>
          <p className="text-xl md:text-2xl mt-8 mb-10 max-w-4xl mx-auto bg-black/60 inline-block px-8 py-4 rounded-xl">
            We come to your home or business — The Woodlands • Kingwood • Conroe & surrounding
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CTAButton />
            <a
              href="https://wa.me/19365294748?text=Hey%20David%2C%20my%20mower%20won%27t%20start%20-%20here%27s%20pics"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-xl text-xl shadow-2xl transition transform hover:scale-105"
            >
              WhatsApp / Text Photos Now
            </a>
          </div>
          <p className="mt-10 text-lg opacity-95">
            ★ ASE Certified ★ Beat Shop Quotes by 50%+ ★ No Trip Fee ★ 90-Day Warranty
          </p>
        </div>
      </section>

      {/* Services – kept your layout but cleaned & made punchier */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16">On-Site Small Engine Services</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto text-xl">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl text-green-600">✔</span>
                <p>Zero-turn & riding mower repair (won’t start, deck issues, blades, belts, hydrostatic)</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl text-green-600">✔</span>
                <p>Carburetor cleaning & rebuilds</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl text-green-600">✔</span>
                <p>Oil changes & seasonal tune-ups</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl text-green-600">✔</span>
                <p>Generator repair & load testing</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl text-green-600">✔</span>
                <p>Pressure washer pump & unloader fixes</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl text-green-600">✔</span>
                <p>Fleet maintenance for landscaping companies</p>
              </div>
            </div>
          </div>

          <div className="mt-20 bg-amber-200 py-10 px-12 rounded-3xl inline-block">
            <p className="text-3xl font-black text-gray-900">Launch Special: $50 off first small engine service!</p>
          </div>
        </div>
      </section>

      {/* Big green closer */}
      <section className="py-20 bg-green-700 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Need It Fixed Today?<br />Text or Call Now → (936) 529-4748
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton />
            <a
              href="https://wa.me/19365294748?text=Hey%20David%2C%20sending%20mower%20pics%20for%20quote"
              className="bg-white text-green-700 hover:bg-gray-100 font-bold py-5 px-10 rounded-xl text-xl shadow-2xl transition transform hover:scale-105"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}