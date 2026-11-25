/**
 * Modern, Lightweight Static Site Generator for YOUR SPACE MAX
 * Compiles modular templates in src/ into production HTML files
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const renderIndexPage = require('./pages/index-page');
const renderAboutPage = require('./pages/about-page');
const renderServicesPage = require('./pages/services-page');
const renderContactPage = require('./pages/contact-page');

console.log('Building YOUR SPACE MAX production site from src/ ...');

const pages = [
  { file: 'index.html', html: renderIndexPage() },
  { file: 'about.html', html: renderAboutPage() },
  { file: 'services.html', html: renderServicesPage() },
  { file: 'contact.html', html: renderContactPage() }
];

pages.forEach(({ file, html }) => {
  const targetPath = path.join(rootDir, file);
  fs.writeFileSync(targetPath, html, 'utf8');
  const sizeKb = (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1);
  console.log(`  ✓ Compiled ${file} (${sizeKb} KB)`);
});

console.log('Build completed successfully!');

