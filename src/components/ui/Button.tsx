import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/helpers";

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    variant?: "primary" | "outline";
  }
>;

export function Button({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a className={cn("btn", `btn--${variant}`, className)} href={href} {...props}>
      {children}
    </a>
  );
}
