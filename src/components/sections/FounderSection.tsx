import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { founder } from "@/data/credibility";
import { siteConfig } from "@/data/site";
import { processSteps } from "@/data/process";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FounderSection() {
  return (
    <section className="border-y border-border bg-navy py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-14">
          <Reveal className="mx-auto w-full max-w-[14rem] lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Image
                src={siteConfig.founderPhoto.src}
                alt={siteConfig.founderPhoto.alt}
                width={471}
                height={514}
                className="h-auto w-full"
                sizes="224px"
                unoptimized
              />
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ring">
              Un interlocuteur unique pour votre projet
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {founder.name}
              <span className="mt-1 block text-lg font-medium text-white/65 sm:text-xl">
                {founder.role}
              </span>
            </h2>
            <blockquote className="mt-6 border-l-2 border-accent pl-4 text-base leading-relaxed text-white/85 sm:text-lg">
              “{founder.quote}”
            </blockquote>

            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-xl bg-white/5 px-3.5 py-3 ring-1 ring-white/10"
                >
                  <p className="text-[11px] font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{step.title}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${founder.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                <Mail className="h-4 w-4 text-ring" aria-hidden />
                {founder.email}
              </a>
              <p className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2.5 text-sm text-white/75 ring-1 ring-white/15">
                <MapPin className="h-4 w-4 text-ring" aria-hidden />
                {siteConfig.contact.zone}
              </p>
            </div>

            <div className="mt-6">
              <Button href="/devis">Demander un devis</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
