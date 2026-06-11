"use client";

import { useEffect, useState } from "react";

type CopyButtonProps = {
  value: string;
};

export function CopyButton({ value }: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (status !== "copied") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus("idle");
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  const label = status === "copied" ? "Copied" : status === "error" ? "Copy failed" : "Copy email";

  return (
    <>
      <button className="contact__copy-btn" onClick={handleCopy} type="button">
        {label}
      </button>
      <span aria-live="polite" className="sr-only" role="status">
        {status === "copied" ? "Email copied to clipboard." : status === "error" ? "Copy failed." : ""}
      </span>
    </>
  );
}
