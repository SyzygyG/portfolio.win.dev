import type { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  headingId: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
}>;

export function Section({ id, headingId, index, eyebrow, title, lead, aside, children }: SectionProps) {
  return (
    <section aria-labelledby={headingId} className="section" id={id}>
      <div className="container">
        <div className="section__head">
          <div>
            <p className="section__eyebrow">
              <span className="index">/ {index}</span>
              {eyebrow}
            </p>
            <h2 className="section__title" id={headingId}>
              {title}
            </h2>
            {lead ? <p className="section__lede">{lead}</p> : null}
          </div>
          {aside ? <div className="section__aside">{aside}</div> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
