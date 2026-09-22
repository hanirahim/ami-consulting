import { BadgeCheck, FileText, Handshake, Shield } from "lucide-react";
import { commitments, honestyPoints } from "@/data/credibility";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CornerFrame } from "@/components/ui/CornerFrame";

const icons = [Handshake, FileText, Shield, BadgeCheck] as const;

export function TrustSection() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <CornerFrame className="rounded-3xl border border-border bg-background p-5 sm:p-8">
          <Reveal>
            <SectionTitle
              eyebrow="Crédibilité"
              title="Une agence transparente, sans artifices"
              description="La confiance se construit avec des engagements clairs — pas avec des témoignages inventés ni des résultats garantis."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item, index) => {
              const Icon = icons[index] ?? BadgeCheck;
              return (
                <Reveal key={item.title} delayMs={index * 50}>
                  <article className="h-full rounded-2xl border border-border bg-surface p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-ink">
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

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {honestyPoints.map((block, index) => (
              <Reveal key={block.title} delayMs={index * 60}>
                <div className="h-full rounded-2xl border border-border bg-white p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {block.title}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </CornerFrame>
      </Container>
    </section>
  );
}
