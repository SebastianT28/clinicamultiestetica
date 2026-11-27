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
        sizes={isFooter ? "220px" : "(max-width: 640px) 168px, 204px"}
        className={cn(
          "w-auto object-contain select-none",
          isFooter ? "h-12 sm:h-14" : "h-10 sm:h-11 lg:h-12"
        )}
      />
    </Link>
  );
}
