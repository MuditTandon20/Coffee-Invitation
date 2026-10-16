"use client";

import React from "react";
import { motion } from "framer-motion";
import { CoffeeCupIllustration } from "../CoffeeCupIllustration";
import { RECIPIENT_NAME } from "@/config/site";
import { Sparkles } from "lucide-react";

interface ScreenWelcomeProps {
  onNext: () => void;
}

export function ScreenWelcome({ onNext }: ScreenWelcomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full max-w-md mx-auto text-center"
    >
      <div className="glass-card rounded-3xl p-7 sm:p-9 relative overflow-hidden">
        {/* Subtle decorative background accent */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#FCEEE9] rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#E6CCB2]/40 rounded-full blur-2xl pointer-events-none" />

        {/* Coffee Cup Hero */}
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5, type: "spring" }}
          >
            <CoffeeCupIllustration size="md" />
          </motion.div>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF2EB] border border-[#E6CCB2]/50 text-[#7F5539] text-xs font-semibold mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E29578]" />
          <span>Strictly Confidential • Eyes Only</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#2C1810] tracking-tight mb-3"
        >
          Hey, {RECIPIENT_NAME}! 👀✨
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-[#6F4E37] text-base sm:text-lg mb-8 leading-relaxed font-normal"
        >
          I have a tiny question for you...
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <button
            onClick={onNext}
            type="button"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#4A2C1D] via-[#6F4E37] to-[#4A2C1D] text-[#FFFDF9] font-bold text-base shadow-lg shadow-[#4A2C1D]/20 hover:shadow-[#4A2C1D]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>OKAY, TELL ME ☕</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
