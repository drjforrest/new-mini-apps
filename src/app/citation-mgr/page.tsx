"use client";

import React from "react";
import { Card } from "@components/index";
import { CitationManager } from "./components/CitationManager";

export default function CitationManagerPage(): React.ReactElement {
  return (
    <div className="container mx-auto py-8 mt-16">
      <Card className="p-6 sm:p-8 bg-surface/95 backdrop-blur-sm">
        <CitationManager />
      </Card>
    </div>
  );
}
