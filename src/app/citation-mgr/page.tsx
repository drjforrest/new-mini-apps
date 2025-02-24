"use client";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header, Footer, CustomThemeProvider, Card } from "@components/index";
import "./globals.css";
import { CitationManager } from "./components/CitationManager";

export default function CitationManagerPage() {
  return (
    <div className="min-h-screen bg-surface-muted p-4 sm:p-8">
      <Header />
      <CustomThemeProvider>
        <div className="container mx-auto max-w-6xl">
          <Card className="p-6 sm:p-8 bg-surface/95 backdrop-blur-sm">
            <CitationManager />
          </Card>
        </div>
      </CustomThemeProvider>
      <Footer />
    </div>
  );
}
