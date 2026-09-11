import { profile } from "@/data/profile";

export function Ticker() {
  return (
    <div aria-hidden="true" className="marquee">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <span key={copy} style={{ display: "contents" }}>
            {profile.marquee.map((item) => (
              <span key={`${copy}-${item}`}>
                {item} <span className="star">✳</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
