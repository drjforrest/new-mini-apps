export interface Author {
  name: string;
  authorId?: string;
  affiliations?: string[];
}

export interface Citation {
  id: string;
  title: string;
  authors: Author[];
  abstract?: string;
  year?: number;
  journal?: string;
  doi?: string;
  url?: string;
  citationCount?: number;
  source: 'semantic-scholar' | 'pubmed' | 'crossref';
}

export interface SearchFilters {
  yearStart?: number;
  yearEnd?: number;
  sources?: ('semantic-scholar' | 'pubmed')[];
  sortBy?: 'relevance' | 'year' | 'citations';
}

export interface SearchResponse {
  citations: Citation[];
  total: number;
  offset: number;
  hasMore: boolean;
}

export interface SearchParams {
  query: string;
  filters: SearchFilters;
  page: number;
  limit: number;
}

export type CitationFormat = 'vancouver' | 'apa' | 'mla' | 'chicago' | 'harvard' | 'ieee' | 'bibtex';
export type ExportFormat = 'txt' | 'bib';

export interface CitationExportOptions {
  includeAbstracts?: boolean;
  includeUrls?: boolean;
}

export interface SearchFiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onReset: () => void;
}

// SearchResult is for displaying search results before they're added as citations
export interface SearchResult extends Citation {
  score: number;
}

export type APISource = 'pubmed' | 'semantic-scholar' | 'crossref';
