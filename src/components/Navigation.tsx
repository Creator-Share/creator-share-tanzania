"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Page } from "@/types/page";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        console.log('Fetching pages...');
        const response = await fetch('/api/pages');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedPages = await response.json();
        console.log('Fetched pages:', fetchedPages);
        setPages(fetchedPages);
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    };
    fetchPages();
  }, []);

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
          <div className="relative group">
            <button className="nav-link flex items-center gap-1">
              Pages
              <svg 
                className="w-4 h-4" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {pages.length > 0 && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-[100] border border-gray-100 transition-all duration-200">
                {pages.map((page) => (
                  <Link
                    key={page.id}
                    href={`/page/${page.slug}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
        {pages.length > 0 && (
          <div className="py-2">
            <div className="font-medium mb-2">Pages</div>
            {pages.map((page) => (
              <Link
                key={page.id}
                href={`/page/${page.slug}`}
                className="block py-2 pl-4 text-gray-800"
              >
                {page.title}
              </Link>
            ))}
          </div>
        )}
        <a href="/donate" className="donate-button inline-block mt-2">Donate</a>
      </div>
    </nav>
  );
}
