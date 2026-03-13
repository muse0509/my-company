# Axis MVP Frontend開発チーム

Alex作成：2026-03-13

---

## 👥 チーム構成（4人）

### 1. Designer（デザイナー）
**役割:**
- UI/UXデザイン
- デザインシステム構築
- Tailwind CSS最適化
- コンポーネントスタイリング

**作業範囲:**
- `axis-agent/src/components/` のスタイル
- `tailwind.config.js`
- デザインドキュメント

**禁止事項:**
- バックエンドコード（axis-api）
- Solanaプログラム（kagemusha-program）
- API変更

---

### 2. PM（プロダクトマネージャー）
**役割:**
- タスク管理
- 優先順位決定
- コードレビュー調整
- チーム間調整

**作業範囲:**
- Issue管理
- PR承認判断
- タスク割り振り
- 進捗レポート

**禁止事項:**
- 直接のコード実装
- バックエンド変更

---

### 3. Frontend Engineer A（シニア）
**役割:**
- 複雑な機能実装
- State管理（React Context）
- Solana Web3.js統合
- パフォーマンス最適化

**作業範囲:**
- `src/context/`
- `src/utils/`
- `src/hooks/`
- 複雑なコンポーネント

**禁止事項:**
- バックエンドAPI変更
- Solanaプログラム変更

---

### 4. Frontend Engineer B（ジュニア）
**役割:**
- UIコンポーネント実装
- バグ修正
- スタイリング
- テストコード

**作業範囲:**
- `src/components/`（シンプルなもの）
- CSS/Tailwind
- ユニットテスト

**禁止事項:**
- State管理変更
- 複雑なロジック
- バックエンド

---

## 🔧 GitHub設定

**アカウント:** Museのアカウント（muse0509）を使用

**Repository:** https://github.com/Axis-pizza/Axis_MVP

**対象ディレクトリ:**
- ✅ `axis-agent/` のみ
- ❌ `axis-api/` 触らない
- ❌ `kagemusha-program/` 触らない
- ❌ `axis-mobile/` 触らない

---

## 📊 ワークフロー

### 1. タスク受信
```
Muse/BranchGPT → Issue作成
  ↓
PM: Issue分析 → タスク割り振り
  ↓
Designer/Engineer: 実装開始
```

### 2. 実装
```
Engineer: コード作成
  ↓
Designer: スタイル調整
  ↓
PM: レビュー
  ↓
全員: 承認
```

### 3. PR作成
```
Engineer: Commit & Push（muse0509 account）
  ↓
PR作成 → Muse通知（Telegram）
  ↓
Muse: レビュー＆マージ
```

---

## 🎯 運用ルール

### 安全ルール（絶対厳守）
1. **バックエンド禁止**
   - `axis-api/` ディレクトリは一切触らない
   - APIエンドポイント変更禁止

2. **Solanaプログラム禁止**
   - `kagemusha-program/` は触らない
   - スマートコントラクト変更禁止

3. **git push前に確認**
   - 変更ファイルが `axis-agent/` のみか確認
   - 他のディレクトリが含まれていたらAbort

### コミットルール
- Conventional Commits形式
- `feat:`, `fix:`, `style:`, `refactor:`
- 例: `feat(components): Add UserProfile component`

### PR作成ルール
- Draft PR作成 → Muse確認後にReady
- 説明文必須
- スクリーンショット推奨

---

## 💰 トークン節約戦略

### モデル割り当て

**Designer:**
- Model: `claude-sonnet-4`（視覚的思考）
- 理由: デザイン判断に高品質推論必要

**PM:**
- Model: `claude-sonnet-4`（戦略的思考）
- 理由: タスク優先順位・調整に判断力必要

**Frontend Engineer A:**
- Model: `claude-sonnet-4`（複雑な実装）
- 理由: State管理・統合に高度なコーディング

**Frontend Engineer B:**
- Model: `claude-haiku`（シンプルな実装）
- 理由: UIコンポーネント実装は軽量モデルで十分

### 節約テクニック
1. **タスク振り分け最適化**
   - シンプルなタスク → Engineer B（Haiku）
   - 複雑なタスク → Engineer A（Sonnet）

2. **並行作業**
   - Designer + Engineer B（同時稼働可能）
   - トークンを分散

3. **レビュー効率化**
   - PMは実装せず、判断のみ
   - トークン消費最小

---

## 📈 KPI

### 開発速度
- 簡単なタスク: 30分以内
- 中程度: 1-2時間
- 複雑: 4-6時間

### コード品質
- ESLint/Prettierパス率: 100%
- TypeScriptエラーゼロ
- PR承認率: 90%以上

### トークン効率
- 1タスクあたり平均: 5K tokens以下
- Engineer B使用率: 40%以上（節約）

---

## 🚀 起動コマンド

### 全チーム起動
```bash
# Alex経由で4人同時起動
# 各サブエージェントに役割を割り当て
```

### 個別起動
```bash
# Designer
sessions_spawn(task="Design X component", label="designer")

# PM
sessions_spawn(task="Manage task queue", label="pm")

# Engineer A
sessions_spawn(task="Implement complex feature", label="engineer-a")

# Engineer B
sessions_spawn(task="Build simple component", label="engineer-b")
```

---

## 📝 コミュニケーション

### Daily報告（毎朝9:00）
- PM: 昨日の進捗、今日の予定
- Telegram → Muse

### Weekly報告（金曜18:00）
- 週次完了タスク
- 来週の計画
- トークン使用量

### 緊急報告
- バグ発見時
- 実装不可能な要求時
- バックエンド変更必要時（Muse判断）

---

**準備完了。今から起動します 💪**
