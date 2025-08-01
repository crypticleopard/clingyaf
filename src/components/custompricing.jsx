'use client';

import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const usps = [
  "Full Email & SMS Channel Management",
  "Pop-up Optimization: 4–7% sign-up rate Promise",
  "30%+ Lift in Retention-Attributed Revenue",
  "Newsletter Campaigns that Convert",
  "Email Deliverability Strategy",
  "4 Pre-Purchase & 3 Post-Purchase Flows (Email + SMS)",
  "Advanced Flows (Email + SMS)",
  "Support for WhatsApp, RCS & Push Notifications"
];

export default function CustomPricing() {
  const carouselRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !carouselRef.current) return;

    const carousel = carouselRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          // Reset to beginning when reaching the end
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollBy({ left: 2, behavior: 'auto' });
        }
      }, 30); // Adjust speed as needed
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    // Only start auto-scroll on mobile (screen width < 768px)
    const handleResize = () => {
      if (window.innerWidth < 768) {
        startAutoScroll();
      } else {
        stopAutoScroll();
      }
    };

    // Initial check
    handleResize();

    // Pause on hover/touch for mobile only
    const handleMouseEnter = () => {
      if (window.innerWidth < 768) {
        stopAutoScroll();
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth < 768) {
        startAutoScroll();
      }
    };

    const handleTouchStart = () => {
      if (window.innerWidth < 768) {
        stopAutoScroll();
      }
    };

    const handleTouchEnd = () => {
      if (window.innerWidth < 768) {
        startAutoScroll();
      }
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(scrollInterval);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, [mounted]);

  return (
    <section className="relative py-20 px-6 md:px-12 text-center bg-gradient-to-br from-background via-card to-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-80 pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold fire-gradient-text mb-4">
          Pricing That’s Built Around You
        </h2>
        <p className="text-lg md:text-xl text-foreground mb-10">
          No templates. No guesswork. Just a custom plan made to grow with your brand.
        </p>

        <div 
          ref={carouselRef}
          className={`flex overflow-x-auto scroll-smooth scrollbar-hide touch-pan-x md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-12 text-left md:overflow-visible px-2 md:px-0 ${mounted ? '' : 'pointer-events-none'}`}
        >
          {usps.map((point, idx) => (
            <div key={idx} className="flex items-start gap-1 md:gap-3 bg-card/80 p-6 md:p-5 rounded-2xl shadow-md border border-border min-w-[90px] max-w-[280px] md:min-w-0 md:max-w-none flex-shrink-0 md:flex-shrink h-24 md:h-auto">
              <CheckCircle className="text-accent mt-1 flex-shrink-0 w-6 h-6 md:w-4 md:h-4" />
              <span className="text-foreground font-medium text-md md:text-sm">{point}</span>
            </div>
          ))}
        </div>

        <p className="text-xl text-foreground font-semibold mb-4">
          Custom pricing tailored to your goals, channels, and tech stack.
        </p>
        <div className="text-center">
          <a href="https://calendly.com/clingy-afagency/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 py-5 fire-gradient text-primary-foreground hover:phoenix-glow-hover font-semibold rounded-full shadow-lg my-2 cursor-pointer">
              Get Your Custom Quote &rarr;
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
