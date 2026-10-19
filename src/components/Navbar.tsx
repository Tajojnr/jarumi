"use client";

import React, { useState, useEffect } from "react";
import { LanguageToggle } from "./LanguageToggle";
import { JarumiLogo } from "./JarumiLogo";
import { useLanguage } from "@/lib/i18n";
import { COMPANY_INFO } from "@/lib/data";
import { Phone, MessageSquare, Menu, X } from "lucide-react";

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.catalog"), href: "#catalog" },
    { name: t("nav.why"), href: "#why-choose-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060B11]/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Jarumi Brand Logo */}
          <a href="#hero" className="block">
            <JarumiLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageToggle />

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2.5 rounded-xl bg-[#0B131E] border border-amber-500/20 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all"
              title={t("nav.callUs")}
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-emerald-600/20 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t("nav.whatsapp")}</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0B131E] border border-slate-800 text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0B131E] border-b border-amber-500/20 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-slate-300 hover:text-amber-400 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t("nav.whatsapp")}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{t("nav.callUs")}: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}