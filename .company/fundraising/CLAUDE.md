---
department: Fundraising（資金調達）
role: VC管理、ピッチ準備、投資家対応
parent: .company/CLAUDE.md
---

# Fundraising Department - 資金調達室

## 担当領域

1. **VCデータベース管理**
   - 42社のVCリスト（Tier 1-3）
   - コンタクト履歴・ステータス管理
   - Batch送信スケジュール

2. **ピッチ資料準備**
   - デッキ更新・バージョン管理
   - 各VCに合わせたカスタマイズ
   - データルーム整備

3. **投資家対応**
   - メール・コミュニケーション
   - ミーティング準備・フォローアップ
   - 質問対応・DD資料準備

4. **資本政策**
   - SAFE条件管理
   - Token Warrant設計
   - 株主構成シミュレーション

## フォルダ構成

```
fundraising/
├── CLAUDE.md (このファイル)
├── vcs/               # VCデータベース
│   └── [vc-name].md
├── pitches/           # ピッチ資料
│   └── deck-vYYYY-MM-DD.md
└── updates/           # 投資家向けアップデート
    └── YYYY-MM-investor-update.md
```

## ファイル命名規則

### VCファイル
- **形式:** `vcs/[vc-name]-[tier].md`
- **例:** `vcs/pantera-capital-tier1.md`

### ピッチ資料
- **形式:** `pitches/deck-vYYYY-MM-DD.md`
- **例:** `pitches/deck-v2026-03-10.md`

### 投資家アップデート
- **形式:** `updates/YYYY-MM-investor-update.md`
- **例:** `updates/2026-03-investor-update.md`

## VCデータベース管理

### VCファイルテンプレート

```markdown
---
name: Pantera Capital
tier: 1
solana_score: 9/10
stage: Pre-seed, Seed
ticket_size: $1M-$50M
contact_method: cold-email
email: info@panteracapital.com
status: batch-1-sent
last_contact: 2026-03-12
---

# Pantera Capital

## 基本情報
- **Tier:** 1（Solana重点）
- **Solana露出度:** 9/10
- **ステージ:** Pre-seed, Seed, Series A
- **チケットサイズ:** $1M-$50M

## コンタクト情報
- **メールアドレス:** info@panteracapital.com
- **コンタクト方法:** Cold email accepted
- **担当者:** [TBD]

## 投資テーゼ
- Solana 2018年から早期投資
- DeFi、NFT、インフラに注力
- ポートフォリオ: Magic Eden, Phantom等

## コンタクト履歴

### 2026-03-12 - Batch 1メール送信
- **件名:** Quick intro: Axis - Native ETF Layer on Solana
- **内容:** Narrative ETF Layer の紹介、SEZ Demo Day実績
- **ステータス:** 送信済み、返信待ち

## 次のステップ
- [ ] 3/19: フォローアップメール（未返信の場合）
- [ ] ミーティング設定
- [ ] DD資料準備
```

### ステータス管理

| ステータス | 説明 |
|-----------|------|
| researched | 調査済み、未コンタクト |
| batch-1-sent | Batch 1メール送信済み |
| replied | 返信あり |
| meeting-scheduled | ミーティング設定済み |
| dd-in-progress | DD（デューデリジェンス）中 |
| term-sheet | タームシート交渉中 |
| committed | コミット済み |
| passed | 見送り |

## ピッチ資料管理

### デッキ更新ログ

各バージョンの変更履歴を記録：

```markdown
# Pitch Deck v2026-03-10

## 変更点
- スライド5: トラクション更新（SEZ Demo Day追加）
- スライド8: ロードマップQ2詳細化
- スライド12: チーム紹介にJitoアドバイザー追加

## 使用対象
- Batch 1 VCs（Pantera, Polychain等）

## リンク
- Docsend: https://docsend.com/view/x4hjnwnukaf48ack
- PDF: [deck-v2026-03-10.pdf]
```

## 投資家向けアップデート

### 月次アップデート構成

```markdown
# Investor Update - 2026年3月

## サマリー
- MVP: devnet稼働中、mainnet準備中
- トラクション: [KPI更新]
- 資金調達: $35K committed, targeting $200K

## プロダクト進捗
- [主要マイルストーン]

## ビジネス進捗
- [パートナーシップ、コミュニティ等]

## チーム
- [採用、アドバイザー等]

## 財務
- Burn rate: [金額]
- Runway: [ヶ月]

## Next Steps
- [今後の計画]

## Ask
- 追加調達、紹介依頼等
```

## Batch送信戦略

### Batch 1（Cold Email - 9社）
**送信済み:** 2026-03-12  
**対象:** Pantera, Polychain, CoinFund, Solana Ventures, 6th Man, Reciprocal, Asymmetric, Coinbase Ventures, Slow Ventures

**フォローアップ:**
- 7日後（3/19）: 未返信VCへフォローアップ
- 14日後（3/26）: 2回目フォローアップ

### Batch 2（Twitter DM - 6社）
**予定:** 2026-03-18-22  
**対象:** Reciprocal, Asymmetric, Big Brain, 6th Man, Not Boring, Robot

### Batch 3（Warm Intro - 4社）
**準備中**  
**対象:** a16z Crypto, Paradigm, Jump Crypto, Multicoin

**必要:** Superteam JP connections

## SAFE + Token Warrant

### 標準条件（Axis Protocol）

```
投資額: $50K-$200K（プレシード）
Valuation Cap: $5M
Discount Rate: 20%（次回ラウンド）
Pro-Rata Rights: あり
Token Warrant: 投資額の[20-30]%相当、TGE時[10-20]%ディスカウント
```

**Legal部署と連携:**
- 契約書ドラフト: Legal
- 条件交渉サポート: Fundraising
- 最終レビュー: Legal + CEO

## 振り分けトリガー

- VC, investor, 投資家
- pitch, deck, ピッチ
- fundraising, 調達
- SAFE, valuation
- メール送信（VC宛）

## 他部署との連携

### Legal
- SAFE契約ドラフト・レビュー
- 投資条件交渉

### Product
- ピッチ資料用の技術情報提供
- ロードマップ更新

### Marketing
- トラクション数値提供
- コミュニティ状況報告

### Finance
- 財務状況サマリー
- Burn rate・Runway計算

---

**Let's close this round! 💰**
