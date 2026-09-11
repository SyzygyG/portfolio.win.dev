import { navigationLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Topbar() {
  return (
    <header className="topbar">
      <div className="container">
        <div className="topbar__inner">
          <a aria-label={`${profile.name} - back to top`} className="topbar__brand" href="#top">
            Erwin<span aria-hidden="true" className="star">✳</span>Gamalong
          </a>

          <nav aria-label="Primary" className="topbar__nav">
            {navigationLinks.map((link) => (
              <a href={link.href} key={link.id}>
                {link.label}
              </a>
            ))}
          </nav>

          <span className="topbar__pill">
            <span aria-hidden="true" className="topbar__pill-dot" />
            {profile.hero.availabilityLabel}
          </span>
        </div>
      </div>
    </header>
  );
}
