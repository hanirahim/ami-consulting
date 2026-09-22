import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhySection } from "@/components/sections/WhySection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SeriousLinksSection } from "@/components/sections/SeriousLinksSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection limit={6} showCta />
      <WhySection />
      <FounderSection />
      <MethodSection />
      <ProjectsSection showCta />
      <SeriousLinksSection />
      <AudienceSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
