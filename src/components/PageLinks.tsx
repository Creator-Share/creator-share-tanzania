"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PageData } from "../types/page";

// This component will be client-side and fetch the pages on mount
export default function PageLinks() {
  const [pages, setPages] = useState<PageData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPages() {
      try {
        // In a real app, this would be an API call
        // For now, we'll fetch from a static JSON file that we'll create
        const response = await fetch('/api/pages');
        if (!response.ok) throw new Error('Failed to fetch pages');
        
        const data = await response.json();
        setPages(data);
      } catch (error) {
        console.error('Error fetching pages:', error);
        // Fallback to some default pages if the API fails
        setPages([
          { id: 'about-us', title: 'About Us', content: '', slug: 'about-us', status: 'published' },
          { id: 'our-mission', title: 'Our Mission', content: '', slug: 'our-mission', status: 'published' },
          { id: 'our-work', title: 'Our Work', content: '', slug: 'our-work', status: 'published' }
        ]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPages();
  }, []);

  return (
    <div className="relative">
      <button
        className="nav-link flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        Pages
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
          {isLoading ? (
            <div className="px-4 py-2 text-sm text-gray-500">Loading...</div>
          ) : pages.length > 0 ? (
            pages.map((page) => (
              <Link
                key={page.id}
                href={`/page/${page.id}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {page.title}
              </Link>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">No pages found</div>
          )}
        </div>
      )}
    </div>
  );
}
