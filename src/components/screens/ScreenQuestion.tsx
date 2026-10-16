"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion, QuizOption } from "@/config/site";
import { ProgressBar } from "../ProgressBar";
import { soundEngine } from "@/lib/audio";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ScreenQuestionProps {
  question: QuizQuestion;
  currentStep: number;
  totalSteps: number;
  selectedOption?: QuizOption;
  onSelectOption: (option: QuizOption) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
  isFirstQuestion: boolean;
}

export function ScreenQuestion({
  question,
  currentStep,
  totalSteps,
  selectedOption,
  onSelectOption,
  onNext,
  onBack,
  onSkip,
  isFirstQuestion,
}: ScreenQuestionProps) {
  const [activeSelection, setActiveSelection] = useState<QuizOption | undefined>(
    selectedOption
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Synchronize when question changes or previous selection exists
  useEffect(() => {
    setActiveSelection(selectedOption);
    setIsTransitioning(false);
  }, [question.id, selectedOption]);

  const handlePick = (option: QuizOption) => {
    soundEngine.playGentleClick();
    setActiveSelection(option);
    onSelectOption(option);
  };

  const handleProceed = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    onNext();
  };

  // Keyboard shortcut listener for options 1-4 and Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (["1", "2", "3", "4"].includes(key)) {
        const index = parseInt(key, 10) - 1;
        if (question.options[index]) {
          handlePick(question.options[index]);
        }
      } else if (key === "Enter" && activeSelection) {
        handleProceed();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [question, activeSelection, isTransitioning]);

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="glass-card rounded-3xl p-6 sm:p-8">
        {/* Progress & Nav Header */}
        <ProgressBar
          currentStep={currentStep}
          totalSteps={totalSteps}
          onBack={onBack}
          onSkip={onSkip}
          canGoBack={!isFirstQuestion}
          canSkip={true}
        />

        {/* Subtitle / Context */}
        <p className="text-xs font-semibold tracking-wider uppercase text-[#E29578] mb-1.5">
          {question.category}
        </p>

        {/* Subtitle text */}
        <p className="text-sm font-medium text-[#7F5539] mb-2">
          {question.subtitle}
        </p>

        {/* Main Question Title */}
        <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#2C1810] leading-snug mb-6">
          {question.title}
        </h2>

        {/* Options List */}
        <div className="space-y-3 mb-6" role="radiogroup" aria-label={question.title}>
          {question.options.map((option, idx) => {
            const isSelected = activeSelection?.id === option.id;

            return (
              <motion.button
                key={option.id}
                onClick={() => handlePick(option)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? "bg-[#FAF2EB] border-[#6F4E37] shadow-md ring-2 ring-[#6F4E37]/20"
                    : "bg-white/80 border-[#E6CCB2]/50 hover:bg-[#FFFDF9] hover:border-[#B08968]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    {option.emoji}
                  </span>
                  <span
                    className={`text-sm sm:text-base font-medium ${
                      isSelected ? "text-[#2C1810] font-semibold" : "text-[#4A2C1D]"
                    }`}
                  >
                    {option.text}
                  </span>
                </div>

                <div className="shrink-0 ml-2">
                  {isSelected ? (
                    <CheckCircle2 className="w-5 h-5 text-[#6F4E37]" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-[#E6CCB2]/80 group-hover:border-[#B08968]" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Humorous Reaction Area */}
        <AnimatePresence mode="wait">
          {activeSelection && (
            <motion.div
              key={activeSelection.id}
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#FAF2EB] to-[#FCEEE9] border border-[#F7D6CD] text-[#4A2C1D] text-sm leading-relaxed shadow-sm flex items-start gap-3"
            >
              <span className="text-xl shrink-0">💬</span>
              <div>
                <p className="font-semibold text-xs text-[#E29578] uppercase tracking-wider mb-0.5">
                  Live Reaction
                </p>
                <p className="font-medium text-[#2C1810]">
                  {activeSelection.reaction}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next / Proceed Button */}
        <div className="pt-2">
          <button
            onClick={handleProceed}
            disabled={!activeSelection || isTransitioning}
            type="button"
            className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
              activeSelection && !isTransitioning
                ? "bg-gradient-to-r from-[#4A2C1D] via-[#6F4E37] to-[#4A2C1D] text-[#FFFDF9] shadow-lg shadow-[#4A2C1D]/20 hover:shadow-[#4A2C1D]/35 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                : "bg-[#E6CCB2]/50 text-[#8C6239]/60 cursor-not-allowed"
            }`}
          >
            <span>{currentStep === totalSteps ? "SEE MY RESULTS 🔮" : "NEXT QUESTION"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
