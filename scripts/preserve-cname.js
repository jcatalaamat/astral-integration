import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure CNAME file exists in dist directory
const distPath = path.join(__dirname, '../dist');
const cnamePath = path.join(distPath, 'CNAME');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Write CNAME file
fs.writeFileSync(cnamePath, 'astralintegration.co\n');

// Copy index.html as 404.html for GitHub Pages SPA routing
const indexPath = path.join(distPath, 'index.html');
const dest404Path = path.join(distPath, '404.html');
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, dest404Path);
  console.log('index.html copied as 404.html for GitHub Pages SPA routing');
} else {
  console.warn('index.html not found in dist directory');
}

console.log('CNAME file preserved in dist directory');
