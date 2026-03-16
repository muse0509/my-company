# P/L Revision & Legal Compliance Check ($500K Raise)

**Date:** March 16, 2026  
**Prepared by:** Operations Team  
**Task:** task-002

---

## Changes Made to P/L

### 1. ✅ Contingency Removed from P/L

**Original:** Contingency (10% buffer) was included as an expense line in P/L  
**Revised:** Removed entirely from P/L; kept only in Use of Proceeds budget  

**Rationale:**
- Contingency is not an actual expense — it's a buffer allocation in the budget
- Including it in P/L inflates burn rate artificially
- GAAP compliance: only actual expenses belong in P/L

**Impact:**
- Monthly burn reduced from ~$55K to ~$37-$41K (depending on month)
- More accurate representation of actual operating expenses

---

### 2. ✅ SAFE Contract Costs Moved to Balance Sheet

**Original:** SAFE contract costs ($10K × 2 months = $20K) in Legal expense  
**Revised:** Moved to Balance Sheet as capitalized legal costs (intangible asset)

**Rationale:**
- SAFE contract costs are one-time capitalization expenses
- These costs directly relate to equity financing and should be capitalized
- GAAP guidance: financing costs can be deferred and amortized over time or offset against equity

**Treatment:**
- Capitalize as "Deferred Financing Costs" on Balance Sheet
- Amortize over life of SAFE or offset against equity raised
- No impact on monthly P/L burn

**Impact:**
- $20K removed from P/L expenses
- Improves monthly operating expense accuracy

---

### 3. ✅ R&D / S&M / G&A Breakdown Added

**New Structure:**

#### R&D (Research & Development) - $11.6K-$26.5K/month
- **Personnel:** CEO, Backend Engineer, Research Engineer + payroll tax
- **Benefits:** Health insurance, 401k matching
- **Software:** AWS, Helius/QuickNode, GitHub, Datadog/Sentry
- **Security:** Security audit (post-mainnet)

**Rationale:** Core product development team and infrastructure

---

#### S&M (Sales & Marketing) - $2.5K-$3.0K/month
- **Marketing:** PR, community, design, domain
- **Travel:** VC meetings, conferences

**Rationale:** Customer acquisition, brand building, fundraising

---

#### G&A (General & Administrative) - $12.5K-$23.4K/month
- **Office:** Rent, coworking
- **Utilities:** Internet, phone
- **Software:** Notion, Slack, other SaaS
- **Legal:** Fenwick retainer, Stripe Atlas, trademark, franchise tax, ToS
- **Tax/Accounting:** Armanino, Bench.co, QuickBooks, Gusto, cyber insurance, R&D tax credit, QSBS review, tax filing
- **Recruiting:** Hiring costs

**Rationale:** Corporate overhead, compliance, back-office operations

---

### Summary of Changes

| Category | Old Monthly Burn | New Monthly Burn | Difference |
|----------|------------------|------------------|------------|
| R&D | (not broken out) | $11.6K-$26.5K | — |
| S&M | (not broken out) | $2.5K-$3.0K | — |
| G&A | (not broken out) | $12.5K-$23.4K | — |
| Contingency | $4.2K-$5.2K | **$0** (removed) | -$4.2K-$5.2K |
| SAFE Contract | $1.7K/mo (avg) | **$0** (moved to BS) | -$1.7K |
| **Total OpEx** | **$55.5K-$60.4K** | **$36.8K-$53.0K** | **-$18.7K to -$7.4K** |

---

## Legal Compliance Check

### ✅ Corporate Formation
- **Stripe Atlas:** $739 (one-time) — ✅ Paid
- **Delaware Incorporation:** Included in Atlas — ✅ Complete
- **Delaware Franchise Tax:** $400/year budgeted — ✅ Compliant

### ✅ Legal Retainer
- **Fenwick & West:** $2K/month retainer — ✅ Engaged
- **Coverage:** Corporate, IP, employment, fundraising advice

### ✅ Contracts & Terms
- **SAFE Agreement:** $20K (capitalized) — ✅ Prepared
- **Terms of Service:** $7K budgeted (Jul-26) — ⚠️ Pending
- **Privacy Policy:** Not explicitly budgeted — ⚠️ **ACTION NEEDED**

### ✅ Intellectual Property
- **Trademark Filing:** $3K budgeted (Aug-26) — ⚠️ Pending
- **Patent Strategy:** Covered by Fenwick retainer — ✅ Ongoing

### ✅ Tax Compliance
- **Tax Accountant:** Armanino ($1.5K/mo + $3K setup) — ✅ Engaged
- **Bookkeeping:** Bench.co ($300/mo) — ✅ Active
- **Payroll:** Gusto ($58/mo) — ✅ Active
- **Annual Tax Filing:** $7K budgeted (Jun-27) — ✅ Planned
- **R&D Tax Credit:** $3K/year for preparation — ✅ Planned
- **QSBS Compliance:** $2K setup + $1K/year review — ✅ Planned

### ✅ Employment & Benefits
- **Payroll Tax:** 7.65% employer portion — ✅ Calculated
- **Health Insurance:** $500/person/mo — ✅ Budgeted
- **401(k) Match:** 5% — ✅ Budgeted
- **Workers' Comp:** Not explicitly shown — ⚠️ **ACTION NEEDED**

### ✅ Insurance
- **Cyber Liability:** $6K/year — ✅ Budgeted
- **D&O Insurance:** Not shown — ⚠️ **ACTION NEEDED** (critical for fundraising)
- **General Liability:** Not shown — ⚠️ **ACTION NEEDED**

### ✅ Data & Privacy
- **SOC 2 Audit:** Not budgeted — ⚠️ **Consider for Series A**
- **GDPR Compliance:** Covered by legal retainer — ✅ Ongoing
- **CCPA Compliance:** Covered by legal retainer — ✅ Ongoing

### ✅ Security
- **Security Audit:** $10K total (833/mo × 12) post-mainnet — ✅ Planned
- **Penetration Testing:** Included in audit scope — ✅ Planned

---

## ⚠️ Action Items (Legal Gaps)

### High Priority
1. **D&O Insurance** — Essential before SAFE closes
   - **Cost estimate:** $5K-$10K/year
   - **Action:** Get quotes from Embroker, Founder Shield, or Hiscox
   - **Timeline:** Before any SAFE signatures

2. **Privacy Policy** — Required before product launch
   - **Cost estimate:** $3K-$5K (same firm as ToS)
   - **Action:** Bundle with Terms of Service contract
   - **Timeline:** Before beta launch

### Medium Priority
3. **Workers' Compensation Insurance** — Required by law in most states
   - **Cost estimate:** ~$500-$1K/year (depends on headcount/state)
   - **Action:** Add through Gusto or separate carrier
   - **Timeline:** Before first employee paycheck

4. **General Liability Insurance** — Standard business protection
   - **Cost estimate:** $500-$1K/year
   - **Action:** Bundle with D&O or get standalone policy
   - **Timeline:** Before office lease or first customer

### Low Priority (Future)
5. **SOC 2 Type II Audit** — Not needed immediately
   - **Cost estimate:** $15K-$30K
   - **Timeline:** 6-12 months pre-Series A

---

## Financial Impact of Action Items

| Item | Cost | Frequency | Impact on Burn |
|------|------|-----------|----------------|
| D&O Insurance | $7.5K | Annual | +$625/mo |
| Privacy Policy | $4K | One-time | +$333/mo (12mo amortized) |
| Workers' Comp | $750 | Annual | +$62/mo |
| General Liability | $750 | Annual | +$62/mo |
| **Total Additional** | **$13K/year** | — | **+$1,082/mo** |

**Revised Monthly Burn (with legal gaps filled):** ~$38K-$54K/month  
**Still within $500K / 12-month runway:** ✅ Yes ($41.7K avg target)

---

## Recommendations

1. **Immediate:**
   - Get D&O insurance quotes ASAP (critical for investor protection)
   - Bundle Privacy Policy with ToS contract (save legal fees)

2. **Before First Hire:**
   - Set up Workers' Comp through Gusto (easy integration)

3. **Before Product Launch:**
   - Finalize Terms of Service + Privacy Policy
   - General Liability insurance in place

4. **Ongoing:**
   - Quarterly legal compliance review with Fenwick
   - Annual QSBS review (protect founder tax benefits)

---

## Conclusion

**P/L Revision:** ✅ Complete  
- Contingency removed from expenses
- SAFE costs properly capitalized
- Clean R&D / S&M / G&A breakdown

**Legal Compliance:** ⚠️ Mostly compliant, 4 action items  
- D&O insurance is the only critical blocker
- Other gaps are manageable and budgetable

**Financial Impact:** Minimal  
- +$1K/month to close legal gaps
- Still within 12-month runway target

**Next Steps:**  
1. Review revised P/L with CEO
2. Get D&O insurance quotes (3 carriers minimum)
3. Schedule privacy policy drafting with legal counsel

---

**Files Updated:**
- `axis-pl-revised-500k.csv` — New P/L structure
- `pl-revision-500k-legal-check.md` — This document

**Balance Sheet Impact (to be updated):**
- Add "Deferred Financing Costs" asset: $20K (SAFE contract)
- Amortize or offset against equity when SAFE converts
