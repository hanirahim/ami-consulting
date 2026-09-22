import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
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
        "group overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_0_rgba(11,18,32,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_12px_30px_rgba(11,18,32,0.06)]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-soft">
        <Image
          src={project.image}
          alt={`Aperçu du projet ${project.name}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {project.demo ? (
          <span className="absolute left-3 top-3 rounded-lg bg-ink/90 px-2.5 py-1 text-xs font-semibold text-white">
            Démonstration
          </span>
        ) : null}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {project.sector}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-lg bg-surface-soft px-2.5 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        {project.href ? (
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            Voir le projet
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
        ) : (
          <p className="mt-5 text-sm text-muted">
            Exemple illustratif — pas un client réel.
          </p>
        )}
      </div>
    </article>
  );
}
