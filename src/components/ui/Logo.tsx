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
};

const sizeClasses = {
  nav: "h-10 w-auto max-w-[180px] sm:h-11 sm:max-w-[210px] md:h-12 md:max-w-[240px]",
  footer: "h-12 w-auto max-w-[220px] sm:h-14 sm:max-w-[250px]",
} as const;

export function Logo({
  className,
  size = "nav",
  priority = false,
  onClick,
}: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
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
        sizes="(max-width: 640px) 190px, (max-width: 768px) 220px, 250px"
      />
    </Link>
  );
}
