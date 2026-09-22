import Link from "next/link";
import { ArrowRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { footerNav, legalNav } from "@/data/navigation";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { seriousLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

export function Footer() {
  const year = new Date().getFullYear();
  const phone = siteConfig.contact.phone;
  const address = siteConfig.contact.address;
  const showPhone = Boolean(phone) && !isPlaceholder(phone);
  const showAddress = Boolean(address) && !isPlaceholder(address);

  return (
    <footer className="mt-auto">
      <div className="border-t border-border bg-surface">
        <Container className="py-10 sm:py-12">
          <div className="flex flex-col gap-6 rounded-2xl bg-accent-soft px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="max-w-xl">
              <p className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                Un projet web en tête ?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                Écrivez-nous à {siteConfig.contact.email}. Nous vous répondons
                avec une proposition claire et adaptée.
              </p>
            </div>
            <Button href="/contact" className="shrink-0">
              Demander un devis
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </Container>
      </div>

      <div className="border-t border-border bg-[#3a4451] text-white">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Logo onDark size="footer" />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
                {siteConfig.tagline} pour entreprises, indépendants, commerces
                et professionnels.
              </p>
              <p className="mt-4 text-sm text-white/50">
                Fondé par{" "}
                <span className="font-medium text-white/80">
                  {siteConfig.founder}
                </span>
              </p>
              <p className="mt-5 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-ring">
                {siteConfig.contact.availability}
              </p>
            </div>

            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                Navigation
              </p>
              <ul className="mt-4 space-y-2.5">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                Liens utiles
              </p>
              <ul className="mt-4 space-y-2.5">
                {seriousLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      {link.label}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </li>
                ))}
                {projects.slice(0, 3).map((project) => (
                  <li key={project.id}>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      {project.displayUrl}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                Contact
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 transition hover:border-accent/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-ring">
                      <Mail className="h-4 w-4" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs text-white/45">E-mail</span>
                      <span className="mt-0.5 block text-sm font-medium text-white/90 group-hover:text-white">
                        {siteConfig.contact.email}
                      </span>
                    </span>
                  </a>
                </li>

                {showPhone ? (
                  <li>
                    <a
                      href={
                        siteConfig.contact.phoneHref ||
                        `tel:${phone.replace(/\s+/g, "")}`
                      }
                      className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 transition hover:border-accent/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-ring">
                        <Phone className="h-4 w-4" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs text-white/45">
                          Téléphone
                        </span>
                        <span className="mt-0.5 block text-sm font-medium text-white/90">
                          {phone}
                        </span>
                      </span>
                    </a>
                  </li>
                ) : null}

                {showAddress ? (
                  <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-ring">
                      <MapPin className="h-4 w-4" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs text-white/45">Adresse</span>
                      <span className="mt-0.5 block text-sm font-medium text-white/90">
                        {address}
                      </span>
                    </span>
                  </li>
                ) : null}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-white/45">
                Services :{" "}
                {services
                  .slice(0, 3)
                  .map((service) => service.title)
                  .join(" · ")}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/45">
              © {year} {siteConfig.name}. Tous droits réservés.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
