import { Check, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const beforeItems = [
  "Design ancien",
  "Pas adapté au téléphone",
  "Peu de demandes de contact",
  "Message difficile à comprendre",
] as const;

const afterItems = [
  "Design moderne",
  "Expérience mobile",
  "Parcours client simplifié",
  "Appels à l’action visibles",
] as const;

export function BeforeAfterSection() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Avant → Après"
            title="Votre site doit travailler pour votre activité"
            description="On clarifie le message, on modernise le design et on oriente chaque page vers le contact."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <Reveal className="rounded-2xl border border-border bg-surface-soft p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
              Votre site actuel ?
            </p>
            <ul className="mt-5 space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <X className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delayMs={60}
            className="flex justify-center font-display text-2xl font-semibold text-accent"
          >
            <span aria-hidden>↓</span>
          </Reveal>

          <Reveal
            delayMs={100}
            className="rounded-2xl border border-accent/20 bg-accent-soft p-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Nous le transformons
            </p>
            <ul className="mt-5 space-y-3">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-accent">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
