// app/mobile-mechanic-kingwood-tx/page.tsx
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export const metadata = {
  title: "Mobile Mechanic Kingwood TX – ASE-Certified On-Site Service",
  description: "Trusted mobile auto repair in all Kingwood villages. No trip fees, same-day service, beat shop quotes by up to 50%!",
};

export default function KingwoodPage() {
  return (
    <>
      {/* Hero matching your main site style */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src="/hero.jpg"  // Use your main hero or add a Kingwood-specific one to public/
          alt="Top Tech Mobile Mechanic in Kingwood TX"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center px-6 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
            Mobile Mechanic Kingwood TX
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-bold drop-shadow-lg">
            ASE-Certified on-site service to all villages – no trip fees in 77339/77345
          </p>
          <CTAButton />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Kingwood Chooses Top Tech Mobile</h2>
          <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-xl space-y-4 md:space-y-0">
            <li className="flex items-start gap-4">
              <span>✔</span> ASE-certified with 20+ years – brakes, diagnostics, AC, hybrids/EVs
            </li>
            <li className="flex items-start gap-4">
              <span>✔</span> Come to home, work, HEB, or Lake Houston – no towing needed
            </li>
            <li className="flex items-start gap-4">
              <span>✔</span> Beat shop quotes by up to 50% – text photos for free estimate
            </li>
            <li className="flex items-start gap-4">
              <span>✔</span> 90-day/12,000-mile warranty on all repairs
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