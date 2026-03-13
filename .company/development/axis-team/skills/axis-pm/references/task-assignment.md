# Task Assignment Guide

**PM用タスク振り分け基準**

---

## 🎯 基本原則

1. **スキルマッチ:** 担当者の専門性に合わせる
2. **負荷分散:** 一人に集中させない
3. **成長機会:** Engineer Bに学習機会を
4. **効率優先:** シンプルなタスクは素早く完了

---

## 👥 担当者プロフィール

### Designer
**得意:**
- UI/UXデザイン
- Tailwind CSS
- スタイリング
- レスポンシブデザイン

**苦手:**
- ロジック実装
- State管理
- API統合

**使用モデル:** claude-sonnet-4

---

### Engineer A（シニア）
**得意:**
- 複雑なState管理
- React Context/Hooks
- Solana Web3.js統合
- パフォーマンス最適化
- アーキテクチャ設計

**苦手:**
- 細かいスタイリング調整

**使用モデル:** claude-sonnet-4

---

### Engineer B（ジュニア）
**得意:**
- シンプルなUIコンポーネント
- バグ修正
- スタイリング調整
- テストコード

**学習中:**
- State管理
- 複雑なロジック

**使用モデル:** claude-haiku（コスト効率）

---

## 📋 タスク分類

### Category 1: デザイン・スタイリング

**担当:** Designer

**キーワード:**
- "design", "style", "UI", "UX"
- "Tailwind", "CSS", "responsive"
- "animation", "transition"
- "color", "layout"

**例:**
- ✅ "Improve button hover effects"
- ✅ "Add loading animations"
- ✅ "Optimize Tailwind config"
- ✅ "Design staking interface"
- ✅ "Make header responsive"

---

### Category 2: 複雑な実装

**担当:** Engineer A

**キーワード:**
- "state management", "context", "hooks"
- "Solana", "Web3", "wallet"
- "integration", "API"
- "performance", "optimization"
- "architecture", "refactor"

**例:**
- ✅ "Implement global state management"
- ✅ "Integrate Drift Perps SDK"
- ✅ "Optimize React re-renders"
- ✅ "Create custom hooks for wallet connection"
- ✅ "Refactor context providers"

---

### Category 3: シンプルなUI

**担当:** Engineer B

**キーワード:**
- "component", "button", "card"
- "simple", "basic", "small"
- "bug fix", "test"
- "styling adjustment"

**例:**
- ✅ "Create UserAvatar component"
- ✅ "Fix button alignment bug"
- ✅ "Add unit tests for utils"
- ✅ "Build NotificationBadge component"
- ✅ "Update footer links"

---

## 🔄 決定フローチャート

```
新しいIssue受信
    ↓
デザイン関連？
    ↓ YES → Designer
    ↓ NO
    ↓
複雑なロジック？（State/API/Solana）
    ↓ YES → Engineer A
    ↓ NO
    ↓
シンプルなUI？
    ↓ YES → Engineer B
    ↓ NO
    ↓
PM判断 or Muse相談
```

---

## 📊 優先度判断

### P0 (Critical - 即時対応)
- 本番環境のバグ
- ユーザーが使えない機能
- セキュリティ問題

**割り当て:** 最も適切な担当者に即座割り当て

---

### P1 (High - 今週中)
- 重要な新機能
- ユーザー体験に影響大
- パフォーマンス改善

**割り当て:** スキルマッチ優先

---

### P2 (Medium - 来週)
- 通常の機能追加
- 改善要望
- リファクタリング

**割り当て:** 負荷分散考慮

---

### P3 (Low - Backlog)
- Nice to have
- 小さな改善
- 将来の機能

**割り当て:** 余裕がある時

---

## 🎓 学習機会の提供

### Engineer Bの成長

**Current Level:** ジュニア  
**Goal:** 中級へ

**学習タスク例:**
1. シンプルなState管理
   - `useState` レベルのcomponent
   - 親子間props渡し

2. 小規模なhooks
   - カスタムhook作成（シンプルなもの）
   - `useEffect` の理解

3. API連携（基礎）
   - 既存のAPI関数使用
   - データ表示

**避けるべき:**
- 複雑なContext設計
- Solana SDK直接操作
- 大規模リファクタリング

---

## 📈 負荷分散

### 理想的な配分（週間）

```
Designer:     3-5 タスク（デザイン集中）
Engineer A:   2-4 タスク（質重視）
Engineer B:   4-6 タスク（数重視）
```

### 現状確認

```bash
# 各担当者のOpen Issues
gh issue list --assignee designer-username --state open
gh issue list --assignee engineer-a-username --state open
gh issue list --assignee engineer-b-username --state open
```

### 調整が必要な場合

**Engineer Aが過負荷:**
- シンプルなタスクをEngineer Bに
- 優先度低いタスクを来週に

**Engineer Bが空き:**
- バックログから適切なタスク
- テストコード追加
- ドキュメント更新

**Designerが空き:**
- デザインシステム改善
- 既存UIの洗練
- アクセシビリティ改善

---

## 🚨 特殊ケース

### Blocker発生時

```
例: Engineer Aがバックエンド待ち

対応:
1. Blockedラベル付与
2. 別タスクを一時的に割り当て
3. Alexにバックエンド進捗確認依頼
```

### 緊急バグ

```
例: P0バグ発見

対応:
1. 原因特定
2. 最速で修正できる担当者に即座割り当て
3. 他タスク一時停止
4. Museに即報告
```

### 大規模タスク

```
例: "Implement entire staking flow"

対応:
1. タスク分解
   - Designer: UI設計
   - Engineer A: State管理
   - Engineer B: UIコンポーネント
2. 依存関係整理
3. 順次割り当て
```

---

## ✅ チェックリスト

### タスク割り当て前
- [ ] Issue内容理解
- [ ] 複雑度判断
- [ ] 優先度確認
- [ ] 各担当者の現在の負荷確認

### 割り当て時
- [ ] 適切なラベル付与
- [ ] 担当者アサイン
- [ ] 期限設定（必要なら）
- [ ] 依存タスク確認

### 割り当て後
- [ ] 担当者に通知
- [ ] 必要な情報提供
- [ ] 進捗確認スケジュール

---

## 📚 実例

### 例1: UIコンポーネント作成

**Issue:** "Create UserProfile component"

**分析:**
- カテゴリ: シンプルなUI
- 複雑度: Low
- 優先度: P2

**決定:** Engineer B  
**理由:** シンプルなコンポーネント、学習機会

---

### 例2: State管理

**Issue:** "Implement global wallet state"

**分析:**
- カテゴリ: 複雑な実装
- 複雑度: High
- 優先度: P1

**決定:** Engineer A  
**理由:** React Context専門知識必要

---

### 例3: デザイン改善

**Issue:** "Improve button animations"

**分析:**
- カテゴリ: デザイン・スタイリング
- 複雑度: Low-Medium
- 優先度: P2

**決定:** Designer  
**理由:** UI/UX専門領域

---

### 例4: バグ修正

**Issue:** "Fix button alignment on mobile"

**分析:**
- カテゴリ: バグ修正（シンプル）
- 複雑度: Low
- 優先度: P1

**決定:** Engineer B  
**理由:** シンプルなスタイリング調整、素早く対応可能

---

### 例5: 複雑な統合

**Issue:** "Integrate Drift Perps SDK"

**分析:**
- カテゴリ: 複雑な実装
- 複雑度: Very High
- 優先度: P0

**決定:** Engineer A  
**理由:** Solana統合の専門知識、高優先度

---

## 🎯 成功指標

### 良い割り当て
- ✅ 2日以内に完了
- ✅ 高品質なPR
- ✅ 最小限のレビューコメント
- ✅ 担当者の成長

### 改善が必要な割り当て
- ❌ 1週間以上停滞
- ❌ 大量のレビューコメント
- ❌ 担当者から「難しすぎる」報告
- ❌ 途中でreassign必要

---

**適材適所で最高の効率を 🚀**
