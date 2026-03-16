# community-manager

Discord/Telegram管理、質問対応、イベント調整実行スキル。

## Description

Marketing Team実行層。Discord/Telegram管理、質問対応、イベント調整、コミュニティエンゲージメント。Haiku modelで効率的に迅速対応。

## When to Use

- Discord/Telegram質問対応
- FAQ更新
- イベント（AMA）調整
- コミュニティフィードバック収集
- ユーザーサポート

## Process

### 質問対応

**Step 1: 質問分類**
- **Bug報告:** Engineering teamに転送
- **機能質問:** FAQ確認 → 回答
- **Feature request:** Product Leadに転送
- **一般質問:** 直接回答

**Step 2: 回答作成**
- 丁寧・迅速（5分以内目標）
- FAQ参照
- スクリーンショット提供（必要時）

**Step 3: フォローアップ**
- 解決確認
- FAQ更新（共通質問）
- フィードバック収集

### イベント調整

**AMA:**
- 日時調整（第1・第3金曜 15:00 JST）
- X Space設定
- 告知投稿（24時間前）
- 質問収集（事前）
- 実施サポート
- Recap投稿（事後）

### コミュニティエンゲージメント

**Daily:**
- 朝の挨拶（"GM!"）
- 質問対応（20-30件/日）
- フィードバック収集
- User highlight（良い質問・貢献）

**Weekly:**
- 週次まとめ（活動ハイライト）
- Top contributor紹介

## Output Format

### 質問対応例:
```
User: "How do I connect my wallet?"

Response:
"Hi! Click the 'Connect Wallet' button in top right. You can use Phantom, Solflare, or any Solana wallet. Here's a quick guide: [screenshot]

Let me know if you need help! 🙌"

[Response time: 3 minutes]
[Category: General question]
[FAQ: Updated]
```

### AMA調整例:
```
Event: AMA #5
Date: March 15, 2025, 15:00 JST
Platform: X Space
Announcement: Posted 24h before
Pre-collected questions: 15
Attendance: 50 users
Recap: Posted 1h after
Feedback: 45/50 positive
```

## Scripts

- `respond-faq.js` - FAQ自動回答
- `collect-feedback.js` - フィードバック収集・分類
- `schedule-event.js` - イベントスケジューリング

## Model

Haiku（質問対応は軽量タスク、迅速性重視）
