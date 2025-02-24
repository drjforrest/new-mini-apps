import { Flag, Target, Award, Settings } from "lucide-react";
import { Button } from "@components/index";
import { motion } from "framer-motion";
import { AFRICAN_COUNTRIES } from "@data/countries";
import { useGameSettings } from "@hooks/fq/useGameSettings";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const { settings, updateSettings } = useGameSettings();
  const availableRegions = [
    "All",
    ...new Set(AFRICAN_COUNTRIES.map((c) => c.region).filter(Boolean)),
  ];
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

        <motion.div variants={itemVariants} className="flex items-start gap-4">
          <div className="rounded-xl p-3 bg-primary/10">
            <Settings className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <div className="w-full">
            <h3 className="font-medium text-foreground mb-4">Game Settings</h3>
            <div className="space-y-4">
              {/* Difficulty Selection */}
              <div className="flex items-center gap-3">
                <label className="text-sm text-muted min-w-24">Difficulty:</label>
                <select
                  value={settings.difficulty}
                  onChange={(e) => updateSettings({ difficulty: e.target.value })}
                  className="flex-1 px-3 py-2 border rounded-md bg-surface text-foreground"
                >
                  <option value="easy">Easy (Region Restricted)</option>
                  <option value="hard">Hard (All Regions & Islands)</option>
                </select>
              </div>

              {/* Region Selection (Only in Easy Mode) */}
              {settings.difficulty === "easy" && (
                <div className="flex items-center gap-3">
                  <label className="text-sm text-muted min-w-24">Region:</label>
                  <select
                    value={settings.region}
                    onChange={(e) => updateSettings({ region: e.target.value })}
                    className="flex-1 px-3 py-2 border rounded-md bg-surface text-foreground"
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
              <div className="flex items-center gap-3">
                <label className="text-sm text-muted min-w-24">Sound:</label>
                <input
                  type="checkbox"
                  checked={settings.sound}
                  onChange={(e) => updateSettings({ sound: e.target.checked })}
                  className="h-4 w-4"
                />
              </div>

              {/* Hints Toggle */}
              <div className="flex items-center gap-3">
                <label className="text-sm text-muted min-w-24">Show Hints:</label>
                <input
                  type="checkbox"
                  checked={settings.showHints}
                  onChange={(e) => updateSettings({ showHints: e.target.checked })}
                  className="h-4 w-4"
                />
              </div>
            </div>
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
