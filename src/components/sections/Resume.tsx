import Image from "next/image";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DocumentIcon, DownloadIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Resume() {
  return (
    <section aria-labelledby="resume-heading" className="section section--alt" id="resume">
      <Container>
        <div className="resume-section__inner">
          {profile.resume.preview.kind === "image" ? (
            <div className="resume__preview">
              <Image
                alt={profile.resume.preview.alt}
                className="resume__preview-image"
                fill
                sizes="340px"
                src={
                  profile.resume.preview.src.startsWith("/")
                    ? profile.resume.preview.src
                    : `/${profile.resume.preview.src}`
                }
              />
              {profile.resume.preview.text ? <p>{profile.resume.preview.text}</p> : null}
            </div>
          ) : (
            <div aria-label={profile.resume.preview.label} className="resume__preview">
              <DocumentIcon />
              <p>{profile.resume.preview.text}</p>
            </div>
          )}
          <div className="resume__info">
            <SectionHeading
              className="section-header--compact"
              section={profile.resume.section}
              titleClassName="resume__title"
            />
            <div className="resume__actions">
              <Button
                download={profile.resume.download.download}
                href={profile.resume.download.href}
                variant={profile.resume.download.variant}
              >
                <DownloadIcon />
                {profile.resume.download.label}
              </Button>
              <Button
                href={profile.resume.open.href}
                rel={profile.resume.open.rel}
                target={profile.resume.open.target}
                variant={profile.resume.open.variant}
              >
                {profile.resume.open.label}
              </Button>
            </div>
            <div aria-label="Resume access details" className="resume__meta">
              <span className="resume__meta-item">{profile.hero.availabilityLabel}</span>
              <span className="resume__meta-item">PDF resume</span>
              <span className="resume__meta-item">Browser preview</span>
            </div>
            <p className="resume__hint">
              Use the browser option for a quick review, or download the PDF when you want a copy to keep.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
