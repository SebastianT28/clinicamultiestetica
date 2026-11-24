import { cn } from "@/lib/utils";
import { PlaySolidIcon } from "@/components/icons/clinic-icons";

interface GreyPlaceholderProps {
  title: string;
  subtitle?: string;
  aspectClassName?: string;
  className?: string;
  isVideo?: boolean;
  afterState?: boolean;
}

export function GreyPlaceholder({
  title,
  subtitle,
  aspectClassName = "aspect-[4/5]",
  className,
  isVideo = false,
  afterState = false,
}: GreyPlaceholderProps) {
  return (
    <div
      data-after={afterState ? "true" : "false"}
      className={cn("cm-grey-placeholder", aspectClassName, className)}
    >
      {isVideo && (
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground">
          <PlaySolidIcon className="h-5 w-5" />
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
