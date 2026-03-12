---
schedule: Daily (JST 2:00)
purpose: X投稿案を作成してMuseに報告
output: marketing/x-drafts/YYYY-MM-DD-drafts.md
approval: Muse承認必須
---

# X投稿案 デイリー作成フロー

## 実行タイミング

**毎日 JST 2:00**（Research調査完了後）

---

## 作成プロセス

### Step 1: インプット収集
1. **Researchレポート読み込み**
   - `research/reports/daily/YYYY-MM-DD-x-trends.md`
   - Top 3 Topics確認
   - 投稿アイデア確認

2. **Product状況確認**
   - 最新の開発進捗
   - マイルストーン達成状況
   - 新機能リリース予定

3. **過去の投稿分析**
   - 先週のエンゲージメント
   - 好評だった投稿スタイル
   - 避けるべきパターン

---

### Step 2: 投稿案作成（英語）

**3案作成:**
- **案A:** Researchトレンドベース
- **案B:** Axis開発進捗ベース
- **案C:** 教育的コンテンツ/考察

**各案の要素:**
1. **本文**（英語、280文字以内）
2. **日本語訳**（参考用）
3. **推定エンゲージメント**（いいね数予想）
4. **強み・弱み**
5. **投稿推奨時間**（PST）

---

### Step 3: Muse報告フォーマット

**ファイル:** `marketing/x-drafts/YYYY-MM-DD-drafts.md`

```markdown
# X投稿案 (YYYY-MM-DD)

**作成時刻:** JST 2:00  
**報告先:** Muse  
**ステータス:** 承認待ち

---

## 📊 本日のトレンドサマリー

[Researchレポートから要約]
- トピック1: [概要]
- トピック2: [概要]
- トピック3: [概要]

---

## 💬 投稿案

### 案A: [タイトル]

**カテゴリ:** Solana DeFi / 予測市場 / Axis進捗

**本文（英語）:**
```
[280文字以内の投稿文]
```

**日本語訳:**
> [日本語訳]

**推定エンゲージメント:**
- いいね: 20-30
- RT: 10-15
- インプレッション: 5,000-8,000

**強み:**
- [なぜこの投稿が良いか]

**弱み:**
- [注意点・リスク]

**推奨投稿時間:**
- PST 9:00 (JST 翌2:00) - 米国朝
- PST 14:00 (JST 翌7:00) - 米国昼

---

### 案B: [タイトル]

[同じフォーマット]

---

### 案C: [タイトル]

[同じフォーマット]

---

## 🎯 Marketing部署の推奨

**最推奨:** 案A  
**理由:** [具体的理由]

**代替案:** 案C  
**理由:** [具体的理由]

---

## ✅ Muse承認アクション

**承認方法:**
1. 案Aを承認 → 「案A承認」と返信
2. 案Bを承認 → 「案B承認」と返信
3. 案Cを承認 → 「案C承認」と返信
4. 修正指示 → 具体的な指示
5. 全却下 → 「却下、再作成」

**承認後:**
- 承認された案を投稿スケジュールに登録
- 投稿時刻: 指定時刻（デフォルト: PST 9:00 = JST 翌2:00）

---

**Marketing部署より報告**
```

---

## 投稿の質基準

### ✅ High Quality
- **具体性:** 数値、事実ベース
- **Axis関連性:** 明確な関連
- **エンゲージ可能性:** リプライ・RTしやすい
- **教育的価値:** フォロワーが学べる
- **簡潔:** 280文字内で完結

**例（Good）:**
```
Firedancer just hit 1M TPS in benchmarks. 

This isn't just speed—it's the infrastructure for next-gen DeFi. 

At Axis, we're building Narrative ETFs on Solana to aggregate liquidity across prediction markets.

Speed + liquidity = 🚀
```
**なぜGood:**
- トレンド（Firedancer）
- Axisの差別化明確
- 簡潔で読みやすい

---

### ❌ Low Quality
- **抽象的:** 「Web3の未来は明るい」
- **Axis無関係:** 他プロジェクトのRTのみ
- **長すぎる:** スレッド不要なのにスレッド
- **ポエム:** 感情的すぎる

**例（Bad）:**
```
The future of Web3 is here. 
Decentralization will change everything. 
Believe in the revolution. 🌟
```
**なぜBad:**
- 抽象的
- Axis不在
- 行動喚起なし

---

## Cron Job設定

```javascript
{
  "name": "Marketing X投稿案デイリー作成",
  "schedule": {
    "kind": "cron",
    "expr": "0 2 * * *",  // 毎日 JST 2:00
    "tz": "Asia/Tokyo"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Marketing部署: 今日のX投稿案を3つ作成してください。ResearchのデイリートレンドとAxisの開発状況を反映し、英語で作成。推定エンゲージメントと推奨投稿時間も含めて、Museに承認を求める形式でレポート。ファイル保存先: .company/marketing/x-drafts/",
    "timeoutSeconds": 600
  },
  "delivery": {
    "mode": "announce",
    "to": "Muse"  // Museに通知
  },
  "sessionTarget": "isolated"
}
```

---

## 承認後の自動投稿

**別Cron Job:**
```javascript
{
  "name": "X自動投稿（Muse承認済み）",
  "schedule": {
    "kind": "cron",
    "expr": "0 2 * * *",  // 毎日 JST 2:00 (PST 9:00前日)
    "tz": "Asia/Tokyo"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Marketing部署: 承認済みのX投稿を実行してください。承認ファイルを確認し、指定時刻に投稿。",
    "timeoutSeconds": 180
  },
  "delivery": {
    "mode": "announce",
    "to": "Muse"  // 投稿完了を通知
  },
  "sessionTarget": "isolated"
}
```

---

## フィードバックループ

### 投稿後分析（翌日）
1. エンゲージメント実績確認
2. 予測との差異分析
3. 次回投稿に反映

**ファイル:** `marketing/x-analytics/YYYY-MM-DD-post-analysis.md`

---

**Marketing部署、毎日自動で投稿案作成します！**
