import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { founder } from "@/data/credibility";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { MethodSection } from "@/components/sections/MethodSection";
import { WhySection } from "@/components/sections/WhySection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { Button } from "@/components/ui/Button";
import { CornerFrame } from "@/components/ui/CornerFrame";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description:
    "Ami Consulting, agence web fondée par Hani Rahim. Création de sites professionnels pour entreprises, indépendants et commerces.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <Container>
          <CornerFrame className="rounded-3xl border border-border bg-white p-5 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <Reveal>
                <SectionTitle
                  as="h1"
                  eyebrow="À propos"
                  title="Une agence web simple, professionnelle et humaine"
                  description="Ami Consulting accompagne les entreprises et les professionnels dans la création de sites web clairs, modernes et utiles au développement de leur activité."
                />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Demander un devis</Button>
                  <Button href="/services" variant="secondary">
                    Voir les services
                  </Button>
                </div>
              </Reveal>
              <div className="overflow-hidden rounded-2xl border border-border bg-background">
                <div className="flex justify-center bg-[#ececec] px-6 pt-6">
                  <Image
                    src={siteConfig.founderPhoto.src}
                    alt={siteConfig.founderPhoto.alt}
                    width={471}
                    height={514}
                    className="h-auto w-full max-w-[11rem] rounded-xl sm:max-w-[13rem]"
                    sizes="(max-width: 640px) 176px, 208px"
                    priority
                    unoptimized
                  />
                </div>
                <Reveal delayMs={100} className="p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                    Fondateur
                  </p>
                  <p className="mt-3 font-display text-2xl font-semibold text-ink">
                    {siteConfig.founder}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {founder.bio[0]}
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    {siteConfig.contact.email}
                  </a>
                </Reveal>
              </div>
            </div>
          </CornerFrame>
        </Container>
      </section>

      <TrustSection />
      <FounderSection />
      <WhySection />
      <MethodSection />
      <CTASection />
    </>
  );
}
