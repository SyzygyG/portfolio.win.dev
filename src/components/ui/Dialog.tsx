"use client";

import { useEffect, useRef } from "react";
import type { PropsWithChildren } from "react";

import { CloseIcon } from "@/components/ui/Icons";

type DialogProps = PropsWithChildren<{
  onClose: () => void;
  labelledBy: string;
}>;

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function Dialog({ children, onClose, labelledBy }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  // Lock scroll + restore focus on unmount.
  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      const node = previouslyFocused.current;
      if (node instanceof HTMLElement) {
        node.focus();
      }
    };
  }, []);

  // Move focus into the dialog on mount, and handle Esc + focus trap.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const first = dialog.querySelector<HTMLElement>(FOCUSABLE);
    (first ?? dialog).focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const nodes = Array.from(dialog?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []).filter(
        (node) => node.offsetParent !== null || node === document.activeElement,
      );
      if (nodes.length === 0) return;

      const firstNode = nodes[0];
      const lastNode = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === firstNode) {
        event.preventDefault();
        lastNode.focus();
      } else if (!event.shiftKey && document.activeElement === lastNode) {
        event.preventDefault();
        firstNode.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div aria-modal="true" aria-labelledby={labelledBy} className="dialog" ref={dialogRef} role="dialog" tabIndex={-1}>
        <button aria-label="Close dialog" className="dialog__close" onClick={onClose} type="button">
          <CloseIcon size={16} />
        </button>
        <div className="dialog__scroll">{children}</div>
      </div>
    </div>
  );
}
