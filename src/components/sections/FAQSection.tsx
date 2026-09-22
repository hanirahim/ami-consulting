import { FAQ } from "@/components/faq/FAQ";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CornerFrame } from "@/components/ui/CornerFrame";
import { Button } from "@/components/ui/Button";

export function FAQSection() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <CornerFrame className="rounded-3xl border border-border bg-background p-5 sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <SectionTitle
                eyebrow="FAQ"
                title="Les réponses aux questions les plus fréquentes"
                description="Des réponses honnêtes pour vous aider à avancer, sans promesses irréalistes."
              />
              <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
                <p className="font-display text-base font-semibold text-ink">
                  Une autre question ?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Écrivez-nous, nous vous répondons avec clarté sur votre projet.
                </p>
                <Button href="/contact" className="mt-4" variant="secondary">
                  Nous contacter
                </Button>
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <FAQ />
            </Reveal>
          </div>
        </CornerFrame>
      </Container>
    </section>
  );
}
