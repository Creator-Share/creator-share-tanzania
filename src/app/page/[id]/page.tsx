import { notFound } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import PageContent from '../../../components/PageContent';
import { getPageById, getAllPageIds } from '../../../services/pageService';
import { PageData } from '../../../types/page';
import { Metadata } from 'next';

// This generates static params for static generation
export async function generateStaticParams() {
  // Get all page IDs from the service
  const pageIds = await getAllPageIds();
  
  // Return them in the format Next.js expects
  return pageIds.map(id => ({ id }));
}

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  // Get the page data
  const pageData = await getPageById(params.id);
  
  // If page doesn't exist, return default metadata
  if (!pageData) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }
  
  // Return metadata based on the page data
  return {
    title: `${pageData.title} | Creator Share Tanzania`,
    description: pageData.metaDescription || `Learn about ${pageData.title} at Creator Share Tanzania.`,
    openGraph: {
      title: pageData.title,
      description: pageData.metaDescription || `Learn about ${pageData.title} at Creator Share Tanzania.`,
      images: pageData.featuredImage ? [{ url: pageData.featuredImage }] : undefined,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  // Get the page data from the service
  const pageData = await getPageById(params.id);
  
  // If page data doesn't exist, show 404
  if (!pageData) {
    notFound();
  }
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Page header with title and optional featured image */}
        <div className="mb-8">
          {pageData.featuredImage && (
            <div className="mb-6">
              <img 
                src={pageData.featuredImage} 
                alt={pageData.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4">{pageData.title}</h1>
          
          {/* Optional metadata */}
          {pageData.updatedAt && (
            <div className="text-sm text-gray-500 mb-2">
              Last updated: {new Date(pageData.updatedAt).toLocaleDateString()}
            </div>
          )}
          
          {pageData.tags && pageData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {pageData.tags.map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Page content using the PageContent component */}
        <PageContent content={pageData.content} className="max-w-none" />
      </main>
      <Footer />
    </div>
  );
}
