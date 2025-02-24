"use client";

import { AFRICAN_COUNTRIES } from "@data/countries";
import { useGameSettings } from "@hooks/fq/useGameSettings";
import { Button, SimpleDialog } from "@components/index";
import { Flag, Target, Award, Settings } from "lucide-react";

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

export function WelcomePopup({ isOpen, onClose, onStart }: WelcomePopupProps) {
  const { settings, updateSettings } = useGameSettings();

  const availableRegions = [
    "All",
    ...new Set(AFRICAN_COUNTRIES.map((c) => c.region).filter(Boolean)),
  ];

  return (
    <SimpleDialog
      isOpen={isOpen}
      onClose={onClose}
      title="Welcome to Flag Quiz!"
      description="Test your knowledge of African flags in this interactive quiz."
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Maybe Later
          </Button>
          <Button
            onClick={() => {
              onClose();
              onStart();
            }}
          >
            Start Quiz
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        {/* How to Play */}
        <div className="flex items-start gap-3">
          <Flag className="w-4 h-4 text-primary mt-1" />
          <div>
            <h3 className="font-medium text-foreground mb-1">How to Play</h3>
            <p className="text-muted">
              You'll be shown a flag and four country options. Select the
              country you think the flag belongs to.
            </p>
          </div>
        </div>

        {/* Scoring */}
        <div className="flex items-start gap-3">
          <Target className="w-4 h-4 text-primary mt-1" />
          <div>
            <h3 className="font-medium text-foreground mb-1">Scoring</h3>
            <p className="text-muted">
              Each correct answer earns you 10 points. Try to maintain a streak
              for bonus points!
            </p>
          </div>
        </div>

        {/* Game Settings */}
        <div className="flex items-start gap-3">
          <Settings className="w-4 h-4 text-primary mt-1" />
          <div>
            <h3 className="font-medium text-foreground mb-2">Game Settings</h3>

            {/* Difficulty Selection */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-muted">Difficulty:</label>
              <select
                value={settings.difficulty}
                onChange={(e) => updateSettings({ difficulty: e.target.value })}
                className="px-3 py-2 border rounded-md bg-surface text-foreground"
              >
                <option value="easy">Easy (Region Restricted)</option>
                <option value="hard">Hard (All Regions & Islands)</option>
              </select>
            </div>

            {/* Region Selection (Only in Easy Mode) */}
            {settings.difficulty === "easy" && (
              <div className="flex items-center gap-2 mt-3">
                <label className="text-sm text-muted">Region:</label>
                <select
                  value={settings.region}
                  onChange={(e) => updateSettings({ region: e.target.value })}
                  className="px-3 py-2 border rounded-md bg-surface text-foreground"
                >
                  {availableRegions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Sound Toggle */}
            <div className="flex items-center gap-2 mt-3">
              <label className="text-sm text-muted">Sound:</label>
              <input
                type="checkbox"
                checked={settings.sound}
                onChange={(e) => updateSettings({ sound: e.target.checked })}
                className="h-4 w-4"
              />
            </div>

            {/* Hints Toggle */}
            <div className="flex items-center gap-2 mt-3">
              <label className="text-sm text-muted">Show Hints:</label>
              <input
                type="checkbox"
                checked={settings.showHints}
                onChange={(e) =>
                  updateSettings({ showHints: e.target.checked })
                }
                className="h-4 w-4"
              />
            </div>
          </div>
        </div>
      </div>
    </SimpleDialog>
  );
}
