import type { SearchParams, SearchResponse, Citation, SearchResult } from 'types/cm/types';
import { fetchCitationFromCrossRef } from '@lib/cm/pdfExtractor';

const BASE_URL = 'https://api.crossref.org/works';

function citationToSearchResult(citation: Citation, index: number): SearchResult {
  return {
    ...citation,
    score: 1 - (index * 0.1) // Simple scoring based on result order
  };
}

async function searchPapers({
  query,
  page,
  limit,
}: SearchParams): Promise<{ citations: SearchResult[] } & Omit<SearchResponse, 'citations'>> {
  const params = new URLSearchParams({
    query,
    rows: limit.toString(),
    offset: ((page - 1) * limit).toString(),
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`, {
      headers: {
        'User-Agent': 'CitationManager/1.0 (mailto:your@email.com)'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch from CrossRef');
    }

    const data = await response.json();
    const items = data.message.items;

    // Use existing DOI fetch function for consistent formatting
    const citations = await Promise.all(
      items.map(item => 
        item.DOI ? 
          fetchCitationFromCrossRef(item.DOI).catch(() => null) : 
          null
      )
    );

    const searchResults = citations
      .filter((c): c is Citation => c !== null)
      .map(citationToSearchResult);

    return {
      citations: searchResults,
      total: data.message['total-results'],
      offset: (page - 1) * limit,
      hasMore: (page * limit) < data.message['total-results']
    };
  } catch (error) {
    console.error('CrossRef API error:', error);
    throw error;
  }
}

export const CrossRefAPI = {
  searchPapers
};
