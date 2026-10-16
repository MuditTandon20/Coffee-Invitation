"use client";

import React from "react";
import { ArrowLeft, FastForward } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  onSkip?: () => void;
  canGoBack?: boolean;
  canSkip?: boolean;
}

export function ProgressBar({
  currentStep,
  totalSteps,
  onBack,
  onSkip,
  canGoBack = true,
  canSkip = true,
}: ProgressBarProps) {
  const progressPercent = Math.min(
    100,
    Math.round((currentStep / totalSteps) * 100)
  );

  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between mb-2 text-xs font-medium text-[#7F5539]">
        <div className="flex items-center gap-1.5">
          {canGoBack && onBack ? (
            <button
              onClick={onBack}
              type="button"
              className="inline-flex items-center gap-1 text-xs text-[#7F5539] hover:text-[#4A2C1D] transition-colors py-1 px-1.5 -ml-1.5 rounded-md hover:bg-black/5"
              aria-label="Go back to previous question"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <span className="opacity-0 select-none">Back</span>
          )}
        </div>

        <div className="flex items-center gap-1 font-semibold text-[#4A2C1D]">
          <span>Question</span>
          <span className="px-1.5 py-0.5 rounded-full bg-[#E29578]/20 text-[#2C1810] text-[11px]">
            {currentStep} / {totalSteps}
          </span>
        </div>

        <div className="flex items-center justify-end">
          {canSkip && onSkip ? (
            <button
              onClick={onSkip}
              type="button"
              className="inline-flex items-center gap-1 text-xs text-[#B08968] hover:text-[#4A2C1D] transition-colors py-1 px-1.5 rounded-md hover:bg-black/5"
              aria-label="Skip this question"
            >
              <span>Skip</span>
              <FastForward className="w-3 h-3" />
            </button>
          ) : (
            <span className="opacity-0 select-none">Skip</span>
          )}
        </div>
      </div>

      {/* Progress Track */}
      <div
        className="w-full h-2 bg-[#FAF2EB] rounded-full overflow-hidden p-0.5 border border-[#E6CCB2]/40"
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-gradient-to-r from-[#DDA15E] via-[#E29578] to-[#6F4E37] rounded-full transition-all duration-500 ease-out shadow-sm"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Mini Step dots */}
      <div className="flex justify-between items-center px-1 mt-2">
        {Array.from({ length: totalSteps }).map((_, idx) => {
          const stepNum = idx + 1;
          const isDone = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isCurrent
                  ? "w-4 bg-[#6F4E37] ring-2 ring-[#E29578]/50"
                  : isDone
                  ? "bg-[#B08968]"
                  : "bg-[#E6CCB2]/60"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
