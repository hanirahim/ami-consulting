import { Handshake, Smartphone, Target, Zap } from "lucide-react";
import { whyChooseUs } from "@/data/credibility";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  target: Target,
  zap: Zap,
  smartphone: Smartphone,
  handshake: Handshake,
} as const;

export function WhyChooseSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Pourquoi nous choisir"
            title="Quatre raisons de confier votre projet à Ami Consulting"
            description="Une agence claire, humaine et concentrée sur ce qui compte pour votre activité."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                key={item.title}
                delayMs={index * 60}
                className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/30 hover:shadow-[0_16px_40px_-24px_rgba(37,99,235,0.35)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
