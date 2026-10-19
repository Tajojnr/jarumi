"use client";

import React from "react";
import MotionContainer from "./MotionContainer";
import { COMPANY_INFO } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { Phone, MessageSquare, MapPin } from "lucide-react";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#090F17] relative overflow-hidden border-t border-amber-500/15">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#0B131E] border border-amber-500/30 p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          
          <MotionContainer>
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono tracking-widest text-amber-400 uppercase font-bold mb-6">
              {t("cta.badge")}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              {t("cta.title")}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed mb-10">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm tracking-wide transition-all shadow-xl shadow-emerald-600/20"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>{t("cta.whatsappBtn")}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-slate-900 border border-amber-500/30 text-white font-bold text-sm tracking-wide transition-all hover:bg-slate-800"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>{t("cta.callBtn")}</span>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-2 text-xs font-mono text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t("cta.address")}</span>
            </div>
          </MotionContainer>

        </div>
      </div>
    </section>
  );
}