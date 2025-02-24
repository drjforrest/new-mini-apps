"use client";

import { LineChart, PenTool, Globe } from "lucide-react";

export default function NewHero() {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative z-10 py-16 md:py-24">
          <div className="text-center animate-fade-in">
            {/* Hero Icons */}
            <div className="flex items-center justify-center gap-5 mb-5 animate-scale-in">
              <div className="p-4 bg-blue-500/10 rounded-2xl">
                <LineChart className="w-12 h-12 text-blue-500" />
              </div>
              <div className="p-4 bg-red-500/10 rounded-2xl">
                <PenTool className="w-12 h-12 text-red-500" />
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-2xl">
                <Globe className="w-12 h-12 text-emerald-500" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground max-w-4xl mx-auto">
              It's an{" "}
              <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Appedemic!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-2xl text-foreground/80 dark:text-foreground/70 max-w-3xl mx-auto mt-5 leading-relaxed animate-fade-in-delayed">
              Yet another web applications site by a novice developer
              <br />
              <span className="italic">(real public health professional)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { NewHero };
