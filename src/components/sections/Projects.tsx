import Image from "next/image";

import { projects, projectsContent } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ExternalLinkIcon, GitHubIcon } from "@/components/ui/Icons";

export function Projects() {
  return (
    <Section
      aside={<span aria-hidden="true" style={{ fontSize: 30 }}>↗</span>}
      eyebrow={projectsContent.section.eyebrow}
      headingId={projectsContent.section.id}
      id="projects"
      index="02"
      lead={projectsContent.section.lead}
      title={
        <>
          Less talking. <em>More building.</em>
        </>
      }
    >
      <div className="projects__list">
        {projects.map((project) => (
          <article aria-label={project.ariaLabel} className="project-card" key={project.slug}>
            <div className="project-card__media">
              {project.media.kind === "image" ? (
                <Image
                  alt={project.media.alt}
                  fill
                  sizes="(max-width: 1020px) 100vw, 55vw"
                  src={project.media.src.startsWith("/") ? project.media.src : `/${project.media.src}`}
                />
              ) : null}
            </div>

            <div className="project-card__body">
              <div className="project-card__top">
                <span className="project-card__category">{project.category}</span>
                <span aria-hidden="true" className="project-card__index">
                  {project.index}
                </span>
              </div>
              <span className="project-card__domain">{project.domain}</span>

              <div className="project-card__meta">
                <span className="project-card__role">{project.role}</span>
                <span className="project-card__year">{project.year}</span>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__line">{project.oneLiner}</p>

              <div className="project-card__stack">
                {project.stack.map((item) => (
                  <Badge key={item} variant="tech">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="project-card__links">
                {project.links.map((link) => (
                  <a
                    aria-label={link.ariaLabel}
                    className="link-underline"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {link.kind === "github" ? <GitHubIcon size={14} /> : <ExternalLinkIcon size={14} />}
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="projects__footnote">
        {projectsContent.footnoteLabel}
        <a className="link-underline" href={projectsContent.footnoteHref} rel="noreferrer noopener" target="_blank">
          Find me on GitHub ↗
        </a>
      </p>
    </Section>
  );
}
