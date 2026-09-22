import { processSteps } from "@/data/process";
import { ProcessStep } from "@/components/cards/ProcessStep";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CornerFrame } from "@/components/ui/CornerFrame";

export function MethodSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <CornerFrame className="rounded-3xl border border-border/60 bg-surface/50 p-5 sm:p-8">
          <Reveal>
            <SectionTitle
              eyebrow="Notre méthode"
              title="Un processus simple, de l’échange à la mise en ligne"
              description="Quatre étapes pour avancer sereinement, avec des points de validation clairs à chaque moment important."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delayMs={index * 70}>
                <ProcessStep
                  step={step.step}
                  title={step.title}
                  description={step.description}
                />
              </Reveal>
            ))}
          </div>
        </CornerFrame>
      </Container>
    </section>
  );
}
