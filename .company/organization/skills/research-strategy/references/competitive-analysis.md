# Competitive Analysis フレームワーク

競合分析とポジショニング戦略。

## Competitor Landscape

### Direct Competitors（Solana Perps）

#### 1. Drift Protocol
**Overview:**
- Largest Solana Perps protocol
- 100K+ users
- $50B+ lifetime volume

**Strengths:**
- High liquidity
- Established brand
- Advanced features（funding rates, multi-collateral）

**Weaknesses:**
- Complex UX（steep learning curve）
- Not beginner-friendly
- No mobile app

**Target User:**
- Advanced traders
- High volume users
- Liquidity seekers

**Positioning:**
"Professional-grade perpetuals trading"

---

#### 2. Jupiter Perps
**Overview:**
- Launched 2024
- Leveraging Jupiter Swap brand
- Growing user base

**Strengths:**
- Strong brand（#1 Solana DEX）
- Swap integration（cross-sell）
- Good UX（compared to Drift）

**Weaknesses:**
- New product（less liquidity than Drift）
- Perps not core focus

**Target User:**
- Jupiter Swap users
- Retail traders
- Casual users

**Positioning:**
"Best prices, best UX, all Solana"

---

#### 3. Marginfi
**Overview:**
- Lending protocol with leverage
- Not pure Perps
- Different model

**Strengths:**
- Lending + Trading combo
- Yield opportunities
- Lower liquidation risk（isolated pools）

**Weaknesses:**
- Not Perps-focused
- Lower trading volume
- Complexity（lending + trading）

**Target User:**
- Lenders seeking yield
- Conservative leveraged traders

**Positioning:**
"Lend, borrow, trade - all in one"

---

### Indirect Competitors（Other Chains）

#### 4. GMX（Arbitrum）
**Lessons:**
- GLP model（liquidity pool vs orderbook）
- Low fees attract users
- Strong community = moat

**Application to Axis Pizza:**
- Consider liquidity pool model
- Fee strategy important
- Community-first approach

#### 5. dYdX（Cosmos）
**Lessons:**
- Orderbook model works at scale
- Off-chain orderbook + On-chain settlement
- Professional traders need advanced tools

**Application to Axis Pizza:**
- Simplicity for retail, advanced for pros（future）
- Hybrid model possible

---

## Feature Comparison Matrix

| Feature | Axis Pizza | Drift | Jupiter | Marginfi |
|---------|-----------|-------|---------|----------|
| **UX Complexity** | Simple | Complex | Medium | Medium |
| **1-click Trading** | ✅ | ❌ | ❌ | ❌ |
| **Visual Risk Display** | ✅ | ❌ | ❌ | ❌ |
| **Auto Risk Management** | ✅ | ❌ | ❌ | ❌ |
| **Mobile App** | 🔜（Q2） | ❌ | ❌ | ❌ |
| **Liquidity** | Low | High | High | Medium |
| **Trading Pairs** | 5 | 20+ | 15 | 10 |
| **Funding Rates** | Basic | Advanced | Advanced | N/A |
| **Multi-collateral** | ❌ | ✅ | ✅ | ✅ |
| **Social Trading** | 🔜（Q3） | ❌ | ❌ | ❌ |
| **User Base** | 127 | 100K+ | 10K+ | 5K+ |
| **Target User** | Beginners | Advanced | Retail | Lenders |

---

## Differentiation Strategy

### Axis Pizza Unique Value Props

**1. Simplicity First**
- **vs Drift:** 1-click vs multi-step flow
- **vs Jupiter:** Perps-first vs Swap-first
- **vs Marginfi:** Trading-only vs Lending+Trading

**2. Visual Risk Management**
- **Unique:** Visual liquidation risk display
- **Competitors:** Text-based warnings only
- **Impact:** Lower liquidation rate for beginners

**3. Auto Risk Management**
- **Unique:** Auto stop-loss by default
- **Competitors:** Manual setup
- **Impact:** User safety > Liquidity

**4. Mobile-First（Q2）**
- **Unique:** First Solana Perps mobile app
- **Competitors:** Web only
- **Impact:** Accessibility 3x

**5. Beginner-Focused**
- **Unique:** Educational tooltips, safe defaults
- **Competitors:** Assume knowledge
- **Impact:** Lower barrier to entry

---

## Competitive Positioning Map

### Axes: UX Simplicity vs Liquidity

```
High Liquidity
    │
    │   Drift
    │    ●
    │
    │         Jupiter
    │          ●
────┼────────────────────
    │
    │ Axis Pizza
    │   ●
    │               Marginfi
Low │                ●
Liquidity
    │
  Complex ──────────── Simple
           UX Simplicity
```

**Insight:**
- Axis Pizza = Simple UX, Lower Liquidity（intentional trade-off）
- Target: Users who prioritize UX > Liquidity
- Growth path: UX first → Liquidity later（via partnerships）

---

## Competitive Threats

### Threat 1: Drift Simplifies UX
**Probability:** Medium
**Impact:** High
**Mitigation:**
- Maintain UX lead（continuous improvement）
- Mobile app advantage
- Beginner-focused brand

### Threat 2: Jupiter Perps Grows
**Probability:** High
**Impact:** Medium
**Mitigation:**
- Differentiate on Perps-first positioning
- Partner for liquidity（Jupiter as backend?）
- Integrate Jupiter for multi-protocol access

### Threat 3: New Entrant（Better UX）
**Probability:** Low
**Impact:** High
**Mitigation:**
- First-mover advantage（build brand now）
- Community moat（build loyalty）
- Continuous innovation

---

## Competitive Intelligence Process

### Weekly Monitoring

**Sources:**
1. **Protocol Dashboards:**
   - Drift: https://app.drift.trade
   - Jupiter: https://jup.ag/perps
   - Marginfi: https://app.marginfi.com

2. **Social Media:**
   - X accounts（@DriftProtocol, @JupiterExchange）
   - Discord announcements
   - Telegram groups

3. **Metrics:**
   - DeFiLlama（TVL, Volume）
   - Dune Analytics（User growth）

**Process:**
1. Competitor Tracker (Haiku) collects data
2. Research Lead analyzes trends
3. Weekly competitive update

### Quarterly Deep Dive

**Analysis:**
1. Feature comparison matrix update
2. User growth trends
3. Positioning map refresh
4. Threat assessment

**Output:**
- Competitive landscape report
- Strategic recommendations
- Roadmap adjustments

---

## Case Study: Jupiter Perps Launch

### Timeline
**Q3 2024:** Jupiter announces Perps
**Q4 2024:** Jupiter Perps beta
**Q1 2025:** Jupiter Perps v2

### Analysis

**Initial Reaction:**
- Threat level: High（Jupiter brand strong）
- Impact: Potential user migration

**Observations:**
- Jupiter Perps UX = better than Drift, not perfect
- Still multi-step flow
- No mobile app
- Liquidity good but not Drift-level

**Axis Pizza Response:**
1. **Differentiate:** 1-click trading（simpler than Jupiter）
2. **Integrate:** Consider Jupiter as liquidity source
3. **Mobile:** Launch before Jupiter
4. **Positioning:** "Simplest Perps, not biggest"

**Outcome:**
- Threat mitigated
- Opportunity: Partner with Jupiter（use their liquidity）
- Validated: UX differentiation = viable strategy

---

## Benchmarking Metrics

### User Growth

| Metric | Axis Pizza | Drift | Jupiter | Marginfi |
|--------|-----------|-------|---------|----------|
| **Current Users** | 127 | 100K | 10K | 5K |
| **Growth Rate** | +50/week | +500/week | +200/week | +100/week |
| **Retention** | 40% | 30% | 35% | 25% |

**Insight:**
- Axis Pizza retention > competitors（UX impact）
- Growth rate lower（expected, early stage）
- Target: Maintain retention, scale growth

### Engagement

| Metric | Axis Pizza | Drift | Jupiter | Marginfi |
|--------|-----------|-------|---------|----------|
| **Avg Trades/User** | 3/week | 5/week | 4/week | 2/week |
| **Avg Trade Size** | $100 | $500 | $300 | $200 |
| **Session Duration** | 5 min | 15 min | 10 min | 8 min |

**Insight:**
- Axis Pizza session shorter（1-click efficiency）
- Trade size lower（beginner users）
- Opportunity: Increase trades/user（engagement features）

---

## Strategic Recommendations

### Short-term（Q1-Q2）
1. **Maintain UX lead:** Continuous improvements
2. **Mobile launch:** Before competitors
3. **Community building:** Discord, X engagement

### Mid-term（Q3-Q4）
1. **Liquidity partnerships:** Jupiter, Drift integration
2. **Social trading:** Copy trading feature
3. **Advanced tools:** For growing user base

### Long-term（2026+）
1. **Multi-chain:** Expand beyond Solana
2. **API for developers:** Platform play
3. **DAO governance:** Community ownership

---

## Tools

- **DeFiLlama:** Protocol metrics
- **Dune Analytics:** User data
- **Similar Web:** Traffic analysis
- **Discord/X monitoring:** Sentiment tracking
- **Competitor Tracker (Haiku):** Automated monitoring
