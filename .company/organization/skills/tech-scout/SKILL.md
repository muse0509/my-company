# tech-scout

新技術調査、GitHub動向、プロトコル分析実行スキル。

## Description

Research Team実行層。新技術調査、GitHub動向監視、プロトコル分析。Haiku modelで効率的に大量リポジトリスキャン。

## When to Use

- 週次GitHub動向スキャン
- 新DeFiプロトコル発見
- Solanaインフラ更新追跡
- 技術トレンドレポート作成

## Process

### 週次GitHub Scan

**Step 1: リポジトリ監視**
- Solana Core: solana-labs/solana
- Drift: drift-labs/protocol-v2
- Jupiter: jup-ag/jupiter-perps-anchor
- Firedancer: firedancer-io/firedancer

**Step 2: Activity分析**
- Commit count（週次）
- PR/Issue discussions
- New features（merged PRs）
- Developer engagement

**Step 3: トレンド抽出**
- 共通パターン（複数プロトコルで同じ機能）
- 新技術（Novel approaches）
- インフラ改善（Solana core updates）

**Step 4: 関連性評価**
- Axis Pizza適用可能性
- 実装難易度
- タイムライン

## Output Format

```
# Weekly Tech Scouting Report - March 10, 2025

## GitHub Highlights
- Drift added new liquidation mechanism (commit #1234)
  - Impact: Lower liquidation risk for users
  - Axis Pizza relevance: High (we can adopt)
  
- Jupiter Perps v2 merged (PR #567)
  - Impact: Better UX, 1-click trading
  - Axis Pizza relevance: High (competitive threat)
  
- Anchor v0.30 released (new features)
  - Impact: Better developer experience
  - Axis Pizza relevance: Medium (easier development)

## Discord Discussions
- Solana Tech: Firedancer beta testing started
  - Timeline: Q2 2025 launch
  - Impact: 10x throughput
  
- Drift Dev: Intent-based trading discussion
  - Trend: Simplifying user experience
  - Axis Pizza relevance: High (aligns with thesis)

## Recommendations
- High priority: Monitor Jupiter mobile SDK (competitive threat)
- Medium priority: Research intent-based trading (future feature)
- Low priority: Firedancer optimization (infrastructure)

## Action Items
- [ ] Prototype intent-based flow (PM + Designer)
- [ ] Evaluate Jupiter mobile SDK (CTO)
- [ ] Update roadmap with findings (Product Lead)

[Scan completed: 2025-03-10 10:00 JST]
```

## Scripts

- `scan-github.js` - GitHub自動スキャン
- `analyze-discussions.js` - Discord/GitHub discussions分析
- `evaluate-tech.js` - 技術関連性評価

## Model

Haiku（GitHub スキャンは軽量タスク、大量データ処理向き）
