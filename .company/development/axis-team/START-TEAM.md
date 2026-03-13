# Axis Frontend開発チーム - 起動ガイド

Alex作成：2026-03-13

---

## 🎯 チーム構成

**4人チーム:**
1. Designer（デザイナー）- UI/UX
2. PM（プロダクトマネージャー）- タスク管理
3. Frontend Engineer A（シニア）- 複雑な実装
4. Frontend Engineer B（ジュニア）- シンプルな実装

**対象:** `axis-agent/` (React + TypeScript + Vite)のみ  
**禁止:** `axis-api/`, `kagemusha-program/`, `axis-mobile/`

---

## 🚀 起動方法（2つ）

### Method A: オンデマンド起動（推奨・トークン節約）

**使い方:**
Museが「〇〇機能を追加して」と言ったとき、Alexが必要な人員を起動

**例:**
```
Muse: "UserProfile component追加して"
  ↓
Alex判断:
  - PM起動 → タスク分析
  - Engineer B起動 → シンプルなコンポーネント実装
  - Designer起動 → スタイル調整
  ↓
完了 → PR作成 → 終了（トークン節約）
```

**メリット:**
- トークン消費最小
- 必要な時だけ稼働

---

### Method B: 常駐型（24時間稼働）

**使い方:**
4人全員を常駐させ、継続的に開発

**セットアップ:**
```bash
# Alexが以下のコマンドで起動
sessions_spawn(runtime="acp", mode="session", thread=true)
```

**メリット:**
- 即座に対応可能
- 継続的な改善

**デメリット:**
- トークン消費大

---

## 💰 推奨運用（Method A + 部分常駐）

### PM常駐（軽量）
- Issue監視
- タスク振り分け
- トークン消費: 1K/日

### 他メンバーはオンデマンド
- 必要な時だけ起動
- トークン消費: タスク毎5K

**合計:** 10-20K tokens/日（許容範囲）

---

## 🎯 今すぐできること

### 1. PMを常駐起動（今から）
```
Task: Axis_MVP GitHub Issues監視、タスク管理、チーム調整
Label: axis-pm
Mode: 24時間常駐
```

### 2. テストタスク実行
```
Task: Add a simple "Hello Axis" button to Home.tsx
  ↓
PM → Engineer B起動
  ↓
15分で完了 → PR作成
```

---

**起動しますか？**
