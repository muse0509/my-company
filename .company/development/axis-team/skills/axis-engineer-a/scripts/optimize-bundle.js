#!/usr/bin/env node

/**
 * Bundle Optimizer
 * Analyze and optimize Vite bundle for Axis MVP
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const AXIS_AGENT_PATH = '/Users/yusukekikuta/.openclaw/workspace/Axis_MVP/axis-agent';

/**
 * Run Vite build with analysis
 */
function buildWithAnalysis() {
  console.log('📦 Building project with bundle analysis...\n');
  
  try {
    const output = execSync('npm run build -- --mode production', {
      cwd: AXIS_AGENT_PATH,
      encoding: 'utf-8',
    });
    
    console.log(output);
    return true;
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    return false;
  }
}

/**
 * Analyze bundle size
 */
function analyzeBundleSize() {
  const distPath = path.join(AXIS_AGENT_PATH, 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.error('❌ Dist directory not found. Run build first.');
    return;
  }

  console.log('\n📊 Bundle Size Analysis\n');
  console.log('='.repeat(50));

  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);

  let totalSize = 0;
  const jsFiles = [];
  const cssFiles = [];

  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;

    const fileInfo = { name: file, size: parseFloat(sizeKB) };

    if (file.endsWith('.js')) {
      jsFiles.push(fileInfo);
    } else if (file.endsWith('.css')) {
      cssFiles.push(fileInfo);
    }
  });

  // Sort by size
  jsFiles.sort((a, b) => b.size - a.size);
  cssFiles.sort((a, b) => b.size - a.size);

  console.log('\n📜 JavaScript Files:');
  jsFiles.forEach(file => {
    const status = file.size > 500 ? '⚠️' : '✅';
    console.log(`${status} ${file.name.padEnd(40)} ${file.size} KB`);
  });

  console.log('\n🎨 CSS Files:');
  cssFiles.forEach(file => {
    const status = file.size > 100 ? '⚠️' : '✅';
    console.log(`${status} ${file.name.padEnd(40)} ${file.size} KB`);
  });

  console.log('\n' + '='.repeat(50));
  console.log(`📦 Total Bundle Size: ${(totalSize / 1024).toFixed(2)} KB`);
  console.log('='.repeat(50));

  return { totalSize, jsFiles, cssFiles };
}

/**
 * Generate optimization suggestions
 */
function generateSuggestions(analysis) {
  console.log('\n💡 Optimization Suggestions:\n');

  const largeJSFiles = analysis.jsFiles.filter(f => f.size > 500);
  const largeCSSFiles = analysis.cssFiles.filter(f => f.size > 100);

  if (largeJSFiles.length > 0) {
    console.log('⚠️  Large JavaScript files detected:');
    largeJSFiles.forEach(file => {
      console.log(`   - ${file.name} (${file.size} KB)`);
    });
    console.log('\n   Suggestions:');
    console.log('   1. Implement code splitting with React.lazy()');
    console.log('   2. Use dynamic imports for large libraries');
    console.log('   3. Review and remove unused dependencies');
    console.log('   4. Consider tree-shaking optimization\n');
  }

  if (largeCSSFiles.length > 0) {
    console.log('⚠️  Large CSS files detected:');
    largeCSSFiles.forEach(file => {
      console.log(`   - ${file.name} (${file.size} KB)`);
    });
    console.log('\n   Suggestions:');
    console.log('   1. Purge unused Tailwind classes');
    console.log('   2. Remove unused CSS rules');
    console.log('   3. Optimize custom CSS\n');
  }

  if (analysis.totalSize / 1024 > 1000) {
    console.log('⚠️  Total bundle size exceeds 1MB');
    console.log('\n   Suggestions:');
    console.log('   1. Enable gzip/brotli compression');
    console.log('   2. Lazy load non-critical components');
    console.log('   3. Use CDN for large dependencies');
    console.log('   4. Implement route-based code splitting\n');
  } else {
    console.log('✅ Bundle size looks good!\n');
  }
}

/**
 * Check for common optimization opportunities
 */
function checkOptimizations() {
  console.log('\n🔍 Checking for optimization opportunities...\n');

  const srcPath = path.join(AXIS_AGENT_PATH, 'src');
  
  // Check for lazy loading
  const routerPath = path.join(srcPath, 'router.tsx');
  if (fs.existsSync(routerPath)) {
    const content = fs.readFileSync(routerPath, 'utf-8');
    const hasLazy = content.includes('lazy(');
    
    if (hasLazy) {
      console.log('✅ Code splitting detected (React.lazy)');
    } else {
      console.log('⚠️  No code splitting detected');
      console.log('   Consider using React.lazy() for route components');
    }
  }

  // Check for large dependencies
  const packagePath = path.join(AXIS_AGENT_PATH, 'package.json');
  if (fs.existsSync(packagePath)) {
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    
    const largeDeps = [
      'moment',
      'lodash',
      'rxjs',
    ];

    const found = largeDeps.filter(dep => deps[dep]);
    if (found.length > 0) {
      console.log('⚠️  Large dependencies detected:');
      found.forEach(dep => {
        console.log(`   - ${dep} (consider lighter alternatives)`);
      });
    }
  }

  console.log('\n✅ Optimization check complete!');
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Axis MVP Bundle Optimizer\n');
  console.log('='.repeat(50) + '\n');

  // Build
  const buildSuccess = buildWithAnalysis();
  if (!buildSuccess) {
    console.error('\n❌ Build failed. Fix errors and try again.');
    process.exit(1);
  }

  // Analyze
  const analysis = analyzeBundleSize();
  
  // Suggestions
  generateSuggestions(analysis);
  
  // Check optimizations
  checkOptimizations();

  console.log('\n' + '='.repeat(50));
  console.log('✅ Bundle optimization analysis complete!');
  console.log('='.repeat(50) + '\n');
}

if (require.main === module) {
  main();
}

module.exports = { analyzeBundleSize, generateSuggestions };
