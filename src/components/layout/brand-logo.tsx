import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "dark" | "light";
  compact?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = "dark",
  compact = false,
  className,
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="#inicio"
      className={cn(
        "inline-flex min-h-11 items-center gap-2 sm:gap-2.5 text-left no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border font-serif text-sm sm:text-base font-semibold",
          isLight
            ? "border-[var(--cm-gold)] text-[var(--cm-white)]"
            : "border-[var(--cm-gold)] bg-[var(--cm-ivory)] text-[var(--cm-sapphire)]"
        )}
      >
        CM
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "whitespace-nowrap font-serif text-base font-semibold tracking-tight sm:text-xl",
            isLight ? "text-[var(--cm-white)]" : "text-[var(--cm-navy-deep)]"
          )}
        >
          Clínica Multiestética
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-0.5 whitespace-nowrap font-sans text-[0.6875rem] sm:text-xs font-medium",
              isLight ? "text-[var(--cm-footer-muted)]" : "text-[var(--cm-gold-dark)]"
            )}
          >
            Dra. Gabriela Delgado
          </span>
        )}
      </span>
    </Link>
  );
}
