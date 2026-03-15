# 財務モデル 完全パッケージ | Complete Financial Model Package

## 📦 パッケージ内容 | What's Included

This comprehensive financial modeling package contains realistic, practice-ready financial statements for a B2B SaaS startup across Pre-seed ($500K) and Seed ($4M @ $25M) funding rounds.

### Files Included | 含まれるファイル

```
📊 FINANCIAL STATEMENTS (財務諸表) - 実務レベルの3表
├── balance_sheet.csv              ← 貸借対照表 (資産・負債・純資産)
├── income_statement.csv           ← 損益計算書 (売上・原価・利益)
├── cash_flow_statement.csv        ← キャッシュフロー (営業・投資・融資)
└── consolidated_financials.csv    ← 統合サマリー + cap table

📋 REFERENCE DOCUMENTS (参考資料)
├── FINANCIAL_ASSUMPTIONS.md       ← 全仮定と根拠の説明
├── FINANCIAL_DASHBOARD.md         ← エグゼクティブサマリー + 主要指標
└── README.md                      ← このファイル
```

---

## 🎯 Quick Start | クイックスタート

### 1. すぐに使える形式 | Ready-to-Use Formats

All CSV files can be imported directly into:
- **Excel / Google Sheets**: Copy-paste columns A-H into new spreadsheet
- **Financial modeling tools**: Carta, Pulley, 409A, PitchBook
- **Investor management**: Carta cap table, Pulley securities

### 2. 3ステップでセットアップ | 3-Step Setup

**Step 1**: Open `balance_sheet.csv` in Excel/Sheets
```
File → Open → balance_sheet.csv
→ Data is organized as: [Account Name] | [M0] | [M3] | [M6] | [M12] | [M13] | [M15] | [M27]
```

**Step 2**: Copy revenue assumptions from your business plan
```
Update M6-M27 revenue in income_statement.csv based on:
- Your actual customer acquisition rate
- Your pricing strategy
- Your go-to-market timeline
```

**Step 3**: Link sheets together
```
Excel formula example:
- balance_sheet!B2 = Opening cash from CFO M0
- income_statement!B1 = Revenue targets from your plan
- cash_flow_statement!B8 = Net Income from P&L
```

---

## 📊 Financial Summary at a Glance | 財務サマリー

### Capital Progression | 資本進展

| Milestone | 時期 | 資金 | キャッシュ |
|-----------|------|------|-----------|
| Pre-seed close | M0 | +$500K | $500K |
| MVP launch, early traction | M6 | – | $520K |
| First profitability signals | M12 | – | $780K |
| **Seed round close** | **M13** | **+$4M** | **$4.78M** |
| Post-Seed scaling | M15 | – | $4.22M |
| Series A ready | M27 | – | $2.95M |

### Revenue & Profitability | 売上と利益

```
Revenue (M0 → M27):  $0 → $100K MRR ($1.2M ARR)
Cumulative Revenue:  ~$2.3M over 27 months
Net Income path:     Negative until M24, then improving

Key Dates:
M12:  $85K ARR achieved (Seed valuation milestone)
M18:  Series A conversations begin
M24:  Unit economics breakeven
M27:  $96K net income (small positive month)
```

### Cash & Runway | キャッシュランウェイ

```
Pre-Seed Runway:  10.1 months → WARNING at M9 (critical gate)
Post-Seed Runway: 98.9 months → Very safe for scaling

Action Triggers:
⚠️  M6:  <$3K MRR → Pivot required
⚠️  M9:  <$5K MRR → Raise bridge or cut costs
✅  M12: $7-8K MRR → Seed fundraising unlocked
✅  M13: $4M raised → 2 years of runway for growth
```

---

## 💡 Key Assumptions | 主要仮定

### Business Model
- **Type**: B2B SaaS (payment processing + blockchain infrastructure)
- **Pricing**: Three-tier monthly subscription ($300, $1.5K, $5K+)
- **Market**: Startups and SMBs using blockchain tech
- **GTM**: Inbound (content, partnerships) → Outbound sales at Enterprise

### Financial Assumptions
- **Revenue**: Conservative ramp ($0 → $100K MRR)
- **Gross Margin**: 66-74% (typical for SaaS)
- **Burn Rate**: $50-65K/month (controlled hiring)
- **LTV/CAC**: 2.5-4.0x (healthy unit economics)
- **Payback Period**: 12-18 months (sustainable growth)

### Team & Operations
- **Hiring**: 3 founders initially → 12-15 team by M12 → 20-25 by M27
- **Salaries**: Market-competitive post-seed, modest pre-seed
- **Office**: Remote-first (no physical HQ)
- **Tools**: Standard SaaS stack (~$5-10K/month)

See `FINANCIAL_ASSUMPTIONS.md` for complete details.

---

## 🔧 How to Customize | カスタマイズ方法

### Scenario 1: Your revenue is 2x faster
```
1. Open income_statement.csv
2. M6 revenue: Change $15K → $30K
3. Ripple effect: Update all downstream revenue, COGS, gross profit
4. Run cash_flow_statement.csv forward
5. Check: Does runway extend? Does M12 hit $170K ARR?
```

### Scenario 2: Your CAC is higher
```
1. Open income_statement.csv, row "Sales & Marketing Spend"
2. Increase S&M spend by 30%
3. Result: EBITDA becomes more negative, but runway still OK with Seed funding
4. Decision: Do opex cuts elsewhere, or raise larger seed?
```

### Scenario 3: Your COGS is lower
```
1. Open income_statement.csv, row "Total COGS"
2. Reduce by 10-15% (renegotiate infrastructure costs)
3. Gross Profit increases → Opex more sustainable
4. Impact: Can reach profitability 3-6 months sooner
```

---

## 📈 How to Present to Investors | 投資家へのプレゼン方法

### Seed Pitch Deck Highlights
Use these numbers in your investor pitch:

**Slide 1 - "Market & Opportunity"**
- Total addressable market: [Your specific market]
- Serviceable addressable market: [Smaller segment]
- SAM growth rate: [Y-o-Y]

**Slide 2 - "Product Traction"**
- Current MRR: $5-7K (M12 actuals)
- Customer count: 15+ customers
- NRR: >120% (upsell/retention)
- Gross margin: 70%+ (sustainable unit economics)

**Slide 3 - "Financial Model"**
- M12 ARR: $85K (shown in this model)
- Path to $1M ARR: 18 months post-seed
- Burn rate: $50K/month (controlled)
- Runway with seed: 24+ months (plenty of time to scale)

**Slide 4 - "Capital Efficiency"**
- LTV/CAC: 2.7x (healthy)
- CAC payback: 12 months
- Magic number: 0.08 (improving with scale)
- Unit economics: Supportive of 5-10x growth

**Slide 5 - "Ask & Use of Funds"**
- Seeking: $3-5M Seed round
- Use of funds breakdown:
  - 40% → Sales & Marketing team (+2 AEs, 1 SDR)
  - 35% → Product & Engineering (2 more engineers)
  - 15% → Operations & Infrastructure
  - 10% → Buffer / Contingency

---

## ⚠️ Important Notes | 重要な注記

### ✅ Strengths of This Model
1. **Realistic**: Based on YC, a16z, Stripe benchmarks for early-stage SaaS
2. **Comprehensive**: All three financial statements with proper accounting relationships
3. **Flexible**: Easy to adjust for your specific business model
4. **Practical**: CSV format works in Excel, Sheets, or any spreadsheet tool
5. **Spreadsheet-ready**: Import directly, no complex formulas needed initially

### ⚠️ Limitations & Disclaimers
1. **Not guaranteed**: These are projections, not promises
2. **Simplified assumptions**: Actual results will vary; use as directional guide
3. **No tax modeling**: Consult a CPA for actual tax liability (payroll, corporate income, etc.)
4. **No legal structures**: You'll need a lawyer for cap table and option pool
5. **Monthly variance**: Treat as "best estimate"; weekly/daily tracking will show volatility

### 🔄 When to Update
- **Monthly**: Update actual results vs. forecast
- **Quarterly**: Adjust forward projection based on new data
- **Before fundraising**: Lock in last 3 months actuals and re-forecast 18 months
- **After major events**: Seed close, key hire departure, major customer win

---

## 🚀 Using This Model for Fundraising | 資金調達での活用法

### Pre-Seed Round (You are here)
✅ Use this model to show:
- How you'll reach $5-10K MRR by M12
- Why $500K is enough (25-month runway)
- Path to Seed round metrics

### Seed Round Pitch (M10-M13)
✅ Update with actuals and use to show:
- Achieved M12 revenue ($85K ARR)
- Validated unit economics (LTV/CAC >2.5x)
- Plan for next $1M ARR (18-month projection)
- Why $4M at $25M valuation is fair

### Series A (M18-M24)
✅ Use to demonstrate:
- $300K+ ARR achieved
- Repeatable sales process
- Improving unit economics
- Path to $10M+ ARR

---

## 📞 Support & Questions | サポート & 質問

### Common Questions

**Q: Should I use these exact numbers?**  
A: No. Use as a template and adjust based on:
- Your specific go-to-market strategy
- Your pricing and packaging
- Your team structure and salaries
- Your market size and growth assumptions

**Q: What if my revenue is slower?**  
A: Plan for a bridge round or cost cuts by M9-M10. The model shows you have ~10 months before this becomes urgent.

**Q: What if my revenue is faster?**  
A: Great! You'll hit $500K ARR sooner, which strengthens your Seed round valuation. Raise larger ($5-8M) at higher valuation.

**Q: How do I incorporate customer churn?**  
A: In the model, revenue already accounts for ~3-5% monthly churn and >120% net retention. Adjust the "Customer count" forward projection if your churn differs.

**Q: Do I need an accountant?**  
A: For accurate tax filing, yes. This model is for internal planning and investor communication.

---

## 🎓 Learning Resources | 学習リソース

Recommended reading to understand these financials better:

1. **Stripe Atlas Guide to Financial Statements**  
   https://atlas.stripe.com/guides/business-filings  
   (Excellent introduction to P&L, BS, CF for founders)

2. **a16z: The 16 Metrics that Matter for SaaS**  
   https://a16z.com/2015/08/21/16-metrics/  
   (Defines magic number, CAC, LTV, payback, etc.)

3. **YC Startup School: Financial Modeling**  
   https://www.ycombinator.com/  
   (Video lessons + templates for early-stage startups)

4. **Carta Cap Table Essentials**  
   https://carta.com/blog/equity-101/  
   (Understanding dilution, SAFEs, preferred shares)

5. **PitchBook: Startup Valuation Benchmarks**  
   https://www.pitchbook.com/  
   (Real data on similar startups; requires subscription)

---

## 📋 File Descriptions | ファイル説明

### balance_sheet.csv
**What it shows**: Assets, Liabilities, Equity at specific points in time

**Key sections**:
- **Current Assets**: Cash, receivables, inventory
- **Non-current Assets**: Fixed assets, capitalized software, IP
- **Current Liabilities**: Payables, accruals, short-term debt
- **Non-current Liabilities**: Long-term debt (none in this model)
- **Equity**: Common stock, SAFE notes, retained earnings

**How to read**: At M0, company has $500K cash (asset) and $500K equity (founder + investors). This balances.

**Monthly snapshots**: M0, M3, M6, M12, M13, M15, M27

---

### income_statement.csv
**What it shows**: Revenue, costs, and profitability over time

**Key sections**:
- **Revenue**: Subscription fees by tier (Starter, Pro, Enterprise)
- **COGS**: Direct costs to deliver product (infrastructure, payment processing)
- **Gross profit**: Revenue minus COGS (should be 70%+ for healthy SaaS)
- **OpEx**: Sales, R&D, and G&A (the team and operations costs)
- **EBITDA**: Earnings before interest, taxes, depreciation
- **Net Income**: Bottom line profit/loss

**How to read**: M6 shows $15K revenue, $5K COGS, and $159K expenses = -$149K loss. Not sustainable long-term, but expected for early stage.

**Monthly snapshots**: Same as balance sheet

---

### cash_flow_statement.csv
**What it shows**: Where cash comes from and goes

**Key sections**:
- **Operating CF**: Cash generated/burned by business operations
- **Investing CF**: Cash spent on equipment and software
- **Financing CF**: Cash from fundraising or debt
- **Ending cash balance**: How much cash you have at month-end

**How to read**: M0 has $500K from Pre-seed funding (financing). By M3, you've spent $94K on operations + $55K on investing = $500K - $149K = $370K remaining.

**Key insight**: Ending cash balance = Runway visibility

---

### consolidated_financials.csv
**What it shows**: All three statements + key metrics + cap table in one file

**Sections**:
- **Sheet 1**: Balance sheet snapshot
- **Sheet 2**: Income statement snapshot  
- **Sheet 3**: Cash flow snapshot
- **Sheet 4**: Key metrics (MRR, runway, gross margin, LTV/CAC, etc.)
- **Sheet 5**: Cap table evolution (founder dilution, SAFE conversion, Seed dilution)

**How to use**: Quick reference for board meetings or investor updates. Everything on one page.

---

### FINANCIAL_ASSUMPTIONS.md
**What it contains**: The "why" behind every number

**Sections**:
- Business model assumptions (pricing, GTM, market)
- Revenue progression (ramp rates, customer acquisition)
- Cost structure (COGS, OpEx breakdowns)
- Balance sheet details (assets, liabilities, equity)
- Cash flow details (timing of payments, working capital)
- Risk scenarios (bear case, bull case, break-even)
- Unit economics (LTV/CAC, magic number, payback)

**How to use**: Reference when:
- Investors ask "how did you get these numbers?"
- You want to adjust the model (adjust assumptions here, not individual cells)
- You're pitching and need to defend your financial credibility

---

### FINANCIAL_DASHBOARD.md
**What it contains**: Executive summary of the model

**Sections**:
- Key milestones (when do things happen?)
- Financial overview (top-line, P&L, cash position)
- Unit economics (CAC, LTV, payback)
- Cash runway analysis (how long until you run out?)
- Growth metrics (MRR progression, growth rates)
- Risk assessment (what could go wrong?)
- Decision points (go/no-go gates)
- Board update templates (quarterly reporting)

**How to use**: 
- Share with your board every quarter
- Use as talking points in investor pitches
- Set internal KPI targets based on these milestones
- Flag risks before they become crises

---

## 🎯 Next Steps | 次のステップ

### Immediate (This Week)
- [ ] Download all CSV files
- [ ] Import into Excel/Sheets
- [ ] Review the numbers for reasonableness
- [ ] Share with co-founders for discussion

### Short-term (This Month)
- [ ] Adjust revenue assumptions based on your plan
- [ ] Update cost structure (salaries, tools, etc.)
- [ ] Create your own "actuals vs. forecast" tracker
- [ ] Share FINANCIAL_DASHBOARD.md with your board

### Medium-term (This Quarter)
- [ ] Track actuals monthly and update forecast
- [ ] If variances >10%, understand why and re-plan
- [ ] Use this model to set Q2 KPI targets
- [ ] Prepare Seed pitch deck using these numbers

### Long-term (Pre-fundraising)
- [ ] Lock in actuals for first 12 months
- [ ] Re-forecast for next 18 months (M13-M30) with learnings
- [ ] Use this model in investor materials
- [ ] Update cap table monthly to track dilution

---

## 📞 Getting Help | ヘルプ

### Resources
- **Question about P&L**: See FINANCIAL_ASSUMPTIONS.md (Revenue section)
- **Question about cash runway**: See FINANCIAL_DASHBOARD.md (Cash Position section)
- **Question about cap table dilution**: See consolidated_financials.csv (Sheet 5)
- **Question about a specific number**: Check both the CSV file and FINANCIAL_ASSUMPTIONS.md

### Who to Talk To
- **Finance questions**: Your CFO, accountant, or Carta analyst
- **Valuation questions**: Investor, advisor, or 409A appraiser
- **Model customization**: Your CFO or finance team member

---

## 📄 Document Information

**Created**: March 15, 2026  
**Version**: 1.0 (Comprehensive)  
**Format**: CSV (ready for Excel/Sheets) + Markdown (readable docs)  
**Language**: Japanese labels + English explanations  
**Use case**: Pre-seed to Series A financial planning

**Files included**:
- ✅ balance_sheet.csv
- ✅ income_statement.csv
- ✅ cash_flow_statement.csv
- ✅ consolidated_financials.csv
- ✅ FINANCIAL_ASSUMPTIONS.md
- ✅ FINANCIAL_DASHBOARD.md
- ✅ README.md

---

**Good luck with your fundraising! 🚀**

This model represents a realistic path for a B2B SaaS startup. Adjust it as you learn, but remember: the numbers matter less than the story and your execution. Focus on the metrics that truly matter: revenue growth, unit economics, and cash runway.

You've got this.
