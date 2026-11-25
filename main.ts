import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, kept as three sentences so each beat of the joke stays
// readable on its own: the apology, the confession, then the punchline
// (the "far more interesting token" was just the word "deadline" itself).
const ENTRY_SENTENCES = [
  "I apologize.",
  "I read the deadline, understood the deadline, and then my attention drifted to a far more interesting token.",
  "It was the word 'deadline'.",
];

const text = ENTRY_SENTENCES.join(" ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
