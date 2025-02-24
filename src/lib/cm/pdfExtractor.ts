import * as pdfjs from 'pdfjs-dist';
import type { Citation } from '../types/types';

// DOI regex pattern
const DOI_PATTERN = /\b(10\.\d{4,}\/[-._;()\/:a-z0-9]+)\b/i;
// Common title patterns in academic papers
const TITLE_PATTERNS = [
  /^Title:\s*(.+)$/im,
  /^\s*(.+)\s*\n\s*Abstract/im,
  /^\s*(.+)\s*\n\s*Authors?:/im
];

async function extractTextFromPDF(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
  const firstPage = await pdf.getPage(1);
  const textContent = await firstPage.getTextContent();
  return textContent.items.map((item: any) => item.str).join(' ');
}

export async function fetchCitationFromCrossRef(doi: string): Promise<Citation> {
  const response = await fetch(`https://api.crossref.org/works/${doi}`, {
    headers: {
      'User-Agent': 'CitationManager/1.0 (mailto:your@email.com)'
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch citation from CrossRef');
  }

  const data = await response.json();
  const work = data.message;

  return {
    id: doi,
    title: work.title[0],
    authors: work.author?.map((author: any) => ({
      name: `${author.given} ${author.family}`,
      affiliations: author.affiliation?.map((a: any) => a.name) || []
    })) || [],
    year: new Date(work.published?.['date-parts']?.[0]?.[0]).getFullYear(),
    journal: work['container-title']?.[0],
    doi: work.DOI,
    abstract: work.abstract,
    url: work.URL,
    source: 'crossref'
  };
}

export async function extractCitationFromPDF(file: File): Promise<Citation> {
  try {
    const text = await extractTextFromPDF(file);
    
    // Try to find DOI
    const doiMatch = text.match(DOI_PATTERN);
    if (doiMatch) {
      try {
        return await fetchCitationFromCrossRef(doiMatch[1]);
      } catch (error) {
        console.warn('CrossRef lookup failed:', error);
        // Continue with regex extraction if CrossRef fails
      }
    }

    // Fallback to regex title extraction
    let title = file.name.replace('.pdf', '');
    for (const pattern of TITLE_PATTERNS) {
      const match = text.match(pattern);
      if (match) {
        title = match[1].trim();
        break;
      }
    }

    // Return basic citation with extracted title
    return {
      id: Date.now().toString(),
      title,
      authors: [{ name: 'Unknown Author' }],
      year: new Date().getFullYear(),
      source: 'pubmed',
      abstract: 'Citation extracted from PDF upload'
    };
  } catch (error) {
    console.error('Failed to extract citation from PDF:', error);
    throw new Error('Failed to extract citation from PDF');
  }
} 