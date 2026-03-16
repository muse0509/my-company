# TASK_ROUTER.md - 自動タスク振り分けシステム

## 概要

General トピックに投稿されたタスクを自動分類し、適切なチームに振り分けるシステム。

---

## タスク分類ルール

### 🔧 Developer
- キーワード: コード、GitHub、実装、バグ、デプロイ、スクリプト
- 例: "GitHub リポジトリ更新して"、"自動化スクリプト作って"

### 📢 Marketing
- キーワード: X投稿、ツイート、コンテンツ、ブランディング、SNS
- 例: "X投稿6本作って"、"今日のツイート考えて"

### 💰 Fundraising
- キーワード: 投資家、資金調達、ピッチ、VC、調達
- 例: "投資家リスト作って"、"$750K 調達戦略考えて"

### ⚙️ Operations
- キーワード: 監視、レポート、自動化、HEARTBEAT、システム
- 例: "日次レポート確認して"、"システム状況教えて"

---

## タスクキュー構造

```json
{
  "tasks": [
    {
      "id": "task-001",
      "team": "marketing",
      "priority": "high",
      "description": "X投稿6本作成",
      "created_at": 1773649970000,
      "status": "pending",
      "assigned_to": null
    }
  ],
  "completed": []
}
```

---

## ワークフロー

1. **General でメッセージ受信**
   - Alex が自動分類（メンションなし OK）
   - キーワードマッチング + 文脈理解

2. **タスク追加**
   - `tasks/queue.json` に書き込み（GitHub）
   - チーム名、優先度、内容を記録
   - Git commit & push

3. **各トピック Cron 実行**
   - 5分ごとにキューチェック
   - 該当タスクを取得＆実行

4. **結果報告**
   - General に完了通知
   - `completed` 配列に移動
   - Git commit & push

---

## メンションなし応答ルール

General では以下の場合に自動応答：
- タスク指示と判定された場合
- 質問形式の場合
- 緊急度が高い場合

それ以外は HEARTBEAT_OK で静観。
