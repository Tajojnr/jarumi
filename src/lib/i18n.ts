import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useState, useEffect } from "react";

export type Locale = "en" | "ha";

export const translations: Record<string, { en: string; ha: string }> = {
  // Navigation
  "nav.home": { en: "Home", ha: "Gida" },
  "nav.services": { en: "Divisions", ha: "Kasuwanci" },
  "nav.about": { en: "Company Profile", ha: "Jawabin Kamfani" },
  "nav.catalog": { en: "Product Catalog", ha: "Jerin Kayayyaki" },
  "nav.why": { en: "Why Choose Us", ha: "Dalilin Zabar Mu" },
  "nav.contact": { en: "Contact Us", ha: "Tuntube Mu" },
  "nav.callUs": { en: "Call Now", ha: "Kira Yanzu" },
  "nav.whatsapp": { en: "Order via WhatsApp", ha: "Yi Oda ta WhatsApp" },

  // Hero
  "hero.badge": {
    en: "JIBIA EXECUTIVE AUTOMOTIVE & HARDWARE HUB",
    ha: "CIBIYAR MOTOCI DA KARFE TA JIBIA",
  },
  "hero.priceLabel": { en: "Starting Price", ha: "Farashin Fara" },
  "hero.inspect": { en: "In-Store Inspection Available", ha: "Akwai Binciken Na'ura A Shagonmu" },
  "hero.ctaOrder": { en: "Order Now on WhatsApp", ha: "Yi Oda Yanzu ta WhatsApp" },
  "hero.ctaCall": { en: "Call Sales Team", ha: "Kira Abokan Ciniki" },
  "hero.scrollHint": { en: "Scroll to Explore Divisions", ha: "Sakka Don Ganin Kasuwanci" },

  // Services
  "services.badge": { en: "OUR BUSINESS DIVISIONS", ha: "SASANNAKUN KASUWANCI" },
  "services.title": { en: "Executive Quality Across Every Category", ha: "Kayan Aiki Masu Inganci Da Kyau" },
  "services.subtitle": {
    en: "Explore our core supply sectors designed for individuals, transport operators, and construction projects in Katsina State and across Nigeria.",
    ha: "Bincika fannoninmu na wadata don mutane, masu sabis na sufuri, da aikin gini a Jihar Katsina da Najeriya baki daya.",
  },
  "services.specifications": { en: "Key Specifications", ha: "Abubuwan Da Aka Haɗa" },
  "services.inStock": { en: "In Stock & Ready for Delivery", ha: "Akwai A Shago Don Isarwa" },
  "services.inquire": { en: "Inquire on WhatsApp", ha: "Yi Tambaya a WhatsApp" },

  // About
  "about.badge": { en: "ABOUT JARUMI ENTERPRISES NIGERIA LIMITED", ha: "TARIHIN JARUMI ENTERPRISES NIGERIA LIMITED" },
  "about.title": { en: "Jibia's Premier Commercial & Construction Hub", ha: "Shugaban Harkar Kasuwanci da Gini a Jibia" },
  "about.desc1": {
    en: "Jarumi Enterprises Nigeria Limited is a premier automotive and industrial supply company based in Jibia, Katsina State. We specialize in high-durability commercial Tuk-Tuks (Keke Napep), heavy-duty motorcycles, premium motor vehicles, genuine spare parts, and high-tensile construction iron rods.",
    ha: "Jarumi Enterprises Nigeria Limited shine jagorar kamfanin motoci da kayan masana'antu a Jibia, Jihar Katsina. Muna ba da Keke Napep masu karko, babura, motoci masu inganci, kayan gyara na asali, da karfen gini mai karko.",
  },
  "about.desc2": {
    en: "Founded on principles of integrity, unmatched quality, and executive service delivery, we serve commercial drivers, transport unions, hardware retailers, and construction projects across Northern Nigeria.",
    ha: "Da aka kafa bisa amana, inganci marar tamka, da hidima ta musamman, muna hidimtawa direbobi, kungiyoyin sufuri, da ayyukan gini a Arewacin Najeriya.",
  },
  "about.motto": { en: "Executive Quality. Local Trust. Unbeatable Wholesale Value.", ha: "Inganci Mai Girma. Amana A Shago. Farashi Mai Kyau." },
  "about.locationBadge": { en: "Headquarters: Jibia Commercial Zone, Katsina State, Nigeria", ha: "Hedkwata: Jibia Commercial Zone, Jihar Katsina, Najeriya" },
  "about.phoneBadge": { en: "Official Line: +234 703 645 0649", ha: "Layin Waya: +234 703 645 0649" },
  "about.registration": { en: "Registered Enterprise: RC - 7849201", ha: "Kamfanin Da Aka Yi Rajista: RC - 7849201" },

  // Catalog
  "catalog.badge": { en: "OFFICIAL INVENTORY", ha: "KAYAN SHAGO" },
  "catalog.title": { en: "Product Catalog", ha: "Jerin Kayayyakinmu" },
  "catalog.subtitle": {
    en: "Direct manufacturer supply with full documentation and instant local delivery in Katsina State.",
    ha: "Kayan da aka kawo kai tsaye daga masana'anta tare da takardu da isarwa cikin sauri a Jihar Katsina.",
  },
  "catalog.all": { en: "All Products", ha: "Dukkan Kayayyaki" },
  "catalog.keke": { en: "Keke Napep", ha: "Keke Napep" },
  "catalog.motorcycle": { en: "Motorcycles", ha: "Babura" },
  "catalog.car": { en: "Motor Vehicles", ha: "Motoci" },
  "catalog.parts": { en: "Genuine Parts", ha: "Kayan Gyara" },
  "catalog.hardware": { en: "Iron Rods & Hardware", ha: "Karfen Gini" },
  "catalog.inStock": { en: "In Stock", ha: "Akwai A Shago" },
  "catalog.viewDetails": { en: "Order via WhatsApp", ha: "Yi Oda ta WhatsApp" },

  // Why Choose Us
  "why.badge": { en: "THE JARUMI ADVANTAGE", ha: "SHIN ME YA SA ZUWA JARUMI" },
  "why.title": { en: "Built on Trust, Scale, and Reliability", ha: "An Gina Bisa Amana da Tabbaci" },
  "why.subtitle": {
    en: "Why customers across Katsina State and Northern Nigeria choose Jarumi Enterprises for commercial vehicles and hardware.",
    ha: "Dalilin da ya sa abokan ciniki a Jihar Katsina da Arewacin Najeriya ke zabar Jarumi Enterprises.",
  },

  // CTA
  "cta.badge": { en: "IMMEDIATE INVENTORY AVAILABLE", ha: "AKWAI KAYAN DA AKA SHIRYA" },
  "cta.title": { en: "Ready to Upgrade Your Fleet or Source Construction Hardware?", ha: "A Shirye Kake Don Sayen Keke, Babur Ko Karfen Gini?" },
  "cta.subtitle": {
    en: "Contact Jarumi Enterprises today for direct pricing, wholesale discounts, and fast local delivery in Jibia and across Katsina State.",
    ha: "Tuntubi Jarumi Enterprises a yau don farashin masana'anta, rangwame, da isarwa cikin sauri a Jibia da dukkan Jihar Katsina.",
  },
  "cta.whatsappBtn": { en: "Chat on WhatsApp", ha: "Yi Magana a WhatsApp" },
  "cta.callBtn": { en: "Call Sales Manager (+234 703 645 0649)", ha: "Kira Manajan Ciniki (+234 703 645 0649)" },
  "cta.address": { en: "Visit Us: Jibia Commercial District, Jibia, Katsina State", ha: "Kasance tare da mu: Jibia Commercial District, Jibia, Jihar Katsina" },

  // Footer
  "footer.tagline": {
    en: "Katsina State's premier distributor of commercial Keke Napep, motorcycles, motor vehicles, genuine auto parts, and high-tensile construction iron rods.",
    ha: "Babban mai rarraba Keke Napep, babura, motoci, kayan gyara na asali, da karfen gini a Jihar Katsina.",
  },
  "footer.quickLinks": { en: "Quick Links", ha: "Sauri Zuwa" },
  "footer.divisions": { en: "Business Divisions", ha: "Sassan Kasuwanci" },
  "footer.contactUs": { en: "Office Location", ha: "Wurin Offishinmu" },
  "footer.copyright": { en: "All rights reserved. Jarumi Enterprises Nigeria Limited.", ha: "Dukkan haƙƙoƙi mallakar Jarumi Enterprises Nigeria Limited ne." },
};

export function translate(key: string, locale: Locale = "en"): string {
  if (translations[key] && translations[key][locale]) {
    return translations[key][locale];
  }
  return key;
}

export const t = translate;

interface LanguageState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      locale: "en",
      setLocale: (locale: Locale) => set({ locale }),
      toggleLocale: () => set((state) => ({ locale: state.locale === "en" ? "ha" : "en" })),
      t: (key: string) => translate(key, get().locale),
    }),
    {
      name: "jarumi-locale",
    }
  )
);

export function useLanguage() {
  const store = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeLocale = mounted ? store.locale : "en";

  return {
    locale: activeLocale,
    setLocale: store.setLocale,
    toggleLocale: store.toggleLocale,
    t: (key: string) => translate(key, activeLocale),
  };
}