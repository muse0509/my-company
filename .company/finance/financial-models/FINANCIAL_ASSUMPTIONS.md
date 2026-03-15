# 財務モデル仮定書 - Financial Model Assumptions

## 概要 | Overview

本ドキュメントは、Pre-seed ($500K) および Seed ($4M @ $25M) ラウンドを対象とした B2B SaaS スタートアップの財務三表（BS, PL, CF）に使用された仮定と基礎を説明します。

---

## ビジネスモデル仮定 | Business Model Assumptions

### Company Profile
- **業種**: B2B SaaS Platform（Payment / Blockchain RPC Service）
- **設立**: $500K Pre-seed ラウンド時（M0）
- **初期チームサイズ**: 3-4名（Founder CEO + 1-2 Engineers + 1 Operations）

### Revenue Model - 収益モデル
**Three-tier SaaS pricing:**
- **Starter Tier**: $300/month (Early adopters, startups)
- **Pro Tier**: $1,500/month (Growth companies)
- **Enterprise**: Custom pricing (Fortune 500 prospects)

### Revenue Progression

| 期間 | Period | MRR | 説明 | Description |
|------|--------|-----|------|-------------|
| M0-M2 | Pre-launch | $0 | MVP開発フェーズ | MVP Development |
| M3-M5 | MVP Launch | $2-5K | Early adopters (5-10 customers) | |
| M6-M9 | Early Growth | $8-15K | Product-market fit validation | |
| M10-M12 | Acceleration | $20-25K | Starting to gain traction | |
| M13-M15 | Post-Seed Launch | $30-40K | Expanded sales team impact | |
| M16-M27 | Scaling | $60-100K | Seed round growth initiatives | |

**Assumptions:**
- Customer churn: 3-5% MRR (high retention for B2B)
- Net retention: >120% (upsell from Starter → Pro)
- ACV (Annual Contract Value): $3.6K (Starter), $18K (Pro), $50K+ (Enterprise)
- Sales cycle: 4-8 weeks

---

## コスト構造 | Cost Structure

### Cost of Revenue (COGS) - 売上原価

#### Infrastructure & Hosting - インフラ・ホスティング
- **M0-M2**: $0 (no revenue)
- **M3-M6**: $2.5K/month (AWS, database, CDN)
- **M6-M12**: $2K/month per $1K MRR (scaling with usage)
- **M13+**: Increases with Enterprise customer adoption

**Logic**: 
- Percentage of Revenue: 15-18% (typical for SaaS)
- Blockchain RPC costs scale with API calls

#### Payment Processing Fees - 決済処理手数料
- Stripe / Payment gateway: 2.9% + $0.30 per transaction
- **Percentage of Revenue**: ~2-3%

#### Blockchain RPC Costs - Blockchain RPC コスト
- Web3 API calls (Infura, Alchemy, QuickNode)
- **Percentage of Revenue**: 0.3-0.5%
- Scales with enterprise customer transaction volume

#### Support & Operations - サポート・運用コスト
- Customer success, onboarding, support tickets
- Percentage of Revenue: 2-5%
- Starts at flat $1K/month, scales with customers

**Total COGS Target**: 25-30% of Revenue

---

### Operating Expenses (OpEx) - 営業費用

#### Sales & Marketing | 販売・マーケティング

**Marketing Spend:**
- M0-M5: $8-15K/month (content, events, partnerships)
- M6-M9: $15-20K/month (demand gen, paid ads)
- M10-M12: $20K/month (brand awareness)
- M13+: $30-40K/month (expanded campaigns for larger market)

**Sales & Marketing Salaries:**
- M0-M5: 1 FTE Sales/Marketing person (~$3-4K/month)
- M6-M9: 1.5 FTE
- M10-M12: 2 FTE ($8-10K/month total)
- M13+: 3-4 FTE (regional expansion)

**Events & Conferences:**
- Sponsorships, booth presence, founder speaking
- 1-2 major events per quarter starting M3

**S&M as % of Revenue:**
- M3-M6: Undefined (high ratio, validating PMF)
- M6-M12: 50-100% of revenue
- M13+: 40% CAC payback (12-18 months)

---

#### Research & Development | 研究開発

**Engineering Salaries:**
- M0-M2: 1-2 FTE Engineers (~$60-80K salaries → $5-6.5K/month)
- M3-M6: 2 FTE Engineers
- M6-M9: 3 FTE Engineers
- M10-M12: 4 FTE Engineers
- M13+: 5-6 FTE (product, platform, infrastructure teams)

**Tools & Infrastructure:**
- GitHub, Figma, Datadog, etc.: $500-1K/month
- Development tools, APIs: $1-2K/month
- Cloud infrastructure (development): $1-2K/month

**Development Expenses:**
- Contractors, freelancers, external consultants
- 10-15% of engineering salary cost

**R&D as % of Revenue:**
- M0-M12: Unconstrained (priority on product)
- M13+: 15-20% of revenue (mature scaling model)

---

#### General & Administrative | 総務管理

**CEO Salary:**
- M0-M12: $20K/month (modest salary for founder)
- M13+: $30-35K/month (market-rate post-seed)

**Finance & Accounting:**
- Bookkeeper: M0-M5: Part-time ($1-2K/month)
- M6+: Full-time contractor + accountant ($4-6K/month)
- Tools (accounting software, tax): $300-500/month

**Legal & Compliance:**
- Startup legal (formation, contracts): M0: $3K one-time
- Ongoing: $2-3K/month (IP, compliance, financing docs)
- Insurance: $500-1K/month

**Office & Facilities:**
- Remote-first team (no physical office)
- Co-working spaces, occasional rentals: $2-5K/month
- Tools: Slack, Notion, etc.: $500-1K/month

**Insurance & Benefits:**
- Liability insurance, D&O (post-seed)
- Health insurance stipends (remote contractors)
- $1-2K/month pre-seed, $3-5K post-seed

**Other G&A:**
- Banking, recruitment, miscellaneous: $1-3K/month

**G&A as % of Revenue:**
- M0-M6: High (15-30%)
- M7-M12: 10-15%
- M13+: 5-10% (leverage shared services)

---

## Balance Sheet 仮定 | Balance Sheet Assumptions

### Assets | 資産

#### Cash & Equivalents | 現金及び現金同等物
- M0: $500K from Pre-seed round
- Decreases monthly by operating burn
- Increases by Seed funding ($4M at M13)
- Never below operating runway threshold

#### Accounts Receivable | 売掛金
- Payment terms: Net 30 for Enterprise customers
- Starter/Pro: Upfront (credit card)
- Assumption: 30% of monthly revenue as AR (conservative)
- M6 onwards: Increasing as Enterprise sales ramp

#### Fixed Assets | 固定資産
- Office equipment: Laptops, monitors, desks ($2-3K per engineer)
- Leasehold improvements: Minimal (remote-first)
- Depreciation: 5-year useful life (20% annual depreciation)

**Capex Schedule:**
- M0: $0
- M1-M3: $5-10K/month (computers for first hires)
- M4-M6: $5-10K/month (growth team equipment)
- M7-M12: $3-5K/month (steady-state)
- M13+: $3-5K/month (controlled spending post-funding)

#### Intangible Assets | 無形資産
- Capitalized Software Development: Amortized over 3 years
- Patents/IP: Provisional patents filed (no cost yet)
- Capitalization policy: Development costs for core product features

**Capitalization Schedule:**
- M0-M2: $0
- M3-M6: $30-45K/month (MVP development)
- M7-M12: $15-30K/month (feature development)
- M13+: $20-50K/month (scaled development post-seed)

---

### Liabilities | 負債

#### Accounts Payable | 買掛金
- AWS, contractors, vendors: Net 30 payment terms
- Policy: Pay invoices within 30 days
- Increases with OpEx scale
- Assumption: 20-30% of monthly expenses as AP

#### Accrued Expenses | 未払い費用
- Employee bonuses, benefits, taxes not yet paid
- Payroll accruals (between pay cycles)
- Increases with team size

#### Deferred Revenue | 前受金
- Annual customers paying upfront (uncommon at this stage)
- M0-M12: $0 (monthly billing assumed)
- M13+: 5-10% of MRR as annual upfronts
- Not modeled heavily in early stages

#### Debt | 債務
- **Pre-seed**: $0 (equity financing only)
- **Post-Seed**: $0 (assumed equity-only Seed round)
- No credit lines drawn

---

### Equity | 純資産

#### Common Stock | 普通株式
- Pre-seed: 8M authorized shares @ $0.0625/share = $500K
- Post-Seed: Unchanged ($500K) — new investors get separate preferred shares

#### SAFE Notes | SAFE 転換社債
- Typically used in Pre-seed as discount or MFN mechanism
- Assumed to convert at Seed round at 2x discount (common)
- Not explicitly modeled as separate line item

#### Retained Earnings / Accumulated Deficit | 利益剰余金 / 累積赤字
- Pre-seed (M0-M12): Deep negative (company burning cash)
- Seed (M13+): Deficit narrows as business scales
- M27 projection: Approaching breakeven / small positive

---

## キャッシュフロー仮定 | Cash Flow Assumptions

### Operating Cash Flow | 営業キャッシュフロー
- Heavily negative in early months (building company)
- Improves as revenue grows and unit economics prove
- Working capital adjustments:
  - AR increases as revenue scales (20-30 day collection)
  - AP increases with team size (30-day payment terms)
  - Minimal deferred revenue impact (early stage)

### Investing Cash Flow | 投資キャッシュフロー
- **CapEx**: $3-5K/month for equipment
- **Software Development Capitalization**: $30-50K/month (varies by stage)
- **No M&A or major acquisitions**: Not planned in 27-month projection

### Financing Cash Flow | 融資キャッシュフロー
- **M0**: +$500K (Pre-seed close)
- **M13**: +$4M (Seed round close @ $25M valuation)
- Assumes no secondary transactions or debt repayment

---

## 重要な仮定と留意事項 | Key Assumptions & Caveats

### Revenue Assumptions
✅ **Conservative**: Assumes 10-15 enterprise customers by M12 (realistic for B2B SaaS)
⚠️ **Risk**: Could be lower if PMF validation takes longer
✨ **Upside**: Viral growth or large beta customer could accelerate by 2-3x

### Burn Rate Assumptions
- Average burn: $50-65K/month (includes salary, infra, marketing)
- Assumes controlled hiring (2 FTE adds per quarter)
- No executive overspending or major unexpected costs

### Seed Valuation
- **$25M post-money valuation** implies:
  - ~$15.5M pre-seed valuation (rough, if $4M = 27% dilution, post-ESOP)
  - ~5x from Pre-seed valuation (typical for strong seed)
  - Assumes revenue of $130K ARR at M13 (validates 10-15% growth)

### Unit Economics (Implied)
- **LTV/CAC**: 2.5-3.5x (healthy for B2B SaaS at this stage)
- **Payback Period**: 12-18 months
- **Magic Number** (Revenue Growth / S&M): 0.5-1.2x (improving toward 1.0+)

---

## リスク調整とシナリオ | Risk Adjustments & Scenarios

### Bear Case (50% slower growth)
- Revenue ramp delayed by 3-4 months
- Burn rate increases (hiring acceleration to compete)
- Seed round pushed to M15 or later
- Cash runway: Could hit minimum by M10-M11

**Mitigation**: 
- Achieve revenue milestones faster
- Control hiring pace
- Extend pre-seed runway

### Bull Case (2x revenue growth)
- Product resonates strongly with early customers
- $50K MRR by M12 (vs $25K)
- Series A conversations begin by M18
- Strong unit economics support faster scaling

**Opportunity**:
- Seed round could be larger ($6-8M) or higher valuation

### Break-even Case
- Modeled at M24-M25 with current OpEx structure
- Requires $50-60K MRR to sustain at full operating cost
- M27 shows small net income assuming B2B SaaS execution
- Achievable if customer retention >95% MRR and gross margin maintains 70%+

---

## 財務レート | Key Financial Rates

| Metric | Pre-seed | M12 | Post-Seed | M27 |
|--------|----------|-----|-----------|-----|
| Gross Margin | N/A | 70% | 69% | 74% |
| Magic Number | N/A | 0.02 | 0.08 | 0.50 |
| Burn Rate (mo) | $50K | $42K | $48K | $41K |
| Runway (mo) | 10 | 19 | 99 | 72 |
| Revenue / OpEx | 0% | 39% | 39% | 162% |

---

## ガイダンス | Guidance for Use

### これらの数字は：
✅ **Realistic**: Based on YC, a16z, and Stripe benchmarks for early-stage SaaS
✅ **Conservative**: Revenue assumptions are modest; aggressive execution can beat these
✅ **Flexible**: Can be adjusted for specific go-to-market strategy
✅ **Spreadsheet-ready**: CSV format for direct Excel/Google Sheets import

### これらの数字は**ない**：
❌ **Guaranteed**: These are projections, not promises
❌ **Exact timing**: Monthly variance will occur; treat as directional
❌ **Comprehensive tax modeling**: Simplified for startup finance, consult CPA
❌ **Negotiated prices**: Hardware, salaries, and tools vary by region/market

---

## 次のステップ | Next Steps

1. **Validate assumptions** with your executive team
2. **Update revenue** based on actual customer conversations
3. **Lock headcount plan** for next 12 months
4. **Create monthly forecast** by disaggregating into weeks for planning
5. **Set KPI targets** around CAC, LTV, payback period, churn
6. **Plan Board deck** around cash burn and runway updates
7. **Track actuals vs. forecast** monthly for variance analysis

---

## 参考資料 | References

- **YC Startup School**: Financial modeling for startups (https://www.ycombinator.com/)
- **Stripe Atlas**: Guide to financial statements (https://atlas.stripe.com/)
- **a16z**: The metrics that matter for SaaS (https://a16z.com/2015/08/21/16-metrics/)
- **Carta**: Capitalization table best practices (https://carta.com/)
- **Founder Institute**: Early-stage financial planning (https://fi.co/)

---

**Document Version**: 1.0  
**Last Updated**: 2026-03-15  
**Finance Owner**: Pre-Seed Finance Team  
**Next Review**: Monthly (monthly P&L close)
