# product-strategy

製品ロードマップ、機能優先順位、UX方針、ユーザーフィードバック管理のための戦略スキル。

## Description

Product Lead向けスキル。製品ロードマップ作成、機能優先順位決定、UX方針、ユーザーフィードバック管理を提供。

## When to Use

- 製品ロードマップ作成・更新
- 新機能優先順位決定
- UX改善方針決定
- ユーザーフィードバック分析
- リリース判断

## Core Frameworks

### 1. Product Roadmap Framework

**現在のMVP:**
- Drift Perps統合（MainNet live）
- 1-click trading
- Visual risk display
- 127 users

**Next 3 Months（Q1 2025）:**
1. **Jupiter Perps統合**（優先度: High）
   - Why: 2nd largest Perps protocol
   - Impact: 2x trading options
   - Effort: Medium（2週間）

2. **Mobile App（iOS/Android）**（優先度: High）
   - Why: #1 user request
   - Impact: 3x user accessibility
   - Effort: High（4週間）

3. **Auto Risk Management強化**（優先度: Medium）
   - Why: User safety
   - Impact: Lower liquidation rate
   - Effort: Medium（2週間）

**Next 6 Months（Q2 2025）:**
1. Social Trading
2. Portfolio analytics
3. Multi-chain (Ethereum L2s)

**Vision（12 Months）:**
- 10K users
- Top 3 DeFi UX on Solana
- Multi-protocol aggregator

### 2. Feature Prioritization（RICE Framework）

**RICE Score = (Reach × Impact × Confidence) / Effort**

**Example: Mobile App**
- **Reach:** 127 users → 400 users (high)
- **Impact:** 3x accessibility (massive)
- **Confidence:** 80%（user requests confirm）
- **Effort:** 4週間（medium-high）
- **RICE Score:** (400 × 3 × 0.8) / 4 = 240

**Example: Dark Mode**
- **Reach:** 127 users
- **Impact:** 1.2x UX improvement (low)
- **Confidence:** 50%（nice-to-have）
- **Effort:** 1週間（low）
- **RICE Score:** (127 × 1.2 × 0.5) / 1 = 76

**Priority:** Mobile App > Dark Mode

### 3. UX Principles

**Simplicity First:**
- 1-click actions > Multi-step flows
- Visual > Text explanations
- Auto > Manual settings

**User Safety:**
- Risk warnings（明確な損失リスク表示）
- Auto stop-loss（デフォルト有効）
- Educational tooltips

**Performance:**
- <1s load time
- <200ms interaction response
- Real-time price updates

### 4. User Feedback Management

**収集方法:**
1. Discord/Telegram feedback channel
2. In-app feedback button
3. User interviews（月2回）
4. X mentions monitoring

**分類:**
- **Bugs:** 即座修正（24時間以内）
- **Feature requests:** RICE評価
- **UX improvements:** 週次レビュー
- **Questions:** FAQ更新

**フィードバックループ:**
1. 収集（Discord, X, App）
2. 分類（Bug, Feature, UX, Question）
3. 評価（RICE）
4. 実装 or Backlog
5. Update通知（報告者に直接）

## References

- **roadmap-framework.md:** ロードマップ作成プロセス
- **prioritization.md:** 機能優先順位（RICE詳細）
- **user-feedback.md:** フィードバック管理フロー

## Workflow Example

```
1. 週次機能レビュー
   → PM (Sonnet) が優先順位更新
   
2. ユーザーフィードバック分析
   → Community Manager (Haiku) が収集
   → Product Lead (Sonnet) がRICE評価
   
3. 月次ロードマップ更新
   → 次月の実装計画決定
   → Muse承認
   
4. リリース判断
   → CTO技術チェック
   → Product Lead UXチェック
   → GO/NO-GO決定
```

## Communication Style

**報告例:**
- "Users asked for X, shipping in 3 days"
- "Drift integration = #1 requested feature, RICE score 350"
- "127 users feedback > 1000 assumptions"

**原則:**
- Ship to Learn（出してから学ぶ）
- User Truth（ユーザーの声が真実）
- Iterate Weekly（週次イテレーション）

## Success Metrics

- **User Growth:** +50 users/week
- **Retention:** 40%（週次アクティブ）
- **Feature adoption:** 60%（新機能利用率）
- **Feedback response:** 24時間以内（Bugs）
- **Release frequency:** 週1回

## Model

Sonnet（製品判断に高品質必要）

## Team

- Axis Dev Team（Designer, PM, Engineers）
