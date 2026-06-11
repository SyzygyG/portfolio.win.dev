import type { Certification } from "@/types/certification";

import { formatCertificationDate } from "@/lib/dates";
import { ExternalLinkIcon } from "@/components/ui/Icons";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article className="cert-card">
      <p className="cert-card__issuer">{certification.issuer}</p>
      <h3 className="cert-card__title">{certification.title}</h3>
      <p className="cert-card__date">{formatCertificationDate(certification)}</p>
      <a
        aria-label={certification.ariaLabel}
        className="cert-card__verify"
        href={certification.verifyHref}
        rel="noreferrer noopener"
        target="_blank"
      >
        Verify credential
        <ExternalLinkIcon />
      </a>
    </article>
  );
}
