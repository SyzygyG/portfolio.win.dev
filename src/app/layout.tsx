import type { Metadata } from "next";
import { DM_Mono, DM_Sans, DM_Serif_Display } from "next/font/google";
import type { ReactNode } from "react";

import { profile } from "@/data/profile";
import { getPagesDeployConfig } from "@/lib/site-config";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const { siteUrl } = getPagesDeployConfig(process.env);

export const metadata: Metadata = {
  title: profile.title,
  description: profile.description,
  keywords: profile.keywords,
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: {
    canonical: siteUrl ?? "/",
  },
  openGraph: {
    title: profile.title,
    description: profile.ogDescription,
    type: "website",
    url: siteUrl,
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
      <body className={`${dmSans.variable} ${dmMono.variable} ${dmSerifDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
