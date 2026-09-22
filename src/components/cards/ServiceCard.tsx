import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { AppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  className?: string;
  showLink?: boolean;
};

export function ServiceCard({
  service,
  className,
  showLink = true,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_0_rgba(11,18,32,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_12px_30px_rgba(11,18,32,0.06)]",
        className,
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
        <AppIcon name={service.icon} className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {service.shortDescription}
      </p>
      {showLink ? (
        <Link
          href={service.href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          En savoir plus
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      ) : null}
    </article>
  );
}
