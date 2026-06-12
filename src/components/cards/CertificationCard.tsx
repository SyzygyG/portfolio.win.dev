import Image from "next/image";
import type { Certification } from "@/types/certification";

import { formatCertificationDate } from "@/lib/dates";
import { ExternalLinkIcon } from "@/components/ui/Icons";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  const href = certification.verifyHref;
  const isExternalHref = href.startsWith("http");

  return (
    <article className="cert-card">
      {certification.previewImage ? (
        <a
          aria-label={certification.ariaLabel}
          className="cert-card__media"
          href={href}
          rel={isExternalHref ? "noreferrer noopener" : undefined}
          target="_blank"
        >
          <Image
            alt={certification.previewImage.alt}
            className="cert-card__image"
            fill
            sizes="(max-width: 700px) 100vw, 280px"
            src={
              certification.previewImage.src.startsWith("/")
                ? certification.previewImage.src
                : `/${certification.previewImage.src}`
            }
          />
        </a>
      ) : null}
      <p className="cert-card__issuer">{certification.issuer}</p>
      <h3 className="cert-card__title">{certification.title}</h3>
      <p className="cert-card__date">{formatCertificationDate(certification)}</p>
      <a
        aria-label={certification.ariaLabel}
        className="cert-card__verify"
        href={href}
        rel={isExternalHref ? "noreferrer noopener" : undefined}
        target="_blank"
      >
        {certification.verifyLabel ?? "Verify credential"}
        <ExternalLinkIcon />
      </a>
    </article>
  );
}
