'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

interface ScoreDisplayProps {
  score: number;
  streak: number;
}

export function ScoreDisplay({ score, streak }: ScoreDisplayProps) {
  return (
    <motion.div 
      className="flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2">
        <Trophy className="w-5 h-5 text-primary" />
        <span className="font-medium">Score: {score}</span>
      </div>
      {streak > 1 && (
        <div className="text-success">
          {streak} streak! 🔥
        </div>
      )}
    </motion.div>
  );
} 