import { processSteps } from "@/data/process";
import { ProcessStep } from "@/components/cards/ProcessStep";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function MethodSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
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
      </Container>
    </section>
  );
}
