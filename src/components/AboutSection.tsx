"use client";

import React from "react";
import MotionContainer from "@/components/MotionContainer";
import { COMPANY_INFO } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { MapPin, Phone, Building2, ArrowRight, ShieldCheck, Award } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#090F17] text-white relative overflow-hidden border-t border-amber-500/10">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Brand Card */}
          <MotionContainer className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0B131E] border border-amber-500/20 p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-2 backdrop-blur-md">
                <span className="font-mono text-xs tracking-wider text-amber-400 font-bold uppercase">
                  {t("about.registration")}
                </span>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold font-serif text-2xl shadow-lg shadow-amber-500/20">
                  J
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-tight text-white">
                    JARUMI ENTERPRISES
                  </h3>
                  <p className="text-xs font-mono text-amber-400/80 tracking-widest uppercase">
                    NIGERIA LIMITED
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                {t("about.desc1")}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center space-x-3 text-xs text-slate-300 font-mono">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t("about.locationBadge")}</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-300 font-mono">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t("about.phoneBadge")}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-500/20 bg-amber-500/5 -mx-8 -mb-8 p-6 rounded-b-2xl">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider font-mono">
                      Hausa Enterprise Motto
                    </h4>
                    <p className="text-sm font-serif italic text-white mt-1">
                      "{t("about.motto")}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionContainer>

          {/* Right Column: Detailed Narrative */}
          <MotionContainer className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
                {t("about.badge")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              {t("about.title")}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
              {t("about.desc2")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0E1724] border border-amber-500/15">
                <div className="flex items-center space-x-3 mb-2">
                  <Building2 className="w-5 h-5 text-amber-400" />
                  <h4 className="font-serif font-bold text-white text-base">Direct Dealership</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Direct factory allocations for TVS Keke Napep, Suzuki mopeds, Toyota vehicles, and TMT Iron Rods.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0E1724] border border-amber-500/15">
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h4 className="font-serif font-bold text-white text-base font-sans">100% Verified Parts</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Zero counterfeit parts policy with original manufacturer warranty documentation provided.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20"
              >
                <span>{t("nav.whatsapp")}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#0E1724] hover:bg-[#142032] border border-amber-500/30 text-white font-semibold text-sm tracking-wide transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t("nav.callUs")}</span>
              </a>
            </div>
          </MotionContainer>

        </div>
      </div>
    </section>
  );
}