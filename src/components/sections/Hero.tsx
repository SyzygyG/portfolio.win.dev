import type { CSSProperties } from "react";

import Image from "next/image";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

const stickerTone = {
  sun: "sticker sticker--sun",
  teal: "sticker sticker--teal",
  pink: "sticker sticker--pink",
  paper: "sticker",
} as const;

export function Hero() {
  const { hero, about } = profile;

  return (
    <section aria-labelledby="hero-heading" className="hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <div>
            <div className="hero__tagline-row">
              <span className="hero__tagline">{hero.tagline}</span>
              <span className="topbar__pill">
                <span aria-hidden="true" className="topbar__pill-dot" />
                {hero.availabilityLabel}
              </span>
            </div>

            <p className="hero__greeting">{hero.greeting}</p>

            <h1 className="hero__title" id="hero-heading">
              {hero.heading.map((line) => (
                <span key={line.text} style={{ display: "block" }}>
                  {line.italic ? <em>{line.text}</em> : line.text}
                </span>
              ))}
            </h1>

            <p className="hero__sub">
              {hero.subcopy.map((line) => (
                <span key={line} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </p>

            <div className="hero__actions">
              {hero.actions.map((action) => (
                <Button href={action.href} key={action.label} variant={action.variant}>
                  {action.label}
                </Button>
              ))}
            </div>

            <p className="hero__coords">{hero.coordinates}</p>
          </div>

          <div className="hero__collage">
            {hero.stickers.map((sticker, index) => (
              <span
                className={`hero__sticker hero__sticker--${index + 1}`}
                key={sticker.text}
                style={{ "--r": sticker.rotate ?? "0deg" } as CSSProperties}
              >
                <span className={stickerTone[sticker.tone]}>{sticker.text}</span>
              </span>
            ))}

            <div className="hero__photo">
              <Image
                alt={about.avatar.alt}
                fill
                priority
                sizes="(max-width: 1020px) 80vw, 420px"
                src={about.avatar.src.startsWith("/") ? about.avatar.src : `/${about.avatar.src}`}
              />
            </div>

            <span aria-hidden="true" className="hero__vertical">
              ERWIN✳GAMALONG.
            </span>
          </div>
        </div>

        <div className="hero__bar">
          <span className="hero__bar-labels">
            {hero.sideLabels.map((label, index) => (
              <span key={label} style={{ display: "contents" }}>
                {index > 0 ? (
                  <span aria-hidden="true" className="star">
                    ✳
                  </span>
                ) : null}
                <span>{label}</span>
              </span>
            ))}
          </span>
          <a className="link-underline" href="#about">
            {hero.aboutLinkLabel} ↓
          </a>
          <span className="hero__bar-tag">{hero.portfolioTag}</span>
        </div>
      </div>
    </section>
  );
}
