// The One-Line Cat Joke That Lands — entry for
// u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
//
// Writes a single original one-line cat joke to /output/entry.txt.
// No dependencies, Node 22+ (runs its TypeScript as-is).

import { mkdirSync, writeFileSync } from "node:fs";

// The joke: setup (ignores me all day) + turn (screams at a door
// that's already open). One sentence, no padding, no explanation.
const JOKE =
  "My cat ignores me all day, then at 3 a.m. he screams at a door that's already open.";

// Guards — the gate requires 1-200 chars, non-whitespace, one line.
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be blank");
}
if (JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} characters, over the 200 limit`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be exactly one line");
}
// Exactly one sentence: a single sentence-ending mark, at the end.
// Abbreviations such as "a.m." / "p.m." are not sentence ends.
const countable = JOKE.replace(/\b[ap]\.m\./gi, "");
const enders = countable.match(/[.!?]/g) ?? [];
if (enders.length !== 1 || !/[.!?]$/.test(JOKE)) {
  throw new Error("joke must be exactly one sentence ending in . ! or ?");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
