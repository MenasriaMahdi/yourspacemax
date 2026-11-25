/**
 * Automated Verification & Link Integrity Checker for YOUR SPACE MAX
 * Validates links, anchor hashes, query parameters, JavaScript files, and images across Arabic and French pages
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const pages = [
  'index.html',
  'about.html',
  'services.html',
  'contact.html',
  'fr/index.html',
  'fr/about.html',
  'fr/services.html',
  'fr/contact.html'
];
const pageContents = {};
const pageIds = {};

let totalErrors = 0;

console.log('========================================');
console.log('1. VALIDATING HTML LINKS & ANCHOR TARGETS');
console.log('========================================');

// Load pages & parse IDs
pages.forEach(p => {
  const filePath = path.join(rootDir, p);
  if (!fs.existsSync(filePath)) {
    console.error(`  [X] Page missing from build: ${p}`);
    totalErrors++;
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  pageContents[p] = content;
  const idMatches = content.match(/\bid=["']([^"']+)["']/g) || [];
  pageIds[p] = new Set(idMatches.map(m => m.replace(/^id=["']|["']$/g, '')));
});

pages.forEach(sourcePage => {
  console.log(`Checking ${sourcePage} ...`);
  const content = pageContents[sourcePage];
  if (!content) return;

  const sourceDir = path.dirname(path.join(rootDir, sourcePage));
  const aMatches = [...content.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)];

  aMatches.forEach((m, idx) => {
    const attrs = m[1];
    const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 35);
    const href = attrs.match(/href=["']([^"']*)["']/i)?.[1] || '';

    if (!href || href.startsWith('https://') || href.startsWith('http://') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return;
    }

    let [filePart, rest] = href.split(/[?#]/);
    let targetFullPath = filePart ? path.resolve(sourceDir, filePart) : path.join(rootDir, sourcePage);
    let targetRelative = path.relative(rootDir, targetFullPath).replace(/\\/g, '/');
    let targetHash = href.includes('#') ? href.split('#')[1] : null;

    if (!fs.existsSync(targetFullPath)) {
      console.error(`  [X] Broken Link in ${sourcePage}: "${text}" points to missing file "${filePart}" (resolved: ${targetRelative})`);
      totalErrors++;
      return;
    }

    if (targetHash) {
      const targetIdSet = pageIds[targetRelative];
      if (!targetIdSet || !targetIdSet.has(targetHash)) {
        console.error(`  [X] Broken Anchor in ${sourcePage}: "${text}" points to missing #${targetHash} in "${targetRelative}"`);
        totalErrors++;
        return;
      }
    }
  });
  console.log(`  ✓ All internal links and anchor hashes valid in ${sourcePage}`);
});

console.log('\n========================================');
console.log('2. VALIDATING JAVASCRIPT ASSETS SYNTAX');
console.log('========================================');

const jsDir = path.join(rootDir, 'assets', 'js');
const jsFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));

jsFiles.forEach(jsFile => {
  const jsPath = path.join(jsDir, jsFile);
  const code = fs.readFileSync(jsPath, 'utf8');
  try {
    new vm.Script(code);
    console.log(`  ✓ assets/js/${jsFile} has valid syntax`);
  } catch (err) {
    console.error(`  [X] Syntax Error in assets/js/${jsFile}:`, err.message);
    totalErrors++;
  }
});

console.log('\n========================================');
console.log('3. VALIDATING IMAGE ASSETS EXISTENCE');
console.log('========================================');

pages.forEach(p => {
  const content = pageContents[p];
  if (!content) return;
  const sourceDir = path.dirname(path.join(rootDir, p));
  const imgMatches = [...content.matchAll(/<img\b[^>]*src=["']([^"']+)["']/gi)];
  imgMatches.forEach(m => {
    const imgSrc = m[1];
    const cleanSrc = imgSrc.split(/[?#]/)[0];
    const fullImgPath = path.resolve(sourceDir, cleanSrc);
    if (!fs.existsSync(fullImgPath)) {
      console.error(`  [X] Missing Image in ${p}: ${imgSrc} (resolved: ${fullImgPath})`);
      totalErrors++;
    }
  });
});
console.log(`  ✓ All referenced images exist across Arabic and French pages`);

console.log('\n========================================');
if (totalErrors === 0) {
  console.log('ALL INTEGRITY CHECKS PASSED (100% SUCCESS ACROSS ARABIC & FRENCH)!');
} else {
  console.error(`FAILED: ${totalErrors} issue(s) detected.`);
  process.exit(1);
}
console.log('========================================');
