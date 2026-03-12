---
schedule: Daily (JST 1:00)
purpose: X投稿のためのデイリートレンド調査
output: research/reports/daily/YYYY-MM-DD-x-trends.md
---

# X投稿用デイリートレンド調査

## 調査範囲

### 1. Solana DeFi
- 主要プロトコルの動向（Drift, Jupiter, Kamino等）
- TVL変動
- 新機能リリース
- 技術的進展（Firedancer等）

### 2. 予測市場
- Polymarket動向
- Kalshi動向
- 規制ニュース
- 取引高・流動性

### 3. Axisに関連する話題
- Narrative投資のトレンド
- ETFやインデックス系の動き
- DeFi×予測市場の融合

### 4. Web3全般
- 注目のニュース
- バイラルなツイート
- インフルエンサーの発言

---

## 調査方法

### データソース
1. **X (Twitter)**
   - @solana
   - @JupiterExchange
   - @DriftProtocol
   - @Polymarket
   - @Kalshi
   - 主要インフルエンサー

2. **ニュース**
   - The Block
   - CoinDesk
   - Decrypt
   - Solana Foundation Blog

3. **オンチェーンデータ**
   - DeFiLlama（TVL）
   - Solscan（アクティビティ）

---

## 出力フォーマット

### ファイル: `research/reports/daily/YYYY-MM-DD-x-trends.md`

```markdown
# X投稿用デイリートレンド (YYYY-MM-DD)

## 🔥 Top 3 Topics

### 1. [トピック名]
**カテゴリ:** Solana DeFi / 予測市場 / Web3全般  
**内容:** [詳細]  
**Axisとの関連性:** [高/中/低]  
**投稿案のヒント:** [具体的な角度]

### 2. [トピック名]
...

### 3. [トピック名]
...

---

## 📊 データポイント

### Solana DeFi
- TVL: $X.XB (前日比±X%)
- 24h取引高: $X.XM
- 注目プロトコル: [名前]

### 予測市場
- Polymarket 24h取引高: $X.XM
- Kalshi新規市場: X件
- トレンド市場: [名前]

---

## 💡 投稿アイデア（Marketing向け）

1. **アイデア1:** [トピック1を使った投稿角度]
   - 強み: [なぜ良いか]
   - リスク: [注意点]

2. **アイデア2:** [トピック2を使った投稿角度]
   - 強み: [なぜ良いか]
   - リスク: [注意点]

3. **アイデア3:** [Axis開発進捗ベース]
   - 強み: [なぜ良いか]
   - リスク: [注意点]

---

## 🚫 避けるべきトピック

- 規制違反の可能性
- センシティブな政治話題
- 他プロジェクトの批判

---

**調査完了時刻:** [自動記録]  
**次回調査:** 明日 JST 1:00
```

---

## Cron Job設定

```javascript
{
  "name": "Research X投稿用デイリートレンド",
  "schedule": {
    "kind": "cron",
    "expr": "0 1 * * *",  // 毎日 JST 1:00
    "tz": "Asia/Tokyo"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Research部署: X投稿用のデイリートレンド調査を実施してください。Solana DeFi、予測市場、Axisに関連する話題を3つ選び、投稿アイデアも含めてレポートを作成。ファイル保存先: .company/research/reports/daily/",
    "timeoutSeconds": 600
  },
  "delivery": {
    "mode": "none"  // Marketingが読むので通知不要
  },
  "sessionTarget": "isolated"
}
```

---

## 品質基準

### ✅ Good
- Axisと関連性が明確
- 具体的な数値・事実
- 投稿に使えるフック（切り口）

### ❌ Bad
- Axisと無関係
- 抽象的・曖昧
- 投稿に使えない情報

---

**Research部署、毎日自動実行します！**
