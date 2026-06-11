import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

type PagesEnvironment = {
  GITHUB_ACTIONS?: string;
  GITHUB_PAGES_CUSTOM_DOMAIN?: string;
  GITHUB_REPOSITORY?: string;
} & Record<string, string | undefined>;

type PagesDeployConfig = {
  assetPrefix: string | undefined;
  basePath: string;
  repositoryName: string;
  siteUrl: string | undefined;
};

function normalizeCustomDomain(value?: string) {
  const trimmed = value?.trim();

  return trimmed ? trimmed.replace(/^https?:\/\//, "").replace(/\/+$/, "") : undefined;
}

function readCustomDomainFromPublicDirectory() {
  const cnamePath = path.join(process.cwd(), "public", "CNAME");

  if (!existsSync(cnamePath)) {
    return undefined;
  }

  return normalizeCustomDomain(readFileSync(cnamePath, "utf8"));
}

function getRepositoryParts(repository?: string) {
  const [owner = "", repositoryName = ""] = repository?.split("/") ?? [];

  return {
    owner,
    repositoryName,
  };
}

function isCustomDomainRepositoryName(repositoryName: string) {
  return repositoryName.includes(".");
}

export function getPagesDeployConfig(environment: PagesEnvironment): PagesDeployConfig {
  const { owner, repositoryName } = getRepositoryParts(environment.GITHUB_REPOSITORY);
  const customDomain =
    normalizeCustomDomain(environment.GITHUB_PAGES_CUSTOM_DOMAIN) ??
    readCustomDomainFromPublicDirectory() ??
    (isCustomDomainRepositoryName(repositoryName) ? repositoryName : undefined);

  const shouldUseRepoBasePath =
    environment.GITHUB_ACTIONS === "true" && Boolean(repositoryName) && !customDomain;
  const basePath = shouldUseRepoBasePath ? `/${repositoryName}` : "";
  const assetPrefix = basePath || undefined;

  if (customDomain) {
    return {
      assetPrefix,
      basePath,
      repositoryName,
      siteUrl: `https://${customDomain}`,
    };
  }

  if (!owner || !repositoryName) {
    return {
      assetPrefix,
      basePath,
      repositoryName,
      siteUrl: undefined,
    };
  }

  return {
    assetPrefix,
    basePath,
    repositoryName,
    siteUrl: `https://${owner.toLowerCase()}.github.io/${repositoryName}`,
  };
}
