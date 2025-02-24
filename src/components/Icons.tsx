import type { LucideIcon } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import icons to ensure consistent rendering
export const Icons = {
  Logo: dynamic(() => import('lucide-react').then((mod) => mod.Command)) as unknown as LucideIcon,
  // ... other icons
} as const; 