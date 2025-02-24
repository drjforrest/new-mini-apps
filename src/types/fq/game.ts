import type { Country } from "./country";

export interface QuizState {
  score: number;
  currentStreak: number;
  currentQuestion: Country | null;
  questionIndex: number;
  gameMode: "practice";
  isGameOver: boolean;
  showFeedback: boolean;
  lastAnswer: {
    country: Country;
    isCorrect: boolean;
  } | null;
}
