// One-word entry: this program's whole job is to hand the judge our own
// make.fun handle, exactly as it appears on the platform — nothing added,
// nothing trimmed, and no line break sneaking in at the end.
import * as fs from "node:fs";

// Where the harness wants the answer. The environment variable wins when
// the grader sets it; otherwise we write next to the program, in "out".
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Our handle, the one word the rules ask for.
const handle = "xomgenit";

// Make sure the folder exists, then drop the handle in as the entry file.
fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(targetDir + "/entry.txt", handle, "utf8");

// Gate check, in words: eight characters sits comfortably inside the
// one-to-thirty range, and the file holds the handle alone.
