import { navigationLinks } from "@/data/navigation";
import {
  AwardIcon,
  BriefcaseIcon,
  FolderIcon,
  MailIcon,
  NoteIcon,
  SparkleIcon,
} from "@/components/ui/Icons";

const iconFor: Record<string, typeof FolderIcon> = {
  about: SparkleIcon,
  projects: FolderIcon,
  experience: BriefcaseIcon,
  skills: NoteIcon,
  certificates: AwardIcon,
  contact: MailIcon,
};

export function Dock() {
  return (
    <nav aria-label="Section shortcuts" className="dock">
      <div className="dock__inner">
        {navigationLinks.map((link) => {
          const Icon = iconFor[link.id] ?? FolderIcon;
          return (
            <a className="dock__item" href={link.href} key={link.id}>
              <Icon />
              {link.mobileLabel ?? link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
