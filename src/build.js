/**
 * Modern, Lightweight Static Site Generator for YOUR SPACE MAX
 * Compiles modular templates in src/ into production HTML files
 * Bilingual: Arabic (Root) and French (/fr/)
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const frDir = path.join(rootDir, 'fr');
if (!fs.existsSync(frDir)) {
  fs.mkdirSync(frDir, { recursive: true });
}

const renderIndexPage = require('./pages/index-page');
const renderAboutPage = require('./pages/about-page');
const renderServicesPage = require('./pages/services-page');
const renderContactPage = require('./pages/contact-page');

console.log('Building YOUR SPACE MAX production site (Bilingual AR / FR) from src/ ...');

const pages = [
  // Arabic (Root)
  { file: 'index.html', html: renderIndexPage('ar') },
  { file: 'about.html', html: renderAboutPage('ar') },
  { file: 'services.html', html: renderServicesPage('ar') },
  { file: 'contact.html', html: renderContactPage('ar') },

  // French (/fr/)
  { file: 'fr/index.html', html: renderIndexPage('fr') },
  { file: 'fr/about.html', html: renderAboutPage('fr') },
  { file: 'fr/services.html', html: renderServicesPage('fr') },
  { file: 'fr/contact.html', html: renderContactPage('fr') }
];

pages.forEach(({ file, html }) => {
  const targetPath = path.join(rootDir, file);
  fs.writeFileSync(targetPath, html, 'utf8');
  const sizeKb = (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1);
  console.log(`  ✓ Compiled ${file} (${sizeKb} KB)`);
});

console.log('Build completed successfully!');
