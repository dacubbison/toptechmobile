"use client";

import { useState, useEffect } from 'react';

const reviews = [
  {
    name: "Ty Simon",
    text: "David is a wealth of knowledge. I’ve run a few other mobile mechanics off my vehicles, he’s always upfront and the pricing is fair. He’s never given me the run around and has been excellent with communication. Can’t recommend him enough!!",
    time: "1 week ago"
  },
  {
    name: "James Garrison",
    text: "David is an absolute professional. He does right by his customers and is willing to go the extra mile to make you feel comfortable. He has great rates and does a great job every time. Thanks David!!",
    time: "4 weeks ago"
  },
  {
    name: "todd ausbun",
    text: "David is so helpful and was a god send. This was two years ago and I am still leaning on him today. Thank you for all you do for our family!!",
    time: "5 weeks ago"
  },
  {
    name: "Wilfred Stewart",
    text: "David was a blessing to us. Our Church mower was not starting at all. He is awesome, courteous, reliable and dependable! Thanks David!",
    time: "7 weeks ago"
  },
  {
    name: "Adam Anthony",
    text: "David did a fantastic job with my brakes/rotors/wheel bearings on my 2002 F150! It’s so convenient to have a mechanic come to your workplace. Clear communication, professionalism, and genuine care for the customer. I’d give more than 5 stars if I could!",
    time: "7 weeks ago"
  },
  {
    name: "Norma Escoto",
    text: "David came to my home the same day I contacted him. He replaced the battery in my 2014 Mercedes-Benz ML63 AMG efficiently. It’s hard to find an honest, dependable, and skilled mobile mechanic. I highly recommend Top Tech Mobile.",
    time: "16 weeks ago"
  },
  {
    name: "emily phillips",
    text: "David saved me hundreds of dollars on a tow! He came straight to me, quickly diagnosed the issue, and fixed my fuel pump in a timely and efficient manner. A mechanic friend of mine looked at the work and even commented that you can tell David really knows what he is doing.",
    time: "24 weeks ago"
  },
  {
    name: "Patrick G",
    text: "I had an outstanding experience with Top Tech Mobile Mechanic. David arrived on time, came fully prepared, and quickly diagnosed the issue with complete transparency. Fair pricing and honest work is what everyone deserves.",
    time: "39 weeks ago"
  },
  {
    name: "Crystal",
    text: "I’m beyond impressed and incredibly grateful for Top Tech Mobile Mechanic! He completed the work in just 30 minutes, which completely blew my mind. Honest, skilled, and efficient—I highly recommend Top Tech Mobile Mechanic.",
    time: "39 weeks ago"
  }
];

export default function GoogleReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section 
      className="py-16 bg-gray-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          33 Five-Star Google Reviews
        </h2>
        <p className="text-gray-600 mb-10">Real feedback from customers across Montgomery County</p>

        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 min-h-[320px] flex flex-col justify-center transition-all duration-500">
          <div className="text-yellow-400 text-3xl mb-4 tracking-widest">★★★★★</div>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic mb-6">
            “{reviews[current].text}”
          </p>
          <div className="font-semibold text-gray-900">{reviews[current].name}</div>
          <div className="text-sm text-gray-500 mt-1">{reviews[current].time}</div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? 'bg-green-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <a
          href="https://www.google.com/search?q=Top+Tech+Mobile+Mechanic+Woodlands+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition"
        >
          Read All 33 Reviews on Google
        </a>
      </div>
    </section>
  );
}