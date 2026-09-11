import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export function About() {
  const { about } = profile;

  return (
    <Section
      eyebrow={about.section.eyebrow}
      headingId={about.section.id}
      id="about"
      index="01"
      title={about.section.title}
    >
      <div className="about__grid">
        <div className="about__statements">
          <span aria-hidden="true" className="arrow">
            ↳
          </span>
          {about.statements.map((statement) => (
            <p key={statement}>{statement}</p>
          ))}
        </div>

        <div className="about__text">
          <p className="about__lede">{about.lede}</p>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div aria-label="Personal traits" className="about__chips">
            {about.chips.map((chip) => (
              <Badge key={chip} variant="interest">
                {chip}
              </Badge>
            ))}
          </div>
          <a className="link-underline" href="#experience">
            {about.linkLabel} ↓
          </a>
        </div>
      </div>

      <div className="about__pillars">
        {about.pillars.map((pillar) => (
          <article className="pillar" key={pillar.num}>
            <span className="pillar__num">{pillar.num}</span>
            <h3 className="pillar__title">{pillar.title}</h3>
            <p className="pillar__desc">{pillar.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
