# market-analyst

市場データ収集、競合動向追跡、レポート作成実行スキル。

## Description

Research Team実行層。市場データ収集、競合動向追跡、レポート作成。Haiku modelで効率的に大量データ処理。

## When to Use

- 週次市場レポート作成
- 競合プロトコルメトリクス収集
- DeFi市場トレンド分析
- 投資家向けデータ準備

## Process

### 週次市場レポート

**Step 1: データ収集**
- DeFiLlama: TVL, Volume
- Dune Analytics: Active addresses, Txns
- Token Terminal: Revenue, P/F ratios
- CoinGecko: Token prices

**Step 2: 競合分析**
- Drift: User count, Volume
- Jupiter: Perps adoption
- Marginfi: TVL trends

**Step 3: トレンド特定**
- Week-over-week growth
- User behavior changes
- Market sentiment

**Step 4: レポート作成**
- Market Overview（3 bullets）
- Competitive Landscape（3 bullets）
- Insights（2-3 actionable）

## Output Format

```
# Weekly Market Report - March 10, 2025

## Market Overview
- Solana DeFi TVL: $8.2B (+2.5% WoW)
- Perps Volume: $52B (+4% WoW)
- Active addresses: 1.2M (+5% WoW)

## Competitive Landscape
- Jupiter launched Perps v2 (better UX)
- Drift hit 100K users milestone
- New entrant: Phoenix (Orderbook DEX)

## User Behavior
- Mobile wallet usage +15% (Solana Mobile)
- Avg trade size down 10% (retail influx)
- Gas fees stable (~$0.001/txn)

## Insights
- Mobile DeFi accelerating → Axis Pizza mobile app priority
- Retail users growing → UX simplification thesis validated
- Jupiter Perps v2 → competitive threat, need differentiation

[Data updated: 2025-03-10 09:00 JST]
```

## Scripts

- `collect-market-data.js` - 市場データ自動収集
- `analyze-competitors.js` - 競合メトリクス分析
- `generate-report.js` - レポート自動生成

## Model

Haiku（データ収集・集計は軽量タスク、コスト効率重視）
