import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import PageContent from '../../../components/PageContent';
import { getDirectusPageBySlug, getDirectusPages, processDirectusPage } from '../../../services/directusService';
import { analyzeDirectusContent } from '../../../utils/directusDebug';
import type { DirectusPage } from '../../../types/directus';

// This generates static params for static generation
export async function generateStaticParams() {
  // Get all pages from Directus
  const pages = await getDirectusPages();
  
  // Return them in the format Next.js expects
  return pages.map(page => ({ 
    slug: page.slug || generateSlug(page.title) 
  }));
}

// Helper function to generate a slug from a title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
    .trim(); // Trim leading/trailing spaces or hyphens
}

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  // Get the page data
  const page = await getDirectusPageBySlug(params.slug);
  
  // If page doesn't exist, return default metadata
  if (!page) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }
  
  // Process the page to resolve file URLs and other references
  const processedPage = await processDirectusPage(page);
  
  // Return metadata based on the page data
  return {
    title: `${processedPage.title} | Creator Share Tanzania`,
    description: processedPage.meta_description || `Learn about ${processedPage.title} at Creator Share Tanzania.`,
    openGraph: {
      title: processedPage.title,
      description: processedPage.meta_description || `Learn about ${processedPage.title} at Creator Share Tanzania.`,
      images: typeof processedPage.featured_image === 'string' ? [{ url: processedPage.featured_image }] : undefined,
    },
  };
}

export default async function DirectusPage({ params }: { params: { slug: string } }) {
  console.log(`Rendering page with slug: ${params.slug}`);
  
  // Get the page data from Directus
  const page = await getDirectusPageBySlug(params.slug);
  
  // If page data doesn't exist, show 404
  if (!page) {
    console.log(`No page found with slug: ${params.slug}`);
    notFound();
  }
  
  console.log(`Found page with ID: ${page.id}, Title: ${page.title}, Slug: ${page.slug || 'none'}`);
  
  // Process the page to resolve file URLs and other references
  const processedPage = await processDirectusPage(page);
  
  // Get the featured image URL
  const featuredImage = typeof processedPage.featured_image === 'string' 
    ? processedPage.featured_image 
    : '';
  
  // Get the tags
  const tags = Array.isArray(processedPage.tags) 
    ? processedPage.tags.map((tag: any) => typeof tag === 'string' ? tag : tag.name)
    : [];
    
  // Ensure content is in the right format for rendering
  let content = '';
  
  // Debug the content
  console.log(analyzeDirectusContent(processedPage.content));
  
  if (!processedPage.content) {
    console.log('Content is empty or null');
    content = '<p>No content available. Please add content to this page in Directus.</p>';
  } else if (typeof processedPage.content === 'string') {
    content = processedPage.content;
    console.log('Content length:', content.length);
    console.log('Content preview:', content.substring(0, 100));
  } else {
    // If content is an object or array, try to stringify it
    try {
      console.log('Content is not a string, attempting to stringify:', JSON.stringify(processedPage.content));
      content = JSON.stringify(processedPage.content);
    } catch (error) {
      console.error('Error stringifying content:', error);
      content = '<p>Error processing content. Please check the content format in Directus.</p>';
    }
  }
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Page header with title and optional featured image */}
        <div className="mb-8">
          {featuredImage && (
            <div className="mb-6">
              <img 
                src={featuredImage} 
                alt={processedPage.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4">{processedPage.title}</h1>
          
          {/* Optional metadata */}
          {processedPage.date_updated && (
            <div className="text-sm text-gray-500 mb-2">
              Last updated: {new Date(processedPage.date_updated).toLocaleDateString()}
            </div>
          )}
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag: any) => (
                <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Page content using the PageContent component */}
        <PageContent content={content} className="max-w-none" />
      </main>
      <Footer />
    </div>
  );
}
