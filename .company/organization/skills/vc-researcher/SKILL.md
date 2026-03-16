# vc-researcher

VC情報収集（投資履歴、thesis、連絡先）実行スキル。

## Description

Fundraising Team実行層。VC情報収集、LinkedIn/X調査、Crunchbase/Pitchbook活用。Haiku modelでコスト効率的に大量リサーチ。

## When to Use

- VC50社リスト作成時
- 投資履歴調査
- Partner連絡先発掘
- Portfolio分析

## Process

### Step 1: VC基本情報収集
- Crunchbase/Pitchbook検索
- Website情報抽出
- LinkedIn Company page

### Step 2: Investment Thesis抽出
- Website "Portfolio" page
- Medium/Blog posts
- Partner X posts

### Step 3: Portfolio分析
- 投資先リスト
- Solana/DeFi案件特定
- 類似案件（Drift, Jupiter, Marginfi）

### Step 4: Contact発掘
- Partner名リスト
- LinkedIn profiles
- X accounts
- Email addresses（pattern推測）

### Step 5: Warm Intro経路
- LinkedIn 2nd degree
- Mutual connections
- Portfolio founder connections

## Output Format

```
VC Name: Multicoin Capital
Thesis: DeFi, Solana, Web3
Portfolio: Marginfi ($2M), Helium, Solana
Contact: Kyle Samani (Partner)
LinkedIn: linkedin.com/in/kylesamani
X: @KyleSamani
Email: kyle@multicoin.capital
Warm Intro: [Connection Name] (2nd degree)
RICE Score: 85 (High priority)
```

## Scripts

- `scrape-vc-portfolio.js` - VC portfolio自動収集
- `find-contact.js` - Partner連絡先発掘
- `linkedin-search.js` - LinkedIn 2nd degree検索

## Model

Haiku（コスト効率重視、大量リサーチ向き）
