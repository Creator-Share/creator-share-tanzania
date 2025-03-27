/**
 * Utility functions for API calls
 */

// Base API URL - would be set to your actual API endpoint
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// Default request timeout in milliseconds
const DEFAULT_TIMEOUT = 10000;

// API request options type
interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  timeout?: number;
  cache?: RequestCache;
}

// API response type
export interface ApiResponse<T> {
  data: T | null;
  success: boolean;
  message?: string;
  statusCode?: number;
}

/**
 * Make an API request with error handling and timeout
 * @param endpoint The API endpoint (without the base URL)
 * @param options Request options
 * @returns Promise with the API response
 */
export async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  const {
    method = 'GET',
    headers = {},
    body,
    timeout = DEFAULT_TIMEOUT,
    cache = 'default'
  } = options;

  // Prepare URL
  const url = endpoint.startsWith('http')
    ? endpoint
    : `${API_BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  // Prepare headers
  const requestHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...headers
  };

  // Prepare request options
  const requestOptions: RequestInit = {
    method,
    headers: requestHeaders,
    cache,
    next: { revalidate: 60 } // Revalidate cache every 60 seconds (Next.js 13+ feature)
  };

  // Add body for non-GET requests
  if (method !== 'GET' && body) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    requestOptions.signal = controller.signal;

    // Make the request
    const response = await fetch(url, requestOptions);
    clearTimeout(timeoutId);

    // Parse response
    const data = await response.json();

    // Return formatted response
    return {
      data: response.ok ? data : null,
      success: response.ok,
      message: response.ok ? 'Success' : data.message || response.statusText,
      statusCode: response.status
    };
  } catch (error: unknown) {
    // Handle errors
    const isTimeout = error instanceof Error && error.name === 'AbortError';
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return {
      data: null,
      success: false,
      message: isTimeout ? `Request timed out after ${timeout}ms` : errorMessage,
      statusCode: isTimeout ? 408 : 500
    };
  }
}

/**
 * GET request helper
 * @param endpoint The API endpoint
 * @param options Request options
 * @returns Promise with the API response
 */
export function get<T>(endpoint: string, options: Omit<RequestOptions, 'method'> = {}) {
  return apiRequest<T>(endpoint, { ...options, method: 'GET' });
}

/**
 * POST request helper
 * @param endpoint The API endpoint
 * @param body Request body
 * @param options Request options
 * @returns Promise with the API response
 */
export function post<T>(
  endpoint: string,
  body: unknown,
  options: Omit<RequestOptions, 'method' | 'body'> = {}
) {
  return apiRequest<T>(endpoint, { ...options, method: 'POST', body });
}

/**
 * PUT request helper
 * @param endpoint The API endpoint
 * @param body Request body
 * @param options Request options
 * @returns Promise with the API response
 */
export function put<T>(
  endpoint: string,
  body: unknown,
  options: Omit<RequestOptions, 'method' | 'body'> = {}
) {
  return apiRequest<T>(endpoint, { ...options, method: 'PUT', body });
}

/**
 * DELETE request helper
 * @param endpoint The API endpoint
 * @param options Request options
 * @returns Promise with the API response
 */
export function del<T>(endpoint: string, options: Omit<RequestOptions, 'method'> = {}) {
  return apiRequest<T>(endpoint, { ...options, method: 'DELETE' });
}

/**
 * PATCH request helper
 * @param endpoint The API endpoint
 * @param body Request body
 * @param options Request options
 * @returns Promise with the API response
 */
export function patch<T>(
  endpoint: string,
  body: unknown,
  options: Omit<RequestOptions, 'method' | 'body'> = {}
) {
  return apiRequest<T>(endpoint, { ...options, method: 'PATCH', body });
}
