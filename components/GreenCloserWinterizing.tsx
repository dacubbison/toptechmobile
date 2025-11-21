import CTAButton from './CTAButton';

export default function GreenCloserWinterizing() {
  return (
    <section className="py-20 bg-green-700 text-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Don’t Let Your Equipment Sit Dead All Winter<br />Get the $129 Special Today
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <CTAButton />
          <a
            href="https://wa.me/19365294748?text=Hey%20David%2C%20book%20me%20for%20the%20%24129%20winterizing"
            className="bg-white text-green-700 hover:bg-gray-100 font-bold py-5 px-10 rounded-xl text-xl shadow-2xl transition transform hover:scale-105"
          >
            WhatsApp Me Now
          </a>
        </div>
      </div>
    </section>
  );
}