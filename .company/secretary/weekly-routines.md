---
schedule: Weekly Routines
owner: Secretary (Alex)
status: active
---

# 週次ルーティン

## 月曜 9:00 - Finance週次レポート

**担当:** Finance部署

**タスク:**
1. 先週のBurn Rate確認
   - 実績 vs 予算
   - 主要な差異分析
2. Runway再計算
   - 残高確認
   - 予測更新
3. アラート
   - 予算超過項目
   - Runway 12ヶ月切ったら警告

**成果物:** `finance/reports/weekly/YYYY-MM-DD-weekly-burn.md`

**Alexアクション:**
- レポート受領
- 異常値あればMuseに通知
- 異常なしなら`HEARTBEAT_OK`

---

## 火曜 10:00 - Research週次トレンド

**担当:** Research部署

**タスク:**
1. Solana DeFiトレンド
   - 主要プロトコルの動向
   - TVL変動
   - 新プロジェクト
2. 競合調査
   - Polymarket, Kalshi等
   - 新規参入者
3. ニュースまとめ
   - Solana Foundation発表
   - 規制動向

**成果物:** `research/reports/weekly/YYYY-MM-DD-weekly-trends.md`

**Alexアクション:**
- レポート受領
- 重要トピックあればMuseに通知
- Marketingに共有

---

## 水曜 14:00 - Marketing週次レビュー

**担当:** Marketing部署

**タスク:**
1. X分析
   - 先週のエンゲージメント
   - フォロワー増減
   - トップツイート
2. コンテンツ案
   - Researchトレンドから3案
   - 次週投稿カレンダー
3. コミュニティ
   - Discord/Telegram動向
   - 主要な質問・フィードバック

**成果物:** `marketing/reports/weekly/YYYY-MM-DD-weekly-review.md`

**Alexアクション:**
- レポート受領
- 投稿案をMuseに提示
- 承認後に投稿スケジュール

---

## 木曜 11:00 - Legal週次チェック

**担当:** Legal部署

**タスク:**
1. 契約状況
   - 進行中の契約
   - 期限迫るもの
2. コンプライアンス
   - Delaware年次報告
   - その他法的義務
3. リスク
   - 規制変更
   - 訴訟リスク

**成果物:** `legal/reports/weekly/YYYY-MM-DD-weekly-compliance.md`

**Alexアクション:**
- レポート受領
- 期限あればMuseに通知
- 通常なら`HEARTBEAT_OK`

---

## 金曜 16:00 - 週次統合レポート

**担当:** Secretary (Alex)

**タスク:**
1. 各部署レポート集約
2. 週次サマリー作成
   - Finance: Burn Rate状況
   - Research: 主要トレンド
   - Marketing: エンゲージメント
   - Legal: コンプライアンス状況
3. 次週のアクション項目

**成果物:** `secretary/reports/weekly/YYYY-MM-DD-weekly-summary.md`

**Alexアクション:**
- Museに週次レポート送信
- 重要事項があればピックアップ

---

## 実装方法

### Option A: Cron Jobで自動化
```bash
# 毎週月曜 9:00 - Finance
# 毎週火曜 10:00 - Research
# etc.
```

### Option B: Heartbeat駆動
```markdown
# HEARTBEAT.mdに追加
毎週月曜: Finance週次レポート実行
毎週火曜: Research週次トレンド実行
...
```

### Option C: 手動トリガー
```bash
# Museが必要なときに
「Finance、週次レポート作って」
→ Alexが振り分け
```

**推奨:** Option A (Cron) + Option C (手動も可能)
