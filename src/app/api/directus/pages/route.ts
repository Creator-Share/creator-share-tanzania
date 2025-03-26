import { NextResponse } from 'next/server';
import { getDirectusPages, processDirectusPage } from '../../../../services/directusService';

// GET handler for /api/directus/pages
export async function GET() {
  try {
    console.log('API route: Fetching pages from Directus');
    
    // Get all pages from Directus
    const pages = await getDirectusPages();
    console.log(`API route: Received ${pages.length} pages from Directus`);
    
    // Process pages to resolve file URLs and other references
    const processedPagesPromises = pages.map(async (page) => {
      console.log(`API route: Processing page: ${page.title}, ID: ${page.id}, Slug: ${page.slug || 'none'}`);
      
      const processedPage = await processDirectusPage(page);
      
      // Log the processed page details
      console.log(`API route: Processed page: ${processedPage.title}`);
      console.log(`API route: Processed page slug: ${processedPage.slug || 'none'}`);
      
      // Return a simplified version with just the essential fields for the dropdown
      return {
        id: processedPage.id,
        title: processedPage.title,
        slug: processedPage.slug,
        status: processedPage.status
      };
    });
    
    // Wait for all pages to be processed
    const processedPages = await Promise.all(processedPagesPromises);
    
    // Return the pages as JSON
    return NextResponse.json(processedPages);
  } catch (error) {
    console.error('Error fetching Directus pages:', error);
    
    // Return an error response
    return NextResponse.json(
      { error: 'Failed to fetch pages from Directus' },
      { status: 500 }
    );
  }
}
