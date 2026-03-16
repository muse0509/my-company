# Axis MVP Development Team Skills

**作成日:** 2026-03-13  
**対象:** Axis MVP Frontend開発チーム（4人）

---

## 📦 スキル一覧

### 1. axis-designer.skill
**役割:** UI/UXデザイナー

**機能:**
- Tailwind CSS最適化
- デザインシステム構築・維持
- コンポーネントスタイリング
- レスポンシブデザイン対応

**リソース:**
- `scripts/optimize-tailwind.js` - Tailwind使用状況分析・最適化
- `references/design-system.md` - Axisデザインシステム全体ガイド
- `references/color-palette.md` - ブランドカラーパレット定義

**モデル:** claude-sonnet-4

---

### 2. axis-pm.skill
**役割:** プロダクトマネージャー

**機能:**
- GitHub Issue管理・振り分け
- タスク優先度判断
- PR品質チェック・レビュー調整
- チーム進捗追跡・報告

**リソース:**
- `references/task-assignment.md` - タスク振り分け基準とフローチャート
- `references/pr-review-checklist.md` - PRレビューチェックリスト
- `references/git-workflow.md` - Gitワークフロー（TEAM-CONFIG準拠）

**モデル:** claude-sonnet-4

---

### 3. axis-engineer-a.skill
**役割:** シニアフロントエンドエンジニア

**機能:**
- 複雑なState管理（React Context, Hooks）
- Solana Web3.js統合（Wallet, Transaction, Drift）
- パフォーマンス最適化（re-render, bundle size）
- アーキテクチャ設計

**リソース:**
- `scripts/create-context.js` - React Context + Custom Hook生成
- `scripts/optimize-bundle.js` - バンドルサイズ分析・最適化提案
- `references/solana-integration.md` - Solana統合完全ガイド
- `references/state-patterns.md` - State管理パターン集

**モデル:** claude-sonnet-4

---

### 4. axis-engineer-b.skill
**役割:** ジュニアフロントエンドエンジニア

**機能:**
- シンプルなUIコンポーネント実装
- バグ修正（UI/スタイリング）
- Tailwindスタイリング適用
- ユニットテスト作成

**リソース:**
- `scripts/create-component.js` - Reactコンポーネント生成（テスト付き）
- `scripts/run-tests.js` - テスト実行ラッパー（watch, coverage）

**モデル:** claude-haiku（コスト効率重視）

---

## 🎯 使用方法

### スキルのインストール

```bash
# 個別インストール
openclaw skill install axis-designer.skill

# または全部
openclaw skill install axis-designer.skill axis-pm.skill axis-engineer-a.skill axis-engineer-b.skill
```

### スキル使用

```bash
# デザイナーとしてタスク実行
openclaw run "Improve button hover effects" --skill axis-designer

# PMとしてIssue管理
openclaw run "Organize open issues and assign tasks" --skill axis-pm

# シニアエンジニアとして実装
openclaw run "Implement global wallet state management" --skill axis-engineer-a

# ジュニアエンジニアとしてコンポーネント作成
openclaw run "Create UserAvatar component" --skill axis-engineer-b
```

---

## 🔄 ワークフロー例

### 新機能開発の流れ

1. **PM:** Issue受信 → 分析 → タスク振り分け
   ```bash
   openclaw run "New issue #123: Add staking interface" --skill axis-pm
   # → Engineer Aに複雑なロジック、Designer にUI、Engineer BにUIコンポーネント割り当て
   ```

2. **Designer:** UIデザイン
   ```bash
   openclaw run "Design staking interface" --skill axis-designer
   # → Tailwind最適化、デザインシステム準拠確認
   ```

3. **Engineer A:** State管理実装
   ```bash
   openclaw run "Implement staking state management" --skill axis-engineer-a
   # → React Context作成、Solana統合
   ```

4. **Engineer B:** UIコンポーネント実装
   ```bash
   openclaw run "Create StakeButton component" --skill axis-engineer-b
   # → シンプルなボタンコンポーネント、テスト付き
   ```

5. **PM:** PR レビュー → Muse承認待ち
   ```bash
   openclaw run "Review all staking PRs" --skill axis-pm
   # → 品質チェック、Museに最終承認依頼
   ```

---

## 📊 トークン節約戦略

### モデル選択理由

- **Designer + PM + Engineer A:** claude-sonnet-4
  - 高度な判断・設計が必要
  - 品質重視

- **Engineer B:** claude-haiku
  - シンプルなタスクが中心
  - コスト効率重視

### 想定トークン使用量（週間）

```
Designer:     8K tokens  (3-5タスク)
PM:           6K tokens  (管理・レビュー)
Engineer A:   12K tokens (2-4タスク、複雑)
Engineer B:   5K tokens  (4-6タスク、シンプル)
---
合計:         31K tokens/週
```

---

## 🛡️ 安全ルール（全スキル共通）

### 作業範囲制限
- ✅ `axis-agent/` のみ変更可能
- ❌ `axis-api/` 禁止（バックエンド）
- ❌ `kagemusha-program/` 禁止（Solanaプログラム）
- ❌ `axis-mobile/` 禁止（モバイルアプリ）

### Gitワークフロー
- ❌ mainブランチに直接commit禁止
- ✅ 必ずブランチ作成（`feat/`, `fix/`, `style/`）
- ✅ PR作成 → レビュー → Muse承認 → マージ

### ブランチ命名規則
```
{type}/{role}-{description}

例:
feat/designer-button-animations
fix/engineer-b-mobile-layout
refactor/engineer-a-wallet-context
```

---

## 📚 参考ドキュメント

- `TEAM-CONFIG.md` - チーム構成・運用ルール
- `GIT-WORKFLOW.md` - Git運用詳細
- `/Users/yusukekikuta/.openclaw/workspace/Axis_MVP` - 実際のコードベース

---

## 🚀 次のステップ

1. **スキルインストール**
   ```bash
   cd /Users/yusukekikuta/.openclaw/workspace/my-company/.company/development/axis-team/skills
   openclaw skill install *.skill
   ```

2. **テスト実行**
   ```bash
   # 各スキルで簡単なタスク実行してテスト
   openclaw run "List open issues" --skill axis-pm
   openclaw run "Analyze Tailwind usage" --skill axis-designer
   ```

3. **チーム起動**
   ```bash
   # 4人同時起動（必要に応じて）
   # Alexが各スキルを使ってタスクを実行
   ```

---

**Axis MVPを最速で開発する準備完了 🚀**
