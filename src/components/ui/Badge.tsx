import type { PropsWithChildren } from "react";

import { cn } from "@/lib/helpers";

type BadgeProps = PropsWithChildren<{
  variant: "stack" | "interest" | "skill" | "tech" | "learning";
  className?: string;
}>;

const variantClassName: Record<BadgeProps["variant"], string> = {
  stack: "stack-tag",
  interest: "interest-tag",
  skill: "skill-pill",
  tech: "tech-badge",
  learning: "learning-item",
};

export function Badge({ children, className, variant }: BadgeProps) {
  return <span className={cn(variantClassName[variant], className)}>{children}</span>;
}
