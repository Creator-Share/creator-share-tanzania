import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import PageContent from '../../../components/PageContent';
import { getPageBySlug, getAllPageSlugs } from '../../../services/pageService';
import { Metadata } from 'next';

// This generates static params for static generation
export async function generateStaticParams() {
  try {
    // Get all page slugs from the service
    const slugs = await getAllPageSlugs();
    
    // Return them in the format Next.js expects
    return slugs.map((slug) => ({
      slug: slug
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  // Get the page data
  const { slug } = await params;
  const pageData = await getPageBySlug(slug);
  
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

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log('Page component: Fetching data for slug:', slug);
  
  // Get the page data from the service
  const pageData = await getPageBySlug(slug);
  
  console.log('Page component: Received page data:', pageData);
  
  // If page data doesn't exist, show 404
  if (!pageData) {
    console.log('Page component: No page data found, showing 404');
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
              <Image 
                src={pageData.featuredImage} 
                alt={pageData.title}
                width={1200}
                height={400}
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
