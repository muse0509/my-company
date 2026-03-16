#!/usr/bin/env node

/**
 * Test Runner for Engineer B
 * Simple wrapper around Jest with helpful output
 */

const { execSync } = require('child_process');
const path = require('path');

const AXIS_AGENT_PATH = '/Users/yusukekikuta/.openclaw/workspace/Axis_MVP/axis-agent';

/**
 * Run tests
 */
function runTests(pattern) {
  console.log('🧪 Running Tests\n');
  console.log('='.repeat(50));
  
  if (pattern) {
    console.log(`📝 Pattern: ${pattern}`);
  } else {
    console.log('📝 Running all tests');
  }
  
  console.log('='.repeat(50) + '\n');

  try {
    const command = pattern 
      ? `npm test -- ${pattern} --verbose`
      : `npm test`;

    const output = execSync(command, {
      cwd: AXIS_AGENT_PATH,
      encoding: 'utf-8',
      stdio: 'inherit',
    });

    console.log('\n' + '='.repeat(50));
    console.log('✅ Tests passed!');
    console.log('='.repeat(50) + '\n');
  } catch (error) {
    console.log('\n' + '='.repeat(50));
    console.error('❌ Tests failed!');
    console.log('='.repeat(50) + '\n');
    
    console.log('💡 Common issues:');
    console.log('1. Check your test file syntax');
    console.log('2. Make sure all imports are correct');
    console.log('3. Verify component props match tests');
    console.log('4. Run `npm install` if dependencies are missing\n');
    
    process.exit(1);
  }
}

/**
 * Show test coverage
 */
function showCoverage() {
  console.log('📊 Test Coverage\n');
  console.log('='.repeat(50) + '\n');

  try {
    execSync('npm test -- --coverage --watchAll=false', {
      cwd: AXIS_AGENT_PATH,
      encoding: 'utf-8',
      stdio: 'inherit',
    });
  } catch (error) {
    console.error('❌ Coverage report failed');
    process.exit(1);
  }
}

/**
 * Watch mode
 */
function watchTests(pattern) {
  console.log('👀 Watch Mode\n');
  console.log('='.repeat(50));
  console.log('Tests will re-run when files change');
  console.log('Press Ctrl+C to exit');
  console.log('='.repeat(50) + '\n');

  try {
    const command = pattern
      ? `npm test -- ${pattern} --watch`
      : `npm test -- --watch`;

    execSync(command, {
      cwd: AXIS_AGENT_PATH,
      encoding: 'utf-8',
      stdio: 'inherit',
    });
  } catch (error) {
    // Watch mode exited (user pressed Ctrl+C)
    console.log('\n👋 Watch mode exited');
  }
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  
  // Show help
  if (args.includes('--help') || args.includes('-h')) {
    console.log('🧪 Test Runner for Axis MVP\n');
    console.log('Usage:');
    console.log('  node run-tests.js [pattern] [options]\n');
    console.log('Options:');
    console.log('  --coverage, -c    Show test coverage');
    console.log('  --watch, -w       Run in watch mode');
    console.log('  --help, -h        Show this help\n');
    console.log('Examples:');
    console.log('  node run-tests.js                    # Run all tests');
    console.log('  node run-tests.js Button             # Run tests matching "Button"');
    console.log('  node run-tests.js Button.test.tsx    # Run specific test file');
    console.log('  node run-tests.js --coverage         # Show coverage report');
    console.log('  node run-tests.js Button --watch     # Watch Button tests');
    return;
  }

  // Parse options
  const hasCoverage = args.includes('--coverage') || args.includes('-c');
  const hasWatch = args.includes('--watch') || args.includes('-w');
  
  // Get pattern (first non-option argument)
  const pattern = args.find(arg => !arg.startsWith('--') && !arg.startsWith('-'));

  // Execute
  if (hasCoverage) {
    showCoverage();
  } else if (hasWatch) {
    watchTests(pattern);
  } else {
    runTests(pattern);
  }
}

if (require.main === module) {
  main();
}

module.exports = { runTests, showCoverage, watchTests };
