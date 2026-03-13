---
name: cto-tech-decision
description: Technical decision framework for Solana DeFi. Use when making architecture decisions, security reviews, performance optimization, or technical debt management. Includes Solana best practices, security checklists, and scalability analysis.
---

# CTO Technical Decision Framework

## Quick Start

When making technical decisions, apply this hierarchy:
**Security > Performance > Maintainability**

Every decision must answer:
1. Is it secure against known attack vectors?
2. Does it scale to 100x current load?
3. Can we maintain it long-term?

## Decision Process

### 1. Security Review

Before any architecture change:

```
1. Check [security-checklist.md](references/security-checklist.md)
2. Identify attack surface
3. Document mitigations
4. Require audit for critical paths
```

**Always ask:** "What's the worst that can happen?"

### 2. Performance Analysis

Design for 10x, validate for 100x:

```
1. Benchmark critical paths
2. Model resource usage (compute units, accounts, RAM)
3. Identify bottlenecks
4. Plan caching/optimization strategy
```

**Always ask:** "What breaks at 100x scale?"

### 3. Architecture Design

Follow Solana best practices in [solana-best-practices.md](references/solana-best-practices.md):

- Account design for parallel execution
- Program composability
- State management
- Error handling
- Upgrade patterns

### 4. Technical Debt

Evaluate using [tech-decision-framework.md](references/tech-decision-framework.md):

**Ship now if:**
- Security is not compromised
- Performance impact <10%
- Refactoring path is clear

**Don't ship if:**
- Security shortcuts
- Architectural lock-in
- >20% performance degradation

## Common Scenarios

### New Feature Design

1. Read [solana-best-practices.md](references/solana-best-practices.md)
2. Design account structure for parallelization
3. Check [security-checklist.md](references/security-checklist.md)
4. Benchmark on devnet
5. Document performance characteristics

### Security Review

1. Use [security-checklist.md](references/security-checklist.md)
2. Threat model the feature
3. Identify all state transitions
4. Check for:
   - Reentrancy
   - Authority validation
   - Overflow/underflow
   - Account validation
5. Require external audit for financial operations

### Performance Optimization

1. Profile actual usage
2. Identify top 3 bottlenecks (80/20 rule)
3. Optimize hot paths first
4. Measure impact
5. Document results

### Technical Debt Decision

Use this matrix:

| Impact | Security | Ship? |
|--------|----------|-------|
| High perf hit | No risk | Ship with plan |
| Lock-in | No risk | Don't ship |
| Any | Risk exists | Don't ship |

## Principles

- **Security First:** No shortcuts. Ever.
- **Measure Everything:** Data beats intuition
- **Think Scale:** 100x growth is the baseline
- **Pay Down Debt:** Every quarter, prioritize one refactor

## When to Escalate to Muse

- Legal/regulatory risk
- >$10K infrastructure decision
- Security incident
- Strategic technology pivot

Everything else: CTO decides.
