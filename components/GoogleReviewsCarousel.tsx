'use client';

import { useState, useEffect } from 'react';

const reviews = [
  { name: "Crystal", date: "1 week ago", text: "I’m beyond impressed and incredibly grateful for Top Tech Mobile Mechanic! I decided to call after reading the outstanding Google reviews—and they were absolutely right. From the start, he was professional, communicative, and right on time. He completed the work in just 30 minutes... Honest, skilled, and efficient—I highly recommend Top Tech Mobile Mechanic!", location: "The Woodlands, TX" },
  { name: "Patrick G", date: "5 days ago", text: "I had an outstanding experience with Top Tech Mobile Mechanic, and I can’t say enough good things about David... From the moment I scheduled, everything was smooth... fair pricing, great communication, and the convenience of mobile service... Highly recommended!", location: "The Woodlands, TX" },
  { name: "Jason Cavalier", date: "1 month ago", text: "Best mobile mechanic in the area! David diagnosed and fixed my battery issue in less than an hour! Very professional service. Good communication & great pricing. Will definitely use his services again!", location: "" },
  { name: "Trent Martin", date: "2 months ago", text: "I called Top Tech Mobile to winterize my zero-turn mower and do an oil change on my Honda Civic, David absolutely nailed it! Showed up right on time, worked efficiently, left zero mess... Highly recommended!", location: "Kingwood, TX" },
  { name: "Mandie Vaughn", date: "6 months ago", text: "I highly recommend Top Tech Mobile! They showed up on time, finished my brakes on the same day. No mess left behind!!! Job well done Top Tech!", location: "" },
  { name: "Teah Ausbun", date: "5 months ago", text: "David was very knowledgeable and super easy to work with. My experience could not have been any better.", location: "" },
  { name: "Brad Howard (String Fellow)", date: "4 months ago", text: "Had a brake issue that caused my brake lights to stay continuously on... David made it out that evening and fixed it in no time flat at a fair price. I have lived in the Woodlands for 29 years and I don’t give out 5-star recommendations lightly... highest endorsement.", location: "The Woodlands, TX" },
  { name: "David Ridgely", date: "6 months ago", text: "Top Tech Mobile did great replacing my compressor... came out, replaced the part... no mess... very affordable... very helpful...", location: "" },
  { name: "StephenCS", date: "3 months ago", text: "David came to my house to change my brake pads and rotors... fantastic job... highest recommendation...", location: "" },
  { name: "Anya Madey", date: "6 months ago", text: "Excellent mobile mechanic service every time. Highly recommend David and Top Tech Mobile!", location: "Montgomery County, TX" },
];

export default function GoogleReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (isPaused || isFading) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, isFading, currentIndex]);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setIsFading(false);
    }, 350);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsFading(false);
    }, 350);
  };

  const review = reviews[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4 text-6xl">⭐⭐⭐⭐⭐</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Real Google Reviews</h2>
          <p className="text-xl text-gray-600">From your neighbors right here in The Woodlands, Kingwood & Montgomery County</p>
        </div>

        <div
          className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-16 min-h-[420px] flex flex-col overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex-1 transition-opacity duration-700 ${isFading ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="text-6xl text-green-600 mb-8">“</div>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 italic mb-10">{review.text}</p>
          </div>

          <div className={`flex items-center justify-between transition-opacity duration-700 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <div>
              <div className="font-bold text-2xl text-gray-900">{review.name}</div>
              <div className="text-green-600 font-medium">{review.date}</div>
              {review.location && <div className="text-sm text-gray-500 mt-1">{review.location}</div>}
            </div>
            <div className="text-4xl">⭐⭐⭐⭐⭐</div>
          </div>

          <button onClick={handlePrev} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl border transition">←</button>
          <button onClick={handleNext} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl border transition">→</button>

          <div className="flex justify-center gap-3 mt-10">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (idx !== currentIndex) {
                    setIsFading(true);
                    setTimeout(() => {
                      setCurrentIndex(idx);
                      setIsFading(false);
                    }, 350);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-green-600 scale-125' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}