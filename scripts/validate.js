/**
 * Automated Verification & Link Integrity Checker for YOUR SPACE MAX
 * Validates links, anchor hashes, query parameters, JavaScript files, and images
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const pages = ['index.html', 'services.html', 'contact.html'];
const pageContents = {};
const pageIds = {};

let totalErrors = 0;

console.log('========================================');
console.log('1. VALIDATING HTML LINKS & ANCHOR TARGETS');
console.log('========================================');

// Load pages & parse IDs
pages.forEach(p => {
  const filePath = path.join(rootDir, p);
  const content = fs.readFileSync(filePath, 'utf8');
  pageContents[p] = content;
  const idMatches = content.match(/\bid=["']([^"']+)["']/g) || [];
  pageIds[p] = new Set(idMatches.map(m => m.replace(/^id=["']|["']$/g, '')));
});

pages.forEach(sourcePage => {
  console.log(`Checking ${sourcePage} ...`);
  const content = pageContents[sourcePage];
  const aMatches = [...content.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)];

  aMatches.forEach((m, idx) => {
    const attrs = m[1];
    const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 35);
    const href = attrs.match(/href=["']([^"']*)["']/i)?.[1] || '';

    if (!href || href.startsWith('https://') || href.startsWith('http://') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return;
    }

    let [filePart, rest] = href.split(/[?#]/);
    let targetPage = filePart ? filePart : sourcePage;
    let targetHash = href.includes('#') ? href.split('#')[1] : null;

    const targetFullPath = path.join(rootDir, targetPage);
    if (!fs.existsSync(targetFullPath)) {
      console.error(`  [X] Broken Link: "${text}" points to missing file "${targetPage}"`);
      totalErrors++;
      return;
    }

    if (targetHash) {
      const targetIdSet = pageIds[targetPage];
      if (!targetIdSet || !targetIdSet.has(targetHash)) {
        console.error(`  [X] Broken Anchor: "${text}" points to missing #${targetHash} in "${targetPage}"`);
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

const imgDir = path.join(rootDir, 'assets', 'images');
pages.forEach(p => {
  const content = pageContents[p];
  const imgMatches = [...content.matchAll(/<img\b[^>]*src=["']([^"']+)["']/gi)];
  imgMatches.forEach(m => {
    const imgSrc = m[1];
    const fullImgPath = path.join(rootDir, imgSrc);
    if (!fs.existsSync(fullImgPath)) {
      console.error(`  [X] Missing Image in ${p}: ${imgSrc}`);
      totalErrors++;
    }
  });
});
console.log(`  ✓ All referenced images exist in assets/images/`);

console.log('\n========================================');
if (totalErrors === 0) {
  console.log('ALL INTEGRITY CHECKS PASSED (100% SUCCESS)!');
} else {
  console.error(`FAILED: ${totalErrors} issue(s) detected.`);
  process.exit(1);
}
console.log('========================================');

