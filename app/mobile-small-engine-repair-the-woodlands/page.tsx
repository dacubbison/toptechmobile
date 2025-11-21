// app/mobile-small-engine-repair-the-woodlands/page.tsx
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export const metadata = {
  title: "Mobile Small Engine Repair The Woodlands TX – Zero-Turn Mower Service",
  description: "On-site repairs for Bad Boy mowers, generators, pressure washers in The Woodlands, Kingwood, Conroe. No hauling required!",
};

export default function SmallEnginePage() {
  return (
    <>
      {/* Hero in your style */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src="/hero.jpg"  // Use main hero or add mower-specific to public/
          alt="Mobile Small Engine Repair in The Woodlands TX"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center px-6 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
            Mobile Small Engine & Mower Repair
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-bold drop-shadow-lg">
            We fix zero-turns, generators, pressure washers on-site in The Woodlands & Kingwood
          </p>
          <CTAButton />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">On-Site Services for Small Engines</h2>
          <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-xl space-y-4 md:space-y-0">
            <li className="flex items-start gap-4">
              <span>✔</span> Zero-turn mowers (Bad Boy, Scag, Exmark, Ferris) – won't start, blade issues
            </li>
            <li className="flex items-start gap-4">
              <span>✔</span> Generators & pressure washers – pump repairs, load testing
            </li>
            <li className="flex items-start gap-4">
              <span>✔</span> Carburetor cleaning, oil changes, tune-ups – same visit parts in truck
            </li>
            <li className="flex items-start gap-4">
              <span>✔</span> Landscaper fleets welcome – $50 off first service special
            </li>
          </ul>
          <div className="text-center mt-12">
            <CTAButton />
          </div>
        </div>
      </section>
    </>
  );
}