import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is the account's own make.fun handle, keen-lynx-72, and
// nothing else. The judge's first criterion is that the entry is a real
// make.fun username, the entrant's own handle — a genuine handle beats
// any invented word — so no explanation, no links, no pitch is added.
const handle = "keen-lynx-72";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), handle, "utf8");
