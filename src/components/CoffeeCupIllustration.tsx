"use client";

import React from "react";

interface CoffeeCupProps {
  size?: "sm" | "md" | "lg" | "xl";
  showHeartSteam?: boolean;
}

export function CoffeeCupIllustration({
  size = "md",
  showHeartSteam = true,
}: CoffeeCupProps) {
  const dimensions = {
    sm: { width: 90, height: 90 },
    md: { width: 140, height: 140 },
    lg: { width: 190, height: 190 },
    xl: { width: 230, height: 230 },
  }[size];

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <svg
        viewBox="0 0 160 160"
        width={dimensions.width}
        height={dimensions.height}
        className="overflow-visible drop-shadow-md"
      >
        <defs>
          <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8F2" />
            <stop offset="60%" stopColor="#F5ECE4" />
            <stop offset="100%" stopColor="#E2D4C6" />
          </linearGradient>

          <linearGradient id="innerCoffee" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A2C1D" />
            <stop offset="70%" stopColor="#361F14" />
            <stop offset="100%" stopColor="#25140C" />
          </linearGradient>

          <linearGradient id="saucerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF2EB" />
            <stop offset="100%" stopColor="#DFD1C3" />
          </linearGradient>

          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E29578" />
            <stop offset="100%" stopColor="#D64045" />
          </linearGradient>
        </defs>

        {/* --- Steam Wisps --- */}
        <g className="text-[#B08968]">
          {/* Steam 1 */}
          <path
            d="M 68 62 C 64 52 72 44 68 34 C 64 24 70 18 68 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="animate-steam-1"
          />

          {/* Steam 2 (Center with mini heart) */}
          <path
            d="M 80 58 C 76 46 84 38 80 26 C 76 16 82 10 80 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.6"
            strokeLinecap="round"
            className="animate-steam-2"
          />

          {/* Steam 3 */}
          <path
            d="M 92 62 C 96 52 88 44 92 34 C 96 24 90 18 92 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="animate-steam-3"
          />

          {/* Floating Heart over Center Steam */}
          {showHeartSteam && (
            <g className="animate-steam-2" style={{ transformOrigin: "80px 20px" }}>
              <path
                d="M 80 20 C 78 16 73 15 73 10 C 73 6 77 4 80 9 C 83 4 87 6 87 10 C 87 15 82 16 80 20 Z"
                fill="url(#heartGrad)"
                opacity="0.9"
              />
            </g>
          )}
        </g>

        {/* --- Saucer Base --- */}
        <ellipse
          cx="80"
          cy="132"
          rx="58"
          ry="14"
          fill="rgba(74, 44, 29, 0.08)"
        />
        <ellipse
          cx="80"
          cy="128"
          rx="56"
          ry="13"
          fill="url(#saucerGrad)"
          stroke="#D5C5B5"
          strokeWidth="1.5"
        />
        <ellipse
          cx="80"
          cy="126"
          rx="40"
          ry="8"
          fill="none"
          stroke="#C8B5A2"
          strokeWidth="1"
          opacity="0.7"
        />

        {/* --- Cup Handle --- */}
        <path
          d="M 105 76 C 132 76 132 106 105 108"
          fill="none"
          stroke="url(#cupGrad)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 105 76 C 132 76 132 106 105 108"
          fill="none"
          stroke="#D5C5B5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* --- Cup Body --- */}
        <path
          d="M 44 68 L 52 114 C 53 124 64 126 80 126 C 96 126 107 124 108 114 L 116 68 Z"
          fill="url(#cupGrad)"
          stroke="#D5C5B5"
          strokeWidth="1.5"
        />

        {/* Cup Rim & Coffee Surface */}
        <ellipse
          cx="80"
          cy="68"
          rx="36"
          ry="12"
          fill="url(#cupGrad)"
          stroke="#D5C5B5"
          strokeWidth="1.5"
        />

        {/* Rich Coffee */}
        <ellipse
          cx="80"
          cy="68"
          rx="32"
          ry="9.5"
          fill="url(#innerCoffee)"
        />

        {/* Creamy Foam Swirl & Latte Art Heart */}
        <ellipse
          cx="80"
          cy="68"
          rx="27"
          ry="7.5"
          fill="none"
          stroke="#E6CCB2"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Cream Latte Art Heart */}
        <path
          d="M 80 73 C 76 68 70 66 70 62 C 70 59 74 58 80 62 C 86 58 90 59 90 62 C 90 66 84 68 80 73 Z"
          fill="#FAF2EB"
          opacity="0.9"
        />

        {/* Tiny sparkle accent on cup */}
        <circle cx="56" cy="80" r="1.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="58" cy="88" r="1" fill="#FFFFFF" opacity="0.6" />
      </svg>
    </div>
  );
}
