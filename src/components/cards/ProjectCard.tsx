import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Link2, Search } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  featured?: boolean;
};

export function ProjectCard({
  project,
  className,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_0_rgba(58,68,81,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_16px_36px_rgba(58,68,81,0.08)]",
        featured && "md:col-span-2 md:grid md:grid-cols-2 md:items-stretch",
        className,
      )}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative block overflow-hidden bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
          featured
            ? "aspect-[16/11] md:aspect-auto md:min-h-[280px]"
            : "aspect-[16/10]",
        )}
      >
        <Image
          src={project.image}
          alt={`Capture du site ${project.name}`}
          fill
          unoptimized
          className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        {project.reference ? (
          <span className="absolute left-3 top-3 rounded-lg bg-ink/90 px-2.5 py-1 text-xs font-semibold text-white">
            Site réel
          </span>
        ) : null}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-semibold text-ink">
          <Link2 className="h-3.5 w-3.5 text-accent" aria-hidden />
          {project.displayUrl}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {project.sector}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 rounded-xl border border-border bg-background p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
            Point fort observé
          </p>
          <p className="mt-1.5 text-sm font-medium text-ink">
            {project.objective}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            Ce que le site met en avant
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.deliverables.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-surface-soft px-2.5 py-1 text-xs font-medium text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 break-all text-xs font-medium text-accent">
          {project.href}
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row sm:flex-wrap">
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Ouvrir le site officiel
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href={project.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Voir sur Google
            <Search className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {project.reference ? (
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Référence publique vérifiable — non réalisée par Ami Consulting.
          </p>
        ) : null}
      </div>
    </article>
  );
}
