"use client";

import { Card } from "./Card";
import { cn } from "@lib/utils/cn";

interface FactCardProps {
  country: {
    name: string;
    description: string;
    capital: string;
    population: number;
    languages: string[];
  };
  isCorrect: boolean;
}

export function FactCard({ country, isCorrect }: FactCardProps) {
  return (
    <Card
      variant="game" // ✅ Now correctly supported
      className={cn("p-6", isCorrect ? "border-success" : "border-danger")}
    >
      <h3 className="text-xl font-bold mb-3">{country.name}</h3>
      <p className="text-foreground/80 leading-relaxed mb-4">
        {country.description}
      </p>
      <div className="space-y-3">
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Languages:</strong> {country.languages.join(", ")}
        </p>
      </div>
    </Card>
  );
}
