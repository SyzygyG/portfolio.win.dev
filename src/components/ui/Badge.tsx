import type { PropsWithChildren } from "react";

import { cn } from "@/lib/helpers";

type BadgeProps = PropsWithChildren<{
  variant?: "stack" | "interest" | "skill" | "tech" | "learning";
  className?: string;
}>;

const variantClassName: Record<NonNullable<BadgeProps["variant"]>, string> = {
  stack: "chip",
  tech: "chip",
  skill: "chip",
  interest: "chip chip--sun",
  learning: "chip chip--teal",
};

export function Badge({ children, className, variant = "tech" }: BadgeProps) {
  return <span className={cn(variantClassName[variant], className)}>{children}</span>;
}
