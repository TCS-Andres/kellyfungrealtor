#!/usr/bin/env node

import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "..", "public", "images");

const API_KEY = "c3333d6b964e86424fcc05bfc6cd7a6a";
const CREATE_URL = "https://api.kie.ai/api/v1/jobs/createTask";
const STATUS_URL = "https://api.kie.ai/api/v1/jobs/recordInfo";

const IMAGES = [
  {
    filename: "hero-bg.jpg",
    prompt:
      "Stunning aerial photograph of Fort Lauderdale Florida waterfront real estate at golden hour, luxury homes along the intracoastal waterway, palm trees, crystal blue water, warm sunset light, professional real estate photography style, ultra realistic, 16:9 aspect ratio",
    aspect_ratio: "16:9",
    resolution: "2K",
  },
  {
    filename: "success-bg.jpg",
    prompt:
      "Beautiful modern luxury home interior in South Florida style, open concept living room with large windows overlooking tropical garden, bright natural light, marble floors, contemporary furniture, warm and inviting atmosphere, professional real estate photography",
    aspect_ratio: "16:9",
    resolution: "2K",
  },
  {
    filename: "area-fort-lauderdale.jpg",
    prompt:
      "Aerial view of Fort Lauderdale Beach Florida, turquoise ocean, white sand beach, luxury high-rise condos along the coastline, palm trees, sunny day, vibrant colors, real estate photography style",
    aspect_ratio: "4:3",
    resolution: "2K",
  },
  {
    filename: "area-weston.jpg",
    prompt:
      "Beautiful suburban neighborhood in Weston Florida, tree-lined streets, modern family homes with manicured lawns, community park in background, families walking, warm afternoon light, real estate lifestyle photography",
    aspect_ratio: "4:3",
    resolution: "2K",
  },
  {
    filename: "area-pembroke-pines.jpg",
    prompt:
      "Aerial photograph of Pembroke Pines Florida residential community, lake views, modern homes, green spaces, family-friendly neighborhood, warm natural light, real estate photography style",
    aspect_ratio: "4:3",
    resolution: "2K",
  },
  {
    filename: "area-sw-ranches.jpg",
    prompt:
      "Luxury estate property in South West Ranches Florida, large lot, equestrian style home, palm trees, sprawling green lawn, golden hour light, real estate photography",
    aspect_ratio: "4:3",
    resolution: "2K",
  },
  {
    filename: "area-miami.jpg",
    prompt:
      "Miami Florida downtown skyline at sunset, Brickell area, luxury condos, palm trees, Biscayne Bay, colorful sky, real estate photography",
    aspect_ratio: "4:3",
    resolution: "2K",
  },
  {
    filename: "cta-bg.jpg",
    prompt:
      "Warm golden hour photograph of a happy couple standing in front of a beautiful Florida home with palm trees, celebrating, soft bokeh background, emotional real estate photography style",
    aspect_ratio: "16:9",
    resolution: "2K",
  },
  {
    filename: "investment-property.jpg",
    prompt:
      "Modern luxury investment property in Fort Lauderdale Florida, sleek architecture, pool with ocean view, rooftop terrace, twilight blue hour photography, premium real estate marketing photo",
    aspect_ratio: "16:9",
    resolution: "1K",
  },
];

async function createTask(prompt, aspect_ratio, resolution) {
  const res = await fetch(CREATE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "nano-banana-2",
      input: {
        prompt,
        image_input: [],
        aspect_ratio,
        resolution,
        output_format: "jpg",
      },
    }),
  });
  const data = await res.json();
  if (data.code !== 200) throw new Error(`Create task failed: ${JSON.stringify(data)}`);
  return data.data.taskId;
}

async function pollTask(taskId, timeoutMs = 120000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    await new Promise((r) => setTimeout(r, 5000));
    const res = await fetch(`${STATUS_URL}?taskId=${taskId}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const data = await res.json();
    const state = data?.data?.state;
    if (state === "success") {
      const resultJson = JSON.parse(data.data.resultJson);
      return resultJson.resultUrls[0];
    }
    if (state === "failed") throw new Error(`Task failed: ${taskId}`);
    process.stdout.write(".");
  }
  throw new Error(`Timeout waiting for task: ${taskId}`);
}

async function downloadImage(url, filepath) {
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(filepath, buffer);
}

async function main() {
  if (!existsSync(OUTPUT_DIR)) await mkdir(OUTPUT_DIR, { recursive: true });

  const results = [];

  for (const img of IMAGES) {
    const filepath = join(OUTPUT_DIR, img.filename);
    console.log(`\n🖼  Generating: ${img.filename}`);
    try {
      const taskId = await createTask(img.prompt, img.aspect_ratio, img.resolution);
      console.log(`   Task created: ${taskId}. Polling`);
      const imageUrl = await pollTask(taskId);
      console.log(`\n   Downloading...`);
      await downloadImage(imageUrl, filepath);
      console.log(`   ✅ Saved: ${img.filename}`);
      results.push({ file: img.filename, status: "success" });
    } catch (err) {
      console.error(`   ❌ Failed: ${img.filename} — ${err.message}`);
      results.push({ file: img.filename, status: "failed", error: err.message });
    }
    // Pause between requests
    await new Promise((r) => setTimeout(r, 3000));
  }

  console.log("\n\n=== SUMMARY ===");
  for (const r of results) {
    console.log(`  ${r.status === "success" ? "✅" : "❌"} ${r.file}${r.error ? ` (${r.error})` : ""}`);
  }
}

main().catch(console.error);
