// Types for Directus API responses and data structures

// Base Directus item type
export interface DirectusItem {
  id: string;
  date_created?: string;
  date_updated?: string;
  user_created?: string;
  user_updated?: string;
}

// Directus page type
export interface DirectusPage extends DirectusItem {
  status?: 'published' | 'draft' | 'archived';
  title: string;
  slug?: string;
  content?: string;
  permalink?: string;
  published_at?: string;
  seo?: {
    title?: string;
    no_index?: boolean;
    meta_description?: string;
    [key: string]: any;
  };
  blocks?: string[] | DirectusBlock[];
  featured_image?: DirectusFile | string;
  meta_description?: string;
  tags?: DirectusTag[] | string[];
  // Add more fields as needed based on your Directus schema
}

// Directus block type
export interface DirectusBlock extends DirectusItem {
  collection: string;
  item: string;
  type?: string;
  content?: string;
  [key: string]: any;
}

// Directus file type
export interface DirectusFile extends DirectusItem {
  storage: string;
  filename_disk: string;
  filename_download: string;
  title: string;
  type: string;
  folder?: string;
  width?: number;
  height?: number;
  filesize?: number;
  location?: string;
  metadata?: Record<string, any>;
}

// Directus tag type
export interface DirectusTag extends DirectusItem {
  name: string;
  slug: string;
}

// Directus API response for a single item
export interface DirectusItemResponse<T> {
  data: T;
}

// Directus API response for multiple items
export interface DirectusItemsResponse<T> {
  data: T[];
  meta?: {
    filter_count?: number;
    total_count?: number;
    page?: number;
    page_count?: number;
    per_page?: number;
  };
}

// Directus error response
export interface DirectusErrorResponse {
  errors: {
    message: string;
    extensions: {
      code: string;
    };
  }[];
}
