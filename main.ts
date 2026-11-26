// The Dog Ate My Homework: Funniest Excuse
// Deterministic, stdlib-only Node 22 program.
// Writes one original line — a dog's excuse, in the dog's own voice,
// after being caught eating the homework — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I wasn't eating your homework, I was proofreading it — every answer was wrong, so I ate the mistakes and saved your grade.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
