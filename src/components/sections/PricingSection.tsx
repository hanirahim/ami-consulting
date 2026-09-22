import Link from "next/link";
import { Check } from "lucide-react";
import { pricingNote, pricingPlans } from "@/data/pricing";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="tarifs" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Tarifs indicatifs"
            title="Des budgets clairs pour démarrer sereinement"
            description="Ces fourchettes vous donnent un ordre d’idée. Le devis final est toujours personnalisé selon votre besoin."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const highlighted = "highlighted" in plan && plan.highlighted;
            return (
              <Reveal key={plan.id} delayMs={index * 60}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-3xl border p-6 sm:p-7",
                    highlighted
                      ? "border-accent bg-accent-soft/40 shadow-[0_16px_40px_rgba(91,164,217,0.18)]"
                      : "border-border bg-surface",
                  )}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {plan.name}
                  </p>
                  <p className="mt-3 font-display text-2xl font-semibold text-ink">
                    {plan.priceFrom}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {plan.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {plan.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-ink"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={`/devis?type=${encodeURIComponent(plan.name)}`}
                    className="mt-6"
                    variant={highlighted ? "primary" : "secondary"}
                    fullWidth
                  >
                    {plan.cta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 rounded-2xl border border-border bg-background px-5 py-4 text-sm leading-relaxed text-muted">
          {pricingNote}{" "}
          <Link
            href="/devis"
            className="font-semibold text-accent hover:underline"
          >
            Demander un devis personnalisé
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
