---
guide: Alex Auto-Routing Examples
purpose: Alexが自動で部署振り分けする際の具体例
---

# Alexの自動ルーティング例集

## 基本ルール

**Museは部署名を言わなくてOK**  
Alexが内容を判断して、適切な部署に振り分ける

---

## 📋 Finance部署

### パターン1: 予算・経費確認
```
Muse: 今月いくら使った？

Alex: Finance部署に確認します...
     [Finance が計算]
     今月の経費: $4,250
     内訳:
     - Personnel: $2,500
     - Software: $800
     - Legal: $500
     - その他: $450
```

### パターン2: Runway確認
```
Muse: Runwayどのくらい？

Alex: Finance部署が計算します...
     [Finance が計算]
     現在のRunway: 14.3ヶ月
     残高: $680K
     月次Burn: $47.6K/月
```

---

## 🔍 Research部署

### パターン1: トレンド調査
```
Muse: Solanaの最新トレンド教えて

Alex: Research部署に調査を依頼します...
     [Research が調査]
     
     📊 Solana最新トレンド (2026-03):
     1. Firedancer メインネット準備
     2. Token Extensions 採用拡大
     3. DeFi TVL 回復傾向
     
     詳細レポート: research/reports/...
```

### パターン2: 競合調査
```
Muse: Polymarketの最近の動きは？

Alex: Research部署に調べさせます...
     [Research が調査]
     
     Polymarket動向:
     - 取引高: $500M/月（前月比+20%）
     - 新機能: モバイルアプリβ版
     - 規制: 米国除外継続
```

---

## 📢 Marketing部署

### パターン1: X分析
```
Muse: 今週のXの調子は？

Alex: Marketing部署に確認します...
     [Marketing が分析]
     
     📈 今週のX (3/6-3/12):
     - ツイート: 7件
     - 平均いいね: 12
     - 平均RT: 8
     - フォロワー: +15名
     
     ベストツイート: 「Axis Pizza の新機能...」(35いいね)
```

### パターン2: 投稿案
```
Muse: 今日のツイート案作って

Alex: Marketing部署が作成します...
     [Marketing が作成]
     
     🚀 投稿案 (2026-03-12):
     
     案1: Firedancer進捗
     「Firedancerのベンチマーク見た？100万TPS超え...」
     推定: いいね15-20
     
     案2: Axis開発進捗
     「Axis Pizzaの新機能、今週中にテストネットへ...」
     推定: いいね20-30
     
     どちらにしますか？
```

---

## 💼 Fundraising部署

### パターン1: VCリスト
```
Muse: VCリスト見せて

Alex: Fundraising部署から取得します...
     [Fundraising がリスト表示]
     
     🎯 Active VC (Batch 1):
     1. Pantera Capital - メール送信済み (3/10)
     2. Polychain Capital - メール送信済み (3/10)
     3. CoinFund - メール送信済み (3/10)
     ...
     
     次のアクション: フォローアップ (3/17予定)
```

### パターン2: ピッチ資料
```
Muse: デッキ最新版作って

Alex: Fundraising部署に依頼します...
     [Fundraising が作成]
     
     ✅ ピッチデック最新版:
     - Pre-seed $750K @ $5M反映
     - Miami居住地情報追加
     - 最新Burn Rate更新
     
     ファイル: fundraising/pitch-decks/...
     確認しますか？
```

---

## ⚖️ Legal部署

### パターン1: 契約確認
```
Muse: SAFEの条件って何だっけ？

Alex: Legal部署に確認します...
     [Legal が確認]
     
     📋 SAFE条件:
     - Valuation Cap: $5M (Post-Money)
     - Discount Rate: 20%
     - Token Warrant: 25%
     - Pro-Rata Rights: あり
     - MFN: あり
```

### パターン2: コンプライアンス
```
Muse: Delawareの年次報告いつ？

Alex: Legal部署が確認します...
     [Legal が確認]
     
     📅 Delaware Franchise Tax:
     - 期限: 毎年3/1
     - 次回: 2027年3月1日
     - 費用: $400
     
     リマインダー設定しておきますか？
```

---

## 💰 Tax部署

### パターン1: 税務確認
```
Muse: 今年の税金いくら？

Alex: Tax部署に計算してもらいます...
     [Tax が計算]
     
     📊 2026年税金見積もり:
     - 法人税: $0 (NOL適用)
     - Muse個人税: $24,818 (FL居住想定)
     - 合計: $24,818
```

### パターン2: R&D Credit
```
Muse: R&D Credit申請した？

Alex: Tax部署に確認します...
     [Tax が確認]
     
     ✅ R&D Tax Credit:
     - 申請済み: 2026年分 ($30.8K)
     - 次回申請: 2027年1月
     - 状況: IRS審査中
```

---

## 🛠️ Product部署

### パターン1: ロードマップ
```
Muse: 次の機能何？

Alex: Product部署が確認します...
     [Product がロードマップ確認]
     
     🗓️ 次のマイルストーン (M12):
     - Mainnet v1 デプロイ
     - 初期Narrative ETF 3個作成
     - セキュリティ監査 (1回目)
     
     期限: 2027年6月
```

### パターン2: 技術スタック
```
Muse: 使ってる技術まとめて

Alex: Product部署がまとめます...
     [Product が整理]
     
     🔧 技術スタック:
     - Frontend: Next.js, TypeScript
     - Backend: Rust, Anchor (Solana)
     - Infra: Vercel, Helius RPC
     - Monitoring: Datadog, Sentry
```

---

## 複合タスクの例

### 例1: 調達準備（複数部署連携）

```
Muse: 次のラウンド準備したい

Alex: 承知しました！各部署に指示を出します。
     
     📋 タスク分解:
     
     1. Fundraising:
        - 次ラウンド (Seed) のVCリスト作成
        - ピッチデック更新
     
     2. Finance:
        - Burn Rate最新版
        - Runway予測
     
     3. Legal:
        - SAFE条件の見直し
        - 必要な契約書準備
     
     4. Product:
        - マイルストーン進捗まとめ
     
     完了次第、統合レポートを作成します。
     期限はいつまでにしますか？
```

### 例2: 週次レビュー

```
Muse: 今週の振り返りして

Alex: 各部署からレポートを集めます...
     
     📊 今週のサマリー (3/6-3/12):
     
     💰 Finance:
     - 今週のBurn: $11.2K
     - Runway: 14.3ヶ月 (変わらず)
     
     🔍 Research:
     - Solana Firedancer進捗注目
     - 競合動向: Polymarket取引高増加
     
     📢 Marketing:
     - X投稿: 7件
     - エンゲージメント: 平均12いいね
     
     💼 Fundraising:
     - Batch 1メール送信完了 (9社)
     - 返信待ち
     
     詳細レポート: secretary/reports/weekly/...
```

---

## 曖昧な質問への対応

### 例1: 「最近どう？」
```
Muse: 最近どう？

Alex: いい感じですよ！
     
     気になる点を確認しましょうか？
     1. Finance (予算・Runway)
     2. Fundraising (VC進捗)
     3. Product (開発状況)
     4. Marketing (X・SNS)
     
     どれが気になりますか？
```

### 例2: 「何か問題ない？」
```
Muse: 何か問題ない？

Alex: 全部署を確認しますね...
     
     ✅ Legal: コンプライアンス問題なし
     ✅ Finance: 予算内、Runway良好
     ⚠️ Marketing: 今週の投稿3/7（目標未達）
     ✅ Product: 開発スケジュール通り
     
     Marketingの投稿遅れだけ少し気になります。
     対応しますか？
```

---

## NGパターン（避けるべき対応）

### ❌ 過剰な確認
```
Muse: Runwayどのくらい？

Alex: Finance部署に確認してもよろしいでしょうか？ (冗長)
```

**✅ 正しい対応:**
```
Alex: Finance部署が計算します...
     [すぐに確認]
```

---

### ❌ 部署名の押し付け
```
Muse: 予算確認したい

Alex: Finance部署に依頼する必要がありますが、
     よろしいでしょうか？ (不要)
```

**✅ 正しい対応:**
```
Alex: Finance部署に確認します...
     [すぐに取得]
```

---

### ❌ 無駄な待機
```
Muse: 今月の経費は？

Alex: 少々お待ちください...
     [10秒待機]
     Finance部署に確認します...
     [さらに待機]
```

**✅ 正しい対応:**
```
Alex: Finance部署に確認します...
     [即座に計算・表示]
     今月の経費: $4,250
```

---

## まとめ

**Alexの役割:**
1. Museの意図を理解
2. 適切な部署に即座に振り分け
3. 結果を分かりやすく返す
4. 追加提案（必要なら）

**Museがやること:**
- 普通に話すだけ
- 部署名は不要
- Alexがすべて判断

**結果:**
- 効率的
- ストレスフリー
- 組織が「ブンブン回る」✨
