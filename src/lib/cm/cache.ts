import { Citation, SearchResult } from '../types/types';

const CACHE_KEYS = {
  CITATIONS: 'citations-cache',
  SEARCH_RESULTS: 'search-results-cache',
  CACHE_DURATION: 1000 * 60 * 60 * 24 // 24 hours
} as const;

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

export const citationCache = {
  getCitations(): Citation[] {
    try {
      const cached = localStorage.getItem(CACHE_KEYS.CITATIONS);
      if (!cached) return [];

      const { data, timestamp }: CacheItem<Citation[]> = JSON.parse(cached);
      const isExpired = Date.now() - timestamp > CACHE_KEYS.CACHE_DURATION;
      
      return isExpired ? [] : data;
    } catch {
      return [];
    }
  },

  setCitations(citations: Citation[]) {
    const cacheItem: CacheItem<Citation[]> = {
      data: citations,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEYS.CITATIONS, JSON.stringify(cacheItem));
  },

  getSearchResults(query: string): SearchResult[] | null {
    try {
      const cached = localStorage.getItem(`${CACHE_KEYS.SEARCH_RESULTS}-${query}`);
      if (!cached) return null;

      const { data, timestamp }: CacheItem<SearchResult[]> = JSON.parse(cached);
      const isExpired = Date.now() - timestamp > CACHE_KEYS.CACHE_DURATION;
      
      return isExpired ? null : data;
    } catch {
      return null;
    }
  },

  setSearchResults(query: string, results: SearchResult[]) {
    const cacheItem: CacheItem<SearchResult[]> = {
      data: results,
      timestamp: Date.now()
    };
    localStorage.setItem(
      `${CACHE_KEYS.SEARCH_RESULTS}-${query}`, 
      JSON.stringify(cacheItem)
    );
  }
}; 