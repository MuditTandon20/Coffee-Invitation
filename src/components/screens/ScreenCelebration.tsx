"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { CoffeeCupIllustration } from "../CoffeeCupIllustration";
import { soundEngine } from "@/lib/audio";
import {
  WHATSAPP_PHONE_NUMBER,
  WHATSAPP_PREFILLED_MESSAGE,
} from "@/config/site";
import { Calendar, Heart, RotateCcw, MessageCircle } from "lucide-react";

interface ScreenCelebrationProps {
  onRestart: () => void;
}

export function ScreenCelebration({ onRestart }: ScreenCelebrationProps) {
  useEffect(() => {
    // 1. Play chime (if unmuted)
    soundEngine.playCelebrationChime();

    // 2. Launch delightful confetti sequence
    const count = 200;
    const defaults = {
      origin: { y: 0.65 },
      colors: ["#DDA15E", "#E29578", "#6F4E37", "#F7D6CD", "#D64045", "#FAF2EB"],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);

  // Normalize WhatsApp number (remove +, spaces, hyphens)
  const cleanPhone = WHATSAPP_PHONE_NUMBER.replace(/[^0-9]/g, "");
  const hasValidPhone = cleanPhone.length >= 8;

  const whatsappUrl = hasValidPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        WHATSAPP_PREFILLED_MESSAGE
      )}`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto text-center"
    >
      <div className="glass-card rounded-3xl p-7 sm:p-10 relative overflow-hidden shadow-2xl border border-[#F7D6CD]">
        {/* Soft celebratory glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-[#FCEEE9] to-[#F7D6CD]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Coffee Cup Hero */}
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1.08, 1] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CoffeeCupIllustration size="lg" showHeartSteam={true} />
          </motion.div>
        </div>

        {/* Floating Celebration Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FCEEE9] text-[#D64045] font-bold text-xs uppercase tracking-wider mb-4 border border-[#F7D6CD]"
        >
          <Heart className="w-3.5 h-3.5 fill-[#D64045]" />
          <span>Mission Accomplished</span>
        </motion.div>

        {/* Main Celebration Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif-heading text-2xl sm:text-3xl font-extrabold text-[#2C1810] leading-snug mb-3"
        >
          WAIT... IS THIS A YES?! 🥹☕
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#4A2C1D] text-lg font-semibold mb-2"
        >
          Okay, this just made my day!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[#6F4E37] text-sm sm:text-base leading-relaxed mb-8"
        >
          Now the important question: when are you free for coffee?
        </motion.p>

        {/* WhatsApp or Fallback Action */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4 mb-6"
        >
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-base shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#128C7E]" />
              <span>LET&apos;S PICK A DAY 📅</span>
            </a>
          ) : (
            <div className="p-4 rounded-2xl bg-[#FAF2EB] border border-[#E6CCB2] text-[#4A2C1D] text-sm sm:text-base font-medium flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-[#E29578] shrink-0" />
              <span>
                Now we just need to figure out a day that works for both of us. ☕
              </span>
            </div>
          )}
        </motion.div>

        {/* Subtle replay / back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="pt-2"
        >
          <button
            onClick={onRestart}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs text-[#B08968] hover:text-[#4A2C1D] transition-colors py-1.5 px-3 rounded-full hover:bg-black/5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay the test</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
