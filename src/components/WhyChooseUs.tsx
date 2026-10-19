"use client";

import React from "react";
import MotionContainer from "./MotionContainer";
import { useLanguage } from "@/lib/i18n";
import { WHY_CHOOSE_US } from "@/lib/data";
import { CheckCircle2, Trophy, Users2, Truck } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Trophy: Trophy,
  Users2: Users2,
  Truck: Truck,
  CheckCircle2: CheckCircle2,
};

export function WhyChooseUs() {
  const { t, locale } = useLanguage();

  return (
    <section id="why-choose-us" className="py-24 bg-[#060B11] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MotionContainer>
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold mb-4">
              {t("why.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              {t("why.title")}
            </h2>
            <p className="text-slate-400 text-lg font-sans">
              {t("why.subtitle")}
            </p>
          </MotionContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName] || CheckCircle2;
            const uniqueKey = item.id ? item.id : `why-us-card-${idx}`;

            return (
              <MotionContainer 
                key={uniqueKey} 
                delay={idx * 0.1}
                className="group p-8 rounded-2xl bg-[#0B131E] border border-slate-800 hover:border-amber-500/40 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-amber-500" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {locale === "en" ? item.titleEn : item.titleHa}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed font-sans">
                  {locale === "en" ? item.descEn : item.descHa}
                </p>

                <div className="mt-6 flex items-center text-[10px] font-mono text-amber-500/40 uppercase tracking-[0.2em]">
                  <span className="w-8 h-[1px] bg-amber-500/20 mr-3" />
                  Standard 0{idx + 1}
                </div>
              </MotionContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}