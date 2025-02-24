"use client";

import { Button } from "./Button";
import { Volume2, VolumeX, HelpCircle } from "lucide-react";

interface GameControlsProps {
  sound: boolean;
  showHints: boolean;
  onToggleSound: () => void;
  onToggleHints: () => void;
}

export function GameControls({
  sound,
  showHints,
  onToggleSound,
  onToggleHints,
}: GameControlsProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleSound}
        title={sound ? "Mute sound" : "Enable sound"}
      >
        {sound ? (
          <Volume2 className="h-4 w-4" />
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleHints}
        title={showHints ? "Hide hints" : "Show hints"}
      >
        <HelpCircle className="h-4 w-4" />
      </Button>
    </div>
  );
}
