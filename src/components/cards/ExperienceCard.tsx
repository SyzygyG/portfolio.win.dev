import type { ExperienceItem } from "@/types/experience";

import { formatDateRange } from "@/lib/dates";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article aria-label={item.ariaLabel} className="exp-item" role="listitem">
      <div className="exp-item__meta">
        <p className="exp-item__period">{formatDateRange(item.range)}</p>
        <p className="exp-item__company">{item.company}</p>
        <p className="exp-item__type">{item.type}</p>
      </div>
      <div>
        <h3 className="exp-item__role">{item.role}</h3>
        <p className="exp-item__desc">{item.description}</p>
        <ul className="exp-item__achievements">
          {item.achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
