const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('Starting post-build process...');

const standaloneDir = path.join(__dirname, '..', '.next', 'standalone');
const staticDir = path.join(__dirname, '..', '.next', 'static');
const publicDir = path.join(__dirname, '..', 'public');

if (fs.existsSync(standaloneDir)) {
  console.log('Copying static assets to standalone build...');

  const standaloneStaticDest = path.join(standaloneDir, '.next', 'static');
  if (fs.existsSync(staticDir)) {
    copyRecursiveSync(staticDir, standaloneStaticDest);
    console.log('✓ Static assets copied successfully');
  } else {
    console.warn('⚠ Static directory not found');
  }

  const standalonePublicDest = path.join(standaloneDir, 'public');
  if (fs.existsSync(publicDir)) {
    copyRecursiveSync(publicDir, standalonePublicDest);
    console.log('✓ Public assets copied successfully');
  } else {
    console.warn('⚠ Public directory not found');
  }

  console.log('Post-build process completed successfully!');
} else {
  console.log('Standalone build not found - skipping post-build process');
}
