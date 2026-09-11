import Image from "next/image";
import Link from "next/link";

import { resumeDocumentHref } from "@/data/contact";

export default function NotFound() {
  return (
    <main className="notfound" id="main-content">
      <div className="notfound__card">
        <span className="notfound__mascot">
          <Image alt="" fill priority sizes="110px" src="/images/decor/mascot-sticker.png" style={{ objectFit: "cover" }} />
        </span>
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">This track isn&apos;t in the setlist.</h1>
        <p className="notfound__lead">
          The page you opened doesn&apos;t exist, but the portfolio is still playing. Head back home, browse the work,
          or grab the resume directly.
        </p>
        <div className="notfound__actions">
          <Link className="btn btn--primary" href="/">
            Back home
          </Link>
          <Link className="btn btn--outline" href="/#work">
            View work
          </Link>
          <a className="btn btn--outline" href={resumeDocumentHref} rel="noreferrer" target="_blank">
            Open resume
          </a>
        </div>
      </div>
    </main>
  );
}
