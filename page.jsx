// Quick local syntax/compile check for every source file.
// JS files are checked with `node --check`; JSX files are compiled with
// the SWC binding that ships inside Next.js. No network or database needed.
//
// Usage:  node swccheck.mjs
//
// Exits non-zero if anything fails, so it can be used in CI.

import { execSync } from "child_process";
import { readFileSync } from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

function list(glob) {
  return execSync(`find ${glob}`, { encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean);
}

let fail = 0;

// 1) Plain JS — syntax check.
for (const f of list("app lib -name '*.js'")) {
  try {
    execSync(`node --check "${f}"`, { stdio: "pipe" });
  } 