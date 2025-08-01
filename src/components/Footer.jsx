'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { PiXLogo } from "react-icons/pi";
import { FaInstagram,FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-10 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left Text */}
          <div className="text-center mt-8 md:mt-0 md:text-left text-sm text-zinc-400 flex flex-col items-center md:items-start">
            <Image src="/ClingyAF.png" alt="ClingyAF Logo" width={112} height={112} className="mb-2 w-28 h-auto" />
            <p className="mb-1">© 2025 ClingyAF. All rights reserved.</p>
            <p>Retention-first. Message-driven. Built to keep customers coming back.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-5 mb-2">
              <Link
                href="mailto:clingy.afagency@gmail.com"
                className="hover:text-orange-500 transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/clingyaf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/clingyaf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Link>
              <a
                href="https://x.com/clingyaf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
                aria-label="Twitter / X"
              >
                <PiXLogo size={20} />
              </a>
            </div>
            <div className="text-base text-zinc-200 text-center md:text-right mt-8">
              <div>Email: <a href="mailto:clingy.afagency@gmail.com" className="hover:text-orange-500">clingy.afagency@gmail.com</a></div>
              <div>Phone: <a href="tel:+916383247833" className="hover:text-orange-500">+91 63832 47833</a></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
