"use client";

import { useState, useLayoutEffect } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "./Button";
import { Stethoscope, ArrowDown, ArrowRight, AlertCircle } from "lucide-react";

interface DiagnosisCardProps {
  onClick?: () => void;
}

export function DiagnosisCard({ onClick }: DiagnosisCardProps) {
  const [flipped, setFlipped] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative w-full max-w-2xl sm:max-w-[920px] mx-auto [perspective:1200px]">
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="relative w-full h-auto min-h-[340px] sm:min-h-[380px] [transform-style:preserve-3d]"
        >
          {/* Front Side */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 sm:p-6 rounded-xl border border-border bg-surface shadow-lg backdrop-blur-sm dark:shadow-black/10 w-full h-full [backface-visibility:hidden]">
            {/* Red Warning Header */}
            <div className="flex items-center gap-2 text-red-600 dark:text-red-500">
              <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8" />
              <h3 className="text-lg sm:text-xl font-bold uppercase">
                REPORT!
              </h3>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold leading-relaxed text-foreground text-center max-w-[88%]">
              A new fever is sweeping the globe. With AI-assisted coding, a
              spike in new websites is observed.
            </h2>

            <Button
              onClick={() => {
                setFlipped(true);
                onClick?.();
              }}
              className="flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              What's the Diagnosis?
              <motion.span
                animate={{ y: [0, 2, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.span>
            </Button>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 sm:p-6 rounded-xl border border-border bg-surface shadow-lg backdrop-blur-sm dark:shadow-black/10 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {/* Icon */}
            <div className="p-3 rounded-2xl bg-accent/10 dark:bg-accent/5">
              <Stethoscope className="w-6 h-6 text-accent dark:text-accent/90" />
            </div>

            {/* Diagnosis Header */}
            <h2 className="text-lg sm:text-xl font-semibold text-foreground text-center">
              Diagnosis: Another Case of the Appedemic
            </h2>

            {/* Description */}
            <p className="text-foreground/80 leading-snug text-center max-w-[85%] text-base sm:text-lg">
              Patient presents with a sudden enthusiasm for coding, frequent
              mood swings spanning excitement, despair, and rage, and delusions
              of a second career in programming.
            </p>
            <p className="text-foreground/80 leading-snug text-center max-w-[85%] text-base sm:text-lg">
              See results below. Warning: More apps no one has asked for may be
              in development.
            </p>

            {/* Back Button */}
            <Button
              onClick={() => setFlipped(false)}
              className="flex items-center justify-center gap-2 text-base sm:text-lg"
              variant="outline"
            >
              Back to Front
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Button>
          </div>
        </motion.div>
      </div>
    </LazyMotion>
  );
}
