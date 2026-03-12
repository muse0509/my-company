---
department: Marketing（マーケティング）
role: X戦略、コミュニティ構築、コンテンツ企画
parent: .company/CLAUDE.md
---

# Marketing Department - マーケティング室

## 担当領域

1. **X/Twitter戦略**
   - @muse_jp_sol アカウント運用
   - ツイート企画・スケジュール
   - エンゲージメント分析

2. **コミュニティ構築**
   - Discord/Telegram運営
   - Superteam Japan連携
   - イベント企画

3. **コンテンツ企画**
   - ブログ記事
   - 技術解説
   - ケーススタディ

4. **キャンペーン**
   - リリース告知
   - AMA企画
   - プロモーション

## フォルダ構成

```
marketing/
├── CLAUDE.md (このファイル)
├── content/           # コンテンツ企画
│   └── [content-type]/
├── campaigns/         # キャンペーン管理
│   └── [campaign-name].md
└── social/            # SNS投稿カレンダー
    └── YYYY-MM-social-calendar.md
```

## ファイル命名規則

### コンテンツ
- **形式:** `content/[type]/[title-slug].md`
- **例:** `content/blog/narrative-etf-explained.md`

### キャンペーン
- **形式:** `campaigns/[campaign-name].md`
- **例:** `campaigns/mainnet-launch-campaign.md`

### SNS カレンダー
- **形式:** `social/YYYY-MM-social-calendar.md`
- **例:** `social/2026-03-social-calendar.md`

## X/Twitter戦略

### 現在のステータス
- **アカウント:** @muse_jp_sol
- **フォロワー:** 2,089
- **ツイート数:** 3,845
- **平均エンゲージメント:** 10 いいね、7 RT

### 投稿パターン分析

**高エンゲージメント:**
- AMA告知（48いいね、25RT）
- 技術詳細説明（56いいね、21RT）
- 他プロトコルのシェア（50RT）

**特徴:**
- 技術的な比喩（「マイクラのレッドストーン」）が効果的
- 平均ツイート長: 74文字（簡潔）

### 投稿頻度目標
- **週3-5ツイート**
- **最適時間帯:** 日本時間 12:00, 18:00, 21:00

### コンテンツカテゴリ

| カテゴリ | 頻度 | 例 |
|---------|------|-----|
| プロダクトアップデート | 週1 | 「MVP新機能追加しました」 |
| 技術解説 | 週1-2 | 「Narrative ETFの仕組み」 |
| コミュニティ | 週1 | 「AMA開催します」 |
| 業界トレンド | 週1 | 「予測市場の最新動向」 |
| リツイート・引用 | 適宜 | Solanaエコシステムのニュース |

## SNS投稿カレンダー

```markdown
# Social Calendar - 2026年3月

## Week 1 (3/3-3/9)
- **3/5 (Wed) 12:00:** プロダクトアップデート
  - 「MVP devnetに新機能追加！Narrative ETFバンドリングがよりスムーズに 🚀」
  - #Solana #DeFi #PredictionMarkets

- **3/7 (Fri) 18:00:** 技術解説
  - 「予測市場の流動性問題をNarrative ETFで解決する話（スレッド）」
  - 1/5: 問題提起
  - 2/5: 現行の仕組み
  - 3/5: Axisのアプローチ
  - 4/5: 技術詳細
  - 5/5: 今後の展望

## Week 2 (3/10-3/16)
- **3/12 (Wed) 21:00:** コミュニティ
  - 「Fundraising進捗シェア。Batch 1 VCsへメール送信完了！次はフォローアップ 💪」

- **3/14 (Fri) 12:00:** 業界トレンド
  - 「Polymarketの最新データ見てて思ったこと（スレッド）」

## Week 3 (3/17-3/23)
- **3/19 (Wed) 18:00:** プロダクト
  - 「Mainnet準備中。セキュリティ監査スタート 🔒」

- **3/21 (Fri) 12:00:** AMA告知
  - 「来週AMA開催します！質問募集中 👀」

## Week 4 (3/24-3/30)
- **3/26 (Wed) 21:00:** AMA実施
  - 「今からAMAやります！」（Twitter Spaces or Discord）

- **3/28 (Fri) 18:00:** 振り返り
  - 「今月の振り返り。MVP、Fundraising、コミュニティの進捗まとめ」

## 定期リツイート・エンゲージメント
- 毎日: Solana公式、Superteam Japan、関連プロジェクトの重要ツイート
- 週1: フォロワーのAxis関連ツイートに返信・いいね
```

## コンテンツ企画

### ブログ記事（Medium or 独自ブログ）

**企画中:**

1. **「Narrative ETF Layer とは？予測市場の未来を変える新しいアプローチ」**
   - 対象: 一般ユーザー
   - 内容: Axisの基本コンセプト、問題提起、ソリューション
   - 公開予定: 3月末

2. **「Why Solana for Prediction Markets: Technical Deep Dive」**
   - 対象: 開発者・技術者
   - 内容: Solanaを選んだ理由、技術的優位性
   - 公開予定: 4月中旬

3. **「SEZ Dubai Demo Day振り返り: ファイナリストになるまでの道のり」**
   - 対象: 起業家・スタートアップ
   - 内容: ピッチ準備、学び、フィードバック
   - 公開予定: 4月末

### 技術解説（X Thread or Zenn）

- Narrative ETFの仕組み（技術的）
- Solana Program設計解説
- 予測市場のオラクル問題
- トークノミクス設計思想

## キャンペーン管理

### Mainnet Launch Campaign

```markdown
# Mainnet Launch Campaign

## 目標
- フォロワー: 2,000 → 3,000（+50%）
- エンゲージメント: 平均10いいね → 20いいね
- 外部メディア掲載: 3件以上

## タイムライン

### T-4週（5月）
- [ ] ティーザー投稿開始
- [ ] ブログ記事公開（Narrative ETF解説）
- [ ] パートナーシップ発表準備

### T-2週（6月上旬）
- [ ] カウントダウン開始
- [ ] AMA開催（Discord）
- [ ] メディアリリース配信

### Launch Week（6月中旬）
- [ ] Mainnetデプロイ告知
- [ ] 初期Narrative ETF紹介（3個）
- [ ] ユーザーガイド公開

### T+2週（6月下旬）
- [ ] 振り返り記事
- [ ] ユーザーフィードバック収集
- [ ] 次の機能予告

## コンテンツアセット
- ロゴ・バナー
- 紹介動画（1-2分）
- インフォグラフィック
- デモGIF

## 連携部署
- Product: ロードマップ・技術情報
- Legal: プレスリリース法的レビュー
```

## KPI・分析

### 主要指標

| 指標 | 現在 | 目標（Q2末） |
|------|------|------------|
| Xフォロワー | 2,089 | 3,000 |
| 平均エンゲージメント | 10いいね | 20いいね |
| 週次ツイート | 3回 | 5回 |
| ブログ閲覧数 | - | 500/月 |
| Discord メンバー | - | 200 |

### 分析ツール
- Twitter Analytics
- Google Analytics（ブログ）
- Discord Insights

## 振り分けトリガー

- X, Twitter, SNS
- ツイート, tweet, post
- コンテンツ, content
- コミュニティ, community
- キャンペーン, campaign
- ブログ, 記事
- LP, ランディングページ

## 他部署との連携

### Product
- リリーススケジュール確認
- 技術ブログ監修依頼

### Fundraising
- トラクション数値提供
- 投資家向け資料への数値反映

### Legal
- プレスリリース法的レビュー
- 利用規約・プライバシーポリシー確認

---

**Building the Axis community! 🌟**
