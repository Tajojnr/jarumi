"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center bg-[#0B131E] border border-amber-500/20 rounded-full p-1 shadow-inner">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider transition-all duration-300 ${
          locale === "en"
            ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
            : "text-slate-400 hover:text-white"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLocale("ha")}
        className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider transition-all duration-300 ${
          locale === "ha"
            ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
            : "text-slate-400 hover:text-white"
        }`}
      >
        HA
      </button>
    </div>
  );
}