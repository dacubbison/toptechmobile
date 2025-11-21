// app/mobile-mechanic-kingwood-tx/page.tsx
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Mobile Mechanic Kingwood TX – Same-Day Service to Your Driveway",
  description: "Top Tech Mobile comes to all Kingwood villages – no trip fees in 77339 / 77345!",
};

export default function KingwoodPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-900 to-black text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Mobile Mechanic Kingwood TX<br />Same-Day Service • No Trip Fees
          </h1>
          <p className="text-2xl mb-8">Serving all Kingwood villages: Kingwood Greens, Trailwood, Bear Branch, Kings Crossing, Elm Grove + more</p>
          <CTAButton />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Kingwood Loves Mobile Service Because...</h2>
          <ul className="text-xl space-y-6 max-w-4xl mx-auto">
            <li>✔ No towing your broken car across the Lake Houston bridge</li>
            <li>✔ We come to home, work, HEB, or the greenbelt</li>
            <li>✔ Hybrid & EV capable (tons of Teslas in Kingwood!)</li>
            <li>✔ Upfront pricing – text photos for instant quote</li>
          </ul>
          <div className="text-center mt-12">
            <CTAButton />
          </div>
        </div>
      </section>
    </>
  );
}