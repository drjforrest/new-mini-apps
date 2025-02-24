import { Button, Card } from "@components/index";
import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";

interface GameCompleteProps {
  score: number;
  onRestart: () => void;
}

export function GameComplete({ score, onRestart }: GameCompleteProps) {
  const getAchievementIcon = () => {
    if (score === 100) return <Trophy className="w-12 h-12 text-primary" />;
    if (score >= 70) return <Medal className="w-12 h-12 text-accent" />;
    return <Star className="w-12 h-12 text-danger" />;
  };

  const getFeedbackMessage = () => {
    if (score === 100)
      return "Perfect Score! You're an African flag expert! 🎉";
    if (score >= 70) return "Great job! You really know your flags! 🌟";
    if (score >= 40) return "Good effort! Keep practicing to improve! 💪";
    return "Keep learning! Every attempt makes you better! 📚";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="p-8 bg-surface border-border text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="flex justify-center mb-6"
        >
          {getAchievementIcon()}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Quiz Complete!
            </h2>
            <p className="text-xl text-accent font-medium">
              You scored {score} points!
            </p>
          </div>

          <div className="px-6 py-4 bg-surface-muted rounded-lg">
            <p className="text-foreground/80">{getFeedbackMessage()}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-muted">
            <div className="p-4 bg-surface-muted rounded-lg">
              <p className="font-medium text-foreground">Questions</p>
              <p>10 Total</p>
            </div>
            <div className="p-4 bg-surface-muted rounded-lg">
              <p className="font-medium text-foreground">Correct</p>
              <p>{score / 10} Answers</p>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={onRestart}
              className="w-full py-6 text-lg font-medium"
            >
              Play Again
            </Button>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
