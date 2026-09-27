import { BadgeCheck, FileText, Handshake, Shield } from "lucide-react";
import { commitments } from "@/data/credibility";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Handshake, FileText, Shield, BadgeCheck] as const;

export function TrustSection() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Engagements"
            title="Une collaboration claire et directe"
            description="Des engagements simples pour avancer sereinement sur votre projet."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => {
            const Icon = icons[index] ?? BadgeCheck;
            return (
              <Reveal key={item.title} delayMs={index * 50}>
                <article className="h-full rounded-2xl border border-border bg-background p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-display mt-4 text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
