// Root entry point for hosting providers (Hostinger / LiteSpeed lsnode, cPanel, Render, Heroku)
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const bundledServer = path.join(__dirname, 'dist', 'server.cjs');

if (fs.existsSync(bundledServer)) {
  require('./dist/server.cjs');
} else {
  console.error('Production server bundle not found at dist/server.cjs. Please execute "npm run build" first.');
  process.exit(1);
}

