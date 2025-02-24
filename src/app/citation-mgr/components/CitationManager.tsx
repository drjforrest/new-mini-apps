"use client";

import { useState, useEffect } from "react";
import { Citation, SearchResult } from "../types/types";
import { CitationList } from "./CitationList";
import { SearchBar } from "./SearchBar";
import { CitationExport } from "./CitationExport";
import { PDFRetrieval } from "./PDFRetrieval";
import { SearchResults } from "./SearchResults";
import { Card } from "@components/index";
import { citationCache } from "@lib/cm/cache";
import { Wrench, Search, Library } from "lucide-react";

export function CitationManager() {
  const [citations, setCitations] = useState<Citation[]>(() =>
    citationCache.getCitations(),
  );
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    citationCache.setCitations(citations);
  }, [citations]);

  const handleSearch = (results: SearchResult[]) => {
    setSearchResults(results);
  };

  const handleAddCitation = (citation: Citation) => {
    setCitations((prev) => {
      // Avoid duplicates
      if (prev.some((c) => c.id === citation.id)) {
        return prev;
      }
      return [...prev, citation];
    });
  };

  return (
    <div className="flex gap-6">
      {/* Left Column - Search & Tools */}
      <div className="w-[400px] flex-shrink-0">
        <Card className="p-4 space-y-4 sticky top-4">
          <h2 className="text-lg font-semibold mb-3">Citation Manager</h2>
          <SearchBar
            onSearch={handleSearch}
            onAddCitation={handleAddCitation}
          />

          <div className="border-t pt-4">
            <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Quick Tools
            </h3>
            <div className="space-y-2">
              <PDFRetrieval onCitationFound={handleAddCitation} />
              <CitationExport citations={citations} />
            </div>
          </div>
        </Card>
      </div>

      {/* Right Column - Results & Citations */}
      <div className="flex-[2] space-y-6">
        {/* Search Results */}
        {searchResults.length > 0 && (
          <Card className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search Results
              </h2>
              <span className="text-sm text-muted">
                {searchResults.length} results
              </span>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              <SearchResults
                results={searchResults}
                onAddCitation={handleAddCitation}
              />
            </div>
          </Card>
        )}

        {/* My Citations */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Library className="w-5 h-5" />
              Library
            </h2>
            <span className="text-sm text-muted">
              {citations.length} citations
            </span>
          </div>
          <CitationList citations={citations} searchResults={searchResults} />
        </Card>
      </div>
    </div>
  );
}
