"use client";

import { motion } from "framer-motion";
import { ScoreDisplay } from "@components/index";

interface ScoreBoardProps {
  score: number;
  streak: number;
  questionIndex: number;
}

export function ScoreBoard({ score, streak, questionIndex }: ScoreBoardProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <ScoreDisplay score={score} streak={streak} />
      <motion.div
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Question {questionIndex + 1}/10
      </motion.div>
    </div>
  );
}
