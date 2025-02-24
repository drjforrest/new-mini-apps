import { Citation, CitationFormat, ExportFormat } from '../../types/cm/types';

interface FormatOptions {
  includeAbstracts?: boolean;
  includeUrls?: boolean;
}

function formatAuthors(authors: Citation['authors'], format: CitationFormat): string {
  const authorNames = authors.map(author => author.name);
  
  switch (format) {
    case 'apa':
      if (authorNames.length === 1) return authorNames[0];
      if (authorNames.length === 2) return `${authorNames[0]} & ${authorNames[1]}`;
      if (authorNames.length > 2) return `${authorNames[0]} et al.`;
      break;
    case 'mla':
      if (authorNames.length === 1) return authorNames[0];
      if (authorNames.length === 2) return `${authorNames[0]} and ${authorNames[1]}`;
      if (authorNames.length > 2) return `${authorNames[0]}, et al`;
      break;
    // ... other formats
  }
  return '';
}

export function formatCitation(
  citation: Citation, 
  format: CitationFormat,
  options: FormatOptions = {}
): string {
  const authors = citation.authors.length > 0 
    ? formatAuthors(citation.authors, format)
    : 'N.A.';
  const year = citation.year ? `(${citation.year})` : '(n.d.)';
  const title = citation.title.endsWith('.') ? citation.title : `${citation.title}.`;
  const journal = citation.journal ? ` ${citation.journal}` : '';
  const doi = citation.doi ? ` https://doi.org/${citation.doi}` : '';

  const baseCitation = `${authors} ${year}. ${title}${journal}${doi}`;
  
  const parts = [baseCitation];
  
  if (options.includeAbstracts && citation.abstract) {
    parts.push(`\nAbstract: ${citation.abstract}`);
  }
  
  if (options.includeUrls && (citation.doi || citation.url)) {
    parts.push(`\nURL: ${citation.doi ? `https://doi.org/${citation.doi}` : citation.url}`);
  }
  
  return parts.join('');
}

export function downloadCitations(citations: Citation[], format: CitationFormat, exportFormat: ExportFormat) {
  const content = citations.map(citation => formatCitation(citation, format)).join('\n\n');
  const filename = `citations.${exportFormat}`;
  
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
