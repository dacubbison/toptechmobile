// app/components/CTAButton.tsx
import Link from "next/link";

export default function CTAButton() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 shadow-2xl text-center my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Need it fixed today? Text or Call Now!
      </h2>
      <div className="text-5xl md:text-6xl font-black text-white mb-6 tracking-wider">
        (936) 529-4748
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="tel:9365294748"
          className="bg-white text-green-700 font-bold text-2xl px-10 py-6 rounded-full hover:bg-gray-100 transition shadow-lg"
        >
          📞 Call (936) 529-4748
        </Link>
        <Link
          href="sms:9365294748"
          className="bg-black text-white font-bold text-2xl px-10 py-6 rounded-full hover:bg-gray-900 transition shadow-lg"
        >
          💬 Text for Fast Quote
        </Link>
        <Link
          href="https://wa.me/19365294748"
          className="bg-green-500 text-white font-bold text-2xl px-10 py-6 rounded-full hover:bg-green-600 transition shadow-lg flex items-center gap-2"
        >
          💚 WhatsApp
        </Link>
      </div>
      <p className="text-white text-lg mt-6">
        Send photos or videos • Most quotes in under 5 minutes
      </p>
    </div>
  );
}