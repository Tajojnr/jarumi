import { Navbar } from "@/components/Navbar";
import { MorphingHero } from "@/components/MorphingHero";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductCatalog } from "@/components/ProductCatalog";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingWA } from "@/components/FloatingWA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-[#f8f6f0] flex flex-col selection:bg-[#d4a017] selection:text-[#0a1628]">
      {/* 1. Fixed Luxury Glass Navbar */}
      <Navbar />

      {/* Main Single Page Content Flow */}
      <main className="flex-1">
        {/* 2. Pin-Scroll Morphing Hero (Keke -> Bikes -> Cars -> Parts -> Hardware) */}
        <MorphingHero />

        {/* 3. Services Showcase & 4 Trust Badges */}
        <ServicesSection />

        {/* 4. About Jarumi Section (Jibia Location + Hausa Motto Card) */}
        <AboutSection />

        {/* 5. Product Catalog Filterable Grid */}
        <ProductCatalog />

        {/* 6. Why Choose Us (10+ Years, 1000+ Customers) */}
        <WhyChooseUs />

        {/* 7. Ready to Get Started Call/WhatsApp Banner */}
        <CTASection />
      </main>

      {/* 8. Full Dark Footer */}
      <Footer />

      {/* 9. Floating Pulsing WhatsApp Quick Action */}
      <FloatingWA />
    </div>
  );
}