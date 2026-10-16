"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Award, Sparkles, Flame } from "lucide-react";

interface ScreenQuizIntroProps {
  onStartQuiz: () => void;
}

export function ScreenQuizIntro({ onStartQuiz }: ScreenQuizIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full max-w-md mx-auto text-center"
    >
      <div className="glass-card rounded-3xl p-7 sm:p-9 relative overflow-hidden">
        {/* Playful Icon Grid */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-[#FCEEE9] text-[#E29578] flex items-center justify-center border border-[#F7D6CD]/50 shadow-sm">
            <Coffee className="w-5 h-5" />
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#FAF2EB] text-[#6F4E37] flex items-center justify-center border border-[#E6CCB2]/50 shadow-sm scale-110">
            <Award className="w-6 h-6" />
          </div>
          <div className="w-11 h-11 rounded-2xl bg-[#FCEEE9] text-[#D64045] flex items-center justify-center border border-[#F7D6CD]/50 shadow-sm">
            <Flame className="w-5 h-5" />
          </div>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#2C1810] tracking-tight mb-3"
        >
          WAIT A SECOND. 👀
        </motion.h2>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-[#6F4E37] text-sm sm:text-base leading-relaxed mb-4"
        >
          Before we get to the important stuff, you must pass a very serious,
          extremely scientific, <span className="font-semibold text-[#4A2C1D]">100% unnecessary</span> personality test.
        </motion.p>

        {/* Playful callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
          className="bg-[#FAF2EB]/80 border border-[#E6CCB2]/60 rounded-2xl p-3.5 mb-6 text-xs text-[#7F5539] flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-[#DDA15E] shrink-0" />
          <span>Estimated duration: 45 seconds of certified entertainment</span>
        </motion.div>

        {/* Final punchline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-lg font-bold text-[#4A2C1D] mb-6"
        >
          Ready? 😂
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          onClick={onStartQuiz}
          type="button"
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#6F4E37] via-[#8C6239] to-[#6F4E37] text-[#FFFDF9] font-bold text-base shadow-lg shadow-[#6F4E37]/20 hover:shadow-[#6F4E37]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>LET'S DO THIS ✨</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
