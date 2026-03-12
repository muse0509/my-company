---
guide: Weekly Cron Jobs Setup
purpose: 週次レポートを自動化
---

# 週次Cron Jobs セットアップ

## 概要

各部署の週次レポートをCron Jobで自動実行

---

## 設定するCron Jobs

### 1. Finance週次レポート（月曜 9:00）

**タスク内容:**
```
ファイル: .company/finance/budget/2026-preseed-monthly-budget.md を確認
- 先週のBurn Rate計算
- Runway再計算
- 予算vs実績比較
```

**Cron設定:**
```javascript
{
  "name": "Finance週次レポート",
  "schedule": {
    "kind": "cron",
    "expr": "0 9 * * MON",  // 毎週月曜 9:00
    "tz": "Asia/Tokyo"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Finance部署: 先週のBurn Rateとrunwayを計算して、週次レポートを作成してください。ファイル保存先: .company/finance/reports/weekly/",
    "timeoutSeconds": 300
  },
  "delivery": {
    "mode": "announce",
    "to": "Muse"
  },
  "sessionTarget": "isolated"
}
```

---

### 2. Research週次トレンド（火曜 10:00）

**タスク内容:**
```
Solana DeFi, 予測市場のトレンド調査
- 主要プロトコル動向
- 競合調査（Polymarket, Kalshi）
- 規制動向
```

**Cron設定:**
```javascript
{
  "name": "Research週次トレンド",
  "schedule": {
    "kind": "cron",
    "expr": "0 10 * * TUE",
    "tz": "Asia/Tokyo"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Research部署: Solana DeFi & 予測市場の週次トレンドを調査してください。ファイル保存先: .company/research/reports/weekly/",
    "timeoutSeconds": 600
  },
  "delivery": {
    "mode": "announce",
    "to": "Muse"
  },
  "sessionTarget": "isolated"
}
```

---

### 3. Marketing週次レビュー（水曜 14:00）

**タスク内容:**
```
X (@muse_jp_sol) 分析
- 先週のエンゲージメント
- フォロワー増減
- 次週の投稿案作成
```

**Cron設定:**
```javascript
{
  "name": "Marketing週次レビュー",
  "schedule": {
    "kind": "cron",
    "expr": "0 14 * * WED",
    "tz": "Asia/Tokyo"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Marketing部署: 先週のX分析と次週の投稿案を作成してください。ファイル保存先: .company/marketing/reports/weekly/",
    "timeoutSeconds": 300
  },
  "delivery": {
    "mode": "announce",
    "to": "Muse"
  },
  "sessionTarget": "isolated"
}
```

---

### 4. Legal週次チェック（木曜 11:00）

**タスク内容:**
```
法務コンプライアンス確認
- 期限迫る契約・報告
- 規制変更
```

**Cron設定:**
```javascript
{
  "name": "Legal週次チェック",
  "schedule": {
    "kind": "cron",
    "expr": "0 11 * * THU",
    "tz": "Asia/Tokyo"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Legal部署: 今週のコンプライアンス状況を確認してください。期限迫る項目があれば報告。ファイル保存先: .company/legal/reports/weekly/",
    "timeoutSeconds": 180
  },
  "delivery": {
    "mode": "announce",
    "to": "Muse"
  },
  "sessionTarget": "isolated"
}
```

---

### 5. Secretary週次統合レポート（金曜 16:00）

**タスク内容:**
```
全部署のレポート集約
- Finance, Research, Marketing, Legal
- 週次サマリー作成
- 次週のアクション項目
```

**Cron設定:**
```javascript
{
  "name": "Secretary週次統合レポート",
  "schedule": {
    "kind": "cron",
    "expr": "0 16 * * FRI",
    "tz": "Asia/Tokyo"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Secretary (Alex): 今週の全部署レポートを集約して、週次統合サマリーを作成してください。ファイル保存先: .company/secretary/reports/weekly/",
    "timeoutSeconds": 300
  },
  "delivery": {
    "mode": "announce",
    "to": "Muse"
  },
  "sessionTarget": "isolated"
}
```

---

## 実際の設定手順

### Step 1: Cron Job追加

```bash
# OpenClaw CLIで設定
openclaw cron add --job '<上記のJSON>'
```

### Step 2: 確認

```bash
openclaw cron list
```

### Step 3: テスト実行

```bash
openclaw cron run --jobId <JOB_ID> --mode force
```

---

## 期待される効果

### Before（手動）
- Museが「Finance、週次レポート作って」と毎回指示
- 忘れることがある
- 不定期

### After（自動）
- 毎週決まった時間に自動実行
- Museは結果を見るだけ
- 定期的・一貫性

---

## オプション設定

### 通知先の変更
```javascript
"delivery": {
  "mode": "announce",
  "channel": "telegram",  // Telegram通知
  "to": "Muse"
}
```

### タイムアウト延長
```javascript
"payload": {
  ...
  "timeoutSeconds": 600  // 10分に延長
}
```

### スキップ条件
```javascript
// 祝日はスキップ等（要カスタマイズ）
```

---

## Alexの提案

**今すぐ設定しますか？**

設定する場合:
1. Finance週次レポート（月曜 9:00）
2. Research週次トレンド（火曜 10:00）
3. Marketing週次レビュー（水曜 14:00）
4. Legal週次チェック（木曜 11:00）
5. Secretary週次統合（金曜 16:00）

全部で5個のCron Jobを設定します ⏰
