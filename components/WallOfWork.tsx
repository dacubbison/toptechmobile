'use client';

import Image from 'next/image';
import { useState } from 'react';

const wallOfWorkImages = [
  { src: '/images/wall-of-work/wall-of-work-rezvani-supercharger-waterpump.jpg', alt: 'Rezvani Tank Supercharger Water Pump Repair', caption: 'Rezvani Tank – Supercharger Water Pump Repair' },
  { src: '/images/wall-of-work/wall-of-work-rezvani-tank-front.jpg', alt: 'Rezvani Tank Front', caption: 'Rezvani Tank' },
  { src: '/images/wall-of-work/wall-of-work-rezvani-tank-side.jpg', alt: 'Rezvani Tank Side', caption: 'Rezvani Tank' },
  { src: '/images/wall-of-work/wall-of-work-rezvani-tank-rear.jpg', alt: 'Rezvani Tank Rear', caption: 'Rezvani Tank' },
  { src: '/images/wall-of-work/wall-of-work-rezvani-tank-engine.jpg', alt: 'Rezvani Tank Engine', caption: 'Rezvani Tank' },
  { src: '/images/wall-of-work/wall-of-work-rezvani-tank-closeup-front.jpg', alt: 'Rezvani Tank Closeup', caption: 'Rezvani Tank' },
  { src: '/images/wall-of-work/wall-of-work-srt-brake-before.jpg', alt: 'SRT Brake Before', caption: 'SRT Brake Job - Before' },
  { src: '/images/wall-of-work/wall-of-work-srt-drilled-slotted-rotor.jpg', alt: 'SRT Drilled Rotors', caption: 'SRT Drilled & Slotted Rotors Installed' },
  { src: '/images/wall-of-work/wall-of-work-brake-job-milwaukee.jpg', alt: 'Brake Job Milwaukee', caption: 'Brake Job with Milwaukee Tools' },
  { src: '/images/wall-of-work/wall-of-work-hyundai-ac-diagnosis.jpg', alt: 'Hyundai AC Diagnosis', caption: 'Hyundai AC Diagnosis & Repair' },
  { src: '/images/wall-of-work/wall-of-work-bmw-ac-diagnosis.jpg', alt: 'BMW AC Diagnosis', caption: 'BMW AC System Diagnosis & Repair' },
  { src: '/images/wall-of-work/wall-of-work-jeep-oil-cooler-leak.jpg', alt: 'Jeep Oil Cooler', caption: 'Jeep Oil Cooler Leak Repair' },
  { src: '/images/wall-of-work/wall-of-work-radiator-leak.jpg', alt: 'Radiator Leak', caption: 'Radiator Leak Repair' },
  { src: '/images/wall-of-work/wall-of-work-motor-mount.jpg', alt: 'Motor Mount', caption: 'Engine Motor Mount Replacement' },
  { src: '/images/wall-of-work/wall-of-work-brake-job.jpg', alt: 'Complete Brake Job', caption: 'Complete Brake Service' },
  { src: '/images/wall-of-work/wall-of-work-bad-battery-test.jpg', alt: 'Bad Battery Test', caption: 'Bad Battery Load Test' },
  { src: '/images/wall-of-work/wall-of-work-good-battery-test.jpg', alt: 'Good Battery Test', caption: 'Good Battery Load Test Result' },
];

export default function WallOfWork() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Wall of Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real jobs. Real vehicles. Real results — no shop, no mess, just expert mobile repairs right in your driveway.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {wallOfWorkImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index < 6 ? "eager" : "lazy"}
                />
              </div>
              <p className="mt-4 text-center font-medium text-gray-700 text-lg px-2">{image.caption}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-5xl w-full relative" onClick={e => e.stopPropagation()}>
              <Image
                src={wallOfWorkImages[selectedImage].src}
                alt={wallOfWorkImages[selectedImage].alt}
                width={1200}
                height={800}
                className="rounded-3xl mx-auto"
              />
              <p className="text-white text-center mt-6 text-2xl font-medium">
                {wallOfWorkImages[selectedImage].caption}
              </p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white text-black w-12 h-12 rounded-full text-3xl flex items-center justify-center shadow-xl"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}