import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_16px_40px_-24px_rgba(37,99,235,0.35)]",
        className,
      )}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
      >
        <Image
          src={project.image}
          alt={`Capture du site ${project.name}`}
          fill
          unoptimized
          className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-lg bg-navy/90 px-2.5 py-1 text-[11px] font-semibold text-white">
          {project.label}
        </span>
        <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-semibold text-ink">
          {project.displayUrl}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {project.sector}
        </p>
        <h3 className="font-display mt-2 text-xl font-semibold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 rounded-xl border border-border bg-background p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
            Objectif
          </p>
          <p className="mt-1.5 text-sm font-medium text-ink">{project.objective}</p>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.deliverables.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-surface-soft px-2.5 py-1 text-xs font-medium text-ink"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row">
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
            Google
            <Search className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
