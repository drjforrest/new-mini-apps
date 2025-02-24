"use client";

import * as React from "react";
import Link from "next/link";
import { Card } from "./Card";

export interface AppCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export function AppCard({ title, description, href, icon, onClick }: AppCardProps) {
  return (
    <Link 
      href={href} 
      className="block transition-transform hover:-translate-y-1"
      onClick={onClick}
    >
      <Card variant="interactive">
        <div className="flex flex-col items-center gap-4 p-6">
          <div className="p-3 rounded-2xl bg-accent/10 dark:bg-accent/5">
            {icon}
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-muted leading-relaxed">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default AppCard;
