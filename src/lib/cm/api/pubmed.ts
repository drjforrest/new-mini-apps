import type { SearchParams, SearchResponse, Citation } from '../types/types';

interface PubMedAuthor {
  name: string;
  affiliations?: string[];
}

interface PubMedArticleId {
  idtype: string;
  value: string;
}

interface PubMedPaper {
  title: string;
  authors: PubMedAuthor[];
  abstract: string;
  pubdate: string;
  fulljournalname: string;
  articleids: PubMedArticleId[];
}

const BASE_URL = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
const API_KEY = typeof window !== 'undefined' 
  ? process.env.NEXT_PUBLIC_PUBMED_API_KEY 
  : '';

async function searchPapers({
  query,
  filters,
  page,
  limit,
}: SearchParams): Promise<SearchResponse> {
  if (!API_KEY) {
    throw new Error('PubMed API key is not configured');
  }
  
  const retStart = (page - 1) * limit;
  
  // First, search for IDs
  const searchParams = new URLSearchParams({
    db: 'pubmed',
    term: query,
    retstart: retStart.toString(),
    retmax: limit.toString(),
    api_key: API_KEY,
    retmode: 'json',
    sort: filters.sortBy === 'year' ? 'pub+date' : 'relevance',
  });

  if (filters.yearStart) {
    searchParams.append('mindate', filters.yearStart.toString());
    searchParams.append('maxdate', (filters.yearEnd || new Date().getFullYear()).toString());
  }

  try {
    // Get IDs first
    const searchResponse = await fetch(
      `${BASE_URL}/esearch.fcgi?${searchParams}`
    );

    if (!searchResponse.ok) {
      throw new Error('Failed to search PubMed');
    }

    const searchData = await searchResponse.json();
    const ids = searchData.esearchresult.idlist;

    if (ids.length === 0) {
      return {
        citations: [],
        total: 0,
        offset: retStart,
        hasMore: false,
      };
    }

    // Fetch details for found IDs
    const summaryParams = new URLSearchParams({
      db: 'pubmed',
      id: ids.join(','),
      api_key: API_KEY,
      retmode: 'json',
    });

    const summaryResponse = await fetch(
      `${BASE_URL}/esummary.fcgi?${summaryParams}`
    );

    if (!summaryResponse.ok) {
      throw new Error('Failed to fetch PubMed summaries');
    }

    const summaryData = await summaryResponse.json();
    
    const citations: Citation[] = ids.map((id: string) => {
      const paper: PubMedPaper = summaryData.result[id];
      return {
        id: id,
        title: paper.title,
        authors: paper.authors.map((author: PubMedAuthor) => ({
          name: author.name,
          affiliations: author.affiliations || [],
        })),
        abstract: paper.abstract,
        year: parseInt(paper.pubdate.split(' ')[0]),
        journal: paper.fulljournalname,
        doi: paper.articleids.find((id: PubMedArticleId) => id.idtype === 'doi')?.value,
        url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
        source: 'pubmed' as const,
      };
    });

    return {
      citations,
      total: parseInt(searchData.esearchresult.count),
      offset: retStart,
      hasMore: retStart + citations.length < parseInt(searchData.esearchresult.count),
    };
  } catch (error) {
    console.error('PubMed API error:', error);
    throw error;
  }
}

async function fetchPaperDetails(paperId: string): Promise<Citation> {
  try {
    const params = new URLSearchParams({
      db: 'pubmed',
      id: paperId,
      api_key: API_KEY || '',
      retmode: 'json',
    });

    const response = await fetch(`${BASE_URL}/esummary.fcgi?${params}`);

    if (!response.ok) {
      throw new Error('Failed to fetch paper details from PubMed');
    }

    const data = await response.json();
    const paper = data.result[paperId];

    return {
      id: paperId,
      title: paper.title,
      authors: paper.authors.map((author: PubMedAuthor) => ({
        name: author.name,
        affiliations: author.affiliations || [],
      })),
      abstract: paper.abstract,
      year: parseInt(paper.pubdate.split(' ')[0]),
      journal: paper.fulljournalname,
      doi: paper.articleids.find((id: PubMedArticleId) => id.idtype === 'doi')?.value,
      url: `https://pubmed.ncbi.nlm.nih.gov/${paperId}/`,
      source: 'pubmed',
    };
  } catch (error) {
    console.error('Error fetching PubMed paper details:', error);
    throw error;
  }
}

export const PubMedAPI = {
  searchPapers,
  fetchPaperDetails,
};
