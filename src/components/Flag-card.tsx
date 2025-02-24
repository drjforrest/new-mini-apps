"use client";

import { Card } from "./Card";
import { cn } from "@lib/utils/cn";

export interface FlagCardProps {
  flagUrl: string;
  isLoading?: boolean;
  isSelected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void; // ✅ Fixed event type
}

export function FlagCard({
  flagUrl,
  isLoading,
  isSelected,
  onClick,
}: FlagCardProps) {
  return (
    <Card
      variant="game"
      className={cn(
        "relative aspect-[3/2] cursor-pointer transition-all overflow-hidden",
        isSelected && "ring-2 ring-primary",
        isLoading && "animate-pulse",
      )}
      onClick={(event) => onClick?.(event)} // ✅ Fixed handling of onClick
    >
      <img src={flagUrl} alt="Flag" className="w-full h-full object-cover" />
    </Card>
  );
}
