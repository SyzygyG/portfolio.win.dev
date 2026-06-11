import type { SkillGroup } from "@/types/skill";

import { Badge } from "@/components/ui/Badge";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  return (
    <div className="skill-group" role="listitem">
      <h3 className="skill-group__title">{group.title}</h3>
      <ul aria-label={group.ariaLabel} className="skill-list">
        {group.items.map((item) => (
          <li key={item}>
            <Badge variant="skill">{item}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
