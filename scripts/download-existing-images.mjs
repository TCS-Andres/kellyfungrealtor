#!/usr/bin/env node

import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "..", "public", "images");

const DOWNLOADS = [
  {
    url: "https://papiphotos.remax-im.com/Person/102378486/MainPhoto_cropped/MainPhoto_cropped.jpg",
    filename: "kelly-headshot.jpg",
  },
  {
    url: "https://static-images.remax.com/assets/web/branding/REMAX-logo.svg",
    filename: "remax-logo.svg",
  },
];

async function main() {
  if (!existsSync(OUTPUT_DIR)) await mkdir(OUTPUT_DIR, { recursive: true });

  for (const item of DOWNLOADS) {
    const filepath = join(OUTPUT_DIR, item.filename);
    console.log(`Downloading: ${item.filename}...`);
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      await writeFile(filepath, buffer);
      console.log(`  ✅ Saved: ${item.filename}`);
    } catch (err) {
      console.error(`  ❌ Failed: ${item.filename} — ${err.message}`);
    }
  }
  console.log("\nDone!");
}

main().catch(console.error);
