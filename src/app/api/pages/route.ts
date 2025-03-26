import { NextResponse } from 'next/server';
import { getAllPages } from '../../../services/pageService';

// GET handler for /api/pages
export async function GET() {
  try {
    // Get all pages from the service
    const pages = await getAllPages();
    
    // Return the pages as JSON
    return NextResponse.json(pages);
  } catch (error) {
    console.error('Error fetching pages:', error);
    
    // Return an error response
    return NextResponse.json(
      { error: 'Failed to fetch pages' },
      { status: 500 }
    );
  }
}
