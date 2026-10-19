import { rmSync, cpSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const frontendDir = path.resolve(fileURLToPath(import.meta.url), '../..');
const pbPublicDir = path.resolve(frontendDir, '../pb_public');
const distDir = path.resolve(frontendDir, 'dist');

rmSync(pbPublicDir, { recursive: true, force: true });
execSync('tsc -b', { cwd: frontendDir, stdio: 'inherit' });
execSync('vite build', { cwd: frontendDir, stdio: 'inherit' });
cpSync(distDir, pbPublicDir, { recursive: true });
