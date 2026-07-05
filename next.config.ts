import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// Define basePath dynamically for GitHub Pages deployment.
// If deployed to a subpath (e.g. username.github.io/repo-name),
// set the NEXT_PUBLIC_REPO_NAME environment variable to the repository name (e.g. "meu-portfolio").
const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || "";
const basePath = isProd && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath || undefined,
};

export default withNextIntl(nextConfig);
