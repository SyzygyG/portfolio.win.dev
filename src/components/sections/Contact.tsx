"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { contactEntries } from "@/data/contact";
import { contactSection } from "@/data/socials";
import { profile } from "@/data/profile";
import { getCopyValue } from "@/lib/recruiter";
import { Section } from "@/components/ui/Section";
import { ContactIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

const REASONS = ["Let's collaborate", "I have a project in mind", "Full-time opportunity", "Just saying hello"];

export function Contact() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState(REASONS[0]);
  const [message, setMessage] = useState("");

  const email = contactEntries.find((entry) => entry.icon === "email");
  const socials = contactEntries.filter((entry) => entry.icon !== "email");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email) return;

    const address = getCopyValue(email);
    const subject = encodeURIComponent(`${reason}${name ? ` - from ${name}` : ""}`);
    const body = encodeURIComponent(message || "Hi Erwin, I'd love to connect.");
    window.location.href = `mailto:${address}?subject=${subject}&body=${body}`;
  }

  return (
    <Section
      eyebrow={contactSection.eyebrow}
      headingId={contactSection.id}
      id="contact"
      index="06"
      title={
        <>
          Let&apos;s make something <em>great.</em>
        </>
      }
    >
      <div className="contact__grid">
        <div>
          <span className="topbar__pill contact__pill">
            <span aria-hidden="true" className="topbar__pill-dot" />
            Open for opportunities
          </span>
          <h3 className="contact__lede">Have an idea? A role? A wild &ldquo;what if&rdquo;?</h3>
          <p className="contact__text">
            I&apos;m open to full-time roles, collaborations, and conversations that lead somewhere interesting.
          </p>

          {email ? (
            <a className="contact__email" href={email.href}>
              {email.value}
            </a>
          ) : null}

          <p className="contact__elsewhere">Or find me elsewhere on the internet</p>
          <div className="contact__socials">
            {socials.map((link) => (
              <a
                aria-label={link.label}
                className="contact__social"
                href={link.href}
                key={link.label}
                rel="noreferrer noopener"
                target="_blank"
              >
                {link.icon === "github" ? <GitHubIcon /> : link.icon === "linkedin" ? <LinkedInIcon /> : <ContactIcon type={link.icon} />}
              </a>
            ))}
          </div>

          <p className="contact__where">{profile.location} · Open to working everywhere.</p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <div className="contact__field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" onChange={(event) => setName(event.target.value)} placeholder="Ada Lovelace" value={name} />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-reason">What brings you here?</label>
              <select id="contact-reason" onChange={(event) => setReason(event.target.value)} value={reason}>
                {REASONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message">A little about your idea</label>
            <textarea
              id="contact-message"
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell me what you're building..."
              rows={5}
              value={message}
            />
          </div>

          <div className="contact__form-foot">
            <span className="contact__note">No robots. Just a real conversation. Opens a draft in your email app.</span>
            <button className="btn btn--primary" type="submit">
              Let&apos;s talk ↗
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
