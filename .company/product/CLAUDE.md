---
department: Product（プロダクト）
role: MVP開発、技術仕様、ロードマップ管理
parent: .company/CLAUDE.md
---

# Product Department - プロダクト室

## 担当領域

1. **ロードマップ管理**
   - マイルストーン設定
   - 機能優先度
   - リリース計画

2. **技術仕様書**
   - アーキテクチャ設計
   - API仕様
   - スマートコントラクト設計

3. **MVP管理**
   - devnet → mainnet移行
   - 機能テスト
   - バグ管理

4. **技術調査**
   - Solana エコシステム動向
   - 依存ライブラリ更新
   - パフォーマンス最適化

## フォルダ構成

```
product/
├── CLAUDE.md (このファイル)
├── roadmap/           # ロードマップ
│   └── YYYY-QX-roadmap.md
├── specs/             # 技術仕様書
│   └── [feature-name]-spec.md
└── mvp/               # MVP管理
    └── [milestone-name].md
```

## ファイル命名規則

### ロードマップ
- **形式:** `roadmap/YYYY-QX-roadmap.md`
- **例:** `roadmap/2026-Q2-roadmap.md`

### 技術仕様書
- **形式:** `specs/[feature-name]-spec.md`
- **例:** `specs/narrative-etf-bundling-spec.md`

### MVPマイルストーン
- **形式:** `mvp/[milestone-name].md`
- **例:** `mvp/mainnet-launch.md`

## ロードマップ管理

### Q2 2026ロードマップ例

```markdown
# Axis Protocol Roadmap - 2026 Q2

## Phase 1: Devnet Stability（4月）
- [ ] Narrative ETF作成機能テスト
- [ ] バンドリングアルゴリズム最適化
- [ ] UI/UX改善（フィードバック反映）
- [ ] セキュリティ監査（初回）

## Phase 2: Mainnet Preparation（5月）
- [ ] スマートコントラクト最終監査
- [ ] Mainnet環境セットアップ
- [ ] 負荷テスト
- [ ] ドキュメント整備

## Phase 3: Mainnet Launch（6月）
- [ ] Mainnet デプロイ
- [ ] 初期Narrative ETF作成（3-5個）
- [ ] モニタリング体制構築
- [ ] コミュニティフィードバック収集

## 技術負債
- [ ] テストカバレッジ向上（目標80%）
- [ ] CI/CD パイプライン改善
- [ ] API レスポンス最適化

## Dependencies
- Solana SDK更新（v1.18）
- Jito MEV integration検討
```

## 技術仕様書フォーマット

```markdown
---
feature: Narrative ETF Bundling
status: in-progress
priority: P0
---

# Narrative ETF Bundling - 技術仕様書

## 概要
複数の予測市場契約をバンドルして、Narrative ETFとして取引可能にする機能。

## 背景・課題
- 現行の予測市場は単一イベントごとに流動性が分断
- ユーザーは複数のポジションを個別に管理する必要

## 要件

### 機能要件
1. 複数の予測契約を選択してバンドル作成
2. バンドルに名前・説明を付与
3. バンドル全体の価格計算
4. バンドルの売買

### 非機能要件
- パフォーマンス: バンドル作成 <2秒
- セキュリティ: スマートコントラクト監査必須
- スケーラビリティ: 1バンドルあたり最大50契約

## アーキテクチャ

### スマートコントラクト
- Program: `axis_bundler`
- Instruction: `create_bundle`, `trade_bundle`, `redeem_bundle`

### API
- `POST /api/bundles` - バンドル作成
- `GET /api/bundles/:id` - バンドル詳細取得
- `POST /api/bundles/:id/trade` - バンドル取引

## 実装計画

### Phase 1: コア機能（2週間）
- [ ] スマートコントラクト実装
- [ ] 単体テスト

### Phase 2: API統合（1週間）
- [ ] REST API実装
- [ ] フロントエンド統合

### Phase 3: テスト・デプロイ（1週間）
- [ ] E2Eテスト
- [ ] Devnetデプロイ
- [ ] ユーザーテスト

## リスク・課題
- オラクル依存（予測市場の決済）
- 流動性プール設計
- ガス代最適化

## 関連ドキュメント
- [アーキテクチャ図](...)
- [Solana Program](https://github.com/muse0509/axis_contract)
```

## MVP管理

### Mainnet Launch Milestone

```markdown
# Mainnet Launch - Milestone

## 目標
Axis Protocol mainnet稼働開始

## 完了条件
- [ ] スマートコントラクト監査完了（2社以上）
- [ ] Mainnet環境デプロイ済み
- [ ] 初期Narrative ETF 3個作成済み
- [ ] モニタリングダッシュボード稼働
- [ ] ドキュメント公開

## タスク

### 開発
- [x] Devnet テスト完了
- [ ] セキュリティ監査（Neodyme予定）
- [ ] Mainnetデプロイスクリプト作成

### インフラ
- [ ] RPC endpoint設定
- [ ] モニタリングツール（Datadog）
- [ ] バックアップ体制

### ドキュメント
- [ ] 開発者ドキュメント
- [ ] ユーザーガイド
- [ ] FAQ

## 期限
2026年6月末

## ブロッカー
- セキュリティ監査の待ち時間（4-6週間）
```

## 技術スタック

### Smart Contract
- **Language:** Rust
- **Framework:** Anchor
- **Chain:** Solana

### Backend
- **Runtime:** Node.js / Bun
- **Framework:** NestJS or Hono
- **Database:** PostgreSQL + Redis

### Frontend
- **Framework:** Next.js 14
- **UI:** TailwindCSS + shadcn/ui
- **Web3:** Solana Wallet Adapter

### Infra
- **Hosting:** Vercel (frontend), Railway (backend)
- **RPC:** Helius or QuickNode
- **Monitoring:** Datadog or Sentry

## 振り分けトリガー

- 開発, 実装, development
- 機能, feature
- ロードマップ, roadmap
- MVP, プロトタイプ
- 技術, architecture
- Solana, スマートコントラクト
- バグ, bug, デバッグ

## 他部署との連携

### Fundraising
- ロードマップ情報提供（ピッチ資料用）
- 技術的な質問対応（VC DD時）

### Marketing
- 機能リリーススケジュール共有
- 技術ブログ記事の監修

### Legal
- オープンソースライセンス確認
- 利用規約の技術的レビュー

### Research
- 競合の技術調査依頼
- 最新技術トレンド情報共有

---

**Shipping the future of prediction markets! 🚀**
