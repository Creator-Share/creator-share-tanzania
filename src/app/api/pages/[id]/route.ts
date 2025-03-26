import { NextResponse } from 'next/server';
import { getPageById } from '../../../../services/pageService';

// GET handler for /api/pages/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Get the page ID from the URL params
    const id = params.id;
    
    // Get the page from the service
    const page = await getPageById(id);
    
    // If the page doesn't exist, return a 404
    if (!page) {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      );
    }
    
    // Return the page as JSON
    return NextResponse.json(page);
  } catch (error) {
    console.error(`Error fetching page with ID ${params.id}:`, error);
    
    // Return an error response
    return NextResponse.json(
      { error: 'Failed to fetch page' },
      { status: 500 }
    );
  }
}
