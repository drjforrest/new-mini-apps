import type { SearchParams, SearchResponse, Citation } from '../types/types';

const API_KEY = typeof window !== 'undefined' 
  ? process.env.NEXT_PUBLIC_SEMANTIC_SCHOLAR_API_KEY 
  : '';

const BASE_URL = 'https://api.semanticscholar.org/graph/v1';

const headersWithKey = {
  'x-api-key': API_KEY,
  'Content-Type': 'application/json',
};

const headersNoKey = {
  'Content-Type': 'application/json',
};

const headers = API_KEY ? headersWithKey : headersNoKey;

async function searchPapers({
  query,
  filters,
  page,
  limit,
}: SearchParams): Promise<SearchResponse> {
  if (!API_KEY) {
    throw new Error('Semantic Scholar API key is not configured');
  }
  
  const offset = (page - 1) * limit;
  
  const params = new URLSearchParams({
    query,
    offset: offset.toString(),
    limit: limit.toString(),
    fields: 'title,authors,abstract,year,venue,citationCount,url,doi',
  });

  if (filters.yearStart) {
    params.append('year', `${filters.yearStart}-${filters.yearEnd || new Date().getFullYear()}`);
  }

  try {
    const response = await fetch(`${BASE_URL}/paper/search?${params}`, { headers });
    
    if (!response.ok) {
      throw new Error('Failed to fetch papers from Semantic Scholar');
    }

    const data = await response.json();

    const citations: Citation[] = data.papers.map((paper: any) => ({
      id: paper.paperId,
      title: paper.title,
      authors: paper.authors.map((author: any) => ({
        name: author.name,
        authorId: author.authorId,
      })),
      abstract: paper.abstract,
      year: paper.year,
      journal: paper.venue,
      doi: paper.doi,
      url: paper.url,
      citationCount: paper.citationCount,
      source: 'semantic-scholar' as const,
    }));

    return {
      citations,
      total: data.total,
      offset,
      hasMore: offset + citations.length < data.total,
    };
  } catch (error) {
    console.error('Semantic Scholar API error:', error);
    throw error;
  }
}

async function fetchPaperDetails(paperId: string): Promise<Citation> {
  try {
    const response = await fetch(
      `${BASE_URL}/paper/${paperId}?fields=title,authors,abstract,year,venue,citationCount,url,doi`,
      { headers }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch paper details');
    }

    const paper = await response.json();

    return {
      id: paper.paperId,
      title: paper.title,
      authors: paper.authors.map((author: any) => ({
        name: author.name,
        authorId: author.authorId,
      })),
      abstract: paper.abstract,
      year: paper.year,
      journal: paper.venue,
      doi: paper.doi,
      url: paper.url,
      citationCount: paper.citationCount,
      source: 'semantic-scholar',
    };
  } catch (error) {
    console.error('Error fetching paper details:', error);
    throw error;
  }
}

export const SemanticScholarAPI = {
  searchPapers,
  fetchPaperDetails,
};