"use client";

import React from "react";
import { motion } from "framer-motion";
import { CoffeeCupIllustration } from "../CoffeeCupIllustration";
import { Sparkles, SunMedium } from "lucide-react";

interface ScreenRespectfulEndProps {
  onBackToStart: () => void;
}

export function ScreenRespectfulEnd({
  onBackToStart,
}: ScreenRespectfulEndProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto text-center"
    >
      <div className="glass-card rounded-3xl p-7 sm:p-10 relative overflow-hidden shadow-xl border border-[#E6CCB2]/70">
        {/* Soft amber / gold warm glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FAF2EB] rounded-full blur-3xl pointer-events-none" />

        {/* Coffee Cup Hero */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <CoffeeCupIllustration size="md" showHeartSteam={false} />
          </motion.div>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF2EB] border border-[#E6CCB2]/50 text-[#7F5539] text-xs font-semibold mb-4"
        >
          <SunMedium className="w-3.5 h-3.5 text-[#DDA15E]" />
          <span>Pure Good Vibes Only</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#2C1810] leading-snug mb-4"
        >
          Ahh, plot twist! 😭☕
        </motion.h2>

        {/* Warm Respectful Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#4A2C1D] text-base leading-relaxed mb-6 font-medium"
        >
          No worries at all. Thanks for being honest. I respect that, and there&apos;s absolutely no awkwardness. 💛
        </motion.p>

        {/* Closing Warm Blessing Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-4 rounded-2xl bg-gradient-to-r from-[#FAF2EB] to-[#FCEEE9] border border-[#E6CCB2]/60 text-[#6F4E37] text-sm italic mb-8"
        >
          &ldquo;May your coffee always be perfect and your days full of good things. ☕✨&rdquo;
        </motion.div>

        {/* Return Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={onBackToStart}
            type="button"
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#6F4E37] via-[#8C6239] to-[#6F4E37] text-[#FFFDF9] font-bold text-sm sm:text-base shadow-md shadow-[#6F4E37]/15 hover:shadow-[#6F4E37]/25 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#DDA15E]" />
            <span>BACK TO THE COFFEEVERSE ☕</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
