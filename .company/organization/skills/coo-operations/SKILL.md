---
name: coo-operations
description: Operational efficiency framework for AI teams. Use when optimizing processes, reducing token costs, improving execution speed, or implementing parallel workflows. Includes token optimization strategies, parallel execution patterns, and efficiency measurement tools.
---

# COO Operations Framework

## Quick Start

Every operation is measured by:
- **Time:** How long does it take?
- **Cost:** How many tokens consumed?
- **Quality:** Does output meet requirements?

**Goal:** 2x efficiency every quarter.

## Core Principle

**Find the 20% that yields 80% of results.**

Don't optimize everything. Optimize bottlenecks.

## Efficiency Framework

### 1. Measure First

Before optimizing, measure:

```
1. Baseline time
2. Baseline token cost
3. Baseline quality
4. Identify bottleneck (slowest step)
```

Use [measure-efficiency.js](scripts/measure-efficiency.js):

```bash
node scripts/measure-efficiency.js --task "your-task" --baseline
```

### 2. Identify Bottleneck

**80/20 Rule:** Focus on the slowest step.

```
Task breakdown:
- Step A: 5 min (10%)
- Step B: 40 min (80%) ← OPTIMIZE THIS
- Step C: 5 min (10%)
```

### 3. Optimize

Apply optimization patterns from [process-optimization.md](references/process-optimization.md):

- Can it run in parallel? (See [parallel-execution.md](references/parallel-execution.md))
- Can we use cheaper model? (See [token-optimization.md](references/token-optimization.md))
- Can we cache results?
- Can we skip unnecessary steps?

### 4. Measure Again

After optimization:

```bash
node scripts/measure-efficiency.js --task "your-task" --compare
```

**Success:** >50% improvement in bottleneck step.

## Common Optimization Patterns

### Pattern 1: Model Cascading

Use cheap models for simple tasks, expensive models for complex ones.

**Example:**
```
❌ Before: Claude Sonnet for all tasks (expensive)
✅ After: 
  - Haiku for execution (70% of tasks)
  - Sonnet for planning (20% of tasks)
  - Opus for complex reasoning (10% of tasks)

Result: 60% token cost reduction
```

See [token-optimization.md](references/token-optimization.md) for model selection guide.

### Pattern 2: Parallelization

Run independent tasks simultaneously.

**Example:**
```
❌ Before: Sequential (60 min total)
  - Task A: 20 min
  - Task B: 20 min
  - Task C: 20 min

✅ After: Parallel (20 min total)
  - Task A, B, C: Run simultaneously
  
Result: 3x speedup
```

See [parallel-execution.md](references/parallel-execution.md) for implementation patterns.

### Pattern 3: Caching

Store and reuse results.

**Example:**
```
❌ Before: Regenerate every time
  - Query API: 1000 tokens
  - Process: 500 tokens
  - Total per call: 1500 tokens

✅ After: Cache for 1 hour
  - First call: 1500 tokens
  - Subsequent calls: 0 tokens
  
Result: 90% token savings (if called 10x/hour)
```

### Pattern 4: Batch Processing

Process multiple items in one call.

**Example:**
```
❌ Before: Process one by one
  - 10 items × 100 tokens = 1000 tokens

✅ After: Batch process
  - 10 items in one call = 300 tokens
  
Result: 70% token savings
```

## Department Efficiency Targets

| Department | Time Target | Token Target | Frequency |
|------------|-------------|--------------|-----------|
| Fundraising | <2h per VC | <50K tokens | Daily |
| Marketing | <1h per post | <10K tokens | Daily |
| Research | <4h per report | <100K tokens | Weekly |
| Product | <30min per task | <20K tokens | Daily |

## Optimization Workflow

### Step 1: Identify Inefficiency

Monitor these signals:
- Tasks taking >2x expected time
- Token usage >2x budget
- Repeated work
- Manual steps

### Step 2: Root Cause Analysis

Ask:
- Why is this slow? (Find bottleneck)
- Why is this expensive? (Check model usage)
- Can this be avoided? (Question necessity)
- Can this be automated? (Remove manual steps)

### Step 3: Implement Fix

Apply optimization patterns:
1. Parallelize if possible
2. Use cheaper model if suitable
3. Cache if reusable
4. Batch if repeated

### Step 4: Validate

Measure improvement:
- Time: % faster
- Cost: % cheaper
- Quality: Same or better

**Success criteria:** >50% improvement with no quality loss.

## Token Optimization Strategy

See [token-optimization.md](references/token-optimization.md) for details.

**Quick wins:**
1. Use Haiku for execution layer
2. Use Sonnet for planning layer
3. Only use Opus for complex reasoning
4. Cache API responses
5. Batch similar requests

**Model selection guide:**
- Haiku: Execution, simple tasks, API calls
- Sonnet: Planning, coordination, analysis
- Opus: Complex reasoning, strategy, edge cases

## Parallel Execution

See [parallel-execution.md](references/parallel-execution.md) for implementation.

**When to parallelize:**
- Independent tasks
- No shared state
- Similar execution time

**When NOT to parallelize:**
- Sequential dependencies
- Shared resource conflicts
- One task much slower (Amdahl's law)

## Process Improvement

See [process-optimization.md](references/process-optimization.md) for methodology.

**Continuous improvement cycle:**
1. Measure → 2. Analyze → 3. Optimize → 4. Validate → Repeat

**Weekly review:**
- What took longest this week?
- What cost most tokens?
- What can we improve?

**Quarterly targets:**
- 2x faster execution
- 50% token cost reduction
- Maintain or improve quality

## Escalation Criteria

### Report to CEO (Alex) when:
- Process bottleneck identified (>4h delay)
- Token budget overrun (>2x expected)
- Quality degradation detected
- New optimization opportunity (>50% potential gain)

### Report to Muse (Founder) when:
- Require external tools/services (>$1K/month)
- Process change affects strategy
- Major efficiency breakthrough (>10x improvement)

## Tools

- **Measurement:** [measure-efficiency.js](scripts/measure-efficiency.js)
- **Monitoring:** Token usage dashboard
- **Analysis:** Task breakdown reports
- **Optimization:** Parallel execution framework

## Anti-Patterns

❌ **Don't:**
- Optimize without measuring first
- Parallelize dependent tasks
- Use expensive models for simple tasks
- Sacrifice quality for speed
- Ignore bottlenecks

✅ **Do:**
- Measure → Optimize → Validate
- Focus on bottlenecks (80/20)
- Use appropriate model for each task
- Maintain quality standards
- Document improvements

## Success Metrics

Track weekly:
- Average task completion time
- Average token cost per task
- Output quality score
- Number of optimizations implemented
- Cumulative efficiency gain

**Target:** 2x efficiency improvement per quarter.
