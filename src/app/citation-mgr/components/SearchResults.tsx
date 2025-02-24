import { useState } from "react";
import { SearchResult, Citation } from "../types/types";
import { Button } from "@components/index";
import { Check } from "lucide-react";

interface SearchResultsProps {
  results: SearchResult[];
  onAddCitation: (citation: Citation) => void;
}

export function SearchResults({ results, onAddCitation }: SearchResultsProps) {
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const handleAddCitation = (result: SearchResult) => {
    // Determine source based on URL or other properties
    const source = result.url?.includes("pubmed")
      ? "pubmed"
      : "semantic-scholar";

    onAddCitation({
      ...result,
      source,
    });

    setAddedIds((prev) => new Set([...prev, result.id]));
  };

  return (
    <div className="space-y-4">
      {results.map((result) => {
        const isAdded = addedIds.has(result.id);

        return (
          <div
            key={result.id}
            className="p-4 border border-border rounded-lg hover:bg-muted/5"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="font-medium">{result.title}</h3>
                <p className="text-sm text-muted mt-1">
                  {result.authors.map((a) => a.name).join(", ")}
                </p>
                <p className="text-sm mt-1">
                  {result.journal} ({result.year})
                </p>
              </div>
              <Button
                variant={isAdded ? "ghost" : "outline"}
                size="sm"
                onClick={() => handleAddCitation(result)}
                disabled={isAdded}
                className={isAdded ? "text-green-600" : ""}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 mr-1" />
                    Added
                  </>
                ) : (
                  "Add Citation"
                )}
              </Button>
            </div>
            {result.abstract && (
              <p className="text-sm mt-2 text-muted line-clamp-2">
                {result.abstract}
              </p>
            )}
            {result.doi && (
              <p className="text-sm mt-2 text-blue-500">
                <a
                  href={`https://doi.org/${result.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOI: {result.doi}
                </a>
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
