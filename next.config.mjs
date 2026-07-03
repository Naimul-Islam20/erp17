import path from "node:path";
import { fileURLToPath } from "node:url";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default function nextConfig(phase) {
  return {
    // Keep dev and build caches separate so `next build` does not corrupt
    // the running `next dev` server and cause 500/Internal Server Error pages.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
    output: "export",
    outputFileTracingRoot: projectRoot,
    // Each route becomes .../index.html so hosts serve /path/ without "Index of" listings
    trailingSlash: true,
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "http",
          hostname: "127.0.0.1",
          port: "8000",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "service.erp17.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
}
