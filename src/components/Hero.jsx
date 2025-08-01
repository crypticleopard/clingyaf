'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const text = "Retention Is the New Acquisition";
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative h-[75vh] md:h-screen flex items-center justify-center text-center text-foreground"
      style={{
        backgroundImage: "url('/bakcground3.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/40 absolute inset-0 z-0" />
      <div className="relative z-10 max-w-2xl px-6">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          At ClingyAF, we don't chase customers. We keep them. Email & SMS flows that actually stick.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <a href="https://calendly.com/clingy-afagency/30min" target="_blank" rel="noopener noreferrer">
            <Button className="text-lg px-6 py-4 fire-gradient text-primary-foreground hover:phoenix-glow-hover font-semibold phoenix-glow cursor-pointer">
              Let's Get Clingy
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
