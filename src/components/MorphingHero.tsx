"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { HERO_SLIDES, COMPANY_INFO } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";

export function MorphingHero() {
  const { t, locale } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const nextIndex = Math.min(
        HERO_SLIDES.length - 1,
        Math.max(0, Math.floor(latest * HERO_SLIDES.length))
      );
      setActiveIndex(nextIndex);
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  const currentSlide = HERO_SLIDES[activeIndex] || HERO_SLIDES[0];

  const getText = (item: any, key: string): string => {
    if (!item) return "";
    const directValue = item[key];

    if (typeof directValue === "string") return directValue;

    if (directValue && typeof directValue === "object") {
      if ("title" in directValue) {
        const main = typeof directValue.title === "string" ? directValue.title : "";
        const sub = typeof directValue.sub === "string" ? directValue.sub : "";
        return `${main} ${sub}`.trim();
      }
      const val = directValue[locale] || directValue.en || "";
      if (typeof val === "string") return val;
      if (val && typeof val === "object" && "title" in val) {
        return `${val.title || ""} ${val.sub || ""}`.trim();
      }
    }

    const suffix = locale === "en" ? "En" : "Ha";
    const suffixedVal = item[`${key}${suffix}`] || item[`${key}En`];
    if (typeof suffixedVal === "string") return suffixedVal;
    if (suffixedVal && typeof suffixedVal === "object") {
      if ("title" in suffixedVal) {
        return `${suffixedVal.title || ""} ${suffixedVal.sub || ""}`.trim();
      }
    }

    return "";
  };

  const getList = (item: any, key: string): string[] => {
    if (!item) return [];
    const directValue = item[key];

    if (Array.isArray(directValue)) return directValue;

    if (directValue && typeof directValue === "object") {
      const arr = directValue[locale] || directValue.en;
      if (Array.isArray(arr)) return arr;
    }

    const suffix = locale === "en" ? "En" : "Ha";
    const suffixedArr = item[`${key}${suffix}`] || item[`${key}En`];
    if (Array.isArray(suffixedArr)) return suffixedArr;

    return [];
  };

  const title = getText(currentSlide, "titleBig");
  const badgeText = getText(currentSlide, "badgeText");
  const description = getText(currentSlide, "description");
  const features = getList(currentSlide, "features");
  const image = (currentSlide as any)?.image || "";
  const price = (currentSlide as any)?.price || "";

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-[320vh] bg-[#060B11]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/70 via-[#060B11] to-[#04070B]" />

        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(197, 155, 39, 0.28) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/25 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
                  {t("hero.badge")}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1.5 rounded border border-amber-500/20">
                  Division {(currentSlide as any)?.categoryNumber || "01"} / 05
                </span>

                <span className="w-10 h-px bg-amber-500/35" />

                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  {badgeText}
                </span>
              </div>

              <motion.div
                key={(currentSlide as any)?.id || activeIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-5"
              >
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08] max-w-3xl">
                  {title}
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                  {description}
                </p>

                {features.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {features.map((feature, index) => (
                      <span
                        key={`${(currentSlide as any)?.id || "hero"}-feature-${index}`}
                        className="inline-flex items-center space-x-2 text-xs font-mono text-slate-300 bg-[#0B131E] px-3 py-2 rounded-lg border border-slate-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feature}</span>
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-slate-800/80">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-amber-500/20"
                >
                  <span>{t("hero.ctaOrder")}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center space-x-3 px-7 py-4 rounded-xl bg-[#0B131E] hover:bg-[#121E2F] border border-amber-500/30 text-white font-semibold text-sm tracking-wide transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{t("hero.ctaCall")}</span>
                </a>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t("hero.inspect")}</span>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] lg:min-h-[620px]">
              <div className="absolute w-[460px] h-[460px] rounded-full bg-amber-500/10 blur-[90px] pointer-events-none" />

              <motion.div
                key={`${(currentSlide as any)?.id || activeIndex}-image`}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative flex flex-col items-center justify-center w-full"
              >
                {image && (
                  <img
                    src={image}
                    alt={title || "Jarumi Enterprises product"}
                    className="w-auto h-[340px] sm:h-[440px] lg:h-[580px] xl:h-[640px] object-contain drop-shadow-[0_28px_38px_rgba(0,0,0,0.9)]"
                  />
                )}

                <div className="w-3/4 h-8 bg-black/70 blur-xl rounded-full -mt-7 pointer-events-none" />

                <div className="absolute bottom-4 right-2 sm:right-8 bg-[#0B131E]/95 border border-amber-500/30 backdrop-blur-md rounded-xl p-4 shadow-2xl min-w-[150px]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                    {t("hero.priceLabel")}
                  </span>

                  <span className="text-xl font-serif font-bold text-amber-400">
                    {price}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-900 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {HERO_SLIDES.map((slide: any, index) => {
                const tabBadge = getText(slide, "badgeText");
                const firstWord = tabBadge ? tabBadge.split(" ")[0] : "Division";

                return (
                  <button
                    key={slide.id || `hero-tab-${index}`}
                    onClick={() => {
                      if (!containerRef.current) return;

                      const sectionHeight = containerRef.current.clientHeight;
                      const scrollableDistance = sectionHeight - window.innerHeight;
                      const targetY =
                        containerRef.current.offsetTop +
                        (index / Math.max(1, HERO_SLIDES.length - 1)) *
                          scrollableDistance;

                      window.scrollTo({
                        top: targetY,
                        behavior: "smooth",
                      });
                    }}
                    className={`px-3 py-2 rounded-lg text-xs font-mono transition-all flex items-center space-x-2 whitespace-nowrap ${
                      activeIndex === index
                        ? "bg-amber-500 text-slate-950 font-bold"
                        : "bg-[#0B131E] text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    <span>{slide.categoryNumber || `0${index + 1}`}</span>
                    <span className="hidden sm:inline">{firstWord}</span>
                  </button>
                );
              })}
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 hidden md:inline">
              {t("hero.scrollHint")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}