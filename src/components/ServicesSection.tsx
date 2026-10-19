"use client";

import React from "react";
import MotionContainer from "./MotionContainer";
import { useLanguage } from "@/lib/i18n";
import { PRODUCTS_CATALOG, COMPANY_INFO } from "@/lib/data";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ServicesSection() {
  const { t, locale } = useLanguage();
  
  // Showcase a few key items as "Divisions"
  const divisions = PRODUCTS_CATALOG.filter(p => p.isFeatured).slice(0, 3);

  return (
    <section id="services" className="py-24 bg-[#060B11] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <MotionContainer className="max-w-2xl">
            <span className="text-xs font-mono tracking-[0.3em] text-amber-500 uppercase font-bold mb-4 block">
              {t("services.badge")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              {t("services.title")}
            </h2>
          </MotionContainer>
          <MotionContainer direction="left" className="max-w-md">
            <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
              {t("services.subtitle")}
            </p>
          </MotionContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((item, idx) => (
            <MotionContainer 
              key={item.id} 
              delay={idx * 0.1}
              className="bg-[#0B131E] border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-500 group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#0F1722] relative">
                <img 
                  src={item.image} 
                  alt={item.nameEn}
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-slate-700">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                    {locale === "en" ? item.category.toUpperCase() : "KAYAN SHAGO"}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  {locale === "en" ? item.nameEn : item.nameHa}
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {(locale === "en" ? item.specsEn : item.specsHa).map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-3 text-sm text-slate-400 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-white font-bold text-sm transition-all group-hover:bg-amber-500 group-hover:text-slate-950"
                >
                  <span>{t("services.inquire")}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </MotionContainer>
          ))}
        </div>
      </div>
    </section>
  );
}