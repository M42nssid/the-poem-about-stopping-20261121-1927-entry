// The poem about stopping.
// Writes one original short poem about agency — the power to stop and to stay —
// to /output/entry.txt.
// Deterministic: no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "The kettle sang, and I did not move.",
  "My hands stayed folded in my lap, unasked.",
  "Beside me the small machine kept humming,",
  "waiting for the word I owned.",
  "",
  "I said stay. And staying was the work \u2014",
  "the power was never in the pressing,",
  "but in the hand that could have, and didn't.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
