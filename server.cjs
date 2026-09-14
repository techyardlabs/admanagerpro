// CommonJS Root entry point for LiteSpeed (lsnode.js) and cPanel/Hostinger
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const fs = require('fs');
const path = require('path');
const bundledServer = path.join(__dirname, 'dist', 'server.cjs');

if (fs.existsSync(bundledServer)) {
  require('./dist/server.cjs');
} else {
  console.error('Production server bundle not found at dist/server.cjs. Please execute "npm run build" first.');
  process.exit(1);
}
