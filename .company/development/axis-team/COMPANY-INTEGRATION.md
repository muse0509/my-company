# カンパニーエージェント → Axis開発チーム連携

Alex作成：2026-03-13 12:01

**目的:** カンパニー部門（Fundraising, Marketing等）からAxis MVP開発チームへのタスク自動振り分け

---

## 🎯 連携フロー

```
カンパニーエージェント
  ↓ 機能追加要求
Axis PM（常駐）
  ↓ タスク分析
Designer / Engineer A / Engineer B
  ↓ 実装
PR作成 → Muse承認 → マージ
```

---

## 📋 部門別連携パターン

### 1. Fundraising部門 → Axis開発チーム

**トリガー:**
- VCからフィードバック
- デモ準備要求
- 機能追加要望

**例:**
```
VC Meeting後:
"Polychain meetingでダッシュボードUIを改善してほしいとフィードバックあり。
チャートを大きく、カラーを変更してほしい。"
  ↓
Axis PM: Designer + Engineer Bに振り分け
  ↓
48時間以内に実装 → PR
```

---

### 2. Marketing部門 → Axis開発チーム

**トリガー:**
- X投稿用のスクリーンショット改善
- ランディングページ変更
- トラクションダッシュボード更新

**例:**
```
X投稿準備:
"ユーザー数127を強調したダッシュボード画像が欲しい。"
  ↓
Axis PM: Designer + Engineer Bに振り分け
  ↓
2時間以内に実装 → スクリーンショット提供
```

---

### 3. Product部門 → Axis開発チーム

**トリガー:**
- 新機能追加
- バグ報告
- パフォーマンス改善

**例:**
```
新機能要求:
"Drift Perps統合のダッシュボード表示が必要。"
  ↓
Axis PM: Engineer A（複雑な統合）に振り分け
  ↓
2日以内に実装 → PR
```

---

## 🔧 実装方法（2つのOption）

### Option A: GitHub Issues経由（推奨・シンプル）

**フロー:**
1. カンパニーエージェントがGitHub Issue作成
   - Repository: `Axis-pizza/Axis_MVP`
   - Label: `from-company-{department}`
   - Title: `[Marketing] Improve dashboard screenshot`
   - Body: 要求詳細

2. Axis PMがIssueを5分ごとにチェック（cron）
   ```bash
   gh issue list --label from-company --state open
   ```

3. 新Issue検出 → タスク分析 → 担当者起動

4. 実装完了 → PR作成 → Issueクローズ

**メリット:**
- GitHubネイティブ
- 履歴が残る
- シンプル

---

### Option B: Alex直接振り分け（即座）

**フロー:**
1. カンパニーエージェント → Alexに報告
   ```
   "Marketing: ダッシュボードスクリーンショット改善必要"
   ```

2. Alex → Axis PM起動
   ```
   sessions_spawn(
     task="Marketing要求: Dashboard screenshot改善",
     label="axis-pm-marketing-request"
   )
   ```

3. PM → 担当者起動 → 実装

**メリット:**
- リアルタイム
- 柔軟

**デメリット:**
- GitHub履歴なし

---

## 💡 推奨：Option A（GitHub Issues）

**理由:**
1. 全ての要求がGitHubに記録される
2. PM/開発チームの作業履歴が可視化
3. Muse/外部メンバーも確認可能

---

## 🚀 セットアップ（Option A実装）

### Step 1: GitHub Issue Template作成

**ファイル:** `.github/ISSUE_TEMPLATE/company-request.md`

```markdown
---
name: Company Request
about: Request from Company department (Fundraising, Marketing, etc.)
title: '[DEPARTMENT] '
labels: from-company
assignees: ''
---

## Department
- [ ] Fundraising
- [ ] Marketing
- [ ] Product
- [ ] Research

## Request
(詳細を記述)

## Priority
- [ ] Urgent (24h)
- [ ] High (2-3 days)
- [ ] Normal (1 week)

## Expected Result
(期待される成果)
```

---

### Step 2: カンパニーエージェントにGitHub Issue作成機能追加

**各部門のエージェントに:**
```javascript
// Fundraising, Marketing, Product等
function createAxisRequest(department, title, body, priority) {
  exec(`gh issue create \
    --repo Axis-pizza/Axis_MVP \
    --title "[${department}] ${title}" \
    --body "${body}" \
    --label "from-company,${department.toLowerCase()},priority-${priority}"
  `);
}
```

---

### Step 3: Axis PM Issue監視cron設定

**cron:**
```javascript
{
  "name": "Axis PM Issue Monitor",
  "schedule": {
    "kind": "cron",
    "expr": "*/5 * * * *", // 5分ごと
    "tz": "Asia/Tokyo"
  },
  "payload": {
    "kind": "systemEvent",
    "text": "Check GitHub Issues for new company requests. If found, analyze and assign to appropriate team member (Designer/Engineer A/Engineer B)."
  }
}
```

---

### Step 4: PM自動タスク振り分けロジック

**PMの判断基準:**

```
Issue Label: UI/UX関連
  → Designer（Sonnet）

Issue Label: 複雑な機能
  → Engineer A（Sonnet）

Issue Label: シンプルな変更
  → Engineer B（Haiku・節約）

Issue Label: バグ修正
  → Engineer B（Haiku）
```

---

## 📊 運用フロー（実例）

### 実例1: Marketing要求

**1. Marketing部門:**
```javascript
createAxisRequest(
  "Marketing",
  "Improve dashboard for X post",
  "Need larger chart, brighter colors for user count display",
  "urgent"
);
```

**2. GitHub Issue作成:**
```
Title: [Marketing] Improve dashboard for X post
Label: from-company, marketing, priority-urgent
Body: Need larger chart, brighter colors...
```

**3. Axis PM検出（5分以内）:**
```
新Issue検出
  ↓
分析: UI変更 + 緊急
  ↓
判断: Designer + Engineer B
```

**4. サブエージェント起動:**
```javascript
sessions_spawn({
  task: "Marketing urgent: Dashboard UI改善",
  label: "designer-marketing-dashboard"
});

sessions_spawn({
  task: "Dashboard UI実装（Designerの指示に従う）",
  label: "engineer-b-marketing-dashboard",
  model: "claude-haiku" // 節約
});
```

**5. 実装:**
```
Designer: Tailwind CSS変更案作成
  ↓
Engineer B: 実装
  ↓
ブランチ: feat/designer-dashboard-marketing
  ↓
PR作成
  ↓
Issue自動クローズ
```

**6. Telegram通知:**
```
"✅ Marketing要求完了
PR: https://github.com/Axis-pizza/Axis_MVP/pull/123
スクリーンショット: (添付)
所要時間: 2時間
承認お願いします。"
```

---

## ⚙️ 優先度別対応時間

| Priority | 対応時間 | 担当モデル |
|----------|---------|-----------|
| Urgent   | 24時間以内 | Sonnet（品質優先） |
| High     | 2-3日以内 | Sonnet or Haiku（タスク次第） |
| Normal   | 1週間以内 | Haiku優先（節約） |

---

## 🎯 KPI

### 開発チーム効率
- Issue対応時間: <24h (Urgent)
- PR承認率: >90%
- トークン効率: Haiku使用率 >40%

### カンパニー連携
- 部門別要求数: Fundraising/Marketing/Product
- 完了率: >95%
- Muse承認率: >90%

---

## 📝 セットアップチェックリスト

- [ ] GitHub Issue Template作成
- [ ] カンパニーエージェントにIssue作成機能追加
- [ ] Axis PM監視cron設定
- [ ] PM自動振り分けロジック実装
- [ ] Telegram通知設定
- [ ] テストIssue作成 → 完了まで確認

---

**Option A推奨。セットアップ所要時間: 30分**
