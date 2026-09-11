"use client";

import { useState } from "react";

import { exploring, skillTabs, skillsSection } from "@/data/skills";
import { cn } from "@/lib/helpers";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillTabs[0]?.id ?? "");
  const active = skillTabs.find((tab) => tab.id === activeTab) ?? skillTabs[0];

  return (
    <Section
      eyebrow={skillsSection.eyebrow}
      headingId={skillsSection.id}
      id="skills"
      index="04"
      lead={skillsSection.lead}
      title={
        <>
          The tools behind <em>the possibilities.</em>
        </>
      }
    >
      <div className="skills__tabs" role="tablist" aria-label="Skill categories">
        {skillTabs.map((tab) => (
          <button
            aria-selected={tab.id === activeTab}
            className={cn("skills__tab", tab.id === activeTab && "active")}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            type="button"
          >
            {tab.label}
            <sup>{String(tab.items.length).padStart(2, "0")}</sup>
          </button>
        ))}
      </div>

      <div aria-live="polite" className="skills__grid">
        {active.items.map((item) => (
          <div className="skill-tile" key={item.name}>
            <span aria-hidden="true" className="skill-tile__arrow">
              ↗
            </span>
            {item.icon ? (
              // eslint-disable-next-line @next/next/no-img-element -- external devicon CDN with graceful glyph fallback
              <img
                alt=""
                className="skill-tile__icon"
                height={38}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  const fallback = event.currentTarget.nextElementSibling;
                  if (fallback instanceof HTMLElement) {
                    fallback.style.display = "grid";
                  }
                }}
                src={`${DEVICON_BASE}${item.icon}`}
                width={38}
              />
            ) : null}
            <span aria-hidden="true" className="skill-tile__glyph" style={item.icon ? { display: "none" } : undefined}>
              {item.glyph ?? item.name.charAt(0)}
            </span>
            <p className="skill-tile__name">{item.name}</p>
            <p className="skill-tile__cat">{item.category}</p>
          </div>
        ))}
      </div>

      <div className="exploring">
        <span className="exploring__label">{exploring.label}</span>
        {exploring.items.map((item) => (
          <Badge key={item} variant="learning">
            {item}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
