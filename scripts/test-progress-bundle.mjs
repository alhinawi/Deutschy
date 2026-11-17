import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const manifestPath = join('.next', 'app-build-manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const chunks = manifest.pages?.['/progress/page'];
if (!Array.isArray(chunks) || chunks.length === 0) {
  throw new Error('Build the app before checking the /progress JavaScript budget.');
}

const bytes = chunks.reduce((total, chunk) => total + statSync(join('.next', chunk)).size, 0);
const budget = 500_000;
if (bytes > budget) {
  throw new Error(`/progress initial JavaScript is ${bytes} bytes; expected at most ${budget}. Keep detailed progress data behind the disclosure.`);
}
console.log(`PASS: /progress initial JavaScript is ${bytes} bytes (budget ${budget}); detailed progress loads on demand.`);
