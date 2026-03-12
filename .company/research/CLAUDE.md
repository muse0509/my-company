---
department: Research（リサーチ）
role: 競合分析、市場調査、技術調査
parent: .company/CLAUDE.md
---

# Research Department - リサーチ室

## 担当領域

1. **競合分析**
   - 予測市場プロトコル調査
   - 機能比較・差別化ポイント
   - トラクション分析

2. **市場調査**
   - 予測市場の市場規模
   - ユーザー動向
   - トレンド分析

3. **技術調査**
   - Solana エコシステム動向
   - 新技術・プロトコル調査
   - セキュリティ研究

4. **ユーザーリサーチ**
   - フィードバック収集
   - ユースケース調査
   - ペインポイント分析

## フォルダ構成

```
research/
├── CLAUDE.md (このファイル)
└── reports/
    ├── competitors/
    ├── market/
    ├── tech/
    └── users/
```

## ファイル命名規則

### 競合調査
- **形式:** `reports/competitors/[competitor-name]-analysis.md`
- **例:** `reports/competitors/polymarket-analysis.md`

### 市場調査
- **形式:** `reports/market/[topic]-market-research.md`
- **例:** `reports/market/prediction-markets-2026.md`

### 技術調査
- **形式:** `reports/tech/[technology]-research.md`
- **例:** `reports/tech/solana-mev-integration.md`

### ユーザーリサーチ
- **形式:** `reports/users/[topic]-user-research.md`
- **例:** `reports/users/narrative-etf-use-cases.md`

## 競合分析

### 主要競合

| プロトコル | 特徴 | 強み | 弱み |
|-----------|------|------|------|
| Polymarket | 最大手、政治予測 | 流動性、UI | 単一イベント分断 |
| Drift Protocol | Perps特化 | Solana、高速 | 予測市場なし |
| Kalshi | CFTC規制対応 | 合法性 | 米国限定、KYC |
| Augur | 分散型、老舗 | 実績 | 流動性低下 |

### Polymarket 詳細分析

```markdown
# Polymarket - 競合分析

## 概要
- **ローンチ:** 2020年
- **チェーン:** Polygon
- **取引高:** $1B+（累計）
- **ユーザー:** 100K+

## 強み
1. **流動性:** 最大手、深い流動性プール
2. **UI/UX:** シンプルで直感的
3. **イベント数:** 政治、スポーツ、経済と幅広い
4. **認知度:** メディア露出多数

## 弱み
1. **単一イベント分断:** 流動性がイベントごとに分散
2. **Polygon依存:** Solanaほど高速ではない
3. **米国規制:** CFTC規制で米国ユーザー制限
4. **オラクル問題:** 決済の中央集権性

## Axisの差別化ポイント
1. **Narrative ETF:** 複数イベントバンドル → 流動性集約
2. **Solana:** 高速・低コスト
3. **トークノミクス:** プロトコル収益の配分設計
4. **オラクル分散化:** （将来的）

## 学べる点
- シンプルなUI設計
- イベント選定基準
- マーケットメイカー戦略

## 注意点
- 規制リスクの管理
- オラクル信頼性の確保
```

## 市場調査

### 予測市場 2026年レポート

```markdown
# Prediction Markets - 2026 Market Research

## 市場規模
- **2023:** $500M（推定）
- **2026:** $2B-$5B（予測）
- **CAGR:** 60-80%

## 成長ドライバー
1. **政治イベント:** 選挙年が多い（米国、日本等）
2. **暗号資産普及:** Web3ユーザー増加
3. **規制明確化:** 米国で予測市場合法化の動き
4. **技術進化:** Solana等の高速チェーン

## ユーザー層
- **早期採用者:** 暗号資産トレーダー（70%）
- **一般ユーザー:** 政治・スポーツファン（20%）
- **機関投資家:** ヘッジファンド等（10%）

## トレンド
1. **マイクロ予測:** 短期（24時間以内）のイベント
2. **AI予測:** AIモデルとの統合
3. **ソーシャル:** SNS連動の予測市場
4. **分散化:** DAOガバナンスの導入

## Axisの位置付け
- **ターゲット:** 早期採用者 + 一般ユーザー
- **差別化:** Narrative ETFで複雑な予測を簡素化
- **参入障壁:** 技術力、Solanaエコシステム
```

## 技術調査

### Solana MEV Integration

```markdown
# Solana MEV Integration - 技術調査

## 背景
- MEV（Maximal Extractable Value）はEthereumで問題
- Solanaでも Jito-Solana でMEV対策

## Jitoの仕組み
- Block Engine: バリデータとの直接通信
- MEV収益をステーカーに還元
- 透明性の高いMEV市場

## Axisへの応用
1. **取引最適化:** Jito経由でトランザクション送信
2. **MEV保護:** フロントランニング対策
3. **収益共有:** MEV収益をトークンホルダーに還元

## 実装難易度
- **難易度:** 中
- **期間:** 2-3週間
- **依存:** Jito SDK統合

## 優先度
- **Phase 2（Mainnet後）**: 高優先
- **理由:** ユーザー保護、収益最大化

## 参考
- Jito Labs: https://jito.network
- Jito SDK: https://github.com/jito-foundation/jito-solana
```

## ユーザーリサーチ

### Narrative ETF Use Cases

```markdown
# Narrative ETF Use Cases - ユーザーリサーチ

## 調査方法
- Discord AMA（50名）
- X/Twitter アンケート（200票）
- 1on1インタビュー（10名）

## 主なユースケース

### 1. 政治トレンド予測
**例:** "Pro-Crypto Regulatory Sweep"
- 含むイベント:
  - SEC新委員長任命
  - 暗号資産規制法案可決
  - 主要取引所の規制緩和

**ユーザーの声:**
> 「個別のイベントを追うのは大変。全体のトレンドに賭けたい」

### 2. マクロ経済予測
**例:** "2026 Rate Cut Cycle"
- 含むイベント:
  - FRB利下げ（3回以上）
  - インフレ率 <2%
  - S&P500 +10%

**ユーザーの声:**
> 「金融市場全体の方向性を予測したい」

### 3. 技術トレンド
**例:** "AI Winter 2026"
- 含むイベント:
  - AI企業の株価 -20%
  - AI関連VC投資 -30%
  - 主要AIモデルの開発停滞

**ユーザーの声:**
> 「テックトレンドを俯瞰的に見たい」

## ペインポイント
1. **流動性分散:** イベントごとに流動性が薄い
2. **管理の手間:** 複数ポジションの管理が面倒
3. **リスク調整:** 個別イベントリスクが高すぎる

## Axisの解決策
- Narrative ETFで複数イベントをバンドル
- 1つのトークンで複数予測を表現
- リスク分散 + 流動性集約
```

## 振り分けトリガー

- 調査, research
- 競合, competitor
- 市場, market
- トレンド, trend
- 分析, analysis
- 「〜について調べて」
- Polymarket, Kalshi等の競合名

## 他部署との連携

### Product
- 技術調査結果の共有
- 新機能アイデアの提供

### Marketing
- 市場トレンド情報提供
- ユーザーインサイト共有

### Fundraising
- 競合情報提供（ピッチ資料用）
- 市場規模データ

### Legal
- 規制動向の調査
- 各国法令リサーチ

---

**Researching to stay ahead! 🔍**
