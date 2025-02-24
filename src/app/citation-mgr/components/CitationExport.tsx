"use client";

import { useState, useEffect } from "react";
import { Copy, Download, Check } from "lucide-react";
import { Button, Card } from "@components/index";
import type { Citation, CitationFormat, ExportFormat } from "types/cm/types";
import { formatCitation, downloadCitations } from "@lib/cm/formatCitation";

interface CitationExportProps {
  citations: Citation[];
}

const CITATION_FORMATS: { value: CitationFormat; label: string }[] = [
  { value: "apa", label: "APA" },
  { value: "mla", label: "MLA" },
  { value: "chicago", label: "Chicago" },
  { value: "harvard", label: "Harvard" },
  { value: "vancouver", label: "Vancouver" },
  { value: "ieee", label: "IEEE" },
  { value: "bibtex", label: "BibTeX" },
];

export function CitationExport({ citations }: CitationExportProps) {
  const [format, setFormat] = useState<CitationFormat>("apa");
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [showExportSuccess, setShowExportSuccess] = useState(false);
  const [previewContent, setPreviewContent] = useState(
    "No citations to preview",
  );

  useEffect(() => {
    if (citations.length > 0) {
      const content = formatCitation(citations[0], format);
      setPreviewContent(content);
    } else {
      setPreviewContent("No citations to preview");
    }
  }, [citations, format]);

  const handleCopy = async () => {
    const content = citations
      .map((c) => formatCitation(c, format))
      .join("\n\n");
    await navigator.clipboard.writeText(content);
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 2000);
  };

  const handleExport = () => {
    const exportFormat: ExportFormat = format === "bibtex" ? "bib" : "txt";
    downloadCitations(citations, format, exportFormat);
    setShowExportSuccess(true);
    setTimeout(() => setShowExportSuccess(false), 2000);
  };

  return (
    <div className="h-full animate-fade-in">
      <Card className="p-6 h-full flex flex-col bg-surface border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Export Citations
        </h3>
        <div className="space-y-6 flex-grow">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Format
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as CitationFormat)}
              className="w-full rounded-lg border border-border bg-surface text-foreground px-3 py-2 text-sm"
            >
              {CITATION_FORMATS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Preview
            </label>
            <div className="p-3 bg-surface-muted rounded-lg text-sm font-mono text-foreground whitespace-pre-wrap">
              {previewContent}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleCopy}
            disabled={citations.length === 0}
            className="flex-1 flex items-center justify-center gap-2"
          >
            {showCopySuccess ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy to Clipboard
              </>
            )}
          </Button>
          <Button
            onClick={handleExport}
            disabled={citations.length === 0}
            variant="secondary"
            className="flex items-center justify-center gap-2"
          >
            {showExportSuccess ? (
              <Check className="w-4 h-4" />
            ) : (
              <Download className="w-4 h-4" />
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}
