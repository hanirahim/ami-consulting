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
  nav: "h-9 w-auto max-w-[170px] sm:h-10 sm:max-w-[200px] md:h-11 md:max-w-[220px]",
  footer: "h-11 w-auto max-w-[200px] sm:h-12 sm:max-w-[230px]",
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
