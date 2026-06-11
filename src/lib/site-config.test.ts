import assert from "node:assert/strict";
import test from "node:test";

async function loadSiteConfigModule() {
  return import("./site-config.ts").catch(() => ({}));
}

test("getPagesDeployConfig lets the checked-in custom domain override repo-style GitHub Pages paths", async () => {
  const siteConfig = await loadSiteConfigModule();

  assert.equal(typeof siteConfig.getPagesDeployConfig, "function");

  assert.deepEqual(
    siteConfig.getPagesDeployConfig({
      GITHUB_ACTIONS: "true",
      GITHUB_REPOSITORY: "SyzygyG/syz-portfolio",
    }),
    {
      assetPrefix: undefined,
      basePath: "",
      repositoryName: "syz-portfolio",
      siteUrl: "https://portfolio.erwin.dev",
    },
  );
});

test("getPagesDeployConfig omits base paths for custom-domain repositories", async () => {
  const siteConfig = await loadSiteConfigModule();

  assert.equal(typeof siteConfig.getPagesDeployConfig, "function");

  assert.deepEqual(
    siteConfig.getPagesDeployConfig({
      GITHUB_ACTIONS: "true",
      GITHUB_REPOSITORY: "SyzygyG/portfolio.erwin.dev",
    }),
    {
      assetPrefix: undefined,
      basePath: "",
      repositoryName: "portfolio.erwin.dev",
      siteUrl: "https://portfolio.erwin.dev",
    },
  );
});

test("getPagesDeployConfig prefers an explicit custom domain override", async () => {
  const siteConfig = await loadSiteConfigModule();

  assert.equal(typeof siteConfig.getPagesDeployConfig, "function");

  assert.deepEqual(
    siteConfig.getPagesDeployConfig({
      GITHUB_ACTIONS: "true",
      GITHUB_PAGES_CUSTOM_DOMAIN: "portfolio.erwin.dev",
      GITHUB_REPOSITORY: "SyzygyG/syz-portfolio",
    }),
    {
      assetPrefix: undefined,
      basePath: "",
      repositoryName: "syz-portfolio",
      siteUrl: "https://portfolio.erwin.dev",
    },
  );
});

test("getPagesDeployConfig falls back to the checked-in CNAME when environment values are absent", async () => {
  const siteConfig = await loadSiteConfigModule();

  assert.equal(typeof siteConfig.getPagesDeployConfig, "function");

  const config = siteConfig.getPagesDeployConfig({});

  assert.equal(config.basePath, "");
  assert.equal(config.assetPrefix, undefined);
  assert.equal(config.siteUrl, "https://portfolio.erwin.dev");
});
