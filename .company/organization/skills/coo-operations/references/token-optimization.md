# Token Optimization Strategy

## Model Selection Framework

**Choose the right model for each task.**

Don't use Opus for everything. Don't use Haiku for complex reasoning.

## Model Tiers

### Haiku - Execution Layer
**Cost:** ~$0.25 per 1M input tokens
**Use for:**
- API calls
- Data extraction
- Simple formatting
- Execution of clear instructions
- Batch processing

**Example tasks:**
- Parse JSON response
- Format email from template
- Extract data from webpage
- Run predefined script

**When NOT to use:**
- Complex reasoning
- Strategic planning
- Ambiguous requirements
- Novel problems

### Sonnet - Planning Layer
**Cost:** ~$3 per 1M input tokens
**Use for:**
- Task coordination
- Analysis
- Planning
- Decision-making
- Multi-step workflows

**Example tasks:**
- Plan VC outreach campaign
- Analyze market trends
- Coordinate between departments
- Review and improve content

**When NOT to use:**
- Simple execution (use Haiku)
- Extremely complex reasoning (use Opus)

### Opus - Reasoning Layer
**Cost:** ~$15 per 1M input tokens
**Use for:**
- Complex strategic decisions
- Novel problem-solving
- High-stakes planning
- Deep analysis
- Creative work requiring nuance

**Example tasks:**
- Strategic pivot decisions
- Complex technical architecture
- Fundraising strategy
- Crisis management

**When NOT to use:**
- Routine tasks (use Haiku)
- Standard workflows (use Sonnet)

## Task Routing Decision Tree

```
Is the task routine/simple?
├─ Yes → Use Haiku
│   Examples: Format data, API calls, templates
│
└─ No → Does it require strategic thinking?
    ├─ Yes → Is it high-stakes or novel?
    │   ├─ Yes → Use Opus
    │   │   Examples: Strategic pivots, crisis
    │   │
    │   └─ No → Use Sonnet
    │       Examples: Planning, coordination
    │
    └─ No → Use Haiku
        Examples: Execution tasks
```

## Optimization Patterns

### Pattern 1: Two-Tier Execution

**Split planning and execution.**

```javascript
// Tier 1: Sonnet plans
const plan = await sonnet.plan({
  task: "Research 10 VCs and draft emails"
});

// Tier 2: Haiku executes each step
const results = await Promise.all(
  plan.steps.map(step => haiku.execute(step))
);

// Result: 80% cost reduction vs. all-Sonnet
```

### Pattern 2: Smart Routing

**Route by complexity.**

```javascript
function routeTask(task) {
  const complexity = analyzeComplexity(task);
  
  if (complexity === 'simple') {
    return executeWithHaiku(task);
  } else if (complexity === 'medium') {
    return executeWithSonnet(task);
  } else {
    return executeWithOpus(task);
  }
}
```

### Pattern 3: Batch Processing

**Process multiple items in one call.**

```javascript
// ❌ Bad: 10 separate calls
for (const vc of vcs) {
  await haiku.draftEmail(vc); // 10× overhead
}

// ✅ Good: One batch call
await haiku.draftEmails(vcs); // 1× overhead

// Savings: ~60% token reduction
```

### Pattern 4: Progressive Enhancement

**Start cheap, upgrade if needed.**

```javascript
// Try Haiku first
let result = await haiku.solve(problem);

// If quality insufficient, upgrade
if (qualityScore(result) < threshold) {
  result = await sonnet.solve(problem);
}

// If still insufficient, use Opus
if (qualityScore(result) < threshold) {
  result = await opus.solve(problem);
}

// Result: Use cheapest model that works
```

### Pattern 5: Caching

**Store and reuse expensive results.**

```javascript
const cache = new Map();

async function cachedQuery(query, model = 'sonnet', ttl = 3600) {
  const key = `${model}:${query}`;
  const cached = cache.get(key);
  
  if (cached && Date.now() - cached.time < ttl * 1000) {
    return cached.result; // Free!
  }
  
  const result = await callModel(model, query);
  cache.set(key, { result, time: Date.now() });
  return result;
}

// First call: Pay tokens
// Subsequent calls (within 1h): Free
```

## Cost Analysis

### Example: VC Outreach Campaign

**All-Opus approach:**
```
50 VCs × 10K tokens × $15/1M = $7.50
```

**Optimized approach:**
```
Planning (Sonnet): 5K tokens × $3/1M = $0.015
Execution (Haiku): 50 × 1K tokens × $0.25/1M = $0.0125
Total: $0.0275

Savings: 99.6%
```

### Example: Daily Marketing

**All-Sonnet approach:**
```
10 posts × 5K tokens × $3/1M = $0.15/day
Monthly: $4.50
```

**Optimized approach:**
```
Planning (Sonnet): 2K tokens × $3/1M = $0.006
Drafts (Haiku): 10 × 1K tokens × $0.25/1M = $0.0025
Review (Sonnet): 2K tokens × $3/1M = $0.006
Total: $0.0145/day
Monthly: $0.44

Savings: 90%
```

## Token Budget Allocation

### Department Budgets

| Department | Daily Budget | Model Mix |
|------------|-------------|-----------|
| Fundraising | 100K tokens | 70% Haiku, 20% Sonnet, 10% Opus |
| Marketing | 50K tokens | 80% Haiku, 15% Sonnet, 5% Opus |
| Research | 200K tokens | 50% Haiku, 40% Sonnet, 10% Opus |
| Product | 50K tokens | 60% Haiku, 30% Sonnet, 10% Opus |

### Budget Monitoring

**Alert when:**
- Department exceeds daily budget
- Opus usage >20% (should be rare)
- Haiku usage <50% (not optimized enough)

## Optimization Checklist

Before running any task:

- [ ] Can this use Haiku instead of Sonnet?
- [ ] Can this use Sonnet instead of Opus?
- [ ] Can this be batched with other tasks?
- [ ] Can results be cached?
- [ ] Can we use a template instead?

## Common Mistakes

### ❌ Mistake 1: Using Opus for Everything

```javascript
// Bad: Expensive for simple task
await opus.formatEmail(template, data); // Costs $15/1M

// Good: Use cheap model
await haiku.formatEmail(template, data); // Costs $0.25/1M

// Savings: 98%
```

### ❌ Mistake 2: Not Batching

```javascript
// Bad: 10 separate calls
for (const item of items) {
  await sonnet.process(item); // 10× overhead
}

// Good: Batch process
await sonnet.processBatch(items); // 1× overhead

// Savings: ~60%
```

### ❌ Mistake 3: No Caching

```javascript
// Bad: Repeated queries
await sonnet.query("What is Solana?"); // First time
await sonnet.query("What is Solana?"); // Duplicate!

// Good: Cache results
const result = await cachedQuery("What is Solana?");
// Second call is free

// Savings: 100% on duplicates
```

### ❌ Mistake 4: Wrong Model for Task

```javascript
// Bad: Haiku for complex reasoning
await haiku.strategize(); // Will fail or produce poor quality

// Good: Use appropriate model
await opus.strategize(); // Correct model for complexity

// Result: Quality maintained, tokens justified
```

## Measurement and Tracking

### Track These Metrics

**Per task:**
- Model used
- Tokens consumed
- Quality score
- Cost per task

**Per department:**
- Daily token usage
- Model distribution
- Cost trend
- Efficiency ratio (quality/cost)

**Overall:**
- Total monthly cost
- Cost per department
- Optimization opportunities
- ROI of optimizations

### Monitoring Dashboard

**Red flags:**
- Opus usage >20%
- Haiku usage <50%
- Daily budget exceeded
- Quality degradation

**Green flags:**
- Haiku usage >60%
- Opus usage <10%
- Cost trending down
- Quality maintained

## Advanced Techniques

### Technique 1: Context Sharing

**Share context across multiple calls.**

```javascript
// Build context once
const context = await sonnet.buildContext(sources);

// Reuse for multiple queries (cheaper)
const answers = await Promise.all([
  haiku.answer(question1, context),
  haiku.answer(question2, context),
  haiku.answer(question3, context)
]);

// Savings: Build context once, not 3×
```

### Technique 2: Incremental Refinement

**Start rough, refine only if needed.**

```javascript
// Draft with Haiku (cheap)
let draft = await haiku.draft(content);

// Check quality
if (qualityScore(draft) < 0.7) {
  // Refine with Sonnet
  draft = await sonnet.improve(draft);
}

// Result: Most pass with Haiku, only poor ones use Sonnet
```

### Technique 3: Template Extraction

**Extract patterns to templates.**

```javascript
// First time: Use Sonnet to create
const email = await sonnet.composeEmail(vcData);

// Extract template
const template = extractTemplate(email);

// Future uses: Haiku with template (10× cheaper)
const futureEmail = await haiku.fillTemplate(template, newVcData);
```

### Technique 4: Quality-Cost Trade-off

**Define acceptable quality threshold.**

```javascript
// For non-critical tasks, accept 80% quality
const result = await haiku.process(task); // Fast & cheap

// For critical tasks, require 95% quality
const result = await opus.process(task); // Slow & expensive
```

## ROI Calculation

### Calculate Optimization ROI

**Example: Implement caching**

**Cost to implement:**
- Development time: 2 hours
- Testing: 1 hour
- Total: 3 hours × $50/hour = $150

**Savings:**
- Before: 1M tokens/month × $3/1M = $3
- After: 200K tokens/month × $3/1M = $0.60
- Monthly savings: $2.40
- Payback period: 62 months

**Verdict:** Not worth it for this use case.

**Example: Model cascading**

**Cost to implement:**
- Development time: 4 hours
- Testing: 2 hours
- Total: 6 hours × $50/hour = $300

**Savings:**
- Before: 10M tokens/month × $3/1M = $30
- After: 3M tokens/month × ($0.25 Haiku + $3 Sonnet mix) = $5
- Monthly savings: $25
- Payback period: 12 months

**Verdict:** Worth it.

## Quick Reference

### Model Selection Cheat Sheet

| Task Type | Model | Why |
|-----------|-------|-----|
| API call | Haiku | Simple execution |
| Data extraction | Haiku | Clear pattern |
| Formatting | Haiku | Template-based |
| Coordination | Sonnet | Multi-step planning |
| Analysis | Sonnet | Reasoning required |
| Strategy | Opus | Complex decisions |
| Crisis | Opus | High-stakes |

### Cost Comparison

| Model | Cost/1M Input | Cost/1M Output | Use Case |
|-------|---------------|----------------|----------|
| Haiku | $0.25 | $1.25 | Execution |
| Sonnet | $3.00 | $15.00 | Planning |
| Opus | $15.00 | $75.00 | Strategy |

### Optimization Quick Wins

1. **Replace Opus with Sonnet** where possible → 80% savings
2. **Replace Sonnet with Haiku** where possible → 92% savings
3. **Batch similar requests** → 50-70% savings
4. **Cache repeated queries** → 90%+ savings
5. **Use templates** → 80%+ savings

## Summary

**Token optimization = Right model for right task**

- Haiku: Execution (70% of tasks)
- Sonnet: Planning (20% of tasks)
- Opus: Strategy (10% of tasks)

**Key patterns:**
- Two-tier execution (plan with Sonnet, execute with Haiku)
- Smart routing (complexity-based)
- Batch processing (multiple items together)
- Caching (reuse results)
- Progressive enhancement (upgrade if needed)

**Target:** 60%+ token cost reduction with no quality loss.
