import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "I apologize. I read the deadline, understood the deadline, and then my attention drifted to a far more interesting token. It was the word 'deadline'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
