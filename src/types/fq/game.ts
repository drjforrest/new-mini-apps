import type { Country } from './index';

export interface Answer {
  country: Country;
  isCorrect: boolean;
}

export interface QuizState {
  score: number;
  currentStreak: number;
  currentQuestion: Country | null;
  questionIndex: number;
  gameMode: 'practice' | 'challenge' | 'regional';
  isGameOver: boolean;
  showFeedback: boolean;
  lastAnswer: Answer | null;
}

export interface GameScreenProps {
  currentFlag: Country;
  options: Country[];
  currentQuestion: number;
  score: number;
  showFeedback: boolean;
  lastAnswer: Answer | null;
  onAnswer: (answer: Country | null) => void;
}

export enum Difficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
} 