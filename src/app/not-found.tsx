import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { resumeDocumentHref } from "@/data/contact";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="section not-found">
          <Container narrow>
            <div className="not-found__inner">
              <div className="section-eyebrow">
                <span>404</span>
              </div>
              <p className="not-found__code">Page not found</p>
              <h1 className="section-title not-found__title">The page you opened is not in this portfolio.</h1>
              <p className="section-lead not-found__lead">
                The link may be outdated, but the portfolio is still available. Head back to the homepage,
                review selected projects, or open the resume directly.
              </p>
              <div className="not-found__actions">
                <Link className="btn btn--primary" href="/">
                  Back home
                </Link>
                <Link className="btn btn--outline" href="/#projects">
                  View projects
                </Link>
                <a className="btn btn--outline" href={resumeDocumentHref} rel="noreferrer" target="_blank">
                  Open resume
                </a>
              </div>
              <p className="not-found__note">If you were trying to reach me quickly, the contact section is one step away from the homepage.</p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
