import { useState, useEffect } from "react";

export function useGameSettings() {
  const [settings, setSettings] = useState({
    difficulty: "easy", // ✅ Determines whether filtering happens
    sound: true,
    showHints: false,
    region: "All", // ✅ Users can select "Islands" if they want
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("gameSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const updateSettings = (newSettings: Partial<typeof settings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem("gameSettings", JSON.stringify(updated));
      return updated;
    });
  };

  return { settings, updateSettings };
}
