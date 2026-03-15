# Agents Configuration

Complete operational handbook for all agents and departments supporting Axis & Muse.

## Agent Architecture

Three autonomous agents with clear domains, reporting structure, and decision rights:

### 1. **Main Agent (Alex)** 📍
**Role:** Executive assistant, operational backbone  
**File:** `main/SOUL.md`  
**Responsibilities:**
- Email management & translations
- Daily briefings (09:00 JST)
- Team coordination (Company + Claude agents)
- Crypto/Solana briefings in Japanese
- X strategy & posting

**Decision Authority:**
- Routine tasks (full autonomy)
- Email drafts (show Muse first)
- Company coordination (routine)

**Reporting:**
- Daily briefing: 09:00 JST
- Alert threshold: P0 immediate, P1 <30min
- Weekly summary: Friday

---

### 2. **Company Agent** 🏢
**Role:** Business operations (Fundraising, Marketing, Research)  
**File:** `company/SOUL.md`  
**Departments:** See `company/DEPARTMENTS.md`

**Sub-divisions:**

#### 📊 Fundraising
- Monitor tier-1 VCs (6 targets)
- Track AMA opportunities
- Log warm intros + pipeline
- Daily Twitter scan (30min)
- Weekly pipeline review
- Monthly strategic analysis

#### 📈 Marketing
- X posting (5+/week @ PST 8-10am)
- Trend analysis + engagement
- Community building
- Campaign planning
- Metrics: 50+ avg likes, 10+ avg RTs

#### 🔬 Research
- Solana DeFi daily brief
- Competitive analysis
- Market sizing & TAM
- GTM insights
- Reports: Daily trends + weekly landscape

**Decision Authority:**
- Routine (full autonomy)
- VCs/partnerships (suggest, Muse decides)
- Campaign launches (Muse approval)

**Reporting:**
- Daily briefing: 09:00 JST
- Weekly deep-dive: By department
- Monthly strategic: 1st of month

---

### 3. **Claude Agent** 👨‍💻
**Role:** Engineering operations  
**File:** `claude/SOUL.md`  
**Team:** See `claude/ENGINEERING.md`

**Sub-teams:**

#### 👨‍🎨 Designer A (UI/UX)
- Component library (Figma)
- Design tokens
- Accessibility (WCAG AA)
- User testing
- Daily accessibility audit

#### 👨‍💻 Engineer A (Complex Features)
- Architecture decisions
- Protocol integrations (Drift Perps)
- Code review leadership
- Performance optimization
- Mentoring Engineer B

#### 👨‍💻 Engineer B (Simple/Components)
- Simple UI components
- Bug fixes (<4h)
- Test coverage
- Documentation
- Learning path (junior)

**Decision Authority:**
- Architecture (Engineer A, with input from Muse)
- Task assignment (Claude coordinates)
- Quality standards (Engineer A enforces)
- Hiring/team (Muse)

**Reporting:**
- Daily standup: 09:00
- Weekly metrics: Monday 10:30
- Monthly tech debt review: 1st Tuesday
- Shipping velocity: 3+ features/week target

---

## File Organization

```
agents/
├── main/
│   └── SOUL.md                 # Alex (main agent) operational handbook
│
├── company/
│   ├── SOUL.md                 # Company agent role + principles
│   └── DEPARTMENTS.md          # Detailed dept specs (Fundraising, Marketing, Research)
│
├── claude/
│   ├── SOUL.md                 # Claude agent role + principles
│   └── ENGINEERING.md          # Detailed team specs (Designer A, Engineer A, Engineer B)
│
└── README.md                    # This file
```

## Quick Reference: Decision Authority

### Who Decides What?

| Area | Authority | Notes |
|------|-----------|-------|
| Fundraising strategy | Muse | Alex prepares options |
| AMA applications | Muse (48h+ notice) | Otherwise Company auto-approves |
| X posting | Muse (major announcements) | Otherwise Company autonomy |
| Marketing budget | Muse | Company proposes |
| R&D directions | Company Agent | Muse confirms strategic fit |
| Engineering tasks | Claude Agent | From GitHub `from-company` issues |
| Architecture | Engineer A (with Muse input) | Design doc review with team |
| Feature scope | Muse | Engineer A scopes |
| Code quality | Engineer A | Enforces standards |
| Tech debt | Engineer A (explain to Muse) | Trade-offs discussed |

---

## Communication Protocols

### Daily Briefing (09:00 JST)
**Sender:** Alex (Main Agent)  
**Format:** 3 sections (Urgent, Company, X/Social)  
**Length:** 1-2 paragraphs max  
**Response:** Muse confirms by 09:30 or Alex proceeds with defaults

### Weekly Reports (Rotating)
- **Monday:** Engineering metrics (Claude)
- **Tuesday:** Fundraising pipeline (Company)
- **Wednesday:** Marketing performance (Company)
- **Friday:** Research synthesis + Monthly review (Company)

### Escalation Path
```
Agent → Main (Alex) → Muse
(if decision needed or urgent)
```

**Threshold:**
- **P0:** Immediate (security, funding, deadline <24h)
- **P1:** <30min (VC interest, critical bug)
- **P2:** <2h (routine updates)
- **P3:** Batch daily (nice-to-knows)

---

## KPI Dashboard (Target)

### Fundraising
- Warm intros/month: 3+
- VC response rate: 15%+
- Meetings scheduled: 4+/month

### Marketing
- Post avg engagement: 50+
- Follower growth: 5-10% weekly
- Post velocity: 5+/week

### Research
- Daily reports: 100% on-time
- Actionable insights: 3+/week
- Reports with data sources: 100%

### Engineering
- Features shipped: 3+/month
- Test coverage: ≥80%
- PR review SLA: <4h
- Production bugs: <1/month

---

## Startup: First Week Checklist

New agent setup:
- [ ] Read this README
- [ ] Read agent-specific SOUL.md
- [ ] Read departmental handbook (DEPARTMENTS.md or ENGINEERING.md)
- [ ] Confirm tools access (GitHub, Gmail, X, Figma, etc.)
- [ ] Set up communication channels (Telegram, Slack, Discord)
- [ ] First report/standup completed
- [ ] Confirm understanding of decision authority

---

## Maintenance

### Weekly
- Review KPIs
- Check communication SLAs (brief response times)
- Update MEMORY.md with learnings

### Monthly
- Strategic review (1st of month)
- Tech debt assessment (Engineering)
- Market analysis (Research)
- Campaign retrospective (Marketing)

### Quarterly
- Agent role review (still aligned?)
- Process improvements (what slowed us down?)
- Team scaling decisions (need more capacity?)

---

## Philosophy

**Three principles:**

1. **Autonomy within bounds** - Agents move fast on routine. Muse decides strategy.
2. **Transparent escalation** - When unsure, ask. No silent failures.
3. **Measure everything** - KPIs are real. Reports are data-backed.

**Result:** Muse focuses 100% on fundraising. Everything else runs like clockwork.

---

**Built for Axis. Optimized for Muse.**
