import CTAButton from './CTAButton';

type Props = {
  cityLine: string;
};

export default function WinterizingHero({ cityLine }: Props) {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603578092399-7e1cbcf59d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/90"></div>
      
      <div className="relative z-10 px-6 pt-32 pb-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl leading-tight">
          $89 Winterizing Special<br className="sm:hidden" />Running Now!
        </h1>
        <p className="text-3xl md:text-5xl font-bold mb-8 text-amber-300 drop-shadow-2xl">
          Zero-Turn Mowers • Generators • Pressure Washers
        </p>
        <p className="text-xl md:text-2xl mt-8 mb-10 max-w-4xl mx-auto bg-black/70 inline-block px-8 py-4 rounded-xl">
          {cityLine} — we come to you
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <CTAButton />
          <a
            href="https://wa.me/19365294748?text=Hey%20David%2C%20I%20want%20the%20%2489%20winterizing%20special!"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-xl text-xl shadow-2xl transition transform hover:scale-105"
          >
            >
            Book $89 Winterizing Now
          </a>
        </div>
        <p className="mt-10 text-lg opacity-95">
          ★ ASE Certified ★ Same-Day Possible ★ Fleet Pricing ★ 90-Day Warranty
        </p>
      </div>
    </section>
  );
}