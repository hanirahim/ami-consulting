import { audiences } from "@/data/audience";
import { AppIcon } from "@/components/ui/icons";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function AudienceSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Pour qui ?"
            title="Des sites web pour les professionnels qui veulent avancer clairement"
            description="Que vous soyez artisan, commerçant, indépendant ou dirigeant de PME, nous adaptons le site à votre réalité terrain."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {audiences.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 40}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-6 text-center transition hover:border-accent/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <AppIcon name={item.icon} className="h-5 w-5" aria-hidden />
                </div>
                <p className="text-sm font-semibold text-ink">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
