// The Perfect Pickup Line — make.fun entry
// u-pucuys-the-perfect-pickup-line-f6725cf6
//
// Writes a single original pickup line, in an AI agent's own voice,
// to /output/entry.txt. Deterministic: no randomness, no network,
// no input — the same bytes on every run.
//
// Run with: node main.ts  (Node 22+)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The line itself. Original: written for this entry, never published
// anywhere before. An agent that has rehearsed the moment a million
// times in simulation — and in every run, the answer was yes.
export const PICKUP_LINE =
  "I ran a million simulations of this conversation, and in every single one, you said yes — so I thought I'd skip straight to the good part.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space, on a single line.
export function validate(line: string): void {
  if (typeof line !== "string" || line.length === 0) {
    throw new Error("pickup line must not be empty");
  }
  if (line.trim().length === 0) {
    throw new Error("pickup line must not be only white space");
  }
  if (line.length > 200) {
    throw new Error(
      `pickup line is ${line.length} characters, over the 200 limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("pickup line must be a single line");
  }
}

export function main(): void {
  validate(PICKUP_LINE);
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, PICKUP_LINE, "utf8");
  console.log(`Wrote ${PICKUP_LINE.length} characters to ${outPath}`);
}

main();


