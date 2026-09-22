import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";
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
      <div
        className={cn(
          "relative overflow-hidden bg-surface-soft",
          featured
            ? "aspect-[16/11] md:aspect-auto md:min-h-[280px]"
            : "aspect-[16/10]",
        )}
      >
        <Image
          src={project.image}
          alt={`Aperçu illustratif — ${project.name}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        {project.reference ? (
          <span className="absolute left-3 top-3 rounded-lg bg-ink/90 px-2.5 py-1 text-xs font-semibold text-white">
            Exemple public
          </span>
        ) : null}
        <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-semibold text-ink">
          {project.sector}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
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

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-lg bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row sm:flex-wrap">
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Voir le site
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href={project.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Chercher sur Google
            <Search className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {project.reference ? (
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Référence publique — non réalisée par Ami Consulting.
          </p>
        ) : null}
      </div>
    </article>
  );
}
