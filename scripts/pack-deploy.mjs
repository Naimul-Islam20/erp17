#!/usr/bin/env node
/**
 * Creates a full deploy zip from out/ so partial uploads are less likely.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "out");

function formatStamp(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
    pad(date.getHours()),
    pad(date.getMinutes()),
  ].join("");
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error("❌ out/ not found. Run `npm run build` first.");
    process.exit(1);
  }

  const manifestPath = path.join(OUT_DIR, "BUILD_MANIFEST.json");
  if (!fs.existsSync(manifestPath)) {
    console.error("❌ BUILD_MANIFEST.json missing. Run `npm run build` (includes verify).");
    process.exit(1);
  }

  const zipName = `erp17-deploy-${formatStamp(new Date())}.zip`;
  const zipPath = path.join(ROOT, zipName);

  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }

  try {
    execSync(`zip -r -q "${zipPath}" .`, { cwd: OUT_DIR, stdio: "pipe" });
  } catch (error) {
    console.error("❌ Failed to create zip. Is the `zip` command installed?");
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }

  const sizeMb = (fs.statSync(zipPath).size / (1024 * 1024)).toFixed(2);
  console.log("✅ Deploy package ready");
  console.log(`   File: ${zipName}`);
  console.log(`   Size: ${sizeMb} MB`);
  console.log("   Upload and extract the FULL zip on your server (public_html).");
}

main();
