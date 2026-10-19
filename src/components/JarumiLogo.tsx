"use client";

import React, { useState, useEffect } from "react";

interface JarumiLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function JarumiLogo({
  className = "",
  size = "md",
  showText = true,
}: JarumiLogoProps) {
  const [imgError, setImgError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dimensions = {
    sm: { icon: "w-8 h-8", text: "text-base", sub: "text-[9px]" },
    md: { icon: "w-10 h-10 sm:w-11 sm:h-11", text: "text-lg sm:text-xl", sub: "text-[10px]" },
    lg: { icon: "w-14 h-14", text: "text-2xl", sub: "text-xs" },
  }[size];

  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      {/* Brand Emblem */}
      {mounted && !imgError ? (
        <img
          src="/images/brand/logo.png"
          alt="Jarumi Enterprises Nigeria Limited Logo"
          onError={() => setImgError(true)}
          className={`${dimensions.icon} object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_10px_rgba(197,155,39,0.35)]`}
        />
      ) : (
        /* Executive Golden Crest Shield (SVG Fallback) */
        <div className={`${dimensions.icon} relative flex items-center justify-center shrink-0`}>
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_4px_14px_rgba(197,155,39,0.4)] group-hover:scale-105 transition-transform duration-300"
          >
            <defs>
              <linearGradient id="jarumiGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7E07E" />
                <stop offset="45%" stopColor="#C59B27" />
                <stop offset="100%" stopColor="#7E5D0D" />
              </linearGradient>
              <linearGradient id="jarumiDarkBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0E1724" />
                <stop offset="100%" stopColor="#04070B" />
              </linearGradient>
            </defs>

            <path
              d="M50 4 L88 19 V48 C88 71 71 88 50 95 C29 88 12 71 12 48 V19 Z"
              fill="url(#jarumiDarkBg)"
              stroke="url(#jarumiGoldGrad)"
              strokeWidth="3.5"
            />

            <path
              d="M50 10 L81 23 V46 C81 65 66 81 50 88 C34 81 19 65 19 46 V23 Z"
              fill="none"
              stroke="url(#jarumiGoldGrad)"
              strokeWidth="1.2"
              strokeDasharray="4 2"
              opacity="0.8"
            />

            <polygon
              points="50,15 52.5,21.5 59,21.5 53.8,25.5 55.5,32 50,28 44.5,32 46.2,25.5 41,21.5 47.5,21.5"
              fill="url(#jarumiGoldGrad)"
            />

            <path
              d="M56 36 V61 C56 69 48 72 42 69 C38 67 36 63 36 59 H43 C43 61 45 63.5 48 63.5 C51.5 63.5 52.5 61.5 52.5 57.5 V36 Z"
              fill="url(#jarumiGoldGrad)"
            />
          </svg>
        </div>
      )}

      {/* Corporate Typography */}
      {showText && (
        <div>
          <span
            className={`font-serif ${dimensions.text} font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors block leading-tight`}
          >
            JARUMI
          </span>
          <span
            className={`${dimensions.sub} font-mono tracking-[0.22em] text-amber-400 uppercase block font-semibold`}
          >
            ENTERPRISES NIG. LTD
          </span>
        </div>
      )}
    </div>
  );
}