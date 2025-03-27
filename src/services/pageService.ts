import { PageData } from '../types/page';

/**
 * Fetch a page by slug
 * @param slug The page slug
 * @returns Promise with the page data or null if not found
 */
export async function getPageBySlug(slug: string): Promise<PageData | null> {
  try {
    // Ensure the URL is properly encoded
    const encodedSlug = encodeURIComponent(slug);
    // Use Request constructor for better URL handling in server components
    const url = new URL(`/api/pages/${encodedSlug}`, 'http://localhost:3000');
    const response = await fetch(url.toString(), {
      // Add cache: 'no-store' to prevent caching issues during development
      cache: 'no-store'
    });
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

/**
 * Fetch all pages
 * @returns Promise with an array of all pages
 */
export async function getAllPages(): Promise<PageData[]> {
  try {
    // Use Request constructor for better URL handling in server components
    const url = new URL('/api/pages', 'http://localhost:3000');
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

/**
 * Get all page slugs (useful for static generation)
 * @returns Promise with an array of all page slugs
 */
export async function getAllPageSlugs(): Promise<string[]> {
  const pages = await getAllPages();
  return pages.map(page => page.slug);
}
