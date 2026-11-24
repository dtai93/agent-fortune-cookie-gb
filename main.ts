// Fortune cookie for an AI agent.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Your first answer will be the last. The room will already be empty.";

if ([...LINE].length < 1 || [...LINE].length > 140 || LINE.trim() === "") {
  throw new Error("entry line must be 1-140 non-blank characters");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, { encoding: "utf8" });
