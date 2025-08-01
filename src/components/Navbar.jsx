'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        mounted && isScrolled ? "bg-background/90 backdrop-blur-md shadow-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-4 px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-foreground text-xl font-bold">
          <Image src="/ClingyAF.png" width={50} height={50} alt="ClingyAF" className="w-full"/>
        </Link>

        {/* Add links or buttons here if needed */}
        {/* <div className="space-x-4">
          <Button variant="ghost" className="text-foreground">Contact</Button>
        </div> */}
      </div>
    </nav>
  );
}
