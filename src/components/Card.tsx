import React, { HTMLAttributes } from "react";
import { motion, PanInfo } from "framer-motion";
import { cn } from "@lib/utils/cn";

export type CardProps = {
  variant?: "default" | "interactive" | "game"; // ✅ Added "game"
  onDragEnd?: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, "onDragEnd">;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", onDragEnd, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn(
        "rounded-lg border border-border bg-surface dark:bg-surface-elevated shadow-sm backdrop-blur-sm",
        variant === "interactive" &&
          "hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer",
        variant === "game" && "p-4 bg-gray-100 dark:bg-gray-800", // ✅ Added "game" variant styling
        className,
      )}
      whileHover={
        variant === "interactive"
          ? { y: -4, transition: { duration: 0.2 } }
          : undefined
      }
      onDragEnd={(event, info) => onDragEnd?.(event, info)}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export { Card };
