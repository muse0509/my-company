#!/usr/bin/env node

/**
 * Efficiency Measurement Tool
 * 
 * Measures task performance: time, tokens, quality
 * 
 * Usage:
 *   node measure-efficiency.js --task "task-name" --baseline
 *   node measure-efficiency.js --task "task-name" --compare
 */

const fs = require('fs');
const path = require('path');

// Configuration
const METRICS_DIR = path.join(__dirname, '../metrics');
const METRICS_FILE = path.join(METRICS_DIR, 'efficiency-metrics.json');

// Ensure metrics directory exists
if (!fs.existsSync(METRICS_DIR)) {
  fs.mkdirSync(METRICS_DIR, { recursive: true });
}

// Load existing metrics
function loadMetrics() {
  if (fs.existsSync(METRICS_FILE)) {
    return JSON.parse(fs.readFileSync(METRICS_FILE, 'utf8'));
  }
  return {};
}

// Save metrics
function saveMetrics(metrics) {
  fs.writeFileSync(METRICS_FILE, JSON.stringify(metrics, null, 2));
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const result = {
    task: null,
    mode: null // 'baseline' or 'compare'
  };
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--task' && args[i + 1]) {
      result.task = args[i + 1];
      i++;
    } else if (args[i] === '--baseline') {
      result.mode = 'baseline';
    } else if (args[i] === '--compare') {
      result.mode = 'compare';
    }
  }
  
  return result;
}

// Prompt for metrics
function promptForMetric(question) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    readline.question(question, (answer) => {
      readline.close();
      resolve(answer);
    });
  });
}

// Collect metrics interactively
async function collectMetrics(taskName) {
  console.log(`\nCollecting metrics for: ${taskName}\n`);
  
  const duration = await promptForMetric('Duration (minutes): ');
  const tokens = await promptForMetric('Tokens consumed: ');
  const quality = await promptForMetric('Quality score (0-100): ');
  
  return {
    timestamp: Date.now(),
    duration: parseFloat(duration),
    tokens: parseInt(tokens, 10),
    quality: parseFloat(quality)
  };
}

// Calculate improvement
function calculateImprovement(baseline, current) {
  const timeSaving = ((baseline.duration - current.duration) / baseline.duration * 100).toFixed(1);
  const tokenSaving = ((baseline.tokens - current.tokens) / baseline.tokens * 100).toFixed(1);
  const qualityChange = (current.quality - baseline.quality).toFixed(1);
  
  return {
    timeSaving: parseFloat(timeSaving),
    tokenSaving: parseFloat(tokenSaving),
    qualityChange: parseFloat(qualityChange)
  };
}

// Display comparison
function displayComparison(taskName, baseline, current) {
  const improvement = calculateImprovement(baseline, current);
  
  console.log('\n' + '='.repeat(60));
  console.log(`Task: ${taskName}`);
  console.log('='.repeat(60));
  
  console.log('\n📊 BASELINE:');
  console.log(`   Duration: ${baseline.duration} min`);
  console.log(`   Tokens: ${baseline.tokens.toLocaleString()}`);
  console.log(`   Quality: ${baseline.quality}/100`);
  
  console.log('\n📈 CURRENT:');
  console.log(`   Duration: ${current.duration} min`);
  console.log(`   Tokens: ${current.tokens.toLocaleString()}`);
  console.log(`   Quality: ${current.quality}/100`);
  
  console.log('\n✨ IMPROVEMENT:');
  
  // Time
  if (improvement.timeSaving > 0) {
    console.log(`   ⏱️  Time: ${improvement.timeSaving}% faster ✅`);
  } else if (improvement.timeSaving < 0) {
    console.log(`   ⏱️  Time: ${Math.abs(improvement.timeSaving)}% slower ❌`);
  } else {
    console.log(`   ⏱️  Time: No change`);
  }
  
  // Tokens
  if (improvement.tokenSaving > 0) {
    console.log(`   💰 Tokens: ${improvement.tokenSaving}% reduction ✅`);
  } else if (improvement.tokenSaving < 0) {
    console.log(`   💰 Tokens: ${Math.abs(improvement.tokenSaving)}% increase ❌`);
  } else {
    console.log(`   💰 Tokens: No change`);
  }
  
  // Quality
  if (improvement.qualityChange > 0) {
    console.log(`   ✨ Quality: +${improvement.qualityChange} points ✅`);
  } else if (improvement.qualityChange < 0) {
    console.log(`   ✨ Quality: ${improvement.qualityChange} points ❌`);
  } else {
    console.log(`   ✨ Quality: No change`);
  }
  
  console.log('\n' + '='.repeat(60));
  
  // Overall assessment
  const isSuccess = improvement.timeSaving >= 50 || 
                    improvement.tokenSaving >= 50;
  const isQualityMaintained = improvement.qualityChange >= 0;
  
  if (isSuccess && isQualityMaintained) {
    console.log('\n🎉 OPTIMIZATION SUCCESS!');
    console.log('   Significant improvement with quality maintained.');
  } else if (isSuccess && !isQualityMaintained) {
    console.log('\n⚠️  OPTIMIZATION PARTIAL SUCCESS');
    console.log('   Good efficiency gains, but quality degraded.');
  } else if (!isSuccess && isQualityMaintained) {
    console.log('\n📊 OPTIMIZATION MARGINAL');
    console.log('   Minor improvement. Consider other optimizations.');
  } else {
    console.log('\n❌ OPTIMIZATION FAILED');
    console.log('   No significant improvement or quality degraded.');
  }
  
  console.log('\n');
}

// Main execution
async function main() {
  const { task, mode } = parseArgs();
  
  if (!task || !mode) {
    console.log('Usage:');
    console.log('  Baseline: node measure-efficiency.js --task "task-name" --baseline');
    console.log('  Compare:  node measure-efficiency.js --task "task-name" --compare');
    process.exit(1);
  }
  
  const metrics = loadMetrics();
  
  if (mode === 'baseline') {
    // Record baseline
    const baseline = await collectMetrics(task);
    
    if (!metrics[task]) {
      metrics[task] = {};
    }
    
    metrics[task].baseline = baseline;
    metrics[task].history = metrics[task].history || [];
    
    saveMetrics(metrics);
    
    console.log('\n✅ Baseline recorded for:', task);
    console.log(`   Duration: ${baseline.duration} min`);
    console.log(`   Tokens: ${baseline.tokens.toLocaleString()}`);
    console.log(`   Quality: ${baseline.quality}/100`);
    console.log('\nRun with --compare to measure improvement.\n');
    
  } else if (mode === 'compare') {
    // Compare with baseline
    if (!metrics[task] || !metrics[task].baseline) {
      console.log(`\n❌ No baseline found for task: ${task}`);
      console.log('Run with --baseline first.\n');
      process.exit(1);
    }
    
    const current = await collectMetrics(task);
    const baseline = metrics[task].baseline;
    
    // Store in history
    metrics[task].history.push(current);
    saveMetrics(metrics);
    
    // Display comparison
    displayComparison(task, baseline, current);
  }
}

// Run
main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
