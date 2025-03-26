import {
  DirectusPage,
  DirectusItemResponse,
  DirectusItemsResponse,
  DirectusErrorResponse
} from '../types/directus';

// Helper function to generate a slug from a title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
    .trim(); // Trim leading/trailing spaces or hyphens
}

// Directus API configuration
// These will be loaded from environment variables
const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || '';
const DIRECTUS_TOKEN = process.env.DIRECTUS_API_TOKEN || '';
const DIRECTUS_EMAIL = process.env.DIRECTUS_EMAIL || '';
const DIRECTUS_PASSWORD = process.env.DIRECTUS_PASSWORD || '';

// Check if Directus is configured
const isDirectusConfigured = DIRECTUS_URL && (DIRECTUS_TOKEN || (DIRECTUS_EMAIL && DIRECTUS_PASSWORD));

// Store the access token if using email/password authentication
let accessToken = DIRECTUS_TOKEN || '';

/**
 * Authenticate with Directus using email and password
 * @returns Promise with the access token
 */
async function authenticateWithDirectus(): Promise<string> {
  if (!DIRECTUS_EMAIL || !DIRECTUS_PASSWORD) {
    throw new Error('Directus email or password not configured');
  }

  try {
    const response = await fetch(`${DIRECTUS_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: DIRECTUS_EMAIL,
        password: DIRECTUS_PASSWORD,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0]?.message || `Authentication failed: ${response.status}`);
    }

    const data = await response.json();
    return data.data.access_token;
  } catch (error) {
    console.error('Directus authentication failed:', error);
    throw error;
  }
}

/**
 * Base function to make requests to the Directus API
 * @param endpoint The API endpoint (without the base URL)
 * @param options Request options
 * @returns Promise with the API response
 */
async function directusRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!isDirectusConfigured) {
    console.error('Directus API is not configured properly:');
    console.error(`- NEXT_PUBLIC_DIRECTUS_URL: ${DIRECTUS_URL ? 'Set' : 'Not set'}`);
    console.error(`- DIRECTUS_API_TOKEN: ${DIRECTUS_TOKEN ? 'Set' : 'Not set'}`);
    console.error(`- DIRECTUS_EMAIL: ${DIRECTUS_EMAIL ? 'Set' : 'Not set'}`);
    console.error(`- DIRECTUS_PASSWORD: ${DIRECTUS_PASSWORD ? 'Set (value hidden)' : 'Not set'}`);
    throw new Error('Directus API is not configured. Please set NEXT_PUBLIC_DIRECTUS_URL and either DIRECTUS_API_TOKEN or DIRECTUS_EMAIL and DIRECTUS_PASSWORD environment variables.');
  }

  // If using email/password and no access token yet, authenticate
  if (!accessToken && DIRECTUS_EMAIL && DIRECTUS_PASSWORD) {
    try {
      accessToken = await authenticateWithDirectus();
    } catch (error) {
      console.error('Failed to authenticate with Directus:', error);
      throw error;
    }
  }

  // Prepare URL
  const url = `${DIRECTUS_URL}/items/${endpoint}`;

  // Prepare headers
  const headers = new Headers(options.headers || {});
  headers.set('Content-Type', 'application/json');
  
  // Add authorization header if we have an access token
  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`);
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      next: { revalidate: 60 } // Revalidate cache every 60 seconds
    });

    // Handle 401 Unauthorized - might need to re-authenticate
    if (response.status === 401 && DIRECTUS_EMAIL && DIRECTUS_PASSWORD) {
      try {
        // Try to get a new access token
        accessToken = await authenticateWithDirectus();
        
        // Update headers with new token
        headers.set('Authorization', `Bearer ${accessToken}`);
        
        // Retry the request
        const retryResponse = await fetch(url, {
          ...options,
          headers,
          next: { revalidate: 60 }
        });
        
        if (!retryResponse.ok) {
          const errorData = await retryResponse.json() as DirectusErrorResponse;
          throw new Error(errorData.errors?.[0]?.message || `Directus API error: ${retryResponse.status}`);
        }
        
        return await retryResponse.json() as T;
      } catch (authError) {
        console.error('Failed to re-authenticate with Directus:', authError);
        throw authError;
      }
    }

    if (!response.ok) {
      console.error(`Directus API error (${response.status}): ${response.statusText}`);
      let errorMessage = `Directus API error: ${response.status}`;
      
      try {
        const errorData = await response.json() as DirectusErrorResponse;
        errorMessage = errorData.errors?.[0]?.message || errorMessage;
        console.error('Error details:', errorData);
      } catch (parseError) {
        console.error('Could not parse error response:', parseError);
      }
      
      throw new Error(errorMessage);
    }

    return await response.json() as T;
  } catch (error) {
    console.error('Directus API request failed:', error);
    throw error;
  }
}

// Store a mapping of slugs to page IDs
let slugToIdMap: Record<string, string> = {};

/**
 * Get all published pages from Directus
 * @returns Promise with an array of pages
 */
export async function getDirectusPages(): Promise<DirectusPage[]> {
  try {
    // If Directus is not configured, return empty array
    if (!isDirectusConfigured) {
      console.warn('Directus API is not configured. Returning empty pages array.');
      return [];
    }

    // Fetch pages from Directus with all fields expanded
    // The fields parameter ensures we get all fields, including nested ones
    const response = await directusRequest<DirectusItemsResponse<DirectusPage>>(
      'pages?fields=*.*',
      {
        method: 'GET',
        cache: 'no-cache'
      }
    );
    
    // Process pages to ensure they have slugs and build the slug-to-id map
    const processedPages = response.data.map(page => {
      // If page doesn't have a slug, generate one from the title
      if (!page.slug && page.title) {
        page.slug = generateSlug(page.title);
      }
      
      // Add to the slug-to-id map if we have a slug
      if (page.slug) {
        slugToIdMap[page.slug] = page.id;
      }
      
      return page;
    });

    // Filter out non-published pages if needed
    return processedPages.filter(page => page.status === 'published' || !page.status);
  } catch (error) {
    console.error('Failed to fetch Directus pages:', error);
    return [];
  }
}

/**
 * Fetch pages directly from Directus using a slug filter
 * @param slug The page slug to filter by
 * @returns Promise with the page data or null if not found
 */
export async function fetchDirectusPagesBySlug(slug: string): Promise<DirectusPage[]> {
  try {
    // If Directus is not configured, return empty array
    if (!isDirectusConfigured) {
      console.warn('Directus API is not configured. Returning empty array.');
      return [];
    }

    // Fetch pages from Directus with the slug filter
    const response = await directusRequest<DirectusItemsResponse<DirectusPage>>(
      `pages?filter[slug][_eq]=${encodeURIComponent(slug)}&fields=*.*`,
      {
        method: 'GET',
        cache: 'no-cache'
      }
    );
    
    // Filter out non-published pages if needed
    return response.data.filter(page => page.status === 'published' || !page.status);
  } catch (error) {
    console.error(`Failed to fetch Directus pages with slug ${slug}:`, error);
    return [];
  }
}

/**
 * Get a single page by slug from Directus
 * @param slug The page slug
 * @returns Promise with the page data or null if not found
 */
export async function getDirectusPageBySlug(slug: string): Promise<DirectusPage | null> {
  try {
    // If Directus is not configured, return null
    if (!isDirectusConfigured) {
      console.warn('Directus API is not configured. Returning null for page.');
      return null;
    }

    // First, try to get the page ID from the slug-to-id map
    const pageId = slugToIdMap[slug];
    
    if (pageId) {
      // If we have the ID, fetch the page directly by ID
      return await getDirectusPageById(pageId);
    }
    
    // If we don't have the ID in the map, try to fetch by slug filter
    const pages = await fetchDirectusPagesBySlug(slug);
    
    if (pages.length > 0) {
      const page = pages[0];
      // Update the slug-to-id map for future use
      slugToIdMap[slug] = page.id;
      return page;
    }
    
    // If still not found, try to get all pages and find by slug
    // This is a fallback in case the slug was generated from the title
    const allPages = await getDirectusPages();
    const page = allPages.find(p => p.slug === slug);
    
    if (page) {
      return page;
    }
    return null;
  } catch (error) {
    console.error(`Failed to fetch Directus page with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Get a single page by ID from Directus
 * @param id The page ID
 * @returns Promise with the page data or null if not found
 */
export async function getDirectusPageById(id: string): Promise<DirectusPage | null> {
  try {
    // If Directus is not configured, return null
    if (!isDirectusConfigured) {
      console.warn('Directus API is not configured. Returning null for page.');
      return null;
    }

    // Fetch page from Directus
    const response = await directusRequest<DirectusItemResponse<DirectusPage>>(
      `pages/${id}`,
      {
        method: 'GET',
        cache: 'no-cache'
      }
    );

    // Only return published pages
    return response.data.status === 'published' ? response.data : null;
  } catch (error) {
    console.error(`Failed to fetch Directus page with ID ${id}:`, error);
    return null;
  }
}

/**
 * Get the URL for a Directus file
 * @param fileId The file ID
 * @returns The file URL
 */
export function getDirectusFileUrl(fileId: string): string {
  if (!DIRECTUS_URL || !fileId) {
    return '';
  }

  // If we have an access token, include it in the URL
  if (accessToken) {
    return `${DIRECTUS_URL}/assets/${fileId}?access_token=${accessToken}`;
  }

  return `${DIRECTUS_URL}/assets/${fileId}`;
}

/**
 * Fetch a block by ID from Directus
 * @param id The block ID
 * @returns Promise with the block data or null if not found
 */
export async function getDirectusBlockById(id: string): Promise<any | null> {
  try {
    // If Directus is not configured, return null
    if (!isDirectusConfigured) {
      console.warn('Directus API is not configured. Returning null for block.');
      return null;
    }

    // Try to fetch from different collections that might contain blocks
    // This is a generic approach since we don't know which collection contains the blocks
    const collections = ['blocks', 'content_blocks', 'page_blocks'];
    
    for (const collection of collections) {
      try {
        const response = await directusRequest<DirectusItemResponse<any>>(
          `${collection}/${id}`,
          {
            method: 'GET',
            cache: 'no-cache'
          }
        );
        
        if (response && response.data) {
          // If the block has a collection and item field, it's a reference to another item
          if (response.data.collection && response.data.item) {
            
            // Fetch the referenced item
            try {
              const referencedItem = await directusRequest<DirectusItemResponse<any>>(
                `${response.data.collection}/${response.data.item}`,
                {
                  method: 'GET',
                  cache: 'no-cache'
                }
              );
              
              if (referencedItem && referencedItem.data) {
                // Return both the block and the referenced item
                return {
                  ...response.data,
                  referencedItem: referencedItem.data
                };
              }
            } catch (refError) {
              console.error(`Failed to fetch referenced item ${response.data.collection}/${response.data.item}:`, refError);
            }
          }
          
          return response.data;
        }
      } catch (error) {
        // Continue to the next collection if this one fails
      }
    }
    
    // If we couldn't find the block in any collection, try a direct request
    try {
      const response = await fetch(`${DIRECTUS_URL}/items/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        next: { revalidate: 60 }
      });
      
      if (response.ok) {
        const data = await response.json();
        // If the block has a collection and item field, it's a reference to another item
        if (data.data.collection && data.data.item) {
          
          // Fetch the referenced item
          try {
            const referencedResponse = await fetch(`${DIRECTUS_URL}/items/${data.data.collection}/${data.data.item}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
              },
              next: { revalidate: 60 }
            });
            
            if (referencedResponse.ok) {
              const referencedData = await referencedResponse.json();
              // Return both the block and the referenced item
              return {
                ...data.data,
                referencedItem: referencedData.data
              };
            }
          } catch (refError) {
            console.error(`Failed to fetch referenced item ${data.data.collection}/${data.data.item}:`, refError);
          }
        }
        
        return data.data;
      }
    } catch (error) {
      console.error(`Failed to fetch block with direct request:`, error);
    }
    
    console.error(`Block with ID ${id} not found in any collection`);
    return null;
  } catch (error) {
    console.error(`Failed to fetch Directus block with ID ${id}:`, error);
    return null;
  }
}

/**
 * Process blocks into HTML content
 * @param blocks The blocks to process
 * @returns HTML content as a string
 */
async function processBlocks(blocks: string[] | any[]): Promise<string> {
  if (!blocks || blocks.length === 0) {
    return '';
  }
  
  let htmlContent = '';
  
  // Process each block
  for (const block of blocks) {
    if (typeof block === 'string') {
      // If block is a string (ID), fetch the block data
      const blockData = await getDirectusBlockById(block);
      if (blockData) {
        htmlContent += await processBlockContent(blockData);
      }
    } else {
      // If block is already an object, process it directly
      htmlContent += await processBlockContent(block);
    }
  }
  
  return htmlContent;
}

/**
 * Process a single block's content
 * @param block The block to process
 * @returns HTML content as a string
 */
async function processBlockContent(block: any): Promise<string> {
  if (!block) return '';
  
  // If the block has collection and item fields but no referencedItem yet, fetch it
  if (block.collection && block.item && !block.referencedItem) {
    try {
      const referencedItem = await directusRequest<DirectusItemResponse<any>>(
        `${block.collection}/${block.item}`,
        {
          method: 'GET',
          cache: 'no-cache'
        }
      );
      
      if (referencedItem && referencedItem.data) {
        block.referencedItem = referencedItem.data;
      }
    } catch (error) {
      console.error(`Failed to fetch referenced item ${block.collection}/${block.item}:`, error);
    }
  }
  
  // If the block has a referencedItem, use that for content
  if (block.referencedItem) {
    // Handle different block types
    switch (block.collection) {
      case 'block_richtext':
        // Check for content in the referenced item
        if (block.referencedItem.content && typeof block.referencedItem.content === 'string') {
          return block.referencedItem.content;
        }
        
        // Check for text in the referenced item
        if (block.referencedItem.text && typeof block.referencedItem.text === 'string') {
          return block.referencedItem.text;
        }
        
        // Check for body in the referenced item
        if (block.referencedItem.body && typeof block.referencedItem.body === 'string') {
          return block.referencedItem.body;
        }
        
        // If we have an object with a content property, try to use that
        if (block.referencedItem.content && typeof block.referencedItem.content === 'object') {
          try {
            return JSON.stringify(block.referencedItem.content);
          } catch (error) {
            console.error('Error stringifying content object:', error);
          }
        }
        break;
        
      case 'block_hero':
        // Create HTML for hero block
        let heroHtml = '';
        
        if (block.referencedItem.headline) {
          heroHtml += `<h1 class="text-4xl font-bold mb-2">${block.referencedItem.headline}</h1>`;
        }
        
        if (block.referencedItem.tagline) {
          heroHtml += `<h2 class="text-2xl mb-4">${block.referencedItem.tagline}</h2>`;
        }
        
        if (block.referencedItem.description) {
          heroHtml += `<div class="mb-6">${block.referencedItem.description}</div>`;
        }
        
        // If there's an image, add it
        if (block.referencedItem.image && typeof block.referencedItem.image === 'string') {
          const imageUrl = getDirectusFileUrl(block.referencedItem.image);
          heroHtml += `<div class="mb-6"><img src="${imageUrl}" alt="${block.referencedItem.headline || 'Hero image'}" class="max-w-full rounded-lg"></div>`;
        }
        
        return heroHtml;
        
      case 'block_gallery':
        // Create HTML for gallery block
        let galleryHtml = '';
        
        if (block.referencedItem.headline) {
          galleryHtml += `<h2 class="text-3xl font-bold mb-2">${block.referencedItem.headline}</h2>`;
        }
        
        if (block.referencedItem.tagline) {
          galleryHtml += `<h3 class="text-xl mb-4">${block.referencedItem.tagline}</h3>`;
        }
        
        // If there are gallery items, create a grid
        if (block.referencedItem.items && Array.isArray(block.referencedItem.items)) {
          galleryHtml += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">`;
          
          // For now, just show placeholders for gallery items
          for (let i = 0; i < block.referencedItem.items.length; i++) {
            galleryHtml += `
              <div class="bg-gray-100 p-4 rounded-lg">
                <div class="h-40 bg-gray-200 rounded-lg mb-2"></div>
                <p class="font-medium">Gallery Item ${i + 1}</p>
              </div>
            `;
          }
          
          galleryHtml += `</div>`;
        }
        
        return galleryHtml;
        
      default:
        // For unknown block types, try to extract common fields
        let html = '';
        
        // Try to extract headline/title
        if (block.referencedItem.headline) {
          html += `<h2 class="text-2xl font-bold mb-4">${block.referencedItem.headline}</h2>`;
        } else if (block.referencedItem.title) {
          html += `<h2 class="text-2xl font-bold mb-4">${block.referencedItem.title}</h2>`;
        }
        
        // Try to extract description/content
        if (block.referencedItem.description) {
          html += `<div class="mb-4">${block.referencedItem.description}</div>`;
        } else if (block.referencedItem.content) {
          html += `<div class="mb-4">${block.referencedItem.content}</div>`;
        } else if (block.referencedItem.text) {
          html += `<div class="mb-4">${block.referencedItem.text}</div>`;
        }
        
        // If we couldn't extract anything, show the block data
        if (!html) {
          html = `<div class="p-4 border border-gray-200 rounded-lg mb-4">
            <h3 class="font-medium mb-2">Block: ${block.collection}</h3>
            <pre class="bg-gray-100 p-2 rounded text-sm overflow-auto">${JSON.stringify(block.referencedItem, null, 2)}</pre>
          </div>`;
        }
        
        return html;
    }
  }
  
  // Check if the block has a content field
  if (block.content && typeof block.content === 'string') {
    return block.content;
  }
  
  // Check if the block has a text field
  if (block.text && typeof block.text === 'string') {
    return block.text;
  }
  
  // Check if the block has a body field
  if (block.body && typeof block.body === 'string') {
    return block.body;
  }
  
  // Check if the block has an html field
  if (block.html && typeof block.html === 'string') {
    return block.html;
  }
  
  // If we can't find a content field, format the block data nicely
  try {
    return `<div class="p-4 border border-gray-200 rounded-lg mb-4">
      <h3 class="font-medium mb-2">Block Data</h3>
      <pre class="bg-gray-100 p-2 rounded text-sm overflow-auto">${JSON.stringify(block, null, 2)}</pre>
    </div>`;
  } catch (error) {
    console.error('Error stringifying block:', error);
    return '<p>Error processing block content</p>';
  }
}

/**
 * Process a Directus page to resolve file URLs and other references
 * @param page The Directus page
 * @returns The processed page
 */
export async function processDirectusPage(page: DirectusPage): Promise<DirectusPage> {
  if (!page) return page;

  // Create a copy of the page to avoid modifying the original
  const processedPage = { ...page };

  // Ensure the page has a slug
  if (!processedPage.slug && processedPage.title) {
    processedPage.slug = generateSlug(processedPage.title);
  }

  // Process featured image
  if (processedPage.featured_image && typeof processedPage.featured_image === 'string') {
    processedPage.featured_image = getDirectusFileUrl(processedPage.featured_image);
  } else if (processedPage.featured_image && typeof processedPage.featured_image === 'object') {
    if ('id' in processedPage.featured_image) {
      processedPage.featured_image = getDirectusFileUrl(processedPage.featured_image.id);
    }
  }

  // Process tags if needed
  if (processedPage.tags && Array.isArray(processedPage.tags)) {
    // Handle tags based on your schema
  }

  // Handle content field based on its type
  if (processedPage.content) {
    if (typeof processedPage.content === 'string') {
      // Content is already a string, no conversion needed
    } else if (typeof processedPage.content === 'object') {
      // Cast content to any to handle dynamic properties
      const contentObj = processedPage.content as any;
      
      // Check if it's a block reference (has collection and item fields)
      if (contentObj && contentObj.collection && contentObj.item) {
        try {
          // Process it as a block
          const blockContent = await processBlockContent(contentObj);
          if (blockContent) {
            processedPage.content = blockContent;
          } else {
            console.error('Failed to process block content');
            processedPage.content = '';
          }
        } catch (error) {
          console.error('Error processing block content:', error);
          processedPage.content = '';
        }
      }
      // Check if it's a WYSIWYG field with a 'body' property
      else if (contentObj && 'body' in contentObj && typeof contentObj.body === 'string') {
        processedPage.content = contentObj.body;
      } 
      // Check if it's a rich text field with a 'content' property
      else if (contentObj && 'content' in contentObj) {
        if (typeof contentObj.content === 'string') {
          processedPage.content = contentObj.content;
        } else if (Array.isArray(contentObj.content)) {
          // If content is an array, try to process it as blocks
          try {
            processedPage.content = await processBlocks(contentObj.content);
          } catch (error) {
            console.error('Error processing content array as blocks:', error);
            processedPage.content = '';
          }
        } else {
          try {
            processedPage.content = JSON.stringify(contentObj.content);
          } catch (error) {
            console.error('Error converting content.content to string:', error);
            processedPage.content = '';
          }
        }
      }
      // Otherwise, try to process as a block first, then fallback to stringify
      else {
        try {
          const blockContent = await processBlockContent(contentObj);
          if (blockContent) {
            processedPage.content = blockContent;
          } else {
            processedPage.content = JSON.stringify(processedPage.content);
          }
        } catch (error) {
          console.error('Error processing content:', error);
          processedPage.content = '';
        }
      }
    }
  } 
  // If no content field but has blocks, process the blocks
  else if (processedPage.blocks && Array.isArray(processedPage.blocks)) {
    try {
      processedPage.content = await processBlocks(processedPage.blocks);
    } catch (error) {
      console.error('Error processing blocks:', error);
      processedPage.content = '';
    }
  }
  // If no content or blocks, set empty content
  else {
    processedPage.content = '';
  }

  return processedPage;
}
