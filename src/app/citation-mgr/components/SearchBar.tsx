"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@components/index";
import type { Citation, SearchResult, APISource } from "types/cm/types";
import { PubMedAPI } from "@lib/cm/api/pubmed";
import { SemanticScholarAPI } from "@lib/cm/api/semanticScholar";
import { citationCache } from "@lib/cm/cache";
import { CrossRefAPI } from "@lib/cm/api/crossref";

interface SearchBarProps {
  onSearch: (results: SearchResult[]) => void;
  onAddCitation: (citation: Citation) => void;
}

export function SearchBar({ onSearch, onAddCitation }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [apiSource, setApiSource] = useState<APISource>("crossref");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addScore = (citations: Citation[], startIndex = 0): SearchResult[] =>
    citations.map((c, i) => ({ ...c, score: 1 - (i + startIndex) * 0.1 }));

  const searchAPI = async () => {
    switch (apiSource) {
      case "pubmed":
        const pubmedResults = await PubMedAPI.searchPapers({
          query: query.trim(),
          filters: {},
          page: 1,
          limit: 10,
        });
        return {
          ...pubmedResults,
          citations: addScore(pubmedResults.citations),
        };
      case "semantic-scholar":
        const ssResults = await SemanticScholarAPI.searchPapers({
          query: query.trim(),
          filters: {},
          page: 1,
          limit: 10,
        });
        return { ...ssResults, citations: addScore(ssResults.citations) };
      case "crossref":
        const crResults = await CrossRefAPI.searchPapers({
          query: query.trim(),
          filters: {},
          page: 1,
          limit: 10,
        });
        return { ...crResults, citations: addScore(crResults.citations) };
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const results = await searchAPI();
      onSearch(results.citations);
      citationCache.setSearchResults(query.trim(), results.citations);
    } catch (error) {
      console.error("Search failed:", error);
      setError("Failed to search citations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-2 mb-4">
          {(["crossref", "pubmed", "semantic-scholar"] as const).map(
            (source) => (
              <button
                key={source}
                type="button"
                onClick={() => setApiSource(source)}
                className={`px-3 py-1 rounded-full text-xs ${
                  apiSource === source
                    ? "bg-primary text-white"
                    : "bg-surface-muted text-muted hover:bg-surface-elevated"
                }`}
              >
                {source
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ")}
              </button>
            ),
          )}
        </div>
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, author, or DOI..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-border bg-surface text-foreground text-sm"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Searching..." : "Search Citations"}
        </Button>
      </form>
    </div>
  );
}
