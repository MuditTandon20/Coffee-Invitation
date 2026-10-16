"use client";

import React from "react";

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Warm Ambient Radial Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-[#FCEEE9] via-[#F7D6CD]/40 to-transparent rounded-full blur-3xl opacity-70" />
      <div className="absolute top-1/3 -left-36 w-[400px] h-[400px] bg-[#E6CCB2]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#FCEEE9]/60 rounded-full blur-3xl opacity-60" />

      {/* Floating Coffee Beans (Subtle SVGs) */}
      <div className="absolute top-[12%] left-[8%] animate-float opacity-30 text-[#6F4E37]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="6"
            transform="rotate(-30 12 12)"
          />
          <path
            d="M 6 15 Q 12 10 18 9"
            stroke="#FFFDF9"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      <div
        className="absolute top-[28%] right-[10%] animate-float opacity-25 text-[#4A2C1D]"
        style={{ animationDelay: "1.8s", animationDuration: "6s" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="6"
            transform="rotate(45 12 12)"
          />
          <path
            d="M 6 15 Q 12 10 18 9"
            stroke="#FFFDF9"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-[22%] left-[12%] animate-float opacity-25 text-[#8C6239]"
        style={{ animationDelay: "3.2s", animationDuration: "7s" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="6"
            transform="rotate(15 12 12)"
          />
          <path
            d="M 6 15 Q 12 10 18 9"
            stroke="#FFFDF9"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-[14%] right-[14%] animate-float opacity-20 text-[#6F4E37]"
        style={{ animationDelay: "0.5s", animationDuration: "5.5s" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="6"
            transform="rotate(-50 12 12)"
          />
          <path
            d="M 6 15 Q 12 10 18 9"
            stroke="#FFFDF9"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Subtle Floating Sparkles */}
      <div className="absolute top-[18%] right-[22%] text-[#DDA15E] opacity-40 animate-pulse">
        ✦
      </div>
      <div className="absolute top-[65%] left-[6%] text-[#E29578] opacity-35 animate-pulse" style={{ animationDelay: "1.2s" }}>
        ✨
      </div>
      <div className="absolute bottom-[35%] right-[8%] text-[#DDA15E] opacity-30 animate-pulse" style={{ animationDelay: "2.1s" }}>
        ✦
      </div>
      <div className="absolute top-[82%] left-[25%] text-[#E29578] opacity-25 animate-pulse" style={{ animationDelay: "0.7s" }}>
        ✨
      </div>
    </div>
  );
}
