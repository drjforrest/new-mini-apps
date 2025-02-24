"use client";

import { Card } from "@components/index";
import { useDragAndDrop } from "@hooks/cm/useDragAndDrop";

interface DropZoneProps {
  onDrop: (files: File[]) => void;
  accept?: string[];
  disabled?: boolean;
}

export function DropZone({
  onDrop,
  accept = [],
  disabled = false,
}: DropZoneProps) {
  const {
    isDragging,
    isValidFile,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = useDragAndDrop(accept);

  const handleDropEvent = (e: React.DragEvent) => {
    const files = handleDrop(e);
    if (files?.length) {
      onDrop(Array.from(files));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      onDrop(Array.from(files));
    }
  };

  return (
    <Card
      className={`
        relative overflow-hidden transition-all duration-300
        ${isDragging ? "scale-102 shadow-lg" : "shadow-sm hover:shadow-md"}
        ${isDragging && isValidFile ? "border-accent" : "border-border"}
      `}
    >
      <label
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDropEvent}
        className="flex flex-col items-center justify-center p-8 cursor-pointer relative"
      >
        <input
          type="file"
          accept={accept.join(",")}
          onChange={handleFileInput}
          disabled={disabled}
          className="hidden"
        />

        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-surface to-background/50
                     bg-[size:20px_20px] [mask-image:radial-gradient(circle_1px_at_1px_1px,black_1px,transparent_0)]
                     opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
          aria-hidden="true"
        />

        {/* Icon */}
        <div
          className={`relative z-10 mb-4 transition-transform duration-300 ${
            isDragging ? "scale-110 -translate-y-1" : ""
          }`}
        >
          {isDragging
            ? isValidFile
              ? "Drop to upload"
              : "Invalid file type"
            : "Drop PDF here"}
        </div>

        {/* Text Content */}
        <div
          className={`text-center relative z-10 transition-opacity duration-300 ${
            isDragging ? "opacity-70" : ""
          }`}
        >
          <p className="text-lg font-medium text-foreground mb-2">
            {isDragging
              ? isValidFile
                ? "Drop to upload"
                : "Invalid file type"
              : "Drop PDF here"}
          </p>
          <p className="text-sm text-muted">
            {isDragging ? "Release to upload" : "or click to browse files"}
          </p>
        </div>

        {/* Visual feedback for drag state */}
        <div
          className={`absolute inset-0 border-2 border-dashed rounded-lg transition-opacity duration-300 ${
            isDragging ? "opacity-100" : "opacity-0"
          } ${isValidFile ? "border-accent" : "border-danger"}`}
        />
      </label>
    </Card>
  );
}
