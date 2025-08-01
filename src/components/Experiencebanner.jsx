'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ExperienceBanner() {
  const [mounted, setMounted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    brands: 0,
    campaigns: 0,
    years: 0,
    revenue: 0
  });
  
  const ref = useRef(null);

  const targetCounts = {
    brands: 30,
    campaigns: 1300,
    years: 3,
    revenue: 3
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startCountUp();
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, mounted]);

  const startCountUp = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = setInterval(() => {
      setCounts(prev => {
        const newCounts = { ...prev };
        let allComplete = true;
        
        Object.keys(targetCounts).forEach(key => {
          if (newCounts[key] < targetCounts[key]) {
            const increment = targetCounts[key] / steps;
            newCounts[key] = Math.min(
              newCounts[key] + increment,
              targetCounts[key]
            );
            allComplete = false;
          }
        });
        
        if (allComplete) {
          clearInterval(interval);
        }
        
        return newCounts;
      });
    }, duration / steps);
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${Math.floor(num / 1000)}K+`;
    }
    return Math.floor(num);
  };

  const formatRevenue = (num) => {
    return `$${Math.floor(num)}M+`;
  };

  return (
    <section className="pt-8 md:pt-16 pb-16 bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-[#1a1a1a] relative overflow-hidden">
      {/* Optional overlay removed to avoid redundant darkness */}
    
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold fire-gradient-text text-center mb-10">
          Our Numbers Speak
        </h2>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brands */}
          {mounted ? (
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-4xl md:text-5xl font-bold mb-2 inline-block banner-gradient-text">
                {formatNumber(counts.brands)}+
              </span>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Brands Worked With
              </div>
            </motion.div>
          ) : (
            <div className="text-center group">
              <span className="text-4xl md:text-5xl font-bold mb-2 inline-block banner-gradient-text">
                {formatNumber(counts.brands)}+
              </span>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Brands Worked With
              </div>
            </div>
          )}
    
          {/* Campaigns */}
          {mounted ? (
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-4xl md:text-5xl font-bold mb-2 inline-block banner-gradient-text">
                {formatNumber(counts.campaigns)}
              </span>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Campaigns Executed
              </div>
            </motion.div>
          ) : (
            <div className="text-center group">
              <span className="text-4xl md:text-5xl font-bold mb-2 inline-block banner-gradient-text">
                {formatNumber(counts.campaigns)}
              </span>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Campaigns Executed
              </div>
            </div>
          )}
    
          {/* Years */}
          {mounted ? (
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-4xl md:text-5xl font-bold mb-2 inline-block banner-gradient-text">
                {Math.floor(counts.years)}+
              </span>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Years of Experience
              </div>
            </motion.div>
          ) : (
            <div className="text-center group">
              <span className="text-4xl md:text-5xl font-bold mb-2 inline-block banner-gradient-text">
                {Math.floor(counts.years)}+
              </span>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Years of Experience
              </div>
            </div>
          )}
    
          {/* Revenue */}
          {mounted ? (
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-4xl md:text-5xl font-bold mb-2 inline-block banner-gradient-text">
                {formatRevenue(counts.revenue)}
              </span>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Revenue Driven
              </div>
            </motion.div>
          ) : (
            <div className="text-center group">
              <span className="text-4xl md:text-5xl font-bold mb-2 inline-block banner-gradient-text">
                {formatRevenue(counts.revenue)}
              </span>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Revenue Driven
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
