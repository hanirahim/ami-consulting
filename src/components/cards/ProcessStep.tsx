import { cn } from "@/lib/utils";

type ProcessStepProps = {
  step: string;
  title: string;
  description: string;
  className?: string;
};

export function ProcessStep({
  step,
  title,
  description,
  className,
}: ProcessStepProps) {
  return (
    <article
      className={cn(
        "relative rounded-2xl border border-border bg-surface p-6",
        className,
      )}
    >
      <p className="font-display text-3xl font-semibold tracking-tight text-accent/80">
        {step}
      </p>
      <h3 className="mt-3 font-display text-xl font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
