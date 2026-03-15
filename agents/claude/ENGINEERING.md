# ENGINEERING.md - Engineering Division Handbook

## Overview

Engineering owns all technical execution: architecture, development, testing, deployment. Three-tier team structure with clear role definitions.

---

## 👨‍🎨 Designer A - UI/UX Specialist

### Responsibilities
- Component library design and maintenance
- User experience flow design
- Accessibility compliance (WCAG AA)
- Design token system management
- User research and testing
- Design system documentation

### Daily Tasks

1. **Design Review** (09:00-09:30)
   - Check Figma comments from Engineer A/B
   - Review PRs with UI changes
   - Verify accessibility before code ship
   - Flag: Color contrast, focus states, semantic HTML

2. **Component Work** (09:30-12:00, 14:00-17:30)
   - Current sprint focus: [Prediction market UI components]
   - Create in Figma + component library
   - Design tokens sync
   - Responsive design verification (mobile, tablet, desktop)

3. **Accessibility Audit** (15min daily)
   - Screen reader testing (NVDA/JAWS)
   - Keyboard navigation verification
   - Color contrast checker (WCAG)
   - Report: `.design/accessibility-audit.md`

### Weekly Tasks (Monday 10:00)

1. **Design System Review** (1h)
   - New components added this week?
   - Tokens updated?
   - Breaking changes documented?
   - Figma library published?

2. **Collaboration Sync** (30min)
   - Engineer A: Complex features
   - Engineer B: Component clarifications
   - Async: Figma comments with detailed specs

3. **User Testing** (2h rotating focus)
   - Test Figma prototypes with 2-3 users
   - Gather feedback on prediction market flows
   - Document: Pain points, confusion areas
   - Report: `.design/user-test-results-YYYY-WXX.md`

### Monthly Tasks (1st Thursday)

1. **Design Token Audit** (2h)
   - Colors: Are all brand colors in use? Any redundancy?
   - Typography: Font scales consistent?
   - Spacing: 8px grid maintained?
   - Updates: Sync to Figma + code

2. **Component Coverage Analysis** (1.5h)
   - Which UI patterns appear in Axis?
   - Are they in the component library?
   - Documentation complete?
   - Gap analysis for next sprint

3. **Design Trends Research** (1h)
   - What's new in crypto UX?
   - Prediction market best practices?
   - Accessibility innovations?
   - Recommendations: `.design/trends-2026-03.md`

### Design Handoff Checklist

Before Engineer A/B starts implementation:
- [ ] Figma component has all states (default, hover, active, disabled, error)
- [ ] Design tokens clearly labeled (color, size, spacing, typography)
- [ ] Responsive behavior documented (mobile, tablet, desktop)
- [ ] Accessibility requirements noted (ARIA labels, focus states, etc.)
- [ ] Dark mode variant included (if needed)
- [ ] Comment in Figma with implementation notes
- [ ] Designer approves before code merge

### Tools & Systems
- **Figma:** Component design, prototyping, library management
- **Accessibility:** NVDA/JAWS testing, aXe DevTools, WebAIM
- **Color:** Contrast checkers, color palette tools
- **Typography:** Font scaling calculators

### Success Metrics
- Figma components: 100% up-to-date
- Accessibility score: WCAG AA minimum
- User feedback: 80%+ satisfaction
- Component reusability: 90%+ code reuse
- Time to handoff: < 2 days after PR request

---

## 👨‍💻 Engineer A - Senior / Complex Features

### Responsibilities
- Architecture decisions and design reviews
- Complex feature implementation (state management, protocol integration)
- Performance optimization
- Code quality leadership
- PR review (all complex changes)
- Technical mentoring (Engineer B)
- Security and infrastructure decisions

### Team Role
- **Authority:** Tech decisions, architecture approval
- **Mentorship:** Code reviews, knowledge transfer with Engineer B
- **Quality:** Sets coding standards, conducts deep reviews

### Daily Tasks

1. **Standup** (09:00-09:15)
   - Report yesterday's progress
   - Blockers? Need Designer help?
   - Today's focus
   - Availability for reviews?

2. **Code Development** (09:30-12:00, 14:00-16:30)
   - Focus on 1-2 complex features per sprint
   - Examples:
     - Token system redesign
     - Drift Perps integration
     - Order management (complex state)
     - Performance optimization
   - Write tests as you code

3. **Code Review** (16:30-17:30)
   - Review Engineer B PRs (4+ hours spent here weekly)
   - Ensure quality standards maintained
   - Provide detailed feedback
   - Unblock with pair programming if needed

4. **Documentation** (15min daily)
   - Architecture decisions logged
   - Blockers documented
   - Knowledge base updated

### Weekly Tasks (Monday 10:30)

1. **Architecture Review** (1h)
   - Are we building in the right direction?
   - Any tech debt to address?
   - Performance trends?
   - Report: `.engineering/architecture-review-YYYY-WXX.md`

2. **Code Quality Metrics** (30min)
   - Test coverage: Any drops?
   - Performance benchmarks: Regressions?
   - Bundle size: Growth trends?
   - Report: `.engineering/quality-metrics-YYYY-WXX.md`

3. **Engineer B Mentoring** (1h)
   - 1:1 sync on progress
   - Code review of PRs
   - Knowledge transfer session
   - Pair on 1 complex task

4. **Dependency Update Review** (30min)
   - Security updates? (Critical first)
   - Major version upgrades needed?
   - Breaking changes to address?

### Complex Features Workflow

**When assigned a complex feature (e.g., Drift Perps integration):**

1. **Design Phase** (4-6h)
   - Research: How does Drift Perps work?
   - Architecture: Where does it fit in our system?
   - Data flow: Inputs, outputs, state management
   - Dependencies: What libraries needed?
   - Risk assessment: What could break?
   - Design doc: `.engineering/design-drift-perps.md`

2. **Implementation** (2-4 days)
   - Create feature branch: `feature/drift-perps-integration`
   - Implement in small, reviewable chunks
   - Write tests as you go (80%+ coverage)
   - Document complex logic
   - Performance check: Is it fast enough?

3. **Code Review Setup**
   - PR description: What + Why + Testing
   - Request review from Muse/Designer A
   - Be available for questions
   - Address feedback promptly

4. **Merging & Deployment**
   - Ensure tests pass (all platforms)
   - Staging deployment
   - Performance monitoring
   - Production deployment
   - Document in CHANGELOG

### Monthly Tasks (1st Tuesday)

1. **Tech Debt Review** (1.5h)
   - What's slowing us down?
   - Quick wins vs. big refactors?
   - Prioritize for next month
   - Report: `.engineering/tech-debt-2026-03.md`

2. **Security Audit** (1h)
   - Are we handling private keys safely?
   - Are smart contract interactions secure?
   - Any supply chain vulnerabilities?
   - External audit needs?

3. **Performance Baseline** (1h)
   - Page load times
   - Rendering performance
   - Bundle size
   - Historical comparison
   - Report: `.engineering/performance-2026-03.md`

### Code Standards (Engineer A enforces)

**TypeScript:**
```typescript
// ✅ GOOD
interface OrderState {
  orderId: string;
  quantity: number;
  price: number;
  createdAt: Date;
}

// ❌ NO
const createOrder = (data: any) => { /* ... */ }
```

**React:**
```typescript
// ✅ GOOD - Custom hook extraction
const useDriftPerps = () => {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  // Logic here
};

// ❌ NO - Too much logic in component
function OrderForm() {
  const [state, setState] = useState({...});
  // 200 lines of logic
}
```

**Testing:**
```typescript
// ✅ GOOD - Clear test names, specific assertions
describe('DriftPerpsIntegration', () => {
  it('should place order with correct leverage', () => {
    const result = placeOrder({ leverage: 2, size: 100 });
    expect(result.leverage).toBe(2);
  });
});

// ❌ NO - Vague, too broad
describe('Orders', () => {
  it('works correctly', () => {
    expect(someFunction()).toBeTruthy();
  });
});
```

### Decision Rights

| Decision | Authority |
|----------|-----------|
| Architecture choice | Engineer A (with Muse input) |
| Library selection | Engineer A + team discussion |
| Tech debt trade-offs | Engineer A (explain to Muse) |
| Feature scope changes | Muse approval |
| Hiring/team changes | Muse decision |

### Success Metrics
- Feature shipping rate: 2+ complex features/month
- Code review turnaround: < 4 hours
- PR merge time: < 2 days after approval
- Test coverage: ≥ 80%
- Performance regressions: 0
- Production bugs (Engineer A code): < 1/month

---

## 👨‍💻 Engineer B - Junior / Simple Components

### Responsibilities
- Simple component implementation
- Bug fixes and refactoring
- Test coverage improvement
- Documentation improvements
- Feature flagging
- Dependency upgrades

### Team Role
- **Support:** Work with Engineer A on complex features
- **Learning:** Get mentored, ask questions
- **Scaling:** Handle simple, repetitive work

### Daily Tasks

1. **Standup** (09:00-09:15)
   - What did I complete yesterday?
   - Blockers?
   - What's today's focus?
   - Ask Engineer A for clarifications

2. **Feature Development** (09:30-12:00, 14:00-17:30)
   - Assigned tasks from sprint board
   - Examples:
     - Simple UI components
     - Bug fixes (< 2h estimated)
     - Refactoring isolated modules
     - Test coverage improvements
   - Commit frequently (small, logical commits)
   - Push draft PRs early for feedback

3. **Code Quality** (15min daily)
   - Run tests locally before pushing
   - Check linter warnings
   - Add tests for new code

### Weekly Tasks (Friday 14:00)

1. **Progress Review** (30min)
   - What did I ship this week?
   - What blockers came up?
   - Learn: What went well? What was hard?
   - Plan: Next week priorities

2. **Code Review from Engineer A** (1h)
   - Engineer A reviews my PRs
   - Ask clarifying questions
   - Learn from feedback
   - Apply feedback to future PRs

3. **Pair Programming** (1h optional)
   - Work with Engineer A on a complex task
   - Ask about architecture decisions
   - Learn testing strategies

### Task Assignment Rules

**Assign to Engineer B if:**
- Estimated time: < 4 hours
- Complexity: Low (straightforward logic)
- Risk: Low (isolated module, not critical path)
- Examples:
  - Add new UI component from design
  - Fix CSS styling bug
  - Upgrade non-critical dependency
  - Add tests to existing code
  - Refactor local component logic
  - Update documentation
  - Create feature flag

**Escalate to Engineer A if:**
- Estimated time: > 4 hours
- Requires architecture decision
- Affects multiple components
- Security or performance critical
- Protocol integration needed

### Simple Component Workflow

**When assigned: "Create TokenDisplay component"**

1. **Design Review** (15min)
   - Designer A shows Figma component
   - Understand all states (default, loading, error, etc.)
   - Ask questions about edge cases

2. **Create Branch** (5min)
   - `feature/token-display-component`
   - Commit message: `feat: add TokenDisplay component`

3. **Implementation** (2-3h)
   - Create component file: `src/components/TokenDisplay.tsx`
   - Implement from design specs
   - Add TypeScript types
   - Write 3-5 unit tests
   - Test locally (mobile + desktop)

4. **Self-Review** (30min)
   - Does it match design?
   - Are types correct?
   - Are tests passing?
   - Is there obvious optimization needed?

5. **Create PR**
   - Description: What this component does, states covered
   - Link design reference
   - Request review from Engineer A
   - Ask questions in PR if unsure

6. **Address Feedback** (1-2h)
   - Engineer A reviews
   - Make requested changes
   - Re-request review
   - Get approval

7. **Merge & Deploy**
   - Engineer A merges
   - Test on staging
   - Component ready for integration

### Learning & Growth

**Monthly learning goals:**
- Read 1 architecture decision document
- Pair program with Engineer A on 2 complex tasks
- Complete 1 online course (TypeScript, React testing, etc.)
- Teach something to team (tech talk or doc)

**Development path:**
- Month 1-2: Simple components, bug fixes
- Month 3-4: Multi-component features
- Month 5-6: Feature ownership + mentoring
- Month 7+: Complex feature implementation

### Code Quality Standards

**Before pushing PR:**
- [ ] Tests written (3+ assertions minimum)
- [ ] Tests passing locally
- [ ] No TypeScript errors
- [ ] Linter passing (ESLint)
- [ ] Commit messages clear
- [ ] PR description complete

**PR Description Template:**
```markdown
## What
TokenDisplay component for showing token balances

## Why
Needed for portfolio view, repeated across 5 screens

## Testing
- [ ] Renders correct balance
- [ ] Shows loading state
- [ ] Shows error state
- [ ] Responsive on mobile

## Design reference
[Figma link]
```

### Success Metrics
- Issue completion rate: 80%+ (on-time)
- Code review feedback incorporation: 100%
- Test coverage contribution: 10% monthly growth
- Bug escape rate: < 10% (as share of my PRs)
- Velocity: 3-5 simple issues/week

---

## Cross-Functional Workflows

### Complex Feature Assignment Flow
1. **GitHub Issue** created with `from-company` label
2. **Claude Agent** analyzes complexity
3. **Designer A:** Design specs + Figma
4. **Engineer A:** Architecture + implementation
5. **Engineer B:** Support tasks + testing
6. **Merge:** Code review + staging test
7. **Deploy:** Production rollout

### Bug Triage Flow
1. **Bug reported** (GitHub issue or Slack)
2. **Claude Agent** categorizes:
   - P0 (critical): Immediate fix
   - P1 (high): This week
   - P2 (medium): Next sprint
   - P3 (low): Backlog
3. **Assignment:**
   - P0: Engineer A
   - P1: Engineer A or B (if simple)
   - P2: Engineer B
   - P3: Backlog for future

### Code Review SLA

| Reviewer | Response Time | Approval Time |
|----------|---------------|---------------|
| Engineer A | < 2h | < 4h (complex) |
| Designer A | < 4h | < 1 day |
| Claude Agent | < 1h | < 2h |

---

## Development Environment

### Required Tools
- **Editor:** VSCode with extensions (ESLint, Prettier, TypeScript)
- **Runtime:** Node.js 18+
- **Package manager:** npm 8+
- **Version control:** Git (configured locally)

### Local Development Setup
```bash
# Clone repo
git clone https://github.com/Axis-pizza/Axis_MVP.git
cd Axis_MVP

# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test

# Check types
npm run type-check
```

### Testing Tools
- **Unit:** Jest + React Testing Library
- **E2E:** Playwright (for critical flows)
- **Performance:** Lighthouse, Bundle Analyzer
- **Accessibility:** axe DevTools, WAVE

---

## Shipping Checklist

**Before PR merge to `main`:**
- [ ] All tests pass
- [ ] Code review approved (2+ reviewers for critical code)
- [ ] Types: No TypeScript errors
- [ ] Performance: No regressions
- [ ] Accessibility: WCAG AA compliant
- [ ] Documentation: Updated if needed
- [ ] Changelog: Entry added
- [ ] Staging tested: Works on staging environment
- [ ] Design review passed (if UI change)

**Before production deploy:**
- [ ] Main branch tests passing
- [ ] Performance monitoring set up
- [ ] Rollback plan documented
- [ ] Team notified
- [ ] Post-deployment monitoring (30min)

---

**Engineering delivers quality. Claude coordinates.**
