import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  size?: "header" | "footer";
  priority?: boolean;
  className?: string;
}

export function BrandLogo({
  size = "header",
  priority = false,
  className,
}: BrandLogoProps) {
  const isFooter = size === "footer";

  return (
    <Link
      href="#inicio"
      className={cn(
        "inline-flex min-h-11 items-center text-left no-underline rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <Image
        src="/brand/logo-horizontal-dra-gabriela.png"
        alt="Dra. Gabriela Delgado · Clínica Multiestética"
        width={1060}
        height={275}
        priority={priority}
        sizes={
          isFooter
            ? "(max-width: 640px) 280px, 330px"
            : "(max-width: 640px) 210px, (max-width: 1280px) 240px, 275px"
        }
        className={isFooter ? "cm-brand-logo-img--footer" : "cm-brand-logo-img"}
      />
    </Link>
  );
}
