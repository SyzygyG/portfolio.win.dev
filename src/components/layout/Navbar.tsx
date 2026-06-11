"use client";

import { useEffect, useState } from "react";

import { navigationLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/helpers";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sectionElements = navigationLinks.map((link) => document.getElementById(link.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    sectionElements.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header role="banner">
      <nav className={cn("nav__mobile", isOpen && "open")} aria-label="Mobile navigation">
        <button
          aria-label="Close navigation"
          className="nav__mobile-close"
          onClick={() => setIsOpen(false)}
          type="button"
        >
          x
        </button>
        {navigationLinks.map((link) => (
          <a href={link.href} key={link.id} onClick={() => setIsOpen(false)}>
            {link.mobileLabel ?? link.label}
          </a>
        ))}
      </nav>

      <nav className="nav" aria-label="Main navigation">
        <Container>
          <div className="nav__inner">
            <a aria-label={`${profile.name} - Home`} className="nav__logo" href="#">
              {profile.name}
            </a>
            <ul className="nav__links" role="list">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className={cn(
                      link.cta && "nav__cta",
                      activeId === link.id && !link.cta && "nav__link--active",
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              aria-expanded={isOpen}
              aria-label="Open navigation"
              className="nav__toggle"
              onClick={() => setIsOpen(true)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </Container>
      </nav>

      <div aria-label="Currently learning" className="learning-bar">
        <Container>
          <div className="learning-bar__inner">
            <span className="learning-bar__label">{profile.learning.label}</span>
            <div className="learning-bar__items">
              {profile.learning.items.map((item) => (
                <Badge key={item} variant="learning">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
