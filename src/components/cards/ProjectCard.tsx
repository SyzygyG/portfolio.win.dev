import Image from "next/image";
import type { Project } from "@/types/project";

import { Badge } from "@/components/ui/Badge";
import { ExternalLinkIcon, GitHubIcon, ImagePlaceholderIcon } from "@/components/ui/Icons";

type ProjectCardProps = {
  project: Project;
};

function MediaPlaceholder({ label }: { label: string }) {
  return (
    <div className="project-card__media-placeholder" aria-hidden="true">
      <div className="project-card__placeholder-stack">
        <ImagePlaceholderIcon />
        <span>{label}</span>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      aria-label={project.ariaLabel}
      className={project.featured ? "project-card project-card--featured" : "project-card"}
    >
      <div className="project-card__media">
        {project.media.kind === "image" ? (
          <Image
            alt={project.media.alt}
            className="project-card__image"
            fill
            sizes={project.featured ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 900px) 100vw, 50vw"}
            src={project.media.src.startsWith("/") ? project.media.src : `/${project.media.src}`}
          />
        ) : (
          <MediaPlaceholder label={project.media.label} />
        )}
      </div>
      <div className="project-card__body">
        <p className="project-card__type">{project.type}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
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
              className="link-btn"
              href={link.href}
              key={link.label}
              rel="noreferrer noopener"
              target="_blank"
            >
              {link.kind === "github" ? <GitHubIcon /> : <ExternalLinkIcon />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
