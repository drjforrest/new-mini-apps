import { useState, useEffect, DragEvent } from 'react';

interface DragAndDropState {
  isDragging: boolean;
  isValidFile: boolean;
}

export function useDragAndDrop(acceptedFileTypes: string[] = ['application/pdf']) {
  const [dragState, setDragState] = useState<DragAndDropState>({
    isDragging: false,
    isValidFile: false,
  });

  useEffect(() => {
    function handleDragOver(e: globalThis.DragEvent) {
      e.preventDefault();
      e.stopPropagation();
    }

    function handleDrop(e: globalThis.DragEvent) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Add listeners to prevent default browser behavior
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const items = e.dataTransfer.items;
    const hasValidFile = Array.from(items).some(item => 
      acceptedFileTypes.includes(item.type)
    );

    setDragState({
      isDragging: true,
      isValidFile: hasValidFile,
    });
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Only reset state if we're leaving the drop zone
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }

    setDragState({
      isDragging: false,
      isValidFile: false,
    });
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Update cursor style
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragState({
      isDragging: false,
      isValidFile: false,
    });
    
    if (!e.dataTransfer.files?.length) return null;
    
    const files = e.dataTransfer.files;
    const isValid = Array.from(files).every(file => 
      acceptedFileTypes.some(type => file.type.includes(type.replace('.', '')))
    );
    
    if (!isValid) return null;
    
    return Array.from(files);
  };

  return {
    ...dragState,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  };
}