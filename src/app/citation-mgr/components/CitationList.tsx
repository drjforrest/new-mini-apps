"use client";

import type { Citation, SearchResult } from "types/cm/types";
import { Card } from "@components/index";

interface CitationListProps {
  citations: Citation[];
  searchResults: SearchResult[];
}

export function CitationList({ citations, searchResults }: CitationListProps) {
  const renderCitation = (item: Citation | SearchResult, index: number) => (
    <div
      key={item.id}
      className="animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Card className="p-6 bg-surface hover:bg-surface-elevated transition-colors duration-200">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="text-muted">
            {item.authors.map((a) => a.name).join(", ")} ({item.year || "n.d."})
          </p>
          {item.journal && <p className="text-muted italic">{item.journal}</p>}
          {item.abstract && (
            <p className="text-foreground/80 text-sm leading-relaxed">
              {item.abstract}
            </p>
          )}
          {item.doi && (
            <a
              href={`https://doi.org/${item.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors text-sm mt-2 inline-block"
            >
              DOI: {item.doi}
            </a>
          )}
        </div>
      </Card>
    </div>
  );

  return (
    <div className="space-y-4 max-h-[calc(100vh-12rem)] overflow-y-auto">
      {citations.length === 0 ? (
        <p className="text-muted text-center py-8 animate-fade-in">
          No citations added yet.
        </p>
      ) : (
        citations.map((citation, index) => renderCitation(citation, index))
      )}
    </div>
  );
}
