"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { CoffeeCupIllustration } from "../CoffeeCupIllustration";
import { soundEngine } from "@/lib/audio";
import {
  WHATSAPP_PHONE_NUMBER,
  QuizOption,
  VibeResult,
  RECIPIENT_NAME,
} from "@/config/site";
import { Heart, RotateCcw, MessageCircle, Copy, Check } from "lucide-react";

interface ScreenCelebrationProps {
  answers: Record<number, QuizOption | undefined>;
  result: VibeResult;
  onRestart: () => void;
}

export function ScreenCelebration({
  answers,
  result,
  onRestart,
}: ScreenCelebrationProps) {
  const [copied, setCopied] = useState(false);

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

  // Format personalized message with her quiz picks
  const q1Text = answers[1]?.text || "Coffee, obviously ☕";
  const q2Text = answers[2]?.text || "Deep conversations 🌙";
  const q3Text = answers[3]?.text || "Sweet but slightly chaotic 😇";
  const q4Text = answers[4]?.text || "We'd talk for hours ☕";

  const formattedMessage = `Hey! It's a yes to coffee ☕

My Vibe: ${result.title} ✨
${result.headline}

My Quiz Picks:
☕ Beverage: ${q1Text}
🌙 Ideal Evening: ${q2Text}
😇 Default Setting: ${q3Text}
👀 In 5 Mins: ${q4Text}

Let's figure out a day that works for both of us! 📅`;

  // Normalize WhatsApp number if configured
  const cleanPhone = WHATSAPP_PHONE_NUMBER.replace(/[^0-9]/g, "");
  const hasValidPhone = cleanPhone.length >= 8;

  // If phone is configured, chat directly to that number; otherwise open WhatsApp contact picker!
  const whatsappUrl = hasValidPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedMessage)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(formattedMessage)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto text-center"
    >
      <div className="glass-card rounded-3xl p-6 sm:p-9 relative overflow-hidden shadow-2xl border border-[#F7D6CD]">
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
          className="font-serif-heading text-2xl sm:text-3xl font-extrabold text-[#2C1810] leading-snug mb-2"
        >
          WAIT... IS THIS A YES?! 🥹☕
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#4A2C1D] text-base sm:text-lg font-semibold mb-2"
        >
          Okay, this just made my day!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[#6F4E37] text-xs sm:text-sm leading-relaxed mb-6"
        >
          Now the important question: when are you free for coffee?
        </motion.p>

        {/* Choices summary preview card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="p-3.5 rounded-2xl bg-[#FAF2EB] border border-[#E6CCB2] text-left text-xs text-[#4A2C1D] mb-6 space-y-1"
        >
          <div className="font-bold text-[#6F4E37] text-[11px] uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>{RECIPIENT_NAME}&apos;s Coffee Profile</span>
            <span className="text-[#D64045]">✓ Saved</span>
          </div>
          <p className="truncate">☕ <span className="font-medium">Drink:</span> {q1Text}</p>
          <p className="truncate">🌙 <span className="font-medium">Vibe:</span> {q2Text}</p>
          <p className="truncate">😇 <span className="font-medium">Mood:</span> {q3Text}</p>
          <p className="truncate">👀 <span className="font-medium">Prediction:</span> {q4Text}</p>
        </motion.div>

        {/* WhatsApp & Copy Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="space-y-3 mb-6"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-base shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#128C7E]" />
            <span>LET&apos;S PICK A DAY 📅</span>
          </a>

          <button
            onClick={handleCopy}
            type="button"
            className="w-full py-2.5 px-4 rounded-xl bg-white/70 hover:bg-white text-xs font-semibold text-[#7F5539] border border-[#E6CCB2]/70 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-700">Message Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#B08968]" />
                <span>Copy answers & message</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Subtle replay / restart button */}
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
