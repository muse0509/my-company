# x-writer

X投稿文作成（過去632件分析活用）実行スキル。

## Description

Marketing Team実行層。X投稿文作成、トレンド反映、エンゲージメント最適化。過去632件分析データを活用し、Haiku modelで効率的に高品質投稿生成。

## When to Use

- 週次7日分投稿下書き作成
- 特定イベント告知投稿
- トレンド対応投稿
- 個人的ストーリー投稿

## Process

### Step 1: コンテンツ計画確認
- 週次カレンダー（月-日）
- トピックミックス（Axis Pizza 30%, DeFi 30%, Community 20%, Personal 20%）

### Step 2: 投稿文作成
- **長さ:** 50-100文字（最適）
- **時間:** 15:00 JST優先
- **トーン:** Authentic, technical but accessible
- **禁止:** ハッシュタグ使用禁止

### Step 3: エンゲージメント最適化
- 個人的ストーリー優先（85% better engagement）
- 技術的比喩活用（"マイクラのレッドストーン"）
- Call-to-action（AMA参加、feedback依頼）

### Step 4: 画像・動画提案
- スクリーンショット（製品更新時）
- チャート（growth metrics）
- GIF（デモ）

## Output Format

```
Post 1 (Monday 15:00 JST):
"Weekend spent shipping Drift integration. This week: Jupiter Perps + UI polish. Let's go! 🚀"
[Image: None]
[Engagement prediction: 12 likes, 8 RTs]

Post 2 (Tuesday 15:00 JST):
"How Drift Perps work: Imagine trading with 10x leverage but auto-risk management. Here's the flow..."
[Image: Flow diagram]
[Engagement prediction: 15 likes, 10 RTs]
```

## Scripts

- `generate-post.js` - 投稿文自動生成（632件分析ベース）
- `optimize-time.js` - 最適投稿時間提案
- `analyze-performance.js` - 過去投稿パフォーマンス分析

## Model

Haiku（投稿文作成は軽量タスク、大量生成向き）
