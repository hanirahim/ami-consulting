import { FAQ } from "@/components/faq/FAQ";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function FAQSection() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title="Les réponses aux questions les plus fréquentes"
            description="Des réponses honnêtes pour vous aider à avancer, sans promesses irréalistes."
          />
        </Reveal>
        <Reveal delayMs={80}>
          <FAQ />
        </Reveal>
      </Container>
    </section>
  );
}
