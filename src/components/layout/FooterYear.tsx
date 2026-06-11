"use client";

import { getCurrentYear } from "@/lib/dates";

export function FooterYear() {
  const year = getCurrentYear();

  return (
    <time dateTime={String(year)} suppressHydrationWarning>
      {year}
    </time>
  );
}
