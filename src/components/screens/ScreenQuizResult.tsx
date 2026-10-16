"use client";

import React from "react";
import { motion } from "framer-motion";
import { VibeResult, RECIPIENT_NAME } from "@/config/site";
import { Sparkles, Trophy, ArrowRight } from "lucide-react";

interface ScreenQuizResultProps {
  result: VibeResult;
  onProceedToInvitation: () => void;
}

export function ScreenQuizResult({
  result,
  onProceedToInvitation,
}: ScreenQuizResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="glass-card rounded-3xl p-6 sm:p-9 relative overflow-hidden text-center">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#DDA15E] via-[#E29578] to-[#6F4E37]" />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEEE9] border border-[#F7D6CD] text-[#D64045] font-semibold text-xs mb-5 shadow-sm"
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>{result.badge}</span>
        </motion.div>

        {/* Personalized Name Header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-widest text-[#B08968] font-bold mb-1"
        >
          {RECIPIENT_NAME}&apos;s Official Analysis
        </motion.p>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#2C1810] leading-snug mb-4"
        >
          {result.headline}
        </motion.h2>

        {/* Detailed Result Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#6F4E37] text-sm sm:text-base leading-relaxed mb-5"
        >
          {result.description}
        </motion.p>

        {/* Personalized Highlight Callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="p-3.5 rounded-2xl bg-[#FAF2EB] border border-[#E6CCB2]/70 text-[#4A2C1D] text-xs sm:text-sm font-medium mb-6 text-left flex items-start gap-3"
        >
          <span className="text-lg shrink-0">🎯</span>
          <div>
            <span className="font-bold text-[#6F4E37] block text-xs uppercase tracking-wider mb-0.5">
              Personalized Observation
            </span>
            <span>{result.personalizedHighlight}</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-8"
        >
          {result.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 border border-[#E6CCB2]/50 rounded-2xl p-3 flex flex-col items-center justify-center shadow-xs"
            >
              <span className="text-xl mb-1">{stat.emoji}</span>
              <span className="font-bold text-[#2C1810] text-sm sm:text-base">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-[#7F5539] text-center font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scientific Disclaimer Humor */}
        <p className="text-[11px] text-[#B08968] mb-6 italic">
          * Certified by the International Council of Totally Made-Up Coffee Diagnostics.
        </p>

        {/* Main CTA to Reveal Question */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <button
            onClick={onProceedToInvitation}
            type="button"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#4A2C1D] via-[#6F4E37] to-[#4A2C1D] text-[#FFFDF9] font-bold text-sm sm:text-base shadow-lg shadow-[#4A2C1D]/20 hover:shadow-[#4A2C1D]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-[#DDA15E]" />
            <span>OKAY, WHAT&apos;S THE ACTUAL QUESTION? 👀</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
