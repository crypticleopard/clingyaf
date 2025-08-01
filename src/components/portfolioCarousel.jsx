'use client';

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioItem from "@/components/portfolioItem";

export default function PortfolioCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = 320; // Adjust as needed
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative py-2">
      {/* Scrollable Container */}
      <div className="relative">
        {/* Arrows */}
        <Button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground border border-border phoenix-glow-hover hidden lg:flex"
          size="icon"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground border border-border phoenix-glow-hover hidden lg:flex"
          size="icon"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Carousel Content */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4 md:px-10 touch-pan-x"
            style={{ scrollPaddingLeft: '1rem' }}
          >
            <PortfolioItem src="/portfolio/stemregen%20marketing%20email.png" />
            <PortfolioItem src="/portfolio/Peligroemail.png"/>
            <PortfolioItem src="/portfolio/golfdotzNewsletter.png"/>
            <PortfolioItem src="/portfolio/hoekdesign.png"/>
            <PortfolioItem src="/portfolio/ikeatroll.png"/>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <a href="https://calendly.com/clingy-afagency/30min" target="_blank" rel="noopener noreferrer">
          <Button className="text-lg px-6 py-3 fire-gradient text-primary-foreground hover:phoenix-glow-hover font-semibold rounded-full shadow cursor-pointer">
            Let's Work Together
          </Button>
        </a>
      </div>
    </section>
  );
}
