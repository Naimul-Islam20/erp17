#!/usr/bin/env node
/**
 * Post-build checks for `output: "export"`.
 * Fails the build if HTML references missing assets or blocking SSR overlays.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "out");

const ASSET_RE = /(?:href|src)="(\/_next\/[^"?#]+)"/g;
const BLOCKING_OVERLAY_RE =
  /fixed inset-0 z-\[120\][^>]*bg-black\/60|bg-black\/60[^>]*fixed inset-0 z-\[120\]/;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

function countFiles(dir) {
  return walk(dir).filter((file) => fs.statSync(file).isFile()).length;
}

function getBuildId() {
  const staticDir = path.join(OUT_DIR, "_next", "static");
  if (!fs.existsSync(staticDir)) return "unknown";

  const buildDirs = fs
    .readdirSync(staticDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "chunks")
    .map((entry) => entry.name);

  return buildDirs[0] ?? "unknown";
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error("❌ out/ folder not found. Run `npm run build` first.");
    process.exit(1);
  }

  const htmlFiles = walk(OUT_DIR).filter((file) => file.endsWith(".html"));
  const missingAssets = new Set();
  const blockingPages = [];

  for (const htmlFile of htmlFiles) {
    const content = fs.readFileSync(htmlFile, "utf8");
    const relHtml = path.relative(OUT_DIR, htmlFile);

    if (BLOCKING_OVERLAY_RE.test(content)) {
      blockingPages.push(relHtml);
    }

    for (const match of content.matchAll(ASSET_RE)) {
      const assetPath = decodeURIComponent(match[1]);
      const diskPath = path.join(OUT_DIR, assetPath.replace(/^\//, ""));

      if (!fs.existsSync(diskPath)) {
        missingAssets.add(assetPath);
      }
    }
  }

  const htaccessPath = path.join(OUT_DIR, ".htaccess");
  if (!fs.existsSync(htaccessPath)) {
    console.error("❌ out/.htaccess missing (should be copied from public/.htaccess).");
    process.exit(1);
  }

  const nextStaticDir = path.join(OUT_DIR, "_next", "static");
  if (!fs.existsSync(nextStaticDir)) {
    console.error("❌ out/_next/static/ missing. Uploading HTML alone will break the site.");
    process.exit(1);
  }

  if (blockingPages.length > 0) {
    console.error("❌ Blocking consultation overlay found in static HTML:");
    for (const page of blockingPages) {
      console.error(`   - ${page}`);
    }
    console.error(
      "   Fix: render popups inside ClientOnly and default isOpen to false.",
    );
    process.exit(1);
  }

  if (missingAssets.size > 0) {
    console.error("❌ HTML references assets that are missing from out/:");
    for (const asset of [...missingAssets].sort()) {
      console.error(`   - ${asset}`);
    }
    console.error(
      "   This usually means a partial/corrupt build. Re-run `npm run build`.",
    );
    process.exit(1);
  }

  const buildId = getBuildId();
  const fileCount = countFiles(OUT_DIR);
  const manifest = {
    generatedAt: new Date().toISOString(),
    buildId,
    htmlPages: htmlFiles.length,
    totalFiles: fileCount,
    deployNote:
      "Upload the ENTIRE out/ folder to the server (including _next/). Do not upload only HTML files.",
  };

  fs.writeFileSync(
    path.join(OUT_DIR, "BUILD_MANIFEST.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );

  fs.writeFileSync(
    path.join(OUT_DIR, "BUILD_INFO.txt"),
    [
      "ERP17 static export — deploy checklist",
      "======================================",
      "",
      `Build ID: ${buildId}`,
      `Generated: ${manifest.generatedAt}`,
      `HTML pages: ${htmlFiles.length}`,
      `Total files: ${fileCount}`,
      "",
      "Upload ALL files from out/ to your server root:",
      "  - _next/          (required — JavaScript & CSS)",
      "  - plans/          (and every other route folder)",
      "  - .htaccess       (required — Apache routing)",
      "  - BUILD_INFO.txt  (this file)",
      "",
      "Do NOT upload only index.html or a partial zip.",
      "After upload: hard refresh (Ctrl+Shift+R) and test /plans/",
      "",
    ].join("\n"),
  );

  console.log("✅ Static export verified");
  console.log(`   HTML pages: ${htmlFiles.length}`);
  console.log(`   Total files: ${fileCount}`);
  console.log(`   Build ID: ${buildId}`);
  console.log("   Wrote out/BUILD_MANIFEST.json and out/BUILD_INFO.txt");
}

main();
