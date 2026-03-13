# Git Workflow - 安全なブランチ運用

Alex作成：2026-03-13

**重要原則:** mainブランチに直接コミットしない

---

## 🌿 ブランチ戦略

### 絶対ルール
```
❌ mainブランチに直接commit
✅ 機能ブランチ作成 → commit → PR → レビュー → マージ
```

---

## 📋 ブランチ命名規則

### フォーマット
```
{type}/{担当者}-{簡潔な説明}
```

### Type種類
- `feat/` - 新機能
- `fix/` - バグ修正
- `style/` - スタイル変更
- `refactor/` - リファクタリング
- `docs/` - ドキュメント

### 例
```
feat/engineer-b-add-user-profile
fix/designer-button-color
style/designer-tailwind-update
refactor/engineer-a-state-optimization
```

---

## 🚀 実装フロー（ステップバイステップ）

### Step 1: タスク受信
```
Muse/BranchGPT: "Add UserProfile component"
  ↓
PM: タスク分析 → Engineer B割り当て
```

### Step 2: ブランチ作成
```bash
cd /Users/yusukekikuta/.openclaw/workspace/Axis_MVP
git checkout main
git pull origin main
git checkout -b feat/engineer-b-user-profile
```

### Step 3: 実装
```bash
# コード編集
# テスト実行
npm run lint
npm run format
```

### Step 4: コミット
```bash
git add axis-agent/src/components/UserProfile.tsx
git commit -m "feat(components): Add UserProfile component

- Display wallet address
- Show balance
- Responsive design"
```

### Step 5: Push & PR作成
```bash
git push origin feat/engineer-b-user-profile

# PRを作成
gh pr create \
  --title "feat: Add UserProfile component" \
  --body "## 変更内容
- UserProfile component追加
- Wallet address表示
- Balance表示

## スクリーンショット
(optional)

## テスト
- [x] ESLint pass
- [x] Prettier pass
- [ ] Manual test" \
  --base main
```

### Step 6: Muse承認待ち
```
PR作成 → Telegram通知
  ↓
Muse: レビュー＆承認
  ↓
GitHub: マージ
  ↓
ブランチ削除
```

---

## ⚠️ 安全チェック

### commit前
```bash
# 変更ファイル確認
git status

# 差分確認
git diff

# axis-agent/のみか確認
# ❌ axis-api/, kagemusha-program/ が含まれていたらAbort
```

### push前
```bash
# mainと同期
git fetch origin main
git rebase origin/main

# コンフリクト解決（必要なら）
```

---

## 🔄 ブランチライフサイクル

### 1. 作成
```bash
git checkout -b feat/engineer-b-new-feature
```

### 2. 作業
```bash
# 編集
git add .
git commit -m "feat: ..."
```

### 3. Push
```bash
git push origin feat/engineer-b-new-feature
```

### 4. PR作成
```bash
gh pr create
```

### 5. マージ後削除
```bash
# GitHub上でマージ後
git checkout main
git pull origin main
git branch -d feat/engineer-b-new-feature
```

---

## 🚨 緊急時の対応

### 間違えてmainにcommitした場合
```bash
# 最新commitを取り消し
git reset --soft HEAD~1

# ブランチ作成
git checkout -b feat/fix-accidental-commit

# 再度commit
git add .
git commit -m "..."
git push origin feat/fix-accidental-commit
```

### mainに直接pushしてしまった場合
```bash
# ⚠️ 危険：すぐにAlexまたはMuseに報告
# Revert必要
git revert HEAD
git push origin main
```

---

## 📊 ブランチ管理

### 現在のブランチ確認
```bash
git branch
```

### リモートブランチ確認
```bash
git branch -r
```

### 古いブランチ削除
```bash
# ローカル
git branch -d feature/old-branch

# リモート
git push origin --delete feature/old-branch
```

---

## 🎯 チーム運用

### PM責任
- ブランチ命名ルール遵守確認
- PR作成前のチェック
- マージ後のブランチ削除

### Engineer責任
- 必ずブランチ作成
- mainに直接commitしない
- コンフリクト解決

### Alex責任
- 全プロセス監視
- 間違いの検出
- Museへの即座報告

---

## ✅ チェックリスト（毎回実行）

### 実装開始前
- [ ] mainから最新をpull
- [ ] 新しいブランチ作成
- [ ] ブランチ名が規則に従っているか

### commit前
- [ ] `git status` で変更ファイル確認
- [ ] `axis-agent/` のみか確認
- [ ] ESLint/Prettierパス

### push前
- [ ] mainと同期（rebase）
- [ ] コンフリクトなし
- [ ] テスト実行

### PR作成時
- [ ] タイトル・説明文記載
- [ ] base branchが`main`
- [ ] Draft/Readyステータス適切

---

**全チームメンバーがこのワークフローを厳守します 💪**
