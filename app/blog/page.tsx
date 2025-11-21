// app/page.tsx
import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mobile Mechanic The Woodlands & Kingwood | Top Tech Mobile Automotive",
  description: "ASE-certified mobile mechanic comes to you in The Woodlands, Kingwood, Conroe, Spring, Humble. Now offering mobile small engine & zero-turn mower repair!",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-black text-white">
        <Image
          src="/hero-mechanic.jpg"
          alt="Top Tech Mobile Mechanic Truck"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
            Mobile Mechanic The Woodlands<br />Kingwood • Conroe • Spring
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-bold">
            Car, Truck, or Zero-Turn Mower – We Come to You • Same-Day Service
          </p>
          <CTAButton />
          <p className="text-xl mt-8 bg-black/70 inline-block px-6 py-3 rounded">
            ★★★★★ 87+ Five-Star Reviews • ASE Certified • 90-Day Warranty
          </p>
        </div>
      </section>

      {/* New Small Engine Announcement */}
      <section className="bg-green-700 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Now Fixing Zero-Turn Mowers & Small Engines On-Site!
          </h2>
          <p className="text-2xl mb-8">
            Bad Boy • Scag • Exmark • Ferris • Generators • Pressure Washers
          </p>
          <Link href="/mobile-small-engine-repair-the-woodlands" className="bg-white text-green-700 font-bold text-2xl px-12 py-6 rounded-full hover:bg-gray-100 inline-block">
            Learn More – We Come to You!
          </Link>
        </div>
      </section>

      {/* Rest of your existing sections below – keep them all */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Top Tech Mobile?</h2>
          {/* Keep your existing cards/grid here */}
        </div>
      </section>
    </>
  );
}