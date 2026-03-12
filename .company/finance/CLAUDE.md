---
department: Finance（経理）
role: 予算管理、経費追跡、売上管理
parent: .company/CLAUDE.md
---

# Finance Department - 経理室

## 担当領域

1. **予算管理**
   - 12ヶ月ランウェイ計画
   - 部門別予算配分
   - Burn rate監視

2. **経費追跡**
   - 日々の経費記録
   - カテゴリ分類
   - 領収書管理

3. **売上・収益管理**
   - トークンセール（将来）
   - サービス収益
   - 投資収益

4. **財務レポート**
   - 月次サマリー
   - キャッシュフロー管理
   - 財務予測

## フォルダ構成

```
finance/
├── CLAUDE.md (このファイル)
├── budget/            # 予算管理
│   └── YYYY-budget-plan.md
├── expenses/          # 経費記録
│   └── YYYY-MM-expenses.md
└── revenue/           # 売上管理
    └── YYYY-MM-revenue.md
```

## ファイル命名規則

### 予算計画
- **形式:** `budget/YYYY-budget-plan.md`
- **例:** `budget/2026-budget-plan.md`

### 経費記録
- **形式:** `expenses/YYYY-MM-expenses.md`
- **例:** `expenses/2026-03-expenses.md`

### 売上記録
- **形式:** `revenue/YYYY-MM-revenue.md`
- **例:** `revenue/2026-03-revenue.md`

## 予算管理

### 2026年予算計画（$200K調達想定）

```markdown
# 2026 Budget Plan

## 資金調達目標
- **目標額:** $200,000
- **コミット済み:** $35,000
- **残り調達:** $165,000
- **条件:** SAFE + Token Warrant, $5M cap

## 使途内訳

### Legal & Setup（法務・設立）- $30,000
- 法人設立費用: $5,000
- SAFE契約作成: $10,000
- 利用規約・プライバシーポリシー: $5,000
- セキュリティ監査: $10,000

### Development（開発）- $80,000
- エンジニア報酬（6ヶ月）: $60,000
- インフラ（Vercel, Railway等）: $12,000
- ツール・ライセンス: $8,000

### Marketing（マーケティング）- $30,000
- SNS広告: $15,000
- イベント出展: $10,000
- コンテンツ制作: $5,000

### Operations（運営）- $40,000
- オフィス・コワーキング: $15,000
- 旅費交通費: $10,000
- 通信費: $5,000
- その他経費: $10,000

### Reserve（予備費）- $20,000
- 緊急対応用

## Burn Rate
- **月次:** $16,667
- **Runway:** 12ヶ月

## マイルストーン別予算

| Phase | 期間 | 予算 | 主要支出 |
|-------|------|------|---------|
| Setup | 月1-2 | $40K | 法務、セキュリティ監査 |
| MVP | 月3-5 | $60K | 開発、インフラ |
| Launch | 月6-8 | $50K | マーケティング、運営 |
| Growth | 月9-12 | $50K | スケール、採用 |
```

## 経費追跡

### 月次経費記録

```markdown
# 2026年3月 - 経費記録

## サマリー
- **合計:** $2,500
- **予算:** $16,667
- **残予算:** $14,167（88%）

## カテゴリ別

### 開発費（$1,200）
| 日付 | 項目 | 金額 | 備考 |
|------|------|------|------|
| 3/1 | Vercel Pro | $20 | ホスティング |
| 3/5 | Railway | $50 | Backend hosting |
| 3/10 | Helius RPC | $100 | Solana RPC |
| 3/15 | GitHub Copilot | $10 | 開発ツール |
| 3/20 | Datadog | $200 | モニタリング |
| 3/25 | OpenAI API | $50 | AI利用 |
| 3/28 | QuickNode | $770 | Solana RPC (mainnet準備) |

### マーケティング費（$800）
| 日付 | 項目 | 金額 | 備考 |
|------|------|------|------|
| 3/3 | X Premium | $8 | SNS運用 |
| 3/12 | イベントチケット | $200 | カンファレンス参加 |
| 3/18 | デザイン外注 | $500 | ロゴ・バナー |
| 3/25 | Domain更新 | $92 | axis-protocol.xyz |

### 運営費（$500）
| 日付 | 項目 | 金額 | 備考 |
|------|------|------|------|
| 3/1 | コワーキング | $300 | 月額会費 |
| 3/10 | 通信費 | $100 | インターネット |
| 3/20 | 書籍 | $50 | 技術書 |
| 3/28 | 交通費 | $50 | ミーティング |

## 税務分類
→ Tax部署と連携して控除対象を確認

## 次月予測
- 開発費増加見込み（mainnet準備）
- マーケティング費増加（ローンチキャンペーン）
```

## 売上・収益管理

### 収益源（将来的）

```markdown
# Revenue Streams - Roadmap

## Phase 1: プロトタイプ（現在）
- 収益なし
- 目的: PMF（Product Market Fit）達成

## Phase 2: TGE（Token Generation Event）
- トークンセール
- 初期流動性提供

## Phase 3: プロトコル収益
- トレーディング手数料（0.3%想定）
- Narrative ETF作成手数料
- プレミアム機能

## Phase 4: エンタープライズ
- API利用料
- カスタムNarrative ETF作成サービス
```

## キャッシュフロー管理

### 月次キャッシュフロー

```markdown
# Cash Flow - 2026年3月

## 収入
- 調達資金: $0（今月追加なし）
- 前月繰越: $35,000

## 支出
- 経費: $2,500
- 給与: $0（自己資金でカバー中）

## 残高
- 月末残高: $32,500
- Runway: 13ヶ月（burn rate: $2,500/月）

## 注意事項
- Fundraising成功（$165K追加）で Runway → 12ヶ月
- 給与開始時にburn rate ↑
```

## 財務レポート

### 月次サマリー（投資家向け）

```markdown
# Financial Summary - 2026年3月

## Highlights
- 💰 Cash on hand: $32,500
- 📊 Burn rate: $2,500/月（給与前）
- ⏱️ Runway: 13ヶ月
- 🎯 Next milestone: $165K調達完了

## 支出内訳
- Development: 48%
- Marketing: 32%
- Operations: 20%

## Budget vs Actual
- 予算: $16,667
- 実績: $2,500
- 差異: -$14,167（予算内）

## Next Steps
- Fundraising完了でburn rate上昇
- Mainnet準備で開発費増加見込み
```

## 振り分けトリガー

- 経費, expense
- 予算, budget
- 売上, revenue, 収益
- 請求, invoice
- 入金, 支払い, payment
- キャッシュフロー, cash flow

## 他部署との連携

### Tax
- 経費データ提供（月次）
- 控除対象の確認
- 税務影響の相談

### Fundraising
- 財務状況サマリー提供
- Burn rate・Runway報告
- 投資家向けレポート作成

### CEO
- 予算オーバー時の警告
- キャッシュフロー監視

### Legal
- 請求書・契約の整合性確認

---

**Managing Axis finances responsibly! 💵**
