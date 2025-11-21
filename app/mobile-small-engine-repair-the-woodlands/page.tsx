// app/mobile-small-engine-repair-the-woodlands/page.tsx
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Mobile Small Engine Repair The Woodlands & Kingwood | Zero-Turn Mower Repair",
  description: "We fix Bad Boy, Scag, Exmark, Ferris, generators & pressure washers at your home or business. Same-day mobile service!",
};

export default function SmallEnginePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Mobile Small Engine & Zero-Turn Mower Repair<br />The Woodlands • Kingwood • Conroe
          </h1>
          <p className="text-2xl">No hauling your $8k+ mower – we come to you • Most repairs same visit</p>
          <CTAButton />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">We Fix On-Site</h2>
            <ul className="text-xl space-y-4">
              <li>✔ Zero-turn & riding mowers (Bad Boy, Scag, Exmark, Ferris, Gravely)</li>
              <li>✔ Generators & pressure washers</li>
              <li>✔ Golf carts • ATVs • Go-karts</li>
              <li>✔ Carburetor rebuilds • Blade spindles • Electrical</li>
              <li>✔ Seasonal tune-ups & fleet maintenance</li>
            </ul>
            <div className="bg-amber-100 p-6 rounded-xl mt-8">
              <p className="text-2xl font-black">Launch Special: $50 off first service!</p>
            </div>
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl h-96" />
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <CTAButton />
        </div>
      </section>
    </>
  );
}