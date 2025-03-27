import { NextResponse } from 'next/server';
import { getDirectusPageBySlug, processDirectusPage } from '../../../../services/directusService';
import type { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Get the slug from the URL params
    const { slug } = params;
    console.log(`API route: Fetching page with slug: ${slug}`);
    
    // Get the page from Directus
    const page = await getDirectusPageBySlug(slug);
    
    // If the page doesn't exist, return a 404
    if (!page) {
      console.log(`API route: No page found with slug: ${slug}`);
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      );
    }
    
    console.log(`API route: Found page with title: ${page.title}, ID: ${page.id}, Slug: ${page.slug || 'none'}`);
    
    // Process the page to resolve file URLs and other references
    const processedPage = await processDirectusPage(page);
    
    // Return the page as JSON
    return NextResponse.json({
      id: processedPage.id,
      title: processedPage.title,
      slug: processedPage.slug,
      content: processedPage.content,
      featuredImage: processedPage.featured_image,
      metaDescription: processedPage.meta_description,
      tags: processedPage.tags,
      status: processedPage.status,
      createdAt: processedPage.date_created,
      updatedAt: processedPage.date_updated
    });
  } catch (error) {
    console.error(`Error fetching page with slug ${params.slug}:`, error);
    
    // Return an error response
    return NextResponse.json(
      { error: 'Failed to fetch page from Directus' },
      { status: 500 }
    );
  }
}
