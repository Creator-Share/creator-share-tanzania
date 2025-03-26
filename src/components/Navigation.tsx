"use client";

import Image from "next/image";
import { useState } from "react";
import PageLinks from "./PageLinks";
import DirectusLinks from "./DirectusLinks";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative px-8 py-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/creator-text.svg"
            alt="Creator Share Logo"
            width={140}
            height={40}
            priority
          />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link">About Us</a>
          <a href="#work" className="nav-link">Our Work</a>
          <a href="#share" className="nav-link">Ways to Share</a>
          <a href="#sponsor" className="nav-link">Sponsorship</a>
          <a href="#partner" className="nav-link">Partnership</a>
          <PageLinks />
          <DirectusLinks />
          <a href="/donate" className="donate-button">Donate</a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-4 absolute left-0 right-0 top-full bg-white shadow-lg p-4 mt-2 z-50`}>
        <a href="#about" className="nav-link block py-2">About Us</a>
        <a href="#work" className="nav-link block py-2">Our Work</a>
        <a href="#share" className="nav-link block py-2">Ways to Share</a>
        <a href="#sponsor" className="nav-link block py-2">Sponsorship</a>
        <a href="#partner" className="nav-link block py-2">Partnership</a>
        <div className="py-2">
          <PageLinks />
        </div>
        <div className="py-2">
          <DirectusLinks />
        </div>
        <a href="/donate" className="donate-button inline-block mt-2">Donate</a>
      </div>
    </nav>
  );
}
