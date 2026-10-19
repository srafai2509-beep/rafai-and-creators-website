import { execFileSync } from 'node:child_process';
import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const archive = path.join(root, 'rafai-creators-website (1).zip');
const output = path.join(root, 'dist');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
execFileSync('unzip', ['-o', archive, '-d', output], { stdio: 'inherit' });
console.log('Static website extracted to dist/.');
