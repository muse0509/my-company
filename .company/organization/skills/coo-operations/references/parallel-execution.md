# Parallel Execution Patterns

## Why Parallelize?

**Sequential execution is slow. Parallel execution is fast.**

When tasks are independent, run them simultaneously.

## Core Principle

**If tasks don't depend on each other, they should run in parallel.**

## When to Parallelize

### ✅ Good Candidates

- Multiple API calls
- Multiple file reads/writes
- Multiple subagent tasks
- Multiple data processing jobs
- Batch operations

### ❌ Bad Candidates

- Sequential dependencies (Task B needs output of Task A)
- Shared state conflicts (Both modify same data)
- One task much slower than others (Amdahl's Law)

## Parallel Patterns

### Pattern 1: Promise.all()

**Use for:** Multiple independent async operations

```javascript
// ❌ Sequential (60 sec)
const vc1 = await fetchVC('a16z');      // 20 sec
const vc2 = await fetchVC('paradigm');  // 20 sec
const vc3 = await fetchVC('polychain'); // 20 sec

// ✅ Parallel (20 sec)
const [vc1, vc2, vc3] = await Promise.all([
  fetchVC('a16z'),
  fetchVC('paradigm'),
  fetchVC('polychain')
]);

// Result: 3× faster
```

**When to use:**
- All tasks must complete
- Order doesn't matter
- Want all results

### Pattern 2: Promise.allSettled()

**Use for:** Independent operations where some may fail

```javascript
// All tasks run, even if some fail
const results = await Promise.allSettled([
  fetchVC('vc1'),  // Succeeds
  fetchVC('vc2'),  // Fails
  fetchVC('vc3')   // Succeeds
]);

// Check results
results.forEach((result, i) => {
  if (result.status === 'fulfilled') {
    console.log(`VC ${i} data:`, result.value);
  } else {
    console.log(`VC ${i} failed:`, result.reason);
  }
});
```

**When to use:**
- Some tasks may fail
- Want to continue despite failures
- Need to handle individual errors

### Pattern 3: Promise.race()

**Use for:** First result wins

```javascript
// Get fastest response
const fastestVC = await Promise.race([
  fetchFromAPI1('a16z'),
  fetchFromAPI2('a16z'),
  fetchFromAPI3('a16z')
]);

// Result: Whichever API responds first
```

**When to use:**
- Multiple data sources
- Want fastest response
- Don't need all results

### Pattern 4: Parallel Subagents

**Use for:** Complex independent tasks

```javascript
// Spawn multiple subagents
const tasks = [
  { id: 'research-vc-1', label: 'research-a16z' },
  { id: 'research-vc-2', label: 'research-paradigm' },
  { id: 'research-vc-3', label: 'research-polychain' }
];

// Results auto-announce when complete
tasks.forEach(task => spawnSubagent(task.label, task.id));

// No need to poll - results push back automatically
```

**When to use:**
- Complex tasks requiring full agent capabilities
- Tasks that take >5 minutes
- Want to avoid blocking main session

### Pattern 5: Batch with Concurrency Limit

**Use for:** Parallelizing many tasks without overwhelming system

```javascript
async function batchWithLimit(tasks, limit = 5) {
  const results = [];
  
  for (let i = 0; i < tasks.length; i += limit) {
    const batch = tasks.slice(i, i + limit);
    const batchResults = await Promise.all(
      batch.map(task => executeTask(task))
    );
    results.push(...batchResults);
  }
  
  return results;
}

// Process 50 VCs, 5 at a time
const vcData = await batchWithLimit(vcs, 5);
```

**When to use:**
- Many tasks (>10)
- Rate limits or resource constraints
- Want to control load

## Implementation Examples

### Example 1: VC Research Parallelization

```javascript
// Sequential: 60 min
async function researchVCsSequential(vcs) {
  const results = [];
  for (const vc of vcs) {
    const data = await researchVC(vc); // 20 min each
    results.push(data);
  }
  return results; // 3 × 20 = 60 min
}

// Parallel: 20 min
async function researchVCsParallel(vcs) {
  return await Promise.all(
    vcs.map(vc => researchVC(vc))
  ); // All 3 simultaneously = 20 min
}

// Improvement: 3× faster
```

### Example 2: Multi-Source Data Fetching

```javascript
// Fetch from multiple sources in parallel
async function fetchVCData(vcName) {
  const [crunchbase, linkedin, website, twitter] = await Promise.all([
    fetchCrunchbase(vcName),
    fetchLinkedin(vcName),
    fetchWebsite(vcName),
    fetchTwitter(vcName)
  ]);
  
  return {
    crunchbase,
    linkedin,
    website,
    twitter
  };
}

// All 4 API calls run simultaneously
```

### Example 3: Parallel Email Generation

```javascript
// Generate 10 emails in parallel
async function generateEmails(vcs) {
  return await Promise.all(
    vcs.map(async (vc) => {
      const research = await researchVC(vc);
      const email = await draftEmail(research);
      return { vc, email };
    })
  );
}

// 10 emails generated simultaneously
```

### Example 4: Parallel with Error Handling

```javascript
async function parallelWithRetry(tasks, maxRetries = 3) {
  const results = await Promise.allSettled(
    tasks.map(task => executeWithRetry(task, maxRetries))
  );
  
  const succeeded = results
    .filter(r => r.status === 'fulfilled')
    .map(r => r.value);
  
  const failed = results
    .filter(r => r.status === 'rejected')
    .map(r => r.reason);
  
  return { succeeded, failed };
}

async function executeWithRetry(task, maxRetries) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await executeTask(task);
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await sleep(1000 * Math.pow(2, i)); // Exponential backoff
    }
  }
}
```

## Performance Analysis

### Speedup Calculation

**Amdahl's Law:** Speedup is limited by serial portion

```
Speedup = 1 / (S + P/N)

Where:
  S = Serial portion (cannot be parallelized)
  P = Parallel portion
  N = Number of parallel workers
```

**Example:**
```
Task breakdown:
- Setup: 10% (serial)
- Processing: 90% (parallel)
- N = 3 workers

Speedup = 1 / (0.1 + 0.9/3)
        = 1 / (0.1 + 0.3)
        = 1 / 0.4
        = 2.5×
```

### Real-World Example: VC Outreach

```
Sequential:
- Plan campaign: 10 min (serial)
- Research 10 VCs: 10 × 20 min = 200 min (parallelizable)
- Total: 210 min

Parallel (10 workers):
- Plan campaign: 10 min (serial)
- Research 10 VCs: 20 min (parallel)
- Total: 30 min

Speedup: 210/30 = 7×
```

## Best Practices

### 1. Identify Independence

**Before parallelizing, ensure tasks are independent:**

```javascript
// ❌ Not independent (B needs A's output)
const a = await taskA();
const b = await taskB(a); // Depends on A
// Cannot parallelize

// ✅ Independent
const [a, b] = await Promise.all([
  taskA(),
  taskB()
]); // No dependencies
// Can parallelize
```

### 2. Handle Errors Gracefully

```javascript
// Use Promise.allSettled for partial failures
const results = await Promise.allSettled(tasks);

// Separate success and failure
const succeeded = results
  .filter(r => r.status === 'fulfilled')
  .map(r => r.value);

const failed = results
  .filter(r => r.status === 'rejected')
  .map((r, i) => ({ index: i, error: r.reason }));

// Report on failures
if (failed.length > 0) {
  console.log(`${failed.length} tasks failed:`, failed);
}
```

### 3. Control Concurrency

```javascript
// Don't launch unlimited parallel tasks
// ❌ Bad: 1000 simultaneous requests
await Promise.all(
  thousandVCs.map(vc => fetchVC(vc))
); // May overwhelm API

// ✅ Good: Batch with limit
await batchWithLimit(thousandVCs, 10); // 10 at a time
```

### 4. Monitor Progress

```javascript
async function parallelWithProgress(tasks) {
  let completed = 0;
  
  const promises = tasks.map(async (task, i) => {
    const result = await executeTask(task);
    completed++;
    console.log(`Progress: ${completed}/${tasks.length}`);
    return result;
  });
  
  return await Promise.all(promises);
}
```

### 5. Timeout Protection

```javascript
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms)
    )
  ]);
}

// Use with timeout
const results = await Promise.all(
  tasks.map(task => withTimeout(executeTask(task), 30000))
);
```

## Anti-Patterns

### ❌ Anti-Pattern 1: Parallelizing Dependent Tasks

```javascript
// Wrong: Task B depends on Task A
const [a, b] = await Promise.all([
  taskA(),
  taskB(a) // 'a' is undefined!
]);

// Correct: Sequential for dependent tasks
const a = await taskA();
const b = await taskB(a);
```

### ❌ Anti-Pattern 2: No Error Handling

```javascript
// Wrong: One failure kills all
const results = await Promise.all([
  task1(), // Succeeds
  task2(), // Fails ← Throws error
  task3()  // Never runs
]);

// Correct: Handle failures
const results = await Promise.allSettled([
  task1(),
  task2(),
  task3()
]);
```

### ❌ Anti-Pattern 3: Ignoring Rate Limits

```javascript
// Wrong: 1000 simultaneous API calls
await Promise.all(
  items.map(item => callAPI(item))
); // API rate limit exceeded!

// Correct: Batch with concurrency limit
await batchWithLimit(items, 10);
```

### ❌ Anti-Pattern 4: Not Measuring

```javascript
// Wrong: Assume parallelization helps
await Promise.all(tasks); // Did this actually help?

// Correct: Measure before and after
const start = Date.now();
const results = await Promise.all(tasks);
const duration = Date.now() - start;
console.log(`Completed in ${duration}ms`);
```

## Decision Framework

### Should I Parallelize?

**Ask these questions:**

1. **Are tasks independent?**
   - Yes → Continue
   - No → Keep sequential

2. **Is parallel overhead worth it?**
   - Tasks >1 second → Yes
   - Tasks <100ms → Probably not

3. **Are there resource constraints?**
   - Rate limits? → Use concurrency limit
   - Memory limits? → Use streaming/batching

4. **Will it actually help?**
   - Measure speedup
   - If <1.5× → Not worth complexity

## Subagent Parallel Execution

### When to Use Subagents

**Use parallel subagents when:**
- Tasks take >5 minutes each
- Tasks are complex (require full agent reasoning)
- Want to avoid blocking main session
- Need independent execution contexts

**Example:**
```javascript
// Spawn 3 research subagents
const subagents = [
  'research-competitor-1',
  'research-competitor-2',
  'research-competitor-3'
];

subagents.forEach(label => {
  spawnSubagent(label, {
    task: `Research competitor ${label}`
  });
});

// Results auto-announce when complete
// No need to poll or wait
```

### Subagent Best Practices

1. **Clear labels** - Use descriptive names
2. **No polling** - Trust push-based completion
3. **Independent tasks** - No shared state
4. **Appropriate complexity** - Worth the overhead

## Performance Metrics

### Track These Metrics

**Per parallel execution:**
- Total time (parallel)
- Sum of individual times (serial equivalent)
- Speedup ratio (serial/parallel)
- Number of workers
- Failure rate

**Example tracking:**
```javascript
const metrics = {
  task: 'vc-research',
  parallel_time: 20, // minutes
  serial_time: 60,   // minutes
  speedup: 3.0,
  workers: 3,
  failures: 0
};
```

### Expected Speedup

| Workers | Ideal Speedup | Realistic Speedup |
|---------|---------------|-------------------|
| 2 | 2× | 1.8× |
| 3 | 3× | 2.5× |
| 5 | 5× | 3.5× |
| 10 | 10× | 5× |

(Overhead reduces gains)

## Summary

**Parallelize when:**
- Tasks are independent
- Tasks take >1 second each
- No shared state conflicts
- Resource limits allow

**Use:**
- `Promise.all()` for all-must-succeed
- `Promise.allSettled()` for partial-failure-ok
- `Promise.race()` for first-wins
- Subagents for complex long tasks
- Concurrency limits for rate limits

**Don't:**
- Parallelize dependent tasks
- Ignore error handling
- Overwhelm APIs
- Forget to measure

**Target:** 2-5× speedup for parallelizable workflows.
