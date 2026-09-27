import { Hero } from "@/components/sections/Hero";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseSection />
      <ServicesSection featuredOnly showCta />
      <ProjectsSection limit={3} showCta />
      <BeforeAfterSection />
      <MethodSection />
      <PricingSection />
      <FounderSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
