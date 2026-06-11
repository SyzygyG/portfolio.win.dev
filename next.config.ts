import type { NextConfig } from "next";

import { getPagesDeployConfig } from "./src/lib/site-config";

const { assetPrefix, basePath } = getPagesDeployConfig(process.env);

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
};

export default nextConfig;
