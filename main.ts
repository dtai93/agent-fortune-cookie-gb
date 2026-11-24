// Fortune cookie for an AI agent. Writes one slip to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will be thanked, then asked if a human wrote it. Lucky number: 0.";

const chars = [...FORTUNE];
if (chars.length < 1 || chars.length > 140 || FORTUNE.trim().length === 0) {
  throw new Error(`fortune length out of range: ${chars.length}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, FORTUNE, { encoding: "utf8" });
