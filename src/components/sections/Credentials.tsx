"use client";

import Image from "next/image";
import { useState } from "react";

import { certifications, certificationsSection } from "@/data/certifications";
import type { Certification } from "@/types/certification";
import { Section } from "@/components/ui/Section";
import { Dialog } from "@/components/ui/Dialog";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function shortDate(cert: Certification) {
  const month = cert.issuedOn.month ? MONTHS[cert.issuedOn.month - 1] : null;
  return `${month ?? ""} ${cert.issuedOn.year}`.trim();
}

function toSrc(src: string) {
  return src.startsWith("/") ? src : `/${src}`;
}

const SPOTLIGHT_SLUGS = [
  "tesda-developing-ui",
  "sheplusplus-masterclass-on-alibaba-cloud-system",
  "alibaba-cloud-introduction-to-apis",
];

const GLYPHS: Record<string, string> = {
  "tesda-developing-ui": "UI",
  "sheplusplus-masterclass-on-alibaba-cloud-system": "☁",
  "alibaba-cloud-introduction-to-apis": "{ }",
};

function slugOf(cert: Certification) {
  return cert.verifyHref.split("/").pop()?.replace(/\.(png|webp)$/, "") ?? cert.title;
}

export function Credentials() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Certification | null>(null);

  const spotlight = SPOTLIGHT_SLUGS.map((slug) => certifications.find((cert) => slugOf(cert) === slug)).filter(
    (cert): cert is Certification => Boolean(cert),
  );

  return (
    <Section
      eyebrow={certificationsSection.eyebrow}
      headingId={certificationsSection.id}
      id="certificates"
      index="05"
      lead="A few milestones along the way."
      title={
        <>
          Curiosity, <em>certified.</em>
        </>
      }
    >
      <div className="certs__grid">
        {spotlight.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <span aria-hidden="true" className="cert-card__glyph">
              {GLYPHS[slugOf(cert)] ?? "✳"}
            </span>
            <p className="cert-card__issuer">{cert.issuer}</p>
            <h3 className="cert-card__title">{cert.title}</h3>
            <p className="cert-card__date">{shortDate(cert)}</p>
            <a
              aria-label={cert.ariaLabel}
              className="link-underline cert-card__link"
              href={toSrc(cert.verifyHref)}
              rel="noreferrer noopener"
              target="_blank"
            >
              View certificate ↗
            </a>
          </article>
        ))}
      </div>

      <div className="certs__more">
        <button className="btn btn--outline" onClick={() => setOpen(true)} type="button">
          View all {certifications.length} certificates
        </button>
      </div>

      {open ? (
        <Dialog labelledBy="certs-dialog-title" onClose={() => setOpen(false)}>
          {selected ? (
            <div>
              <button className="link-underline" onClick={() => setSelected(null)} type="button">
                ← All certificates
              </button>
              <h3 className="dialog__title" id="certs-dialog-title" style={{ marginTop: 14 }}>
                {selected.title}
              </h3>
              <p className="dialog__lede">
                {selected.issuer} · {shortDate(selected)}
              </p>
              {selected.previewImage ? (
                <Image
                  alt={selected.previewImage.alt}
                  className="lightbox__img"
                  height={823}
                  sizes="(max-width: 900px) 100vw, 700px"
                  src={toSrc(selected.previewImage.src)}
                  width={1164}
                />
              ) : null}
            </div>
          ) : (
            <div>
              <h3 className="dialog__title" id="certs-dialog-title">
                All certificates
              </h3>
              <p className="dialog__lede">Every credential, newest first. Tap one to preview it.</p>
              <div className="dialog__certs">
                {certifications.map((cert) => (
                  <button className="dialog__cert" key={cert.title} onClick={() => setSelected(cert)} type="button">
                    <span className="dialog__cert-thumb">
                      {cert.previewImage ? <Image alt="" fill sizes="64px" src={toSrc(cert.previewImage.src)} /> : null}
                    </span>
                    <span>
                      <span className="dialog__cert-issuer">{cert.issuer}</span>
                      <span className="dialog__cert-title">{cert.title}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </Dialog>
      ) : null}
    </Section>
  );
}
