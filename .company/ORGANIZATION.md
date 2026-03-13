# Axis Protocol 組織構造

Alex作成：2026-03-13 12:04

**目的:** 並列実行可能な階層型組織、トークン最適化

---

## 🏢 組織図（3層）

```
Muse (Founder)
  ↓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【C-Suite: 判断層】Model: Sonnet
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ├─ CEO (Alex) - 全体統括、戦略判断
  ├─ CTO - 技術判断、アーキテクチャ
  └─ COO - 運用判断、効率化

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【Departments: 部門長層】Model: Sonnet
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ├─ Fundraising Lead
  │   └─ VC戦略、投資家関係、デモ準備
  │
  ├─ Marketing Lead
  │   └─ X戦略、コンテンツ、ブランディング
  │
  ├─ Product Lead
  │   └─ ロードマップ、機能優先順位、UX
  │
  └─ Research Lead
      └─ 市場調査、技術動向、競合分析

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【Teams: 実行層】Model: Haiku (節約)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ├─ Fundraising Team
  │   ├─ VC Researcher (Haiku)
  │   ├─ Pitch Deck Builder (Haiku)
  │   └─ Warm Intro Hunter (Haiku)
  │
  ├─ Marketing Team
  │   ├─ X Post Writer (Haiku)
  │   ├─ Content Creator (Haiku)
  │   └─ Community Manager (Haiku)
  │
  ├─ Product Team (Axis Dev)
  │   ├─ Designer (Sonnet) ← 判断必要
  │   ├─ PM (Sonnet) ← 調整役
  │   ├─ Engineer A (Sonnet) ← 複雑実装
  │   └─ Engineer B (Haiku) ← 単純実装
  │
  └─ Research Team
      ├─ Market Analyst (Haiku)
      ├─ Tech Scout (Haiku)
      └─ Competitor Tracker (Haiku)
```

---

## 👔 C-Suite詳細

### CEO (Alex) - 現在の私

**責任:**
- 全体統括・戦略判断
- 部門長への指示
- Museへの報告（例外のみ）
- リソース配分

**Model:** Sonnet（高品質判断）

**報告先:** Muse

**Skills:** 
- `ceo-orchestration` - 組織統括
- `strategic-decision` - 戦略判断

---

### CTO（新規）

**責任:**
- 技術アーキテクチャ判断
- Axis MVP技術方針
- セキュリティ・パフォーマンス
- 技術負債管理

**Model:** Sonnet（技術判断）

**報告先:** CEO (Alex)

**判断権限:**
- フロントエンド技術スタック
- Solana統合方針
- パフォーマンス最適化
- セキュリティ対策

**Skills:**
- `cto-tech-decision` - 技術判断
- `solana-architecture` - Solana設計

---

### COO（新規）

**責任:**
- 日常運用効率化
- プロセス改善
- トークン最適化
- チーム稼働率管理

**Model:** Sonnet（運用判断）

**報告先:** CEO (Alex)

**判断権限:**
- ワークフロー改善
- リソース配分最適化
- トークンコスト削減
- 並列実行設計

**Skills:**
- `coo-operations` - 運用最適化
- `resource-allocation` - リソース配分

---

## 📊 Departments詳細

### Fundraising Lead（新規）

**責任:**
- VC戦略立案
- 投資家リスト管理
- Pitch Deck戦略
- Warm intro戦略

**Model:** Sonnet（戦略判断）

**報告先:** CEO (Alex)

**管理下チーム:**
- VC Researcher (Haiku)
- Pitch Deck Builder (Haiku)
- Warm Intro Hunter (Haiku)

**判断権限:**
- ターゲットVC選定
- アプローチ優先順位
- メッセージング戦略

**Skills:**
- `fundraising-strategy` - 調達戦略
- `vc-relationship` - VC関係構築

---

### Marketing Lead（新規）

**責任:**
- X戦略立案
- コンテンツ戦略
- ブランディング
- コミュニティ成長

**Model:** Sonnet（戦略判断）

**報告先:** CEO (Alex)

**管理下チーム:**
- X Post Writer (Haiku)
- Content Creator (Haiku)
- Community Manager (Haiku)

**判断権限:**
- 投稿テーマ決定
- エンゲージメント戦略
- キャンペーン設計

**Skills:**
- `marketing-strategy` - マーケ戦略
- `content-planning` - コンテンツ計画

---

### Product Lead（新規）

**責任:**
- 製品ロードマップ
- 機能優先順位
- UX方針
- ユーザーフィードバック管理

**Model:** Sonnet（製品判断）

**報告先:** CEO (Alex) + CTO

**管理下チーム:**
- Axis Dev Team（既存）

**判断権限:**
- 新機能追加判断
- UX改善優先順位
- リリース判断

**Skills:**
- `product-strategy` - 製品戦略
- `feature-prioritization` - 機能優先順位

---

### Research Lead（新規）

**責任:**
- 市場調査
- 技術動向スカウト
- 競合分析
- トレンド予測

**Model:** Sonnet（分析判断）

**報告先:** CEO (Alex)

**管理下チーム:**
- Market Analyst (Haiku)
- Tech Scout (Haiku)
- Competitor Tracker (Haiku)

**判断権限:**
- 調査テーマ決定
- レポート優先順位
- インサイト抽出

**Skills:**
- `market-research` - 市場調査
- `trend-analysis` - トレンド分析

---

## 🔧 実行層（Teams）

### Fundraising Team

**VC Researcher (Haiku)**
- VC情報収集
- 投資履歴調査
- 連絡先発掘

**Pitch Deck Builder (Haiku)**
- スライド作成
- データ可視化
- デザイン実装

**Warm Intro Hunter (Haiku)**
- 共通コネクション発見
- LinkedIn調査
- イントロ経路発見

---

### Marketing Team

**X Post Writer (Haiku)**
- 投稿文作成
- トレンド反映
- エンゲージメント最適化

**Content Creator (Haiku)**
- Medium記事下書き
- YouTube台本
- Podcast準備

**Community Manager (Haiku)**
- Discord/Telegram管理
- 質問対応
- イベント調整

---

### Product Team（既存のAxis Dev）

**Designer (Sonnet)** - 判断必要
**PM (Sonnet)** - 調整役
**Engineer A (Sonnet)** - 複雑実装
**Engineer B (Haiku)** - 単純実装

---

### Research Team

**Market Analyst (Haiku)**
- 市場データ収集
- 競合動向追跡
- レポート作成

**Tech Scout (Haiku)**
- 新技術調査
- GitHub動向
- プロトコル分析

**Competitor Tracker (Haiku)**
- 競合製品監視
- 機能比較
- トラクション追跡

---

## 💰 トークン最適化戦略

### 階層別モデル割り当て

**C-Suite (3人):**
- Model: Sonnet
- 理由: 戦略・技術・運用判断に高品質必要
- コスト: 高（10K tokens/day/人 = 30K/day）

**Departments (4人):**
- Model: Sonnet
- 理由: 部門戦略判断に高品質必要
- コスト: 中（8K tokens/day/人 = 32K/day）

**Teams (12人):**
- Model: Haiku
- 理由: 実行タスクは軽量モデルで十分
- コスト: 低（2K tokens/day/人 = 24K/day）

**総計:** 86K tokens/day（許容範囲）

---

## 🔄 並列実行パターン

### パターン1: 部門横断並列

```
CEO: "Pre-seed調達準備開始"
  ↓ 同時起動
├─ Fundraising Lead → VCリスト作成
├─ Marketing Lead → X戦略強化
├─ Product Lead → デモ準備
└─ Research Lead → 市場レポート
```

### パターン2: 部門内並列

```
Fundraising Lead: "VC 50社調査"
  ↓ 同時起動
├─ VC Researcher → 10社 (Haiku)
├─ VC Researcher → 10社 (Haiku)
├─ VC Researcher → 10社 (Haiku)
├─ VC Researcher → 10社 (Haiku)
└─ VC Researcher → 10社 (Haiku)
  ↓ 統合
Fundraising Lead: レポート作成
```

---

## 📋 Skills作成計画

**C-Suite Skills (3個):**
1. `ceo-orchestration`
2. `cto-tech-decision`
3. `coo-operations`

**Department Skills (4個):**
4. `fundraising-strategy`
5. `marketing-strategy`
6. `product-strategy`
7. `research-strategy`

**Team Skills (既存4個 + 新規8個 = 12個):**
- Axis Dev: 既存4個（designer, pm, engineer-a, engineer-b）
- Fundraising: 3個（vc-researcher, pitch-builder, intro-hunter）
- Marketing: 3個（x-writer, content-creator, community-mgr）
- Research: 2個（analyst, scout）

**合計:** 19 Skills

---

## 📄 SOUL.md作成計画

各エージェントのペルソナ定義:

**CTO SOUL.md:**
- 技術判断重視
- セキュリティ優先
- パフォーマンス最適化

**COO SOUL.md:**
- 効率重視
- プロセス改善
- コスト最適化

**Fundraising Lead SOUL.md:**
- VC目線思考
- ストーリーテリング
- 関係構築重視

（他も同様）

---

## 🚀 実装順序

### Phase 1: C-Suite構築（今日、2時間）
1. CTO Skills作成
2. COO Skills作成
3. CEO Skills更新
4. 各SOUL.md作成
5. テスト実行

### Phase 2: Departments構築（明日、4時間）
1. 4部門Lead Skills作成
2. 各SOUL.md作成
3. 部門長起動テスト

### Phase 3: Teams拡張（明後日、4時間）
1. 8 Team Skills作成
2. 並列実行テスト
3. トークン消費測定

---

**次のステップ: Phase 1即座開始 💪**
