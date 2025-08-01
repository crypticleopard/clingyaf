'use client';

import Image from 'next/image';

export default function PortfolioItem({ src }) {
  return (
    <div className="w-[250px] sm:w-[280px] md:w-[300px] h-[600px] flex-shrink-0 overflow-y-scroll scrollbar-hide rounded-2xl shadow-lg border border-border bg-card hover:phoenix-glow-hover transition-all duration-300">
      <Image
        src={src}
        alt="Portfolio Design"
        width={1400}
        height={11613}
        className="w-full"
      />
    </div>
  );
}
