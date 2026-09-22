import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** navbar | footer */
  size?: "nav" | "footer";
  priority?: boolean;
  onClick?: () => void;
  /** Fond clair utile sur sections sombres (footer). */
  onDark?: boolean;
};

const sizeClasses = {
  nav: "h-[4.25rem] w-auto max-w-[340px] sm:h-[4.5rem] sm:max-w-[400px] md:max-w-[440px]",
  footer: "h-14 w-auto max-w-[280px] sm:h-16 sm:max-w-[340px]",
} as const;

export function Logo({
  className,
  size = "nav",
  priority = false,
  onClick,
  onDark = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        onDark && "rounded-2xl bg-white px-3 py-2.5 shadow-sm",
        className,
      )}
      aria-label={`${siteConfig.name} — accueil`}
    >
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.logo.alt}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        className={cn("object-contain object-center", sizeClasses[size])}
        priority={priority}
        sizes="(max-width: 640px) 300px, (max-width: 768px) 360px, 420px"
      />
    </Link>
  );
}
