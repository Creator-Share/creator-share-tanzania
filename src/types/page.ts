// Define the interface for page data used in navigation
export interface Page {
  id: string;
  title: string;
  slug: string;
  status: string;
}

// Define the types for our page data
export interface PageData {
  id: string;
  title: string;
  content: string;
  slug: string;
  status: string;
  featuredImage?: string;
  metaDescription?: string;
  createdAt?: string;
  updatedAt?: string;
  author?: string;
  tags?: string[];
}

// Define the response type for the API
export interface PageResponse {
  data: PageData;
  success: boolean;
  message?: string;
}

// Define the response type for multiple pages
export interface PagesResponse {
  data: PageData[];
  success: boolean;
  message?: string;
  pagination?: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
