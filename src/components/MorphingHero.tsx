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
      return directValue[locale] || directValue.en || "";
    }
    const suffix = locale === "en" ? "En" : "Ha";
    return item[`${key}${suffix}`] || item[`${key}En`] || "";
  };

  const getList = (item: any, key: string): string[] => {
    if (!item) return [];
    const directValue = item[key];
    if (Array.isArray(directValue)) return directValue;
    if (directValue && typeof directValue === "object") {
      return directValue[locale] || directValue.en || [];
    }
    const suffix = locale === "en" ? "En" : "Ha";
    return item[`${key}${suffix}`] || item[`${key}En`] || [];
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
      className="relative h-[300vh] bg-[#060B11]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pt-20 lg:pt-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/70 via-[#060B11] to-[#04070B]" />

        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(197, 155, 39, 0.28) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile: Stack layout, Desktop: Side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Text Content - Full width on mobile, 6 cols on desktop */}
            <div className="lg:col-span-6 space-y-4 lg:space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
                  {t("hero.badge")}
                </span>
              </div>

              <div className="flex items-center space-x-3 flex-wrap">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                  DIVISION {(currentSlide as any)?.categoryNumber || "01"} / 05
                </span>
                <span className="w-6 h-px bg-amber-500/35 hidden sm:block" />
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  {badgeText}
                </span>
              </div>

              <motion.div
                key={(currentSlide as any)?.id || activeIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-4"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.1]">
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
                        className="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-300 bg-[#0B131E] px-2.5 py-1.5 rounded-lg border border-slate-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feature}</span>
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-800/80">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20"
                >
                  <span>{t("hero.ctaOrder")}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#0B131E] hover:bg-[#121E2F] border border-amber-500/30 text-white font-semibold text-sm tracking-wide transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">{t("hero.ctaCall")}</span>
                </a>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t("hero.inspect")}</span>
              </div>
            </div>

            {/* Image Content - Full width on mobile, 6 cols on desktop */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-[500px] order-1 lg:order-2">
              <div className="absolute w-[350px] h-[350px] rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

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
                    className="w-auto max-h-[250px] sm:max-h-[320px] lg:max-h-[450px] xl:max-h-[520px] object-contain drop-shadow-[0_20px_28px_rgba(0,0,0,0.9)]"
                  />
                )}

                <div className="w-2/3 h-6 bg-black/70 blur-xl rounded-full -mt-4 pointer-events-none" />

                <div className="absolute bottom-2 right-2 sm:right-6 bg-[#0B131E]/95 border border-amber-500/30 backdrop-blur-md rounded-xl p-3 shadow-2xl min-w-[130px]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                    {t("hero.priceLabel")}
                  </span>
                  <span className="text-lg font-serif font-bold text-amber-400">
                    {price}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Division Tabs - Centered and responsive */}
          <div className="mt-6 pt-5 border-t border-slate-900 flex items-center justify-center gap-2 flex-wrap">
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
                  className={`px-2.5 py-1.5 rounded-lg text-[10px] font-mono transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                    activeIndex === index
                      ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                      : "bg-[#0B131E] text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  <span>{slide.categoryNumber || `0${index + 1}`}</span>
                  <span className="hidden md:inline">{firstWord}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}