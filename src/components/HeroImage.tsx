import React from 'react';

export default function HeroImage() {
  return (
    <img
      src="/hero-image.jpg"
      alt="Advanced Auto Parts Manufacturing"
      className="w-full h-full object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
      referrerPolicy="no-referrer"
    />
  );
}
