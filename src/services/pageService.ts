import { PageData, PageResponse, PagesResponse } from '../types/page';

// Mock data for development
const mockPages: Record<string, PageData> = {
  'about-us': {
    id: 'about-us',
    title: 'About Us',
    content: `
      <div>
        <p>Creator Share Tanzania is dedicated to improving the lives of children and communities in Tanzania through sustainable development initiatives.</p>
        <p>Our organization was founded in 2015 with a mission to provide education, healthcare, and economic opportunities to underserved populations.</p>
        <h2>Our Vision</h2>
        <p>We envision a Tanzania where every child has access to quality education, healthcare, and the opportunity to reach their full potential.</p>
      </div>
    `,
    featuredImage: '/images/about-foundation.png',
    metaDescription: 'Learn about Creator Share Tanzania and our mission to improve lives in Tanzania.',
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2023-12-10T00:00:00Z',
    tags: ['about', 'mission', 'vision']
  },
  'our-mission': {
    id: 'our-mission',
    title: 'Our Mission',
    content: `
      <div>
        <p>At Creator Share Tanzania, our mission is to create sustainable change through community-led initiatives.</p>
        <p>We believe in empowering local communities to drive their own development and create lasting solutions to the challenges they face.</p>
        <h2>Our Approach</h2>
        <p>We work closely with local partners and community leaders to identify needs and develop programs that address the root causes of poverty and inequality.</p>
        <p>Our approach is based on the principles of sustainability, community ownership, and long-term impact.</p>
      </div>
    `,
    featuredImage: '/images/hero-main.png',
    metaDescription: 'Discover the mission and approach of Creator Share Tanzania.',
    createdAt: '2023-02-20T00:00:00Z',
    updatedAt: '2023-11-05T00:00:00Z',
    tags: ['mission', 'approach', 'sustainability']
  },
  'our-work': {
    id: 'our-work',
    title: 'Our Work',
    content: `
      <div>
        <p>Creator Share Tanzania implements a variety of programs focused on education, healthcare, and economic empowerment.</p>
        <h2>Education</h2>
        <p>We build and renovate schools, provide scholarships, and train teachers to improve the quality of education in rural communities.</p>
        <h2>Healthcare</h2>
        <p>We support local health clinics, provide medical supplies, and conduct health education campaigns to improve access to healthcare.</p>
        <h2>Economic Empowerment</h2>
        <p>We provide vocational training, microloans, and business development support to help families increase their income and build sustainable livelihoods.</p>
      </div>
    `,
    featuredImage: '/images/partner-new.png',
    metaDescription: 'Explore the programs and initiatives of Creator Share Tanzania.',
    createdAt: '2023-03-10T00:00:00Z',
    updatedAt: '2023-10-15T00:00:00Z',
    tags: ['education', 'healthcare', 'economic empowerment']
  }
};

/**
 * Fetch a page by ID
 * @param id The page ID
 * @returns Promise with the page data or null if not found
 */
export async function getPageById(id: string): Promise<PageData | null> {
  // In a real application, this would be an API call
  // For example:
  // const response = await fetch(`https://api.example.com/pages/${id}`);
  // const data = await response.json();
  // return data.success ? data.data : null;
  
  // For now, we'll use mock data
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return mockPages[id] || null;
}

/**
 * Fetch all pages
 * @returns Promise with an array of all pages
 */
export async function getAllPages(): Promise<PageData[]> {
  // In a real application, this would be an API call
  // For example:
  // const response = await fetch('https://api.example.com/pages');
  // const data = await response.json();
  // return data.success ? data.data : [];
  
  // For now, we'll use mock data
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return Object.values(mockPages);
}

/**
 * Get all page IDs (useful for static generation)
 * @returns Promise with an array of all page IDs
 */
export async function getAllPageIds(): Promise<string[]> {
  const pages = await getAllPages();
  return pages.map(page => page.id);
}

/**
 * Create a new page (placeholder for future implementation)
 * @param pageData The page data to create
 * @returns Promise with the created page data
 */
export async function createPage(pageData: Omit<PageData, 'id'>): Promise<PageData> {
  // This would be implemented when connecting to a real backend
  throw new Error('Not implemented');
}

/**
 * Update a page (placeholder for future implementation)
 * @param id The page ID
 * @param pageData The page data to update
 * @returns Promise with the updated page data
 */
export async function updatePage(id: string, pageData: Partial<PageData>): Promise<PageData> {
  // This would be implemented when connecting to a real backend
  throw new Error('Not implemented');
}

/**
 * Delete a page (placeholder for future implementation)
 * @param id The page ID
 * @returns Promise with a success flag
 */
export async function deletePage(id: string): Promise<boolean> {
  // This would be implemented when connecting to a real backend
  throw new Error('Not implemented');
}
