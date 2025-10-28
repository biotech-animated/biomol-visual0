const fs = require('fs');
const path = require('path');

console.log('🔍 Validating build integrity...\n');

const requiredFiles = [
  { path: '.next/standalone/server.js', description: 'Server entry point' },
  { path: '.next/standalone/package.json', description: 'Package manifest' },
  { path: '.next/standalone/.next', description: 'Next.js build directory' },
  { path: '.next/standalone/.next/static', description: 'Static assets' },
  { path: '.next/standalone/public', description: 'Public assets' },
  { path: '.next/standalone/node_modules', description: 'Production dependencies' },
  { path: '.next/BUILD_ID', description: 'Build ID file' },
  { path: '.next/server/app', description: 'App server files' },
];

let hasErrors = false;
let warnings = [];

console.log('Required Files Check:');
console.log('━'.repeat(60));

requiredFiles.forEach(({ path: filePath, description }) => {
  const fullPath = path.join(__dirname, '..', filePath);
  const exists = fs.existsSync(fullPath);
  const status = exists ? '✓' : '✗';
  const statusText = exists ? 'OK' : 'MISSING';

  console.log(`${status} ${description.padEnd(30)} [${statusText}]`);

  if (!exists) {
    hasErrors = true;
    console.log(`   Path: ${filePath}`);
  }
});

console.log('\n' + '━'.repeat(60));

const standaloneDir = path.join(__dirname, '..', '.next/standalone');
if (fs.existsSync(standaloneDir)) {
  const staticDir = path.join(standaloneDir, '.next/static');
  const publicDir = path.join(standaloneDir, 'public');

  if (fs.existsSync(staticDir)) {
    const staticFiles = fs.readdirSync(staticDir);
    console.log(`\n📦 Static assets: ${staticFiles.length} directories`);
  } else {
    warnings.push('Static directory is missing in standalone build');
  }

  if (fs.existsSync(publicDir)) {
    const countFiles = (dir) => {
      let count = 0;
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          count += countFiles(fullPath);
        } else {
          count++;
        }
      });
      return count;
    };

    const publicFileCount = countFiles(publicDir);
    console.log(`📁 Public assets: ${publicFileCount} files`);
  } else {
    warnings.push('Public directory is missing in standalone build');
  }
}

if (warnings.length > 0) {
  console.log('\n⚠️  Warnings:');
  warnings.forEach(warning => console.log(`   - ${warning}`));
}

console.log('\n' + '━'.repeat(60));

if (hasErrors) {
  console.log('\n❌ Build validation FAILED - missing required files');
  console.log('Run "npm run build" to regenerate build artifacts\n');
  process.exit(1);
} else {
  console.log('\n✅ Build validation PASSED - all required files present\n');
  process.exit(0);
}
