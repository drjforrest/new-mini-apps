"use client";

import { useState, useEffect, useCallback } from "react";
import { m } from "framer-motion";
import confetti from "canvas-confetti";
import { Button, Card, FlagCard, FactCard } from "@components/index";
import { AFRICAN_COUNTRIES } from "@data/countries"; // ✅ Fixed import
import type { Country } from "../../../types/fq/country";
import type { QuizState } from "../../../types/fq/game";
import { StartScreen } from "./StartScreen";
import { GameComplete } from "./GameComplete";

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeIn" } },
};

export function QuizGame() {
  const [isClient, setIsClient] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const [quizState, setQuizState] = useState<QuizState>({
    score: 0,
    currentStreak: 0,
    currentQuestion: null,
    questionIndex: 0,
    gameMode: "practice",
    isGameOver: false,
    showFeedback: false,
    lastAnswer: null,
  });

  const getRandomCountry = useCallback((): Country => {
    const index = Math.floor(Math.random() * AFRICAN_COUNTRIES.length);
    return AFRICAN_COUNTRIES[index];
  }, []);

  const getRandomCountries = useCallback(
    (count: number, exclude: Country): Country[] => {
      const others = AFRICAN_COUNTRIES.filter((c) => c.name !== exclude.name);
      const shuffled = [...others].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    },
    [],
  );

  const [options, setOptions] = useState<Country[]>([]);

  const generateQuestion = useCallback(() => {
    const correctCountry = getRandomCountry();
    // Get 3 random wrong options
    const wrongOptions = getRandomCountries(3, correctCountry);
    // Combine and shuffle all options
    const allOptions = [correctCountry, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    setOptions(allOptions);
    setQuizState((prev) => ({
      ...prev,
      currentQuestion: correctCountry,
      questionIndex: prev.questionIndex + 1,
      showFeedback: false,
      lastAnswer: null,
    }));
  }, [getRandomCountry, getRandomCountries]);

  const handleAnswer = useCallback(
    (selectedCountry: Country) => {
      const isCorrect = selectedCountry.name === quizState.currentQuestion?.name;
      const pointsEarned = isCorrect ? 10 : 0;

      if (isCorrect) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2FB8AC", "#2F7BB8", "#B82F3D"],
          zIndex: 1000,
        });
      }

      setQuizState((prevState) => ({
        ...prevState,
        score: prevState.score + pointsEarned,
        currentStreak: isCorrect ? prevState.currentStreak + 1 : 0,
        showFeedback: true,
        lastAnswer: { country: selectedCountry, isCorrect },
      }));
    },
    [quizState.currentQuestion],
  );

  const handleNextQuestion = () => {
    generateQuestion();
  };

  const handleRestart = useCallback(() => {
    setQuizState({
      score: 0,
      currentStreak: 0,
      currentQuestion: null,
      questionIndex: 0,
      gameMode: "practice",
      isGameOver: false,
      showFeedback: false,
      lastAnswer: null,
    });
    generateQuestion();
  }, [generateQuestion]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (hasStarted && !quizState.currentQuestion && !quizState.isGameOver) {
      generateQuestion();
    }
  }, [hasStarted, quizState.currentQuestion, quizState.isGameOver, generateQuestion]);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-background px-4 py-8 flex flex-col">
      {!hasStarted ? (
        <Card className="max-w-4xl mx-auto p-6 bg-surface border-border">
          <StartScreen onStart={() => setHasStarted(true)} />
        </Card>
      ) : (
        <Card className="max-w-4xl mx-auto p-6 bg-surface border-border flex-1 flex flex-col">
        <div className="space-y-8">
          {/* Game Header */}
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <m.p
                className="text-lg font-semibold text-foreground"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.3 }}
                key={quizState.score}
              >
                Score: {quizState.score}
              </m.p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted">Current Streak:</p>
                <m.span
                  className="text-sm font-medium text-accent"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.3 }}
                  key={quizState.currentStreak}
                >
                  {quizState.currentStreak}
                </m.span>
              </div>
            </div>
          </div>

          {/* Game Content */}
          {quizState.isGameOver ? (
            <GameComplete score={quizState.score} onRestart={handleRestart} />
          ) : quizState.showFeedback && quizState.lastAnswer ? (
            <div className="flex-1 flex flex-col items-center justify-center space-y-6">
              <div className="w-full max-w-2xl">
                <FactCard
                  country={{
                    ...quizState.lastAnswer.country,
                    description: quizState.lastAnswer.country.facts[0] || ''
                  }}
                  isCorrect={quizState.lastAnswer.isCorrect}
                />
              </div>
              <Button onClick={handleNextQuestion} className="w-full max-w-2xl">
                Next Question
              </Button>
            </div>
          ) : (
            quizState.currentQuestion && (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-full max-w-2xl">
                  <div className="max-w-lg mx-auto mb-8">
                    <FlagCard
                      flagUrl={quizState.currentQuestion.flagUrl}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {options.map((country) => (
                      <Button
                        key={country.name}
                        onClick={() => handleAnswer(country)}
                        className="w-full py-4"
                        variant="outline"
                      >
                        {country.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Card>
      )}
    </div>
  );
}
