import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
}

export function BrandLogo({ compact = false, className }: BrandLogoProps) {
  return (
    <Link
      href="#inicio"
      className={cn(
        "inline-flex min-h-11 items-center gap-2.5 text-left no-underline rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <span aria-hidden="true" className="cm-logo-monogram">
        GD
      </span>
      <span className="flex flex-col leading-tight">
        <span className="cm-logo-primary whitespace-nowrap text-base tracking-tight sm:text-lg">
          Dra. Gabriela Delgado
        </span>
        {!compact && (
          <span className="cm-logo-secondary whitespace-nowrap text-xs">
            Clínica Multiestética
          </span>
        )}
      </span>
    </Link>
  );
}
