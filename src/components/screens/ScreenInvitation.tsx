"use client";

import React from "react";
import { motion } from "framer-motion";
import { CoffeeCupIllustration } from "../CoffeeCupIllustration";
import { RECIPIENT_NAME } from "@/config/site";
import { Heart, Coffee } from "lucide-react";

interface ScreenInvitationProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function ScreenInvitation({
  onAccept,
  onDecline,
}: ScreenInvitationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto text-center"
    >
      <div className="glass-card rounded-3xl p-7 sm:p-10 relative overflow-hidden shadow-2xl border border-[#E6CCB2]/70">
        {/* Soft background glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#F7D6CD]/50 rounded-full blur-3xl pointer-events-none" />

        {/* Coffee Cup Hero with Heart Steam */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="animate-pulse-soft"
          >
            <CoffeeCupIllustration size="lg" showHeartSteam={true} />
          </motion.div>
        </div>

        {/* Deliberate lead-up text */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xs font-bold uppercase tracking-widest text-[#E29578] mb-2"
        >
          No pressure, just good vibes
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#2C1810] mb-3"
        >
          Okay, {RECIPIENT_NAME}... one last question. 👀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[#6F4E37] text-sm sm:text-base mb-6 leading-relaxed"
        >
          I thought it might be fun to continue this conversation over coffee sometime. ☕
        </motion.p>

        {/* The Prominent Invitation Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="p-5 rounded-2xl bg-gradient-to-br from-[#FAF2EB] to-[#FCEEE9] border border-[#F7D6CD] mb-8 shadow-sm"
        >
          <div className="flex justify-center mb-2">
            <Heart className="w-5 h-5 text-[#D64045] fill-[#D64045]/20 animate-bounce" />
          </div>
          <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#2C1810]">
            Would you like to grab coffee with me? 💌
          </h3>
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-3 sm:space-y-4">
          {/* Primary Button: YES */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            onClick={onAccept}
            type="button"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#4A2C1D] via-[#6F4E37] to-[#4A2C1D] text-[#FFFDF9] font-bold text-base shadow-xl shadow-[#4A2C1D]/25 hover:shadow-[#4A2C1D]/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group border border-[#8C6239]/40"
          >
            <Coffee className="w-5 h-5 text-[#DDA15E] group-hover:rotate-12 transition-transform" />
            <span>YES, LET&apos;S BREW SOME MEMORIES ☕</span>
          </motion.button>

          {/* Secondary Button: I'M COMMITTED (Honest, respectful, functional) */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={onDecline}
            type="button"
            className="w-full py-3.5 px-6 rounded-2xl bg-white/70 hover:bg-white/95 text-[#7F5539] hover:text-[#4A2C1D] font-semibold text-sm border border-[#E6CCB2] hover:border-[#B08968] shadow-sm transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>I&apos;M COMMITTED 💌</span>
          </motion.button>
        </div>

        {/* Gentle assurance footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-xs text-[#B08968] mt-5"
        >
          Zero awkwardness guaranteed either way ✨
        </motion.p>
      </div>
    </motion.div>
  );
}
