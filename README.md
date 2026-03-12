# My Company - Axis Protocol Virtual Organization

Axis Protocol専用の仮想会社組織構造。OpenClawのサブエージェント機能とファイルベースの組織管理を組み合わせたシステム。

## 🏢 組織構成

```
Muse (CEO & Founder)
    │
    ├── Alex (Secretary) - 窓口、TODO管理、壁打ち
    │
    └── Departments:
        ├── Fundraising - VC管理、ピッチ準備、投資家対応
        ├── Product - MVP開発、技術仕様、ロードマップ
        ├── Marketing - X戦略、コミュニティ、コンテンツ
        ├── Finance - 予算管理、経費、契約
        ├── Tax - 税務処理、確定申告、節税対策
        ├── Legal - 契約書、SAFE条件、規制対応
        └── Research - 競合分析、市場調査、技術調査
```

## 📦 インストール

### 前提条件
- OpenClaw インストール済み
- Git設定済み
- GitHub アカウント

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/muse0509/my-company.git
cd my-company

# OpenClawのワークスペースにシンボリックリンク作成（オプション）
ln -s $(pwd)/.company ~/.openclaw/workspace/.company
```

## 🚀 使い方

### 基本フロー

1. **Alexに話しかける**
   ```
   > おはよう、Alex
   ```

2. **タスク追加**
   ```
   > 今日のTODOに「VCへのメール送信」を追加して
   ```

3. **部署への依頼**
   ```
   > Pantera Capitalへのピッチデック更新したい
   → Fundraising部署に自動振り分け
   ```

4. **壁打ち・相談**
   ```
   > ちょっと壁打ちしたいんだけど、料金体系で悩んでて
   → Secretary（Alex）が対話で深掘り
   ```

### 部署別機能

#### 🔹 Secretary（Alex）
- TODO管理: `secretary/todos/YYYY-MM-DD.md`
- クイックメモ: `secretary/inbox/`
- 壁打ち: `secretary/notes/`

#### 🔹 Fundraising（資金調達）
- VCデータベース: `fundraising/vcs/`
- ピッチ資料: `fundraising/pitches/`
- 投資家アップデート: `fundraising/updates/`

#### 🔹 Product（プロダクト）
- ロードマップ: `product/roadmap/`
- 技術仕様: `product/specs/`
- MVP管理: `product/mvp/`

#### 🔹 Marketing（マーケティング）
- コンテンツ企画: `marketing/content/`
- SNS戦略: `marketing/social/`
- キャンペーン: `marketing/campaigns/`

#### 🔹 Finance（経理）
- 予算管理: `finance/budget/`
- 経費追跡: `finance/expenses/`
- 売上管理: `finance/revenue/`

#### 🔹 Tax（税理士）
- 確定申告: `tax/filings/`
- 控除処理: `tax/deductions/`
- 税務レポート: `tax/reports/`

#### 🔹 Legal（法務）
- 契約書: `legal/contracts/`
- コンプライアンス: `legal/compliance/`
- 知財管理: `legal/ip/`

#### 🔹 Research（リサーチ）
- 調査レポート: `research/reports/`

## 📂 フォルダ構造

```
my-company/
├── .company/
│   ├── CLAUDE.md                    # 組織全体のルール
│   ├── secretary/
│   │   ├── CLAUDE.md
│   │   ├── inbox/
│   │   ├── todos/
│   │   └── notes/
│   ├── ceo/
│   │   ├── CLAUDE.md
│   │   └── decisions/
│   ├── fundraising/
│   │   ├── CLAUDE.md
│   │   ├── vcs/
│   │   ├── pitches/
│   │   └── updates/
│   ├── product/
│   │   ├── CLAUDE.md
│   │   ├── roadmap/
│   │   ├── specs/
│   │   └── mvp/
│   ├── marketing/
│   │   ├── CLAUDE.md
│   │   ├── content/
│   │   ├── social/
│   │   └── campaigns/
│   ├── finance/
│   │   ├── CLAUDE.md
│   │   ├── budget/
│   │   ├── expenses/
│   │   └── revenue/
│   ├── tax/
│   │   ├── CLAUDE.md
│   │   ├── filings/
│   │   ├── deductions/
│   │   └── reports/
│   ├── legal/
│   │   ├── CLAUDE.md
│   │   ├── contracts/
│   │   ├── compliance/
│   │   └── ip/
│   ├── research/
│   │   ├── CLAUDE.md
│   │   └── reports/
│   └── reviews/
├── README.md
└── .gitignore
```

## 🎯 Axis Protocol 固有の機能

### SAFE + Token Warrant管理
Legal部署で以下を管理:
- SAFE契約テンプレート（$5M cap）
- Token Warrant条項
- 投資家ごとの契約書

### VC Database
Fundraising部署で42社のVCデータベース管理:
- Tier 1 Solana VCs（9社）
- Tier 1 Crypto VCs（10社）
- Tier 2 Emerging VCs（14社）
- Tier 3 Strategic VCs（9社）

### Tax最適化
Tax部署で以下をサポート:
- 経費の税務分類
- 青色申告準備
- 節税戦略

## 🔧 カスタマイズ

### 部署の追加

1. `.company/` 内に新しい部署フォルダ作成
2. `CLAUDE.md` を作成（役割・ルール定義）
3. `.company/CLAUDE.md` の部署一覧を更新

### Alex（秘書）のカスタマイズ

`.company/secretary/CLAUDE.md` を編集:
- 口調の調整
- 対応範囲の変更
- 振り分けロジックの追加

## 📝 ファイル命名規則

- **日付:** YYYY-MM-DD
- **ファイル名:** kebab-case
- **プロジェクト:** `project-[name].md`
- **契約書:** `YYYY-MM-DD-[party]-[type].md`

## 🔒 セキュリティ

### .gitignoreの重要性

以下は **コミットしないこと:**
- 契約書原本（署名済み）
- 財務データ（実際の金額）
- 個人情報
- APIキー・パスワード

### 推奨管理方法

- 機密情報: 別途暗号化して管理
- 契約書: テンプレートのみGit管理
- APIキー: 環境変数 or 秘密管理ツール

## 🤝 貢献

このリポジトリはAxis Protocol専用ですが、構造を参考にして独自の仮想会社を作成できます。

## 📄 ライセンス

MIT License

## 📧 Contact

- **Owner:** Muse
- **X/Twitter:** [@muse_jp_sol](https://twitter.com/muse_jp_sol)
- **Email:** yusukekikuta.05@gmail.com

---

**Built with ❤️ for Axis Protocol by Alex & Muse**
