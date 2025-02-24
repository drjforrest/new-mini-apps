import { Flag, Target, Award } from "lucide-react";
import { Button } from "@components/index";
import { motion } from "framer-motion";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-foreground text-center mb-8">
        Test Your Knowledge of African Flags
      </h2>

      <div className="space-y-6">
        <motion.div variants={itemVariants} className="flex items-start gap-4">
          <div className="rounded-xl p-3 bg-primary/10">
            <Flag className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Learn the Flags
            </h3>
            <p className="text-muted">
              Explore and learn the flags of African nations through an
              interactive quiz experience.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-start gap-4">
          <div className="rounded-xl p-3 bg-accent/10">
            <Target className="w-6 h-6 text-accent" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">Earn Points</h3>
            <p className="text-muted">
              Score points for correct answers and build your streak. Try to get
              all 10 questions right!
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-start gap-4">
          <div className="rounded-xl p-3 bg-danger/10">
            <Award className="w-6 h-6 text-danger" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Discover Africa
            </h3>
            <p className="text-muted">
              Learn interesting facts about each country as you play, from
              capitals to languages and culture.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-6">
          <Button onClick={onStart} className="w-full py-6 text-lg font-medium">
            Start Quiz
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
