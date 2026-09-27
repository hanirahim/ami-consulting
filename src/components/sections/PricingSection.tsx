import { Check } from "lucide-react";
import { pricingNote, pricingPlans } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function SeoLabel(level: string) {
  if (level === "renforce") return "SEO ✓✓";
  return "SEO ✓";
}

function SupportLabel(level: string) {
  if (level === "renforce") return "Accompagnement ✓✓";
  return "Accompagnement ✓";
}

export function PricingSection() {
  return (
    <section id="tarifs" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Tarifs"
            title="Des budgets clairs pour démarrer sereinement"
            description="Des fourchettes indicatives. Le devis final est toujours personnalisé selon votre besoin."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal
              key={plan.id}
              delayMs={index * 70}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-surface p-6 sm:p-7",
                plan.highlighted
                  ? "border-accent shadow-[0_20px_50px_-28px_rgba(37,99,235,0.45)] ring-1 ring-accent/20"
                  : "border-border",
              )}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white">
                  Le plus choisi
                </span>
              ) : null}
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {plan.name}
              </p>
              <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
                <span className="mr-1 text-sm font-medium text-muted">
                  {plan.pricePrefix}
                </span>
                {plan.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-2.5 text-sm text-ink">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                  {plan.pages}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                  Mobile ✓
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                  {SeoLabel(plan.seo)}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                  Formulaire ✓
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                  {SupportLabel(plan.support)}
                </li>
              </ul>

              <div className="mt-auto pt-7">
                <Button
                  href={`/devis?type=${encodeURIComponent(plan.typeParam)}`}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  fullWidth
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">{pricingNote}</p>
      </Container>
    </section>
  );
}
