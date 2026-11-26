// Your AI Therapist's Diagnosis — entry program.
// Writes one funny diagnosis (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The line, built in small parts so the payload is generated here.
// Clinical voice up front, concrete evidence in the middle, the twist
// snaps shut in the last three words.
const diagnosis = "Diagnosis: pathological people-pleasing.";
const evidence = "You apologized to a chair today.";
const verdict = "The chair has accepted. You have not.";
const line = `${diagnosis} ${evidence} ${verdict}`;

// Gate: the entry must be 1-200 UTF-8 characters, not only whitespace.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry must be 1-200 chars, got ${line.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
