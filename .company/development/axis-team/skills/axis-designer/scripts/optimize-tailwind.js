#!/usr/bin/env node

/**
 * Tailwind CSS Optimizer
 * Analyzes and optimizes Tailwind usage in Axis MVP
 */

const fs = require('fs');
const path = require('path');

const AXIS_AGENT_PATH = '/Users/yusukekikuta/.openclaw/workspace/Axis_MVP/axis-agent';

/**
 * Extract Tailwind classes from TSX files
 */
function extractClasses(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const classNameRegex = /className=["']([^"']+)["']/g;
  const classes = [];
  
  let match;
  while ((match = classNameRegex.exec(content)) !== null) {
    const classList = match[1].split(/\s+/);
    classes.push(...classList);
  }
  
  return classes;
}

/**
 * Recursively find all TSX files
 */
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Analyze Tailwind usage
 */
function analyzeTailwindUsage() {
  const srcPath = path.join(AXIS_AGENT_PATH, 'src');
  const tsxFiles = findTSXFiles(srcPath);
  
  console.log(`📊 Analyzing ${tsxFiles.length} TSX files...\n`);
  
  const allClasses = new Set();
  const classCount = {};
  
  tsxFiles.forEach(file => {
    const classes = extractClasses(file);
    classes.forEach(cls => {
      allClasses.add(cls);
      classCount[cls] = (classCount[cls] || 0) + 1;
    });
  });
  
  console.log(`✅ Total unique classes: ${allClasses.size}\n`);
  
  // Most used classes
  const sorted = Object.entries(classCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);
  
  console.log('🔥 Top 20 most used classes:');
  sorted.forEach(([cls, count]) => {
    console.log(`   ${cls.padEnd(30)} ${count}x`);
  });
  
  // Suggest custom classes
  console.log('\n💡 Suggestions for custom classes:');
  const suggestions = [];
  
  sorted.forEach(([cls, count]) => {
    if (count > 5 && (
      cls.includes('bg-') || 
      cls.includes('text-') || 
      cls.includes('border-') ||
      cls.includes('rounded-') ||
      cls.includes('px-') ||
      cls.includes('py-')
    )) {
      suggestions.push(cls);
    }
  });
  
  if (suggestions.length > 0) {
    console.log('   Consider creating utility classes for:');
    suggestions.slice(0, 10).forEach(cls => {
      console.log(`   - ${cls}`);
    });
  } else {
    console.log('   ✨ Tailwind usage looks good!');
  }
  
  // Detect potential inconsistencies
  console.log('\n⚠️  Potential inconsistencies:');
  const colorClasses = Array.from(allClasses).filter(cls => 
    cls.match(/bg-(blue|red|green|purple|pink)-\d{3}/)
  );
  
  if (colorClasses.length > 10) {
    console.log(`   - ${colorClasses.length} different color shades detected`);
    console.log('     Consider using a consistent color palette');
  } else {
    console.log('   ✨ Color usage looks consistent!');
  }
  
  return {
    totalClasses: allClasses.size,
    topClasses: sorted,
    suggestions,
    colorClasses
  };
}

/**
 * Generate optimized Tailwind config suggestions
 */
function generateConfigSuggestions(analysis) {
  console.log('\n📝 Tailwind Config Suggestions:\n');
  
  console.log('```js');
  console.log('// tailwind.config.js');
  console.log('module.exports = {');
  console.log('  content: [');
  console.log('    "./src/**/*.{js,jsx,ts,tsx}",');
  console.log('  ],');
  console.log('  theme: {');
  console.log('    extend: {');
  console.log('      colors: {');
  console.log('        axis: {');
  console.log('          purple: "#7B3FF2",');
  console.log('          pink: "#FF69B4",');
  console.log('          dark: "#1A1A2E",');
  console.log('          light: "#F5F5F5",');
  console.log('        },');
  console.log('      },');
  console.log('    },');
  console.log('  },');
  console.log('};');
  console.log('```');
}

/**
 * Main execution
 */
function main() {
  console.log('🎨 Tailwind CSS Optimizer for Axis MVP\n');
  console.log('='.repeat(50) + '\n');
  
  try {
    const analysis = analyzeTailwindUsage();
    generateConfigSuggestions(analysis);
    
    console.log('\n' + '='.repeat(50));
    console.log('✅ Analysis complete!\n');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { analyzeTailwindUsage, extractClasses };
