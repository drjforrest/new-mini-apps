import type { Citation, CitationFormat, ExportFormat } from './types/types';

function formatAuthors(authors: Citation['authors'], format: CitationFormat): string {
  const authorNames = authors.map(author => author.name);

  switch (format) {
    case 'vancouver':
      // Vancouver style: list up to 6 authors, then et al.
      if (authorNames.length <= 6) {
        return authorNames.join(', ');
      } else {
        return authorNames.slice(0, 6).join(', ') + ', et al.';
      }

    case 'apa':
      if (authorNames.length === 1) {
        return authorNames[0];
      } else if (authorNames.length === 2) {
        return `${authorNames[0]} & ${authorNames[1]}`;
      } else if (authorNames.length > 2) {
        return `${authorNames[0]} et al.`;
      }
      break;

    case 'bibtex':
      return authorNames.join(' and ');

    default:
      if (authorNames.length === 1) {
        return authorNames[0];
      } else if (authorNames.length === 2) {
        return `${authorNames[0]} and ${authorNames[1]}`;
      } else if (authorNames.length > 2) {
        return `${authorNames[0]} et al.`;
      }
  }

  return authorNames.join(', ');
}

function cleanTitle(title: string): string {
  // Remove any trailing periods and extra whitespace
  return title.trim().replace(/\.*$/, '');
}

function sanitizeBibtexField(text: string): string {
  return text.replace(/[{}&$#^_~%\\]/g, '\\$&');
}

export function formatCitation(citation: Citation, format: CitationFormat): string {
  const authors = formatAuthors(citation.authors, format);
  const year = citation.year || 'n.d.';
  const title = cleanTitle(citation.title);
  const journal = citation.journal || '';
  const doi = citation.doi ? `https://doi.org/${citation.doi}` : '';

  switch (format) {
    case 'vancouver':
      // Vancouver style format
      return `${authors}. ${title}. ${journal}${journal ? '.' : ''} ${year}${doi ? `. doi: ${citation.doi}` : ''}`;

    case 'bibtex':
      const bibtexId = `${citation.authors[0].name.split(' ').pop()}${year}${title.split(' ')[0].toLowerCase()}`;
      return `@article{${bibtexId},
  title={${sanitizeBibtexField(title)}},
  author={${sanitizeBibtexField(authors)}},
  journal={${sanitizeBibtexField(journal)}},
  year={${year}}${doi ? `,
  doi={${citation.doi}}` : ''}
}`;

    case 'apa':
      return `${authors} (${year}). ${title}. ${journal}${doi ? `. ${doi}` : ''}`;

    // ... other formats remain the same
    default:
      return `${authors} (${year}). ${title}. ${journal}${doi ? `. ${doi}` : ''}`;
  }
}

export function generateExportFile(citations: Citation[], citationFormat: CitationFormat, exportFormat: ExportFormat): { content: string; filename: string } {
  let content: string;
  let filename: string;

  if (exportFormat === 'bib') {
    content = citations
      .map(citation => formatCitation(citation, 'bibtex'))
      .join('\n\n');
    filename = 'citations.bib';
  } else {
    content = citations
      .map(citation => formatCitation(citation, citationFormat))
      .join('\n\n');
    filename = 'citations.txt';
  }

  return { content, filename };
}

export function downloadCitations(citations: Citation[], citationFormat: CitationFormat, exportFormat: ExportFormat): void {
  const { content, filename } = generateExportFile(citations, citationFormat, exportFormat);
  
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}