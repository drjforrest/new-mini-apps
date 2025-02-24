"use client";

import { AppCard, DiagnosisCard, NewHero } from "@components/index";
import { BookOpen, Flag } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { WelcomePopup } from "./flag-quiz/components/WelcomePopup";

export default function Home() {
  const router = useRouter();
  const [showFlagQuizPopup, setShowFlagQuizPopup] = useState(false);

  const handleFlagQuizClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowFlagQuizPopup(true);
  };
  return (
    <div>
      <main className="relative z-10 py-8 md:py-10">
        {/* Hero Section */}
        <section className="relative">
          <NewHero />
        </section>

        {/* Diagnosis Card - Improved Positioning */}
        <section className="relative z-10 -mt-2 mb-6 px-4">
          <div className="container mx-auto max-w-xl">
            <DiagnosisCard />
          </div>
        </section>

        {/* App Cards Section */}
        <section className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <AppCard
                title="Citation Manager Lite"
                description="Need a quick referencew look up or a citation format conversion? Citation Manager Lite is the perfect free tool for you."
                href="/citation-mgr"
                icon={
                  <BookOpen className="w-6 h-6 text-accent dark:text-accent/90" />
                }
              />
              <AppCard
                title="Flags of Africa: A Quiz Game"
                description="Test your knowledge of African countries' flags with this fun and interactive short quiz game application."
                href="/flag-quiz"
                onClick={handleFlagQuizClick}
                icon={
                  <Flag className="w-6 h-6 text-accent dark:text-accent/90" />
                }
              />

              <WelcomePopup
                isOpen={showFlagQuizPopup}
                onClose={() => setShowFlagQuizPopup(false)}
                onStart={() => {
                  setShowFlagQuizPopup(false);
                  router.push('/flag-quiz');
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
