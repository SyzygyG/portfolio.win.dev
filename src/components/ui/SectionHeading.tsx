import type { SectionIntro } from "@/types/content";

import { cn } from "@/lib/helpers";

type SectionHeadingProps = {
  section: SectionIntro;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  leadClassName?: string;
};

export function SectionHeading({
  section,
  className,
  eyebrowClassName,
  titleClassName,
  leadClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("section-header", className)}>
      <div className={cn("section-eyebrow", eyebrowClassName)}>
        <span>{section.eyebrow}</span>
      </div>
      <h2 className={cn("section-title", titleClassName)} id={section.id}>
        {section.title}
      </h2>
      {section.lead ? <p className={cn("section-lead", leadClassName)}>{section.lead}</p> : null}
    </div>
  );
}
