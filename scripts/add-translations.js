/**
 * Script to replace hardcoded English text with translation keys in page.tsx
 * Run this with: node scripts/add-translations.js
 */

const fs = require('fs');
const path = require('path');

const PAGE_FILE = path.join(__dirname, '../app/[locale]/page.tsx');

// Map of hardcoded English strings to their translation keys
const replacements = [
  // Hero section
  { find: '"From Vision to Reality"', replace: '{t(\'hero.title\')}' },
  { find: '"We Build It All"', replace: '{t(\'hero.subtitle\')}' },
  { find: '"Premier Construction and Fit-out Solutions in KSA"', replace: '{t(\'hero.description\')}' },
  { find: '"View Our Projects"', replace: '{t(\'hero.viewProjects\')}' },
  
  // About section
  { find: '"ABOUT US"', replace: '{t(\'about.tag\')}' },
  { find: '"About\\nTown of Luxury"', replace: '{t(\'about.title\')}' },
  
  // Contact button - appearing multiple times
  { find: '"Contact Us"', replace: '{t(\'nav.contactUs\')}' },
  
  // More can be added programmatically...
];

function replaceInFile() {
  console.log('Reading file...');
  let content = fs.readFileSync(PAGE_FILE, 'utf8');
  
  console.log('Applying replacements...');
  let replacementCount = 0;
  
  for (const { find, replace } of replacements) {
    const regex = new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, replace);
      replacementCount += matches.length;
      console.log(`  ✓ Replaced "${find}" (${matches.length} occurrences)`);
    }
  }
  
  console.log(`\nTotal replacements made: ${replacementCount}`);
  console.log('Writing file...');
  fs.writeFileSync(PAGE_FILE, content, 'utf8');
  console.log('Done!');
}

replaceInFile();
