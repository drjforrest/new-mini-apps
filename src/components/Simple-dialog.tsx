"use client";

import * as React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "./Card";

interface SimpleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const DialogAnimationWrapper = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  if (!isOpen) return null;
  return <>{children}</>;
};

export const SimpleDialog = React.forwardRef<HTMLDivElement, SimpleDialogProps>(
  ({ isOpen, onClose, title, description, children, footer }, ref) => {
    return (
      <DialogAnimationWrapper isOpen={isOpen}>
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
          >
            <Card className="max-w-lg w-full bg-surface">
              <div className="p-6">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-muted hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-2 mb-6">
                  <h2 className="text-xl font-semibold text-foreground">
                    {title}
                  </h2>
                  {description && <p className="text-muted">{description}</p>}
                </div>

                {children}

                {footer && (
                  <div className="mt-6 flex justify-end gap-3">{footer}</div>
                )}
              </div>
            </Card>
          </motion.div>
        </>
      </DialogAnimationWrapper>
    );
  },
);

SimpleDialog.displayName = "SimpleDialog";
