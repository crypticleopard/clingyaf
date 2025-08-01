'use client';

import Image from 'next/image';

export default function UspBanner() {
  return (
    <section className="relative text-center p-6 md:p-10 overflow-hidden shadow-lg my-8 md:my-12">
      {/* Email marketing tools image as background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/email-marketing-tools-drip-campaign.webp" 
          alt="Email Marketing Tools" 
          fill
          className="object-cover object-center" 
          style={{ filter: 'brightness(0.85)' }}
        />
      </div>
      {/* Gradient background and pattern overlay to match Free Audit section, with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-70 z-10" />
      <div className="relative z-30 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold bg-white bg-clip-text text-transparent mb-3 md:mb-4 drop-shadow-lg">We Work Where You Work</h2>
        <p className="text-base md:text-lg text-white mb-4 md:mb-6 drop-shadow">
          Whether you're using <strong className="text-accent">Klaviyo</strong>, <strong className="text-accent">Omnisend</strong>, <strong className="text-accent">AWeber</strong>, <strong className="text-accent">Attentive</strong>, or <strong className="text-accent">HubSpot</strong> — our team adapts to your stack.
        </p>
        <p className="text-sm md:text-md text-white drop-shadow">
          No migrations. No compromises. Just results.
        </p>
        <a href="https://calendly.com/clingy-afagency/30min" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 md:mt-6 text-base md:text-lg px-4 md:px-6 py-3 md:py-4 fire-gradient text-white hover:phoenix-glow-hover font-semibold phoenix-glow rounded-full shadow-lg border-2 border-white transition-all cursor-pointer">
            Discover More
          </button>
        </a>
      </div>
    </section>
  );
}
