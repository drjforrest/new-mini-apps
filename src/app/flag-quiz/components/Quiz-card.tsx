import { Card } from "@components/index";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

interface QuizCardProps {
  children: ReactNode;
  variant?: "default" | "interactive";
}

export function QuizCard({ children, variant = "default" }: QuizCardProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="max-w-3xl mx-auto"
      >
        <Card variant={variant} className="bg-surface">
          {children}
        </Card>
      </motion.div>
    </LazyMotion>
  );
}
