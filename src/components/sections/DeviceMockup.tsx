import Image from "next/image";
import { siteConfig } from "@/data/site";

/** Mockup ordinateur + smartphone — aperçu d’un site Ami Consulting */
export function DeviceMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-xl animate-float"
      role="img"
      aria-label="Aperçu d’un site web sur ordinateur et smartphone"
    >
      {/* Laptop */}
      <div className="relative z-10 mx-auto w-[92%]">
        <div className="overflow-hidden rounded-t-xl border border-ink/20 bg-ink shadow-[0_30px_60px_-20px_rgba(7,17,31,0.45)]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#0c1829] px-3 py-2">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
            </div>
            <div className="mx-auto w-[55%] rounded-md bg-white/10 px-2 py-1 text-center text-[9px] text-white/50">
              amiconsulting.fr
            </div>
          </div>
          <div className="bg-white">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <Image
                src={siteConfig.logo.src}
                alt=""
                width={120}
                height={52}
                className="h-7 w-auto object-contain"
                aria-hidden
              />
              <span className="rounded-md bg-accent px-2.5 py-1 text-[10px] font-semibold text-white">
                Devis
              </span>
            </div>
            <div className="bg-gradient-to-br from-navy via-[#0c1a2e] to-accent px-5 py-7 text-white">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
                Création de sites web
              </p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug sm:text-xl">
                Un site qui donne envie
                <br />
                de vous contacter.
              </p>
              <div className="mt-4 inline-flex rounded-lg bg-white px-3 py-1.5 text-[10px] font-semibold text-navy">
                Démarrer mon projet
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-surface-soft p-3">
              {["Vitrine", "E-commerce", "Refonte"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-white px-2 py-2.5 text-center"
                >
                  <p className="text-[10px] font-semibold text-ink">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto h-2.5 w-[102%] rounded-b-md bg-[#1a2433]" />
        <div className="mx-auto h-1.5 w-[28%] rounded-b-md bg-[#0f172a]" />
      </div>

      {/* Phone */}
      <div className="absolute -bottom-2 -right-1 z-20 w-[28%] min-w-[5.5rem] max-w-[7.5rem] sm:right-2 sm:bottom-4">
        <div className="overflow-hidden rounded-[1.1rem] border-[3px] border-ink bg-white shadow-[0_20px_40px_-12px_rgba(7,17,31,0.5)]">
          <div className="flex justify-center bg-ink py-1">
            <span className="h-1 w-8 rounded-full bg-white/30" aria-hidden />
          </div>
          <div className="bg-gradient-to-b from-navy to-accent px-2.5 py-4 text-white">
            <p className="text-[7px] font-semibold uppercase tracking-wider text-white/70">
              Ami Consulting
            </p>
            <p className="mt-1 font-display text-[11px] font-semibold leading-tight">
              Votre site, sur mesure.
            </p>
            <span className="mt-2 inline-block rounded bg-white px-1.5 py-0.5 text-[7px] font-semibold text-navy">
              Devis
            </span>
          </div>
          <div className="space-y-1.5 bg-surface-soft p-2">
            <div className="h-2 rounded bg-white" />
            <div className="h-2 w-2/3 rounded bg-white" />
            <div className="h-6 rounded-md bg-accent/15" />
          </div>
        </div>
      </div>
    </div>
  );
}
