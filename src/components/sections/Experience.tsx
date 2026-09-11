import { educationCard, experienceItems, experienceSection } from "@/data/experience";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section
      aside={
        <a
          className="link-underline"
          href={profile.resume.href}
          rel="noreferrer"
          target="_blank"
        >
          {profile.resume.label} ↗
        </a>
      }
      eyebrow={experienceSection.eyebrow}
      headingId={experienceSection.id}
      id="experience"
      index="03"
      title={
        <>
          Built with experience. <em>Grown with people.</em>
        </>
      }
    >
      <div className="exp__list">
        {experienceItems.map((item) => (
          <article aria-label={item.ariaLabel} className="exp-item" key={item.company}>
            <span aria-hidden="true" className="exp-item__badge">
              {item.initials}
            </span>
            <div>
              <h3 className="exp-item__company">{item.company}</h3>
              <p className="exp-item__role">
                {item.role}
                <span className="type">{item.type}</span>
              </p>
              <p className="exp-item__quote">“{item.quote}”</p>
              <p className="exp-item__location">{item.location}</p>
            </div>
            <span className="exp-item__year">{item.year}</span>
          </article>
        ))}
      </div>

      <div className="edu-card">
        <span aria-hidden="true" className="edu-card__arrow">
          ↗
        </span>
        <div>
          <p className="edu-card__title">{educationCard.title}</p>
          <p className="edu-card__detail">{educationCard.detail}</p>
        </div>
      </div>
    </Section>
  );
}
