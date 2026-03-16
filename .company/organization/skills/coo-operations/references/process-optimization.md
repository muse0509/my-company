# Process Optimization Guide

## Optimization Methodology

### The 80/20 Rule

**Focus on bottlenecks that consume 80% of resources.**

Don't optimize everything. Optimize what matters.

## Step-by-Step Process

### Step 1: Baseline Measurement

Before any optimization, measure current state:

**Metrics to capture:**
- Total execution time
- Time per step
- Token consumption per step
- Output quality score
- Error rate

**Example baseline:**
```
Task: VC Outreach Email Generation
- Research VC: 20 min (2000 tokens)
- Draft email: 15 min (5000 tokens)
- Review/edit: 10 min (1000 tokens)
Total: 45 min, 8000 tokens
```

### Step 2: Identify Bottleneck

Find the slowest or most expensive step:

**Time bottleneck:** Longest duration
**Cost bottleneck:** Highest token usage
**Quality bottleneck:** Most errors

**Example:**
```
- Research: 20 min (44%) ← TIME BOTTLENECK
- Draft: 15 min (33%)
- Review: 10 min (22%)
```

Focus optimization on the 44% step.

### Step 3: Root Cause Analysis

Ask "5 Whys" to find root cause:

**Example:**
```
Why is research slow?
→ We query multiple sources sequentially

Why sequential?
→ No parallel execution framework

Why no framework?
→ Not implemented yet

Solution: Implement parallel API calls
```

### Step 4: Select Optimization Pattern

Choose from these patterns:

1. **Parallelization** - Run independent tasks simultaneously
2. **Model cascading** - Use cheaper models for simple tasks
3. **Caching** - Store and reuse results
4. **Batch processing** - Process multiple items together
5. **Elimination** - Remove unnecessary steps
6. **Automation** - Replace manual steps with scripts

### Step 5: Implement Solution

**Parallelization example:**
```javascript
// Before: Sequential (60 sec)
const result1 = await fetchVC1(); // 20 sec
const result2 = await fetchVC2(); // 20 sec
const result3 = await fetchVC3(); // 20 sec

// After: Parallel (20 sec)
const [result1, result2, result3] = await Promise.all([
  fetchVC1(),
  fetchVC2(),
  fetchVC3()
]);

// Improvement: 3x faster
```

### Step 6: Validate Improvement

Measure after optimization:

**Compare metrics:**
- Time: % improvement
- Cost: % reduction
- Quality: Same or better
- Error rate: Same or lower

**Success criteria:**
- >50% improvement in bottleneck
- No quality degradation
- No new errors introduced

### Step 7: Document and Monitor

**Document:**
- What was optimized
- Why (bottleneck analysis)
- How (implementation)
- Results (metrics)

**Monitor:**
- Does improvement persist?
- Any side effects?
- New bottlenecks?

## Optimization Patterns

### Pattern 1: Parallelization

**When to use:**
- Multiple independent tasks
- No shared state
- Similar execution time

**Implementation:**
```javascript
// Parallel API calls
const results = await Promise.all([
  fetchData1(),
  fetchData2(),
  fetchData3()
]);

// Parallel subagent tasks
const subagents = [
  spawnSubagent('research-vc-1'),
  spawnSubagent('research-vc-2'),
  spawnSubagent('research-vc-3')
];
const outputs = await Promise.all(subagents);
```

**Expected improvement:** N× speedup for N parallel tasks

### Pattern 2: Model Cascading

**When to use:**
- Mix of simple and complex tasks
- Cost is a concern
- Quality requirements vary

**Implementation:**
```javascript
// Route by complexity
function selectModel(taskComplexity) {
  if (taskComplexity === 'simple') return 'haiku';
  if (taskComplexity === 'medium') return 'sonnet';
  return 'opus';
}

// Use cheap model for bulk, expensive for critical
const bulkResults = await callHaiku(simpleTasks); // Cheap
const criticalResult = await callOpus(complexTask); // Expensive
```

**Expected improvement:** 50-70% cost reduction

### Pattern 3: Caching

**When to use:**
- Repeated queries
- Static or slow-changing data
- API rate limits

**Implementation:**
```javascript
const cache = new Map();

async function cachedFetch(url, ttl = 3600) {
  const cached = cache.get(url);
  if (cached && Date.now() - cached.timestamp < ttl * 1000) {
    return cached.data; // Cache hit
  }
  
  const data = await fetch(url);
  cache.set(url, { data, timestamp: Date.now() });
  return data;
}
```

**Expected improvement:** 90%+ cost reduction for repeated calls

### Pattern 4: Batch Processing

**When to use:**
- Multiple similar items
- API supports batch requests
- Context can be shared

**Implementation:**
```javascript
// Before: One by one (10× overhead)
for (const item of items) {
  await processItem(item);
}

// After: Batch (1× overhead)
await processBatch(items);
```

**Expected improvement:** 50-80% cost reduction

### Pattern 5: Elimination

**When to use:**
- Step doesn't add value
- Output not used
- Redundant with other steps

**Implementation:**
```
Before:
1. Fetch data
2. Parse data
3. Validate data
4. Transform data
5. Format data ← Not used by next step (ELIMINATE)
6. Process data

After:
1. Fetch data
2. Parse data
3. Validate data
4. Transform data
5. Process data

Improvement: 20% faster
```

### Pattern 6: Automation

**When to use:**
- Manual step repeats >2 times
- Error-prone manual work
- Simple rule-based logic

**Implementation:**
```javascript
// Before: Manual email sending (5 min per email)
// After: Automated with template (10 sec per email)

const template = loadTemplate('vc-outreach');
const email = template.render({ vc: vcData });
await sendEmail(email);

// Improvement: 30× faster
```

## Task Decomposition

### Breaking Down Complex Tasks

**Example: VC Fundraising Campaign**

**Level 1: Campaign**
- Total: 20 hours
- Goal: Reach 50 VCs

**Level 2: Per-VC Workflow**
- Research VC: 20 min
- Draft email: 15 min
- Send + follow up: 5 min
- Total per VC: 40 min

**Level 3: Bottleneck Analysis**
- Research: 50% of time ← OPTIMIZE THIS
- Draft: 37.5%
- Send: 12.5%

**Level 4: Optimization**
- Parallelize research (3× faster)
- Use Haiku for drafts (50% cheaper)
- Automate sending (10× faster)

**Result:**
- Before: 40 min per VC
- After: 15 min per VC
- Improvement: 2.7× faster

## Continuous Improvement

### Weekly Review

**Questions to ask:**
1. What was the longest task this week?
2. What consumed the most tokens?
3. What quality issues occurred?
4. What can we optimize next week?

**Action items:**
- Identify top 3 bottlenecks
- Assign optimization priority
- Implement one optimization per week

### Monthly Analysis

**Metrics to track:**
- Average task duration (trend)
- Token cost per department (trend)
- Quality scores (trend)
- Number of optimizations (count)

**Goal:** Visible downward trend in time and cost.

### Quarterly Targets

**Set ambitious goals:**
- 2× faster execution
- 50% token cost reduction
- Maintain or improve quality

**If target missed:**
- Analyze: Why didn't we hit target?
- Adjust: What needs to change?
- Plan: Next quarter's focus

## Anti-Patterns

### ❌ Premature Optimization

Don't optimize before measuring.

**Example:**
```
❌ "Let's parallelize everything!"
   (Without knowing what's slow)

✅ "Let's measure, find bottleneck, then optimize"
   (Data-driven approach)
```

### ❌ Optimizing Non-Bottlenecks

Don't waste time on fast steps.

**Example:**
```
❌ Optimize 5-second step (saves 2 seconds)
   Ignore 50-minute step

✅ Optimize 50-minute step (saves 25 minutes)
```

### ❌ Sacrificing Quality

Don't trade quality for speed.

**Example:**
```
❌ Use Haiku for complex reasoning (fast but wrong)
✅ Use Opus for complex reasoning (slower but correct)
```

### ❌ No Validation

Don't assume optimization worked.

**Example:**
```
❌ Implement optimization, move on
✅ Measure before/after, validate improvement
```

## Tools and Scripts

### Measurement Script

Use `measure-efficiency.js`:

```bash
# Baseline measurement
node scripts/measure-efficiency.js --task "vc-outreach" --baseline

# After optimization
node scripts/measure-efficiency.js --task "vc-outreach" --compare

# Output: Time/cost/quality comparison
```

### Monitoring Dashboard

Track in real-time:
- Active tasks and duration
- Token consumption rate
- Quality score trends
- Bottleneck alerts

## Case Studies

### Case Study 1: VC Research Parallelization

**Before:**
- Sequential research: 3 VCs × 20 min = 60 min
- Token cost: 6000 tokens

**After:**
- Parallel research: 3 VCs simultaneously = 20 min
- Token cost: 6000 tokens (same)

**Result:**
- Time: 3× faster
- Cost: No change
- Quality: Same

### Case Study 2: Marketing Post Generation

**Before:**
- Sonnet for all posts: 10 posts × 5000 tokens = 50K tokens
- Time: 10 posts × 5 min = 50 min

**After:**
- Haiku for drafts: 10 posts × 1000 tokens = 10K tokens
- Sonnet for review: 2 posts × 5000 tokens = 10K tokens
- Total: 20K tokens
- Time: 30 min (batch processing)

**Result:**
- Cost: 60% reduction
- Time: 40% faster
- Quality: Same (review step maintains quality)

### Case Study 3: Research Report Generation

**Before:**
- Fetch 10 sources sequentially: 50 min
- Sonnet for analysis: 20K tokens
- Total: 50 min, 20K tokens

**After:**
- Parallel fetch: 10 sources simultaneously: 10 min
- Cached results (1h TTL): 90% cache hit rate
- Haiku for simple analysis, Sonnet for complex
- Total: 12 min, 8K tokens (with cache)

**Result:**
- Time: 4× faster
- Cost: 60% reduction (with cache)
- Quality: Maintained

## Summary

**Optimization workflow:**
1. Measure baseline
2. Identify bottleneck (80/20 rule)
3. Apply optimization pattern
4. Validate improvement
5. Document and monitor

**Key patterns:**
- Parallelization (speed)
- Model cascading (cost)
- Caching (repeated queries)
- Batch processing (similar items)
- Elimination (unnecessary steps)
- Automation (manual work)

**Success metrics:**
- 50%+ improvement in bottleneck
- No quality degradation
- Documented results
- Continuous monitoring
