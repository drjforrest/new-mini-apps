"use client";

import { useState } from "react";
import { Citation } from "../types/types";
import { DropZone } from "./DropZone";
import { extractCitationFromPDF } from "./pdfExtractor";
import { Loader2 } from "lucide-react";

interface PDFRetrievalProps {
  onCitationFound: (citation: Citation) => void;
}

export function PDFRetrieval({ onCitationFound }: PDFRetrievalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePDFDrop = async (files: File[]) => {
    const file = files[0];
    if (!file || !file.type.includes("pdf")) {
      setError("Please upload a PDF file");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const citation = await extractCitationFromPDF(file);
      onCitationFound(citation);
    } catch (error) {
      setError("Failed to extract citation from PDF");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 space-y-6 animate-fade-in">
      <div>
        <h3 className="text-lg font-semibold mb-2">Upload PDF</h3>
        <p className="text-sm text-muted">
          Upload a PDF to automatically extract citation information
        </p>
      </div>

      <DropZone onDrop={handlePDFDrop} accept={[".pdf"]} disabled={isLoading} />

      {isLoading && (
        <div className="flex items-center justify-center text-sm text-muted">
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Extracting citation...
        </div>
      )}

      {error && (
        <div className="overflow-hidden animate-fade-in">
          <p className="text-sm text-danger">{error}</p>
        </div>
      )}
    </div>
  );
}
