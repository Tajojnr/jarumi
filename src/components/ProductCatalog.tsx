"use client";

import React, { useState } from "react";
import MotionContainer from "./MotionContainer";
import { PRODUCTS_CATALOG, COMPANY_INFO } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { Check, ArrowUpRight } from "lucide-react";

export function ProductCatalog() {
  const { t, locale } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: t("catalog.all") },
    { id: "keke", label: t("catalog.keke") },
    { id: "motorcycle", label: t("catalog.motorcycle") },
    { id: "car", label: t("catalog.car") },
    { id: "parts", label: t("catalog.parts") },
    { id: "hardware", label: t("catalog.hardware") },
  ];

  const filteredProducts = selectedCategory === "all"
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter((p) => p.category === selectedCategory);

  return (
    <section id="catalog" className="py-24 bg-[#060B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MotionContainer>
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold mb-4">
              {t("catalog.badge")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
              {t("catalog.title")}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg font-sans">
              {t("catalog.subtitle")}
            </p>
          </MotionContainer>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                  : "bg-[#0B131E] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => {
            const productKey = product.id ? product.id : `product-card-${idx}`;
            
            return (
              <MotionContainer
                key={productKey}
                delay={idx * 0.05}
                className="bg-[#0B131E] border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image */}
                  <div className="aspect-[4/3] bg-[#0E1724] relative overflow-hidden flex items-center justify-center p-6">
                    <img
                      src={product.image}
                      alt={product.nameEn}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-amber-400 border border-slate-700">
                      {product.price}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-4">
                      {locale === "en" ? product.nameEn : product.nameHa}
                    </h3>

                    <ul className="space-y-2 mb-6">
                      {(locale === "en" ? product.specsEn : product.specsHa).map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center space-x-2 text-xs text-slate-400 font-sans">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Order Button */}
                <div className="p-6 pt-0">
                  <a
                    href={`${COMPANY_INFO.whatsappLink}?text=Hello,%20I%20want%20to%20order%20the%20${encodeURIComponent(product.nameEn)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-white font-bold text-xs uppercase tracking-wider transition-all group-hover:bg-amber-500 group-hover:text-slate-950"
                  >
                    <span>{t("catalog.viewDetails")}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </MotionContainer>
            );
          })}
        </div>

      </div>
    </section>
  );
}