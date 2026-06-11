export type SectionIntro = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  ctaLabel?: string;
};

export type ActionLink = {
  label: string;
  href: string;
  variant: "primary" | "outline";
  icon?: "download" | "folder";
  download?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
};

export type PlaceholderAsset = {
  kind: "placeholder";
  label: string;
  todo: string;
};

export type ImageAsset = {
  kind: "image";
  src: string;
  alt: string;
};

export type MediaAsset = PlaceholderAsset | ImageAsset;

export type ContentAudit = {
  status: "confirmed" | "needs-review";
  note: string;
};
