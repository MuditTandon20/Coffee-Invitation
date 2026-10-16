"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AmbientBackground } from "@/components/AmbientBackground";
import { AudioToggle } from "@/components/AudioToggle";
import { ScreenWelcome } from "@/components/screens/ScreenWelcome";
import { ScreenQuizIntro } from "@/components/screens/ScreenQuizIntro";
import { ScreenQuestion } from "@/components/screens/ScreenQuestion";
import { ScreenQuizResult } from "@/components/screens/ScreenQuizResult";
import { ScreenInvitation } from "@/components/screens/ScreenInvitation";
import { ScreenCelebration } from "@/components/screens/ScreenCelebration";
import { ScreenRespectfulEnd } from "@/components/screens/ScreenRespectfulEnd";
import {
  QUIZ_QUESTIONS,
  QuizOption,
  calculateQuizResult,
  RECIPIENT_NAME,
} from "@/config/site";

type ScreenStage =
  | "welcome"
  | "quiz_intro"
  | "quiz_question"
  | "quiz_result"
  | "invitation"
  | "celebration"
  | "respectful_end";

export default function HomePage() {
  const [stage, setStage] = useState<ScreenStage>("welcome");
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, QuizOption | undefined>>({});

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[questionIndex];

  // Navigate: Welcome -> Quiz Intro
  const handleStartWelcome = () => {
    setStage("quiz_intro");
  };

  // Navigate: Quiz Intro -> Question 1
  const handleStartQuiz = () => {
    setQuestionIndex(0);
    setStage("quiz_question");
  };

  // Select an option for current question
  const handleSelectOption = (option: QuizOption) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  // Navigate to next question or to results
  const handleNextQuestion = () => {
    if (questionIndex < totalQuestions - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setStage("quiz_result");
    }
  };

  // Skip question (proceed without answer)
  const handleSkipQuestion = () => {
    if (questionIndex < totalQuestions - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setStage("quiz_result");
    }
  };

  // Back button within quiz
  const handleBackQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
    } else {
      setStage("quiz_intro");
    }
  };

  // Results -> Invitation
  const handleProceedToInvitation = () => {
    setStage("invitation");
  };

  // Invitation -> Celebration (YES)
  const handleAcceptInvitation = () => {
    setStage("celebration");
  };

  // Invitation -> Respectful Decline (I'M COMMITTED)
  const handleDeclineInvitation = () => {
    setStage("respectful_end");
  };

  // Full restart
  const handleRestart = () => {
    setAnswers({});
    setQuestionIndex(0);
    setStage("welcome");
  };

  const calculatedResult = calculateQuizResult(answers);

  return (
    <main className="relative min-h-screen flex flex-col justify-between p-4 sm:p-6 md:p-8">
      {/* Ambient Visual Orbs & Coffee Beans */}
      <AmbientBackground />

      {/* Top Bar with Brand Badge & Sound Toggle */}
      <header className="w-full max-w-xl mx-auto flex items-center justify-between py-2 mb-2 sm:mb-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#7F5539]">
          <span className="text-base">☕</span>
          <span>Brewing Curiosity</span>
        </div>

        <AudioToggle />
      </header>

      {/* Main Interactive Stage */}
      <div className="flex-1 flex items-center justify-center my-auto py-4">
        <AnimatePresence mode="wait">
          {stage === "welcome" && (
            <ScreenWelcome key="welcome" onNext={handleStartWelcome} />
          )}

          {stage === "quiz_intro" && (
            <ScreenQuizIntro key="quiz_intro" onStartQuiz={handleStartQuiz} />
          )}

          {stage === "quiz_question" && currentQuestion && (
            <ScreenQuestion
              key={`question-${currentQuestion.id}`}
              question={currentQuestion}
              currentStep={questionIndex + 1}
              totalSteps={totalQuestions}
              selectedOption={answers[currentQuestion.id]}
              onSelectOption={handleSelectOption}
              onNext={handleNextQuestion}
              onBack={handleBackQuestion}
              onSkip={handleSkipQuestion}
              isFirstQuestion={questionIndex === 0}
            />
          )}

          {stage === "quiz_result" && (
            <ScreenQuizResult
              key="quiz_result"
              result={calculatedResult}
              onProceedToInvitation={handleProceedToInvitation}
            />
          )}

          {stage === "invitation" && (
            <ScreenInvitation
              key="invitation"
              onAccept={handleAcceptInvitation}
              onDecline={handleDeclineInvitation}
            />
          )}

          {stage === "celebration" && (
            <ScreenCelebration
              key="celebration"
              onRestart={handleRestart}
            />
          )}

          {stage === "respectful_end" && (
            <ScreenRespectfulEnd
              key="respectful_end"
              onBackToStart={handleRestart}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Accessible Footer */}
      <footer className="w-full max-w-xl mx-auto text-center py-3 text-[11px] text-[#B08968]">
        Crafted with ☕ and good vibes for {RECIPIENT_NAME} • No data collected
      </footer>
    </main>
  );
}
