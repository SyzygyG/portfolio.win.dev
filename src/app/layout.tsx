import type { Metadata } from "next";
import type { ReactNode } from "react";

import { profile } from "@/data/profile";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: profile.title,
  description: profile.description,
  keywords: profile.keywords,
  openGraph: {
    title: profile.title,
    description: profile.ogDescription,
    type: "website",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: profile.title,
    description: profile.ogDescription,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
