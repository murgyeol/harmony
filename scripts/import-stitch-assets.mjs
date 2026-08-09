import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceDir = process.argv[2] ?? "/tmp/harmony-stitch";
const outputDir = process.argv[3] ?? path.resolve("public/stitch");
const pages = [
  "home",
  "about",
  "projects",
  "model-house",
  "office",
  "house",
  "design",
];

await mkdir(outputDir, { recursive: true });

const manifest = {};

for (const page of pages) {
  const html = await readFile(path.join(sourceDir, `${page}.html`), "utf8");
  const urls = [
    ...html.matchAll(
      /https:\/\/lh3\.googleusercontent\.com\/aida-public\/[^"' )<]+/g,
    ),
  ].map((match) => match[0]);

  const uniqueUrls = [...new Set(urls)];
  manifest[page] = [];

  for (const [index, url] of uniqueUrls.entries()) {
    const filename = `${page}-${String(index + 1).padStart(2, "0")}.jpg`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download ${url}: ${response.status}`);
    }

    const bytes = Buffer.from(await response.arrayBuffer());
    await writeFile(path.join(outputDir, filename), bytes);
    manifest[page].push({ filename, source: url, bytes: bytes.length });
  }
}

await writeFile(
  path.join(outputDir, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

const total = Object.values(manifest).reduce(
  (sum, entries) => sum + entries.length,
  0,
);
console.log(`Imported ${total} Stitch images into ${outputDir}`);
