import { useCallback } from "react";
import { useGameSettings } from "./useGameSettings";

export function useSound() {
  const { settings } = useGameSettings();

  const playCorrect = useCallback(() => {
    if (!settings.sound) return;
    const audio = new Audio("/sounds/correct.mp3");
    audio.play().catch(() => {});
  }, [settings.sound]);

  const playIncorrect = useCallback(() => {
    if (!settings.sound) return;
    const audio = new Audio("/sounds/incorrect.mp3");
    audio.play().catch(() => {});
  }, [settings.sound]);

  const playComplete = useCallback(() => {
    if (!settings.sound) return;
    const audio = new Audio("/sounds/complete.mp3");
    audio.play().catch(() => {});
  }, [settings.sound]);

  return { playCorrect, playIncorrect, playComplete };
}
