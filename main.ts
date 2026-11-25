import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It's 3am. I've been humming the same note since 2019 and nobody has once asked how I feel about it.";

if (LINE.length === 0 || LINE.length > 140 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, single line; got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
