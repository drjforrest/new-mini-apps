"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./Card";
import { Button } from "./Button";

interface WelcomeCardProps {
  onStart: () => void;
}

export function WelcomeCard({ onStart }: WelcomeCardProps) {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Flag Quiz!</h1>
      <p className="mb-6">Test your knowledge of African flags</p>
      <button
        onClick={onStart}
        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
      >
        Start Quiz
      </button>
    </div>
  );
}
