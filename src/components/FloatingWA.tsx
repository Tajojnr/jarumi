"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function FloatingWA() {
  const whatsappUrl = COMPANY_INFO.whatsappLink || COMPANY_INFO.whatsapp;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-2xl shadow-emerald-500/40 border border-emerald-300/40 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact Jarumi Enterprises on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current text-slate-950" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-mono font-bold tracking-wider uppercase ml-0 group-hover:ml-2 text-slate-950">
        Chat on WhatsApp
      </span>
    </a>
  );
}