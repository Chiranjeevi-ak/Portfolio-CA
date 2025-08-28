// Quick Setup Script for GitHub Pages Deployment
// Run this script to update configuration files with your repository details

const fs = require('fs');
const path = require('path');

// Update these values with your actual GitHub details
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME';  // Replace with your GitHub username
const REPOSITORY_NAME = 'YOUR_REPOSITORY_NAME';  // Replace with your repository name

console.log('🚀 Setting up GitHub Pages deployment...');

// Update package.json
try {
  const packagePath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  packageJson.homepage = `https://${GITHUB_USERNAME}.github.io/${REPOSITORY_NAME}`;
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json');
} catch (error) {
  console.log('❌ Error updating package.json:', error.message);
}

// Update vite.config.js
try {
  const vitePath = path.join(__dirname, 'vite.config.js');
  let viteConfig = fs.readFileSync(vitePath, 'utf8');
  viteConfig = viteConfig.replace(
    /base: '\/YOUR_REPOSITORY_NAME\/',/,
    `base: '/${REPOSITORY_NAME}/',`
  );
  fs.writeFileSync(vitePath, viteConfig);
  console.log('✅ Updated vite.config.js');
} catch (error) {
  console.log('❌ Error updating vite.config.js:', error.message);
}

// Update index.html
try {
  const indexPath = path.join(__dirname, 'index.html');
  let indexHtml = fs.readFileSync(indexPath, 'utf8');
  indexHtml = indexHtml.replace(
    /https:\/\/YOUR_GITHUB_USERNAME\.github\.io\/YOUR_REPOSITORY_NAME\//g,
    `https://${GITHUB_USERNAME}.github.io/${REPOSITORY_NAME}/`
  );
  fs.writeFileSync(indexPath, indexHtml);
  console.log('✅ Updated index.html');
} catch (error) {
  console.log('❌ Error updating index.html:', error.message);
}

console.log('\n🎉 Setup complete!');
console.log('\nNext steps:');
console.log('1. Create a GitHub repository');
console.log('2. Push your code to GitHub');
console.log('3. Enable GitHub Pages in repository settings');
console.log(`4. Your site will be live at: https://${GITHUB_USERNAME}.github.io/${REPOSITORY_NAME}`);