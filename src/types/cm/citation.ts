export interface Citation {
  id: string;
  title: string;
  authors: string[];
  year?: string;
  journal?: string;
  doi?: string;
  abstract?: string;
}

export interface CitationExportOptions {
  format: 'apa' | 'mla' | 'chicago';
  includeAbstract?: boolean;
  includeUrl?: boolean;
} 