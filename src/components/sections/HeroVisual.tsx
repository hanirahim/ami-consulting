import Image from "next/image";
import { Globe2, Smartphone, Search } from "lucide-react";
import { siteConfig } from "@/data/site";

const previewServices = [
  {
    icon: Globe2,
    title: "Site vitrine",
    text: "Image claire et pro",
  },
  {
    icon: Smartphone,
    title: "100 % mobile",
    text: "Fluide sur tous écrans",
  },
  {
    icon: Search,
    title: "Visibilité",
    text: "Base SEO soignée",
  },
] as const;

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg"
      role="img"
      aria-label="Aperçu d’un site web professionnel conçu par Ami Consulting"
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(91,164,217,0.22),transparent_65%)]"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_28px_64px_-16px_rgba(58,68,81,0.28),0_8px_20px_-8px_rgba(58,68,81,0.12)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-border/80 bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] px-3.5 py-2.5 sm:px-4">
          <div className="flex shrink-0 items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] ring-1 ring-black/5" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] ring-1 ring-black/5" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] ring-1 ring-black/5" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-border/70 bg-white px-2.5 py-1.5">
            <span className="truncate text-[11px] font-medium text-muted sm:text-xs">
              https://amiconsulting.fr
            </span>
          </div>
        </div>

        {/* Full mini website */}
        <div className="bg-white">
          <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3 sm:px-5">
            <Image
              src={siteConfig.logo.src}
              alt=""
              width={140}
              height={60}
              className="h-8 w-auto object-contain object-left"
              aria-hidden
            />
            <div className="hidden items-center gap-3 text-[10px] font-medium text-muted sm:flex">
              <span>Services</span>
              <span>Réalisations</span>
              <span className="rounded-md bg-accent px-2 py-1 text-white">
                Devis
              </span>
            </div>
          </div>

          {/* Rich hero band */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#3a4451] via-[#45566a] to-[#5ba4d9] px-4 py-6 text-white sm:px-5 sm:py-7">
            <div
              className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-accent/40 blur-2xl"
              aria-hidden
            />
            <p className="relative text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
              Agence web
            </p>
            <p className="relative mt-2 font-display text-lg font-semibold leading-snug tracking-tight sm:text-xl">
              Un site clair, moderne
              <br />
              et utile à votre activité.
            </p>
            <p className="relative mt-2 max-w-[18rem] text-[11px] leading-relaxed text-white/75 sm:text-xs">
              Conception, développement et accompagnement pour entreprises et
              professionnels.
            </p>
            <div className="relative mt-4 flex flex-wrap gap-2">
              <span className="rounded-lg bg-white px-3 py-1.5 text-[11px] font-semibold text-ink">
                Demander un devis
              </span>
              <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white">
                Voir les services
              </span>
            </div>
          </div>

          {/* Filled service cards */}
          <div className="grid grid-cols-3 gap-2 bg-[#f4f7fa] p-3 sm:gap-2.5 sm:p-4">
            {previewServices.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-border/70 bg-white p-2.5 shadow-sm sm:p-3"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                </div>
                <p className="font-display text-[11px] font-semibold leading-tight text-ink sm:text-xs">
                  {title}
                </p>
                <p className="mt-1 text-[9px] leading-snug text-muted sm:text-[10px]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom contact strip — filled */}
          <div className="flex items-center justify-between gap-3 border-t border-border/60 bg-white px-4 py-3 sm:px-5">
            <div>
              <p className="text-[10px] font-semibold text-ink sm:text-[11px]">
                Prêt à lancer votre projet ?
              </p>
              <p className="text-[9px] text-muted sm:text-[10px]">
                Réponse sous 24 à 48 h
              </p>
            </div>
            <span className="shrink-0 rounded-lg bg-ink px-2.5 py-1.5 text-[10px] font-semibold text-white sm:text-[11px]">
              Contact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
