import assert from "node:assert/strict";
import test from "node:test";

async function loadRecruiterModule() {
  return import("./recruiter.ts").catch(() => ({}));
}

test("isEmailHref identifies mailto links", async () => {
  const recruiter = await loadRecruiterModule();

  assert.equal(typeof recruiter.isEmailHref, "function");
  assert.equal(recruiter.isEmailHref("mailto:test@example.com"), true);
  assert.equal(recruiter.isEmailHref("https://linkedin.com/in/example"), false);
});

test("getCopyValue prefers decoded mailto addresses", async () => {
  const recruiter = await loadRecruiterModule();

  assert.equal(typeof recruiter.getCopyValue, "function");
  assert.equal(
    recruiter.getCopyValue({
      href: "mailto:erwin%2Bportfolio@example.com",
      value: "display value",
    }),
    "erwin+portfolio@example.com",
  );
});

test("getCopyValue falls back to the visible value for non-email links", async () => {
  const recruiter = await loadRecruiterModule();

  assert.equal(typeof recruiter.getCopyValue, "function");
  assert.equal(
    recruiter.getCopyValue({
      href: "tel:+639508270857",
      value: "+63 950 827 0857",
    }),
    "+63 950 827 0857",
  );
});
