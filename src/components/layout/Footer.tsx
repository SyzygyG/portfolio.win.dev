import { FooterYear } from "@/components/layout/FooterYear";
import { profile } from "@/data/profile";
import { footerContent, footerLinks } from "@/data/socials";

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p className="footer__word">
          ERWIN<span aria-hidden="true" className="star">✳</span>GAMALONG.
        </p>
        <div className="footer__row">
          <span className="footer__tagline">{footerContent.tagline}</span>
          <nav aria-label={footerContent.linksAriaLabel} className="footer__links">
            {footerLinks.map((link) => (
              <a
                className="chip"
                href={link.href}
                key={link.label}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <span className="footer__copy">
            © <FooterYear /> {profile.name}. {footerContent.copyrightSuffix}
          </span>
        </div>
      </div>
    </footer>
  );
}
