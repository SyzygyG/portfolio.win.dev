export type SkillItem = {
  name: string;
  category: string;
  /** devicon slug resolved against cdn.jsdelivr.net/gh/devicons/devicon */
  icon?: string;
  /** fallback glyph when no icon exists */
  glyph?: string;
};

export type SkillTab = {
  id: string;
  label: string;
  items: SkillItem[];
};
