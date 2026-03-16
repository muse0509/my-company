# Tasks - チームタスク管理

このディレクトリは OpenClaw の自動タスクルーティングシステムで使用されます。

## ファイル

- **queue.json** - タスクキュー（pending + completed）
- **TASK_ROUTER.md** - システム仕様とワークフロー

## 使い方

1. Telegram General トピックにタスクを投稿
2. Alex が自動で分類して `queue.json` に追加
3. 各チーム（Marketing/Fundraising/Operations/Developer）が 5分ごとにチェック
4. タスク実行後、結果を General に報告

## タスク追加例

```
「X投稿6本作って」 → Marketing チームに振り分け
「投資家リスト更新」 → Fundraising チームに振り分け
「GitHub を更新」 → Developer チームに振り分け
```

メンション不要。自然言語で指示するだけ。
