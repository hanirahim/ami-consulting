import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection limit={6} showCta />
      <MethodSection />
      <PricingSection />
      <FounderSection />
      <ProjectsSection limit={3} showCta />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
