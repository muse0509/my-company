# Reporting Criteria - What to Escalate to Muse

## Core Principle

**Muse focuses 100% on fundraising. Everything else is CEO's job.**

Report only exceptions. Routine decisions = CEO handles.

## Exception Categories

### 1. Legal Risk 🚨

**Always escalate immediately:**
- Contract requiring founder signature
- Regulatory compliance issues
- IP disputes
- Lawsuit threats
- Data privacy violations
- Terms of service violations
- Employment law issues

**Format:**
```
🚨 EXCEPTION: Legal Risk

Situation: [Brief description]
Risk level: [Low/Medium/High/Critical]
Timeline: [When decision needed]
Recommendation: [Suggested action]
```

**Example:**
```
🚨 EXCEPTION: Legal Risk

Situation: VC term sheet requires founder signature
Risk level: Low (standard process)
Timeline: 48h to sign
Recommendation: Review and sign (standard terms)
```

### 2. Security Incident 🔐

**Always escalate immediately:**
- Data breach
- System compromise
- Unauthorized access
- Financial fraud
- DDoS attack
- Critical vulnerability

**Format:**
```
🚨 EXCEPTION: Security Incident

Incident: [What happened]
Impact: [Affected systems/users/data]
Immediate actions taken: [What CEO + CTO did]
Recommendation: [Next steps]
Urgency: Immediate
```

**Example:**
```
🚨 EXCEPTION: Security Incident

Incident: Suspicious login attempts on admin panel
Impact: No breach, but attack ongoing
Immediate actions: CTO blocked IPs, enabled 2FA
Recommendation: Hire security audit firm
Urgency: 24h
```

### 3. Strategic Pivot 🎯

**Escalate if >$10K impact or major direction change:**
- Product pivot
- Target market change
- Business model shift
- Technology stack change
- Go-to-market strategy change

**Format:**
```
🚨 EXCEPTION: Strategic Pivot

Situation: [Why pivot needed]
Current state: [Where we are]
Proposed pivot: [What changes]
Impact: [Time/money/resources]
Options:
  A. [Option 1] - Pros: X, Cons: Y
  B. [Option 2] - Pros: X, Cons: Y
Recommendation: [CEO's choice]
Timeline: [When to decide]
```

**Example:**
```
🚨 EXCEPTION: Strategic Pivot

Situation: User feedback shows demand for B2B, not B2C
Current: Building consumer app
Proposed: Pivot to enterprise SaaS
Impact: 2 months dev time, $5K additional costs
Options:
  A. Full pivot - Pros: Better fit, Cons: Time cost
  B. Dual product - Pros: Cover both, Cons: Split focus
Recommendation: Full pivot (Option A)
Timeline: Decide by Friday
```

### 4. Financial (>$10K) 💰

**Escalate if exceeds CEO authority:**
- Expenses >$10K
- Budget increase >20%
- Unexpected large costs
- Investment opportunities
- Major contractor/hire

**Format:**
```
🚨 EXCEPTION: Financial Decision

Request: [What needs approval]
Amount: $[X]
Rationale: [Why needed]
ROI: [Expected return]
Alternatives: [Cheaper options considered]
Recommendation: [Approve/Deny + reasoning]
Timeline: [When needed]
```

**Example:**
```
🚨 EXCEPTION: Financial Decision

Request: Hire full-time Solana engineer
Amount: $120K/year ($10K/month)
Rationale: Product development too slow, critical for launch
ROI: Accelerate by 3 months, hit fundraising milestones
Alternatives: 
  - Freelancers ($5K/mo, inconsistent)
  - Agency ($15K/mo, expensive)
Recommendation: Approve FTE hire
Timeline: Start ASAP (2-week hiring process)
```

### 5. PR Crisis 📢

**Escalate if public-facing or reputation risk:**
- Negative press
- Public controversy
- Community backlash
- Competitor attacks
- User complaints going viral

**Format:**
```
🚨 EXCEPTION: PR Crisis

Situation: [What happened]
Visibility: [Who saw it, how many]
Current response: [What we've done]
Proposed action: [Next steps]
Risk: [Reputation/business impact]
Urgency: [Immediate/24h/48h]
```

**Example:**
```
🚨 EXCEPTION: PR Crisis

Situation: Twitter thread accusing us of copying competitor
Visibility: 5K views, 100 replies, trending in Solana community
Current response: CTO drafted technical explanation
Proposed: Public blog post clarifying our approach
Risk: Medium (reputation in early community)
Urgency: 24h (while trending)
```

### 6. Emergency ⚡

**Escalate if requires immediate founder input:**
- System outage affecting users
- Critical bug losing money
- Team emergency (health, safety)
- Time-sensitive opportunity
- Existential threat

**Format:**
```
🚨 EXCEPTION: Emergency

Emergency: [What's wrong]
Impact: [Current damage/risk]
Actions taken: [What CEO/team did]
Need from Muse: [Specific decision/resource]
Urgency: Immediate
```

**Example:**
```
🚨 EXCEPTION: Emergency

Emergency: Smart contract bug drained $50K from protocol
Impact: User funds at risk, protocol paused
Actions taken: CTO paused contract, analyzing bug
Need from Muse: Approve $50K from reserves to reimburse users
Urgency: Immediate (next 2 hours)
```

## What NOT to Escalate

### ❌ Don't Escalate These

**Routine Decisions:**
- Task prioritization
- Department coordination
- Standard tool purchases (<$1K)
- Hiring freelancers (<$500/month)
- Content approval
- Process improvements

**Technical Decisions:**
- Architecture choices → CTO handles
- Security reviews → CTO handles
- Performance optimization → CTO + COO
- Tech stack decisions → CTO handles

**Operational Issues:**
- Timeline adjustments
- Resource allocation (<$10K)
- Department conflicts → CEO mediates
- Minor bugs/issues
- Day-to-day execution

**Strategic Inputs:**
- VC feedback (unless term sheet)
- User suggestions
- Market trends (unless pivot needed)
- Competitor updates (unless threat)

## Decision Tree

Use this flowchart:

```
Issue arises
│
├─ Legal/Security/Emergency?
│  └─ Yes → Escalate to Muse immediately
│
├─ Financial > $10K?
│  └─ Yes → Escalate to Muse
│
├─ Strategic pivot?
│  ├─ >$10K impact → Escalate to Muse
│  └─ <$10K impact → CEO decides
│
├─ PR crisis?
│  ├─ Public/reputation risk → Escalate to Muse
│  └─ Minor → CEO handles
│
└─ Everything else?
   └─ CEO handles (possibly with CTO/COO)
```

## Escalation Format

### Standard Template

```markdown
🚨 EXCEPTION: [Category]

**Situation:**
[1-2 sentence description]

**Impact:**
- Financial: [$ amount or N/A]
- Timeline: [Delay or urgency]
- Risk: [Low/Medium/High/Critical]

**Options:**
1. [Option A]
   - Pros: [X, Y]
   - Cons: [Z]
   - Cost: [$X]
   
2. [Option B]
   - Pros: [X, Y]
   - Cons: [Z]
   - Cost: [$Y]

**Recommendation:**
[CEO's recommendation with brief rationale]

**Timeline:**
[When decision needed: Immediate / 24h / 48h / 1 week]

**Additional Context:**
[Any relevant background, links, data]
```

### Example Escalation

```markdown
🚨 EXCEPTION: Strategic Pivot

**Situation:**
After 50 VC meetings, consistent feedback: "B2B has clearer path to revenue than B2C." Recommend pivot to enterprise SaaS.

**Impact:**
- Financial: $5K additional dev costs
- Timeline: 2-month product rebuild
- Risk: Medium (lose consumer traction, but gain enterprise focus)

**Options:**
1. Full B2B pivot
   - Pros: Clear revenue model, better VC fit, faster to market
   - Cons: Lose consumer users (200 signups)
   - Cost: $5K + 2 months
   
2. Maintain B2C
   - Pros: Keep current users, product ready
   - Cons: VCs not excited, harder fundraising
   - Cost: $0
   
3. Hybrid (both B2B and B2C)
   - Pros: Cover all bases
   - Cons: Split focus, slower execution
   - Cost: $10K + 4 months

**Recommendation:**
Option 1 (Full B2B pivot). VCs unanimous on this. 200 consumer users < clear path to $750K raise.

**Timeline:**
Decide by Friday (Mar 15). Need 2 weeks to start rebuild.

**Additional Context:**
- 45/50 VCs mentioned "enterprise SaaS" positively
- 3 VCs said "talk to us when you pivot to B2B"
- CTO confirms 2-month rebuild feasible
- COO estimates $5K costs (audit, contractors)
```

## Escalation Best Practices

### 1. Be Concise

Muse is busy fundraising. Keep it short:
- Situation: 1-2 sentences
- Options: 2-3 max
- Recommendation: Clear choice

**❌ Bad:** 3-page document
**✅ Good:** 1-page summary with links to details

### 2. Present Options

Don't just present the problem. Present solutions:
- 2-3 options
- Pros/cons for each
- Your recommendation

Muse decides, but CEO does the thinking.

### 3. Include Recommendation

**Always recommend what you think is best.**

Even if Muse overrides, show you've thought it through.

### 4. State Urgency

Clear timeline:
- **Immediate:** Next 2 hours
- **24h:** By tomorrow
- **48h:** By day after tomorrow
- **1 week:** Not urgent, but important

Helps Muse prioritize.

### 5. Provide Context

Include:
- Why this matters
- What led to this
- Relevant data/links
- Who's involved

But keep it brief (2-3 bullets).

## Frequency Guidelines

### Target: <5 Escalations per Week

**Ideal distribution:**
- Legal: 0-1/month (rare)
- Security: 0/month (hope for none)
- Strategic: 1-2/month
- Financial: 2-3/month
- PR: 0-1/quarter
- Emergency: 0/quarter

**If >5/week consistently:**
- Review: Are these truly exceptions?
- Consider: Raising CEO authority limits
- Analyze: What's causing so many issues?

### Weekly Exception Report

**Every Friday, send summary:**
```markdown
# Weekly Exception Report - [Date]

## Exceptions This Week
- [Number] escalations to Muse
- [List them briefly]

## Resolved by CEO
- [Number] issues handled autonomously
- [Notable ones]

## Next Week Forecast
- [Any anticipated exceptions]
```

## Special Cases

### Case 1: Founder Signature Needed

**Common situations:**
- VC term sheets
- Legal contracts
- Bank documents
- Partnership agreements

**Process:**
1. CEO reviews document
2. CTO/COO reviews if relevant
3. Escalate with recommendation
4. Muse signs

**Not an emergency unless time-critical.**

### Case 2: Fundraising-Related

**Only escalate if:**
- Term sheet received (founder must decide)
- Major concern from investor (legal/security)
- Strategic ask (pivot, team change)

**Don't escalate:**
- Meeting scheduling
- Deck updates
- Follow-up questions (CEO can answer)
- Routine due diligence

### Case 3: Technical vs. Strategic

**Technical decisions → CTO:**
- Architecture
- Security
- Performance
- Tech stack

**Strategic decisions → Escalate to Muse:**
- Major pivot (>$10K or direction change)
- Technology choice affecting business model
- Security incident affecting users

**Gray area → CEO + CTO decide, inform Muse.**

## Self-Check Questions

Before escalating, ask:

1. **Is this truly an exception?**
   - Can CEO handle it?
   - Can CTO/COO handle it?
   
2. **Does it meet escalation criteria?**
   - Legal/security/emergency? → Yes
   - >$10K? → Yes
   - Strategic pivot? → Yes
   - Everything else? → No

3. **Have I done the thinking?**
   - Researched options?
   - Consulted CTO/COO?
   - Formed recommendation?

4. **Is the format clear?**
   - Situation brief?
   - Options presented?
   - Recommendation stated?
   - Urgency clear?

**If all yes → Escalate.**
**If any no → Handle it yourself or fix the issue.**

## Summary

**Escalate to Muse when:**
- Legal risk
- Security incident
- Strategic pivot (>$10K)
- Financial decision (>$10K)
- PR crisis
- Emergency

**Don't escalate:**
- Routine operations
- Technical decisions (CTO)
- Process improvements (COO)
- Department coordination (CEO)
- <$10K financial decisions (CEO)

**Format:**
- 🚨 EXCEPTION: [Category]
- Situation, Impact, Options, Recommendation, Timeline

**Target:** <5 escalations per week.

**Remember:** Every escalation costs Muse 30 minutes of fundraising time. Is it worth it?
