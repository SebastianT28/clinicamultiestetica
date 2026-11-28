import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlaySolidIcon } from "@/components/icons/clinic-icons";

interface GreyPlaceholderProps {
  title: string;
  subtitle?: string;
  src?: string;
  sizes?: string;
  priority?: boolean;
  imgClassName?: string;
  aspectClassName?: string;
  className?: string;
  isVideo?: boolean;
  afterState?: boolean;
  circle?: boolean;
  sharp?: boolean;
}

export function GreyPlaceholder({
  title,
  subtitle,
  src,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  priority = false,
  imgClassName,
  aspectClassName = "aspect-[4/5]",
  className,
  isVideo = false,
  afterState = false,
  circle = false,
  sharp = false,
}: GreyPlaceholderProps) {
  if (src) {
    return (
      <div
        data-after={afterState ? "true" : "false"}
        data-circle={circle ? "true" : "false"}
        data-sharp={sharp ? "true" : "false"}
        className={cn("cm-grey-placeholder p-0", aspectClassName, className)}
      >
        <Image
          src={src}
          alt={title}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover object-center", imgClassName)}
        />
      </div>
    );
  }

  return (
    <div
      data-after={afterState ? "true" : "false"}
      data-circle={circle ? "true" : "false"}
      data-sharp={sharp ? "true" : "false"}
      className={cn("cm-grey-placeholder", aspectClassName, className)}
    >
      {isVideo && (
        <span className="flex size-12 items-center justify-center rounded-full bg-card text-foreground">
          <PlaySolidIcon className="size-5" />
        </span>
      )}
      <span className="max-w-[24ch] font-sans text-sm font-medium leading-snug text-foreground/75">
        {title}
      </span>
      {subtitle && (
        <span className="max-w-[28ch] font-sans text-xs leading-relaxed text-muted-foreground">
          {subtitle}
        </span>
      )}
    </div>
  );
}
