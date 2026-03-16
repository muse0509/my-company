# Tech Scouting 技術発見プロセス

新技術トレンド発見とスカウト手法。

## Scouting Principles

### GitHub Stars < Developer Discussions

**Why:**
- Stars = popularity（遅行指標）
- Discussions = real engagement（先行指標）

**Example:**
- Project A: 10K stars, 50 discussions/week
- Project B: 1K stars, 200 discussions/week
- **Pick B**（開発者が実際に使っている）

### Commit Activity > Star Count

**Why:**
- Active development = alive project
- Star count = hype（持続性不明）

**Example:**
- Project A: 5K stars, 10 commits/month
- Project B: 500 stars, 100 commits/month
- **Pick B**（活発な開発）

### Discord Activity > X Followers

**Why:**
- Discord = engaged community
- X = passive followers

**Example:**
- Project A: 50K X followers, 100 Discord members
- Project B: 5K X followers, 1000 Discord members
- **Pick B**（コミュニティエンゲージメント高い）

---

## Scouting Areas

### 1. DeFi Primitives

**Focus:**
- New AMM designs（ve(3,3), Concentrated liquidity）
- Perps innovations（Funding rates, Liquidation mechanisms）
- Risk management tools（Auto stop-loss, Portfolio optimization）

**Sources:**
- Uniswap research（Ethereum → Solana適用）
- GMX v2 patterns（Arbitrum → Solana）
- Aave risk frameworks

**Current Trends:**
- **Intent-based trading:** User specifies outcome, protocol executes
- **AI-powered risk management:** Automated position sizing
- **Social trading:** Copy successful traders

### 2. Solana Infrastructure

**Focus:**
- Firedancer progress（Validator client）
- Compression tech（cNFTs → cTokens?）
- Mobile wallets（Solana Mobile Stack）

**Sources:**
- Solana GitHub（solana-labs/solana）
- Jump Crypto research（Firedancer）
- Solana Foundation blog

**Current Trends:**
- **Firedancer Q2 launch:** 10x throughput potential
- **Token compression:** Lower mint costs
- **Mobile-first:** Saga phone ecosystem

### 3. Cross-chain Patterns

**Focus:**
- Ethereum L2 trends → Solana適用
- Cosmos patterns → Solana適用
- Bitcoin DeFi → Solana

**Sources:**
- Arbitrum/Optimism research
- Cosmos SDK developments
- Bitcoin L2s（Stacks, Liquid）

**Current Trends:**
- **L2 UX simplification:** Account abstraction → Solana equivalent
- **Interoperability:** Wormhole, Allbridge patterns
- **Restaking:** EigenLayer → Solana restaking?

---

## Scouting Process

### Weekly GitHub Scan

**Repositories to Monitor:**

**Solana Core:**
- solana-labs/solana
- jito-foundation/jito-solana
- firedancer-io/firedancer

**DeFi Protocols:**
- drift-labs/protocol-v2
- jup-ag/jupiter-perps-anchor
- marginfi-v2-labs/marginfi-v2

**Infrastructure:**
- coral-xyz/anchor
- metaplex-foundation/metaplex
- solana-mobile/solana-mobile-stack-sdk

**Process:**
1. Tech Scout (Haiku) scans commits（daily）
2. Identify interesting PRs/issues
3. Research Lead evaluates relevance
4. Weekly tech report

### Monthly Discord Deep Dive

**Communities:**
- Solana Tech（validator discussions）
- Drift Dev（protocol development）
- Jupiter Dev（new features）
- Anchor Dev（framework updates）

**Process:**
1. Join developer channels
2. Read technical discussions
3. Identify pain points/solutions
4. Extract Axis Pizza applications

### Quarterly Research Reports

**Sources:**
- Messari（Solana ecosystem reports）
- Delphi Digital（DeFi research）
- Galaxy Digital（L1 comparisons）
- a16z crypto（crypto trends）

**Process:**
1. Read quarterly reports
2. Extract Solana/DeFi insights
3. Identify 3-month trends
4. Update Axis Pizza roadmap

---

## Tech Evaluation Framework

### Relevance Score

**Criteria:**
1. **Direct Application（40点）:**
   - Can Axis Pizza use this immediately?
   - Example: New Drift feature → Direct integration

2. **Competitive Advantage（30点）:**
   - Does this differentiate us?
   - Example: Mobile-first → Ahead of Drift

3. **User Impact（20点）:**
   - Will users notice/care?
   - Example: Faster transactions → Yes

4. **Implementation Effort（10点）:**
   - Low effort = higher score
   - Example: API integration（low）vs Custom build（high）

**Scoring:**
- 80-100: Immediate priority
- 60-79: Next quarter
- 40-59: Future consideration
- 0-39: Watch list

---

## Current Tech Trends（Q1 2025）

### Trend 1: Intent-based Trading

**Description:**
- User specifies desired outcome
- Protocol finds best execution path
- Abstracts complexity

**Relevance:**
- High（Axis Pizza UX goal = simplification）
- Application: "I want $100 long SOL, 5x leverage" → Auto-execute

**Timeline:**
- Research: Q1
- Prototype: Q2
- Launch: Q3

### Trend 2: AI Risk Management

**Description:**
- AI analyzes user portfolio
- Suggests position sizes
- Auto risk adjustments

**Relevance:**
- High（Auto Risk Management roadmap item）
- Application: AI-powered stop-loss optimization

**Timeline:**
- Research: Q1-Q2
- Prototype: Q3
- Launch: Q4

### Trend 3: Social Trading

**Description:**
- Copy successful traders
- Leaderboards
- Profit sharing

**Relevance:**
- Medium（Community growth tool）
- Application: Axis Pizza social trading feature

**Timeline:**
- Research: Q2
- Prototype: Q3
- Launch: Q4

### Trend 4: Mobile DeFi

**Description:**
- Solana Mobile Stack adoption
- Mobile-first UX
- Push notifications

**Relevance:**
- High（#1 user request）
- Application: Axis Pizza mobile app

**Timeline:**
- Research: Q1（Done）
- Prototype: Q1-Q2（In Progress）
- Launch: Q2

### Trend 5: Firedancer Impact

**Description:**
- 10x throughput
- Lower latency
- More complex programs

**Relevance:**
- Medium（Infrastructure improvement）
- Application: Better UX（faster txns）

**Timeline:**
- Firedancer Launch: Q2
- Axis Pizza optimization: Q3

---

## Tech Report Template

### Weekly Tech Scouting Report

**Date:** March 10, 2025

**1. GitHub Highlights**
- Drift added new liquidation mechanism（commit #1234）
- Jupiter Perps v2 merged（PR #567）
- Anchor v0.30 released（new features）

**2. Discord Discussions**
- Solana Tech: Firedancer beta testing started
- Drift Dev: Intent-based trading discussion
- Jupiter Dev: Mobile SDK planning

**3. Research Papers**
- Messari: "Solana DeFi Q1 Report"
- Delphi: "Perps UX Evolution"

**4. Recommendations**
- High: Monitor Jupiter mobile SDK（competitive threat）
- Medium: Research intent-based trading（future feature）
- Low: Firedancer optimization（infrastructure）

**5. Action Items**
- [ ] Prototype intent-based flow（PM + Designer）
- [ ] Evaluate Jupiter mobile SDK（CTO）
- [ ] Update roadmap（Product Lead）

---

## Success Metrics

### Discovery Rate
- **Target:** 3-5 relevant techs/month
- **Current:** 4/month ✅

### Accuracy
- **Target:** 60%+ trends materialize
- **Tracking:** Trend predictions vs actual

### Timeliness
- **Target:** 3-month lead time（vs competitors）
- **Example:** Mobile app（identified Q4 2024, launching Q1 2025）

---

## Tools

- **GitHub CLI:** Automated repo monitoring
- **Discord bots:** Keyword alerts
- **RSS readers:** Research reports
- **Notion:** Tech trend database
- **Tech Scout (Haiku):** Automated scanning
