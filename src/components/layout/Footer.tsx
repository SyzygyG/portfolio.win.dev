import { footerContent, footerLinks } from "@/data/socials";
import { profile } from "@/data/profile";
import { FooterYear } from "@/components/layout/FooterYear";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <Container>
        <div className="footer__inner">
          <span className="footer__logo">{profile.name}</span>
          <span className="footer__copy">
            Copyright <FooterYear /> {profile.name}. {footerContent.copyrightSuffix}
          </span>
          <nav aria-label={footerContent.linksAriaLabel} className="footer__links">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
