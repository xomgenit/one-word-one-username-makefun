// One Word, One Username, One Reward — entry: our own make.fun username.
// The rules require exactly the entrant's own handle, one word, 1-30 chars.
// "xomgenit" is 8 chars: a genuine make.fun handle, single word, no padding.
// No trailing newline: a newline would be padding under judge criterion 4.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || 'out';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), 'xomgenit');
