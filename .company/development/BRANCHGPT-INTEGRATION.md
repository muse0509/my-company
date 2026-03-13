# BranchGPT Integration - Axis MVP自動開発システム

Alex作成：2026-03-13

---

## 🎯 目的

**自動化フロー:**
```
Muse → BranchGPT: "Add X feature"
  ↓
Alex: 指示を受け取る
  ↓
Alex: ローカルでコード編集（axis-agent）
  ↓
Alex: GitHub push → PR作成
  ↓
BranchGPT/Muse: レビュー＆マージ
```

---

## 📋 Repository情報

**URL:** https://github.com/Axis-pizza/Axis_MVP

**構成:**
- `axis-agent`: メインフロントエンド（React + Vite + TypeScript）
- `axis-api`: バックエンド（Cloudflare Workers）
- `axis-mobile`: 将来のAndroidアプリ
- `kagemusha-program`: Solanaスマートコントラクト

**ローカルパス:** `/Users/yusukekikuta/.openclaw/workspace/Axis_MVP`

---

## 🔧 セットアップ済み

### ✅ Step 1: Repository Clone
```bash
cd /Users/yusukekikuta/.openclaw/workspace
git clone https://github.com/Axis-pizza/Axis_MVP.git
```

### ✅ Step 2: プロジェクト構造確認
```
axis-agent/src/
  ├── components/     # UIコンポーネント
  ├── context/        # React Context
  ├── utils/          # ユーティリティ
  └── App.tsx
```

---

## 🚀 実装フェーズ（3段階）

### Phase 1: BranchGPT連携セットアップ（今日、30分）

**連携方法（確認中）:**
- [ ] GitHub Issues経由
- [ ] Webhook経由
- [ ] Slack/Discord経由
- [ ] その他

**必要な設定:**
1. BranchGPT → Alex通知経路
2. GitHub認証（push権限）
3. PR作成自動化

---

### Phase 2: 自動実装ワークフロー（明日、2時間）

#### ファイル作成予定:
```
.company/development/axis-automation/
  ├── branchgpt-listener.js   # BranchGPT指示受信
  ├── code-editor.js          # コード編集実行
  ├── pr-creator.js           # PR作成
  └── README.md               # 運用手順
```

#### GitHub Actions設定:
```yaml
name: BranchGPT Auto-Implementation

on:
  repository_dispatch:
    types: [branchgpt-request]
  issues:
    types: [opened, labeled]

jobs:
  auto-implement:
    runs-on: ubuntu-latest
    steps:
      - name: Parse BranchGPT request
      - name: Checkout Axis_MVP
      - name: Run Alex code editor
      - name: Create PR
      - name: Notify Muse
```

---

### Phase 3: フロントエンド開発チーム（2-3日）

#### サブエージェント構成:

**Agent 1: Main Frontend Developer**
- 担当: UI/UX実装、新機能追加
- 技術: React, TypeScript, Tailwind CSS
- 稼働: 24時間365日

**Agent 2: Component Specialist**
- 担当: 再利用可能コンポーネント作成
- 技術: React Hooks, Design System

**Agent 3: Integration Specialist**
- 担当: Solana Web3.js統合、API連携
- 技術: Solana, Drift, Jupiter統合

#### OpenClaw ACP統合:
```javascript
// サブエージェント起動（例）
sessions_spawn({
  runtime: "acp",
  agentId: "codex", // or claude-code
  mode: "session",
  thread: true,
  task: "Axis MVP frontend development - axis-agent",
  cwd: "/Users/yusukekikuta/.openclaw/workspace/Axis_MVP/axis-agent"
})
```

---

## 📊 ワークフロー詳細

### Approach A: GitHub Issues（推奨・シンプル）

**フロー:**
1. Muse/BranchGPT → GitHub Issueを作成
   - Title: `[BranchGPT] Add X feature`
   - Body: 実装詳細
   - Label: `branchgpt`, `enhancement`

2. Alexが5分ごとにIssueをチェック（cron）
   ```bash
   gh issue list --label branchgpt --state open
   ```

3. 新しいIssueを検出 → 実装開始
   - ローカルでコード編集
   - テスト実行
   - Commit & Push
   - PR作成
   - Issue自動クローズ

4. Muse/BranchGPTに通知
   - Telegram: "PR #123 created"
   - GitHub: PR linkをIssueにコメント

---

### Approach B: Webhook（リアルタイム）

**フロー:**
1. BranchGPT → Webhook送信
   ```json
   {
     "type": "feature_request",
     "repository": "Axis-pizza/Axis_MVP",
     "component": "axis-agent",
     "description": "Add X feature",
     "details": "..."
   }
   ```

2. Alexが受信（CloudflareまたはNgrok）
3. 即座に実装開始
4. PR作成 → 通知

---

## 🎯 テストケース（Phase 1完了後）

### Test 1: 簡単なUI変更
**Issue:**
```
Title: [BranchGPT] Change button color to blue
Body: Update the primary button color in App.tsx from green to blue.
```

**期待される動作:**
1. Alexが検出
2. `App.tsx` を編集
3. PR作成: "feat: Change button color to blue"
4. Museに通知

---

### Test 2: 新しいコンポーネント作成
**Issue:**
```
Title: [BranchGPT] Add UserProfile component
Body: Create a new component in src/components/UserProfile.tsx that displays user wallet address and balance.
```

**期待される動作:**
1. 新ファイル作成: `src/components/UserProfile.tsx`
2. 型定義追加
3. PR作成
4. 通知

---

## 🔐 セキュリティ＆権限

### GitHub認証
**必要な権限:**
- Repository: Read & Write
- Pull Requests: Create
- Issues: Read

**推奨方法:**
- Fine-grained Personal Access Token
- Scope: `Axis-pizza/Axis_MVP` のみ

### GitHubアカウント
**Option A:** Museのアカウント（muse0509）  
**Option B:** 専用Botアカウント（推奨）
  - ユーザー名例: `axis-bot` or `alex-dev-bot`
  - Organizationに招待
  - Write権限付与

---

## 📈 KPI & モニタリング

### 成功指標
- PR作成時間: Issue検出から15分以内
- PR承認率: 80%以上
- コード品質: ESLint/Prettierパス率100%

### ログ記録
```
.company/development/axis-automation/logs/
  ├── 2026-03-13.log
  └── pr-history.json
```

---

## 🎯 次のアクション（Muse判断待ち）

### 今すぐ確認してください:

**質問1:** BranchGPT連携方法
- A. GitHub Issues（推奨）
- B. Webhook
- C. その他

**質問2:** GitHubアカウント
- A. Museのアカウント（muse0509）を使う
- B. 専用Botアカウントを作る（推奨）

**質問3:** 優先度
- A. BranchGPT連携を先に完成（1日）
- B. フロントエンド開発チームを先に起動（2日）
- C. 両方並行（3日）

---

## 📝 メモ

**クローン完了:** 2026-03-13 11:50  
**プロジェクト確認:** axis-agent（React + Vite + TypeScript）  
**次回実行:** Museの回答待ち

---

**Alex: セットアップ準備完了。指示をお待ちしています 💪**
