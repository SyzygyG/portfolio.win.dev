import type { PropsWithChildren } from "react";

import { cn } from "@/lib/helpers";

type ContainerProps = PropsWithChildren<{
  narrow?: boolean;
  className?: string;
}>;

export function Container({ children, narrow = false, className }: ContainerProps) {
  return <div className={cn("container", narrow && "container--narrow", className)}>{children}</div>;
}
