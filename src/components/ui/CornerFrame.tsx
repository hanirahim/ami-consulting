import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CornerFrameProps = {
  children: ReactNode;
  className?: string;
};

/** Cadre discret aux 4 angles — remplit le vide sans surcharge. */
export function CornerFrame({ children, className }: CornerFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <span
        className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-accent/35 sm:h-14 sm:w-14"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-accent/35 sm:h-14 sm:w-14"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-accent/35 sm:h-14 sm:w-14"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-accent/35 sm:h-14 sm:w-14"
        aria-hidden
      />
      {children}
    </div>
  );
}
