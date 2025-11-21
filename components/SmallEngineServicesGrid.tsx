export default function SmallEngineServicesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-16">Year-Round Small Engine Services</h2>
        <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto text-xl">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>Zero-turn repair (hydrostatic, deck, blades, belts)</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>Carb cleaning & rebuilds</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>Oil changes & tune-ups</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>Generator repair & load testing</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>Pressure washer pump fixes</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-green-600">✔</span>
              <p>Fleet maintenance for landscaping crews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}