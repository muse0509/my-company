# 🔄 Git Workflow - Axis Protocol

**Version:** 1.0  
**Established:** 2026-03-16  
**Owner:** Alex (CEO)

---

## 📋 ワークフロー概要

全タスク実行を `.company/` に出力し、CLI で commit → main へ push。履歴は永続的に保持。

```
Muse (指示)
  ↓ 「今日のタスク：X投稿6本」
Alex (CEO) + 各部門
  ↓
`.company/` に実行結果を出力
  ├─ Marketing Team → `.company/marketing/posts/` に出力
  ├─ Research Team → `.company/research/reports/` に出力
  └─ Operations Team → `.company/operations/daily-log/` に出力
  ↓
CLI: git add → git commit → git push
  ↓
GitHub main ブランチに履歴永続保管 ✅
```

---

## 🔧 Alex + 各部門の日次フロー

### **朝（07:00 JST）**
```
1. Muse からのインプット受け取る
2. タスクを各部門（Marketing, Research, Operations）に指示
3. 各部門が`.company/`内で実行開始
```

### **日中（実行）**
```
1. Marketing: `.company/marketing/posts/` に投稿案・実行ログ出力
2. Research: `.company/research/reports/daily/` に分析レポート出力
3. Operations: `.company/operations/daily-log/` に日次ログ出力
```

### **夕方（21:00 JST）**
```
1. 全チームの出力ファイルを確認
2. CLI で git add / git commit / git push
3. メッセージ例: [2026-03-16] marketing: X posts daily execution
4. 日次サマリー作成
5. Muse に報告
```

---

## 📝 Commit メッセージ規則

**形式:**
```
[YYYY-MM-DD] <部門>: <簡潔な説明>

例：
[2026-03-16] marketing: daily X posts execution (6 posts, 600+ engagement)
[2026-03-16] research: solana defi trends analysis report
[2026-03-16] operations: daily standup and consolidated report
```

**部門:**
- `marketing` - X投稿、コンテンツ
- `research` - トレンド分析、オンチェーンデータ
- `operations` - 日次報告、タスク管理
- `fundraising` - VC対応、ピッチ
- `product` - 開発、プロダクト
- `finance` - 予算、経費
- `legal` - 契約、規制
- `tax` - 税務

**Tips:**
- 日付は `[YYYY-MM-DD]` 形式で固定
- 説明は 1 行で簡潔に
- 重要な数字・メトリクスがあれば括弧内に記載

---

## 🔗 出力ファイル構造

各部門の出力ファイルは以下にまとめる：

```
.company/
├── marketing/
│   ├── posts/
│   │   └── daily-execution-2026-03-16.md    ← Issue #123 の出力
│   └── reports/
│       └── weekly-summary-2026-W11.md
│
├── research/
│   ├── reports/
│   │   ├── daily/
│   │   │   └── 2026-03-16-analysis.md       ← Issue #124 の出力
│   │   └── weekly/
│   │
│   └── data/
│       └── defi-trends-2026-03-16.json
│
└── operations/
    ├── daily-log/
    │   └── 2026-03-16.md                    ← Issue #125 の出力
    └── reports/
        └── weekly-standup-2026-W11.md
```

**Commit メッセージ例:**
```
[2026-03-16] marketing chore: X posts daily execution (#123)
[2026-03-16] research: solana defi trends analysis (#124)
[2026-03-16] operations: daily standup report (#125)
```

---

## 🔧 Git CLI 操作ガイド

### **基本的な流れ（毎日 21:00）**

```bash
# 1. `.company/` 内のファイル確認
cd ~/.openclaw/workspace/my-company
ls -la .company/marketing/posts/
ls -la .company/research/reports/daily/
ls -la .company/operations/daily-log/

# 2. 変更をステージング
git add .company/marketing/posts/
git add .company/research/reports/daily/
git add .company/operations/daily-log/

# 3. Commit（メッセージ規則に従う）
git commit -m "[2026-03-16] marketing: daily X posts execution (6 posts, 600+ engagement)"
git commit -m "[2026-03-16] research: solana defi trends analysis report"
git commit -m "[2026-03-16] operations: daily standup and consolidated report"

# 4. Push to main
git push origin main
```

### **ブラウザから commit する場合（Chrome DevTools MCP）**

1. GitHub にログイン（既認証ブラウザ使用）
2. リポジトリにアクセス
3. ファイル編集 → Commit
4. メッセージ規則に従う

---

## 🔒 ブランチ戦略

**Main ブランチ:**
- 直接 commit & push OK
- Muse のアカウントで push
- コミット履歴は永続保管

**Feature ブランチ:**
- 不要（直接 main に commit）

---

## 📈 参照・可視化

### **GitHub Commit History**
```
https://github.com/muse0509/my-company/commits/main
```

毎日の commit が時系列で残り、参考・検索可能。

### **Muse への報告**
毎日 21:30 JST、Operations Team が日本語サマリー報告。  
GitHub 履歴は参考資料として自由に参照可能。

---

## ✅ セットアップ完了

この形式で運用開始します：

1. ✅ 各部門が `.company/` に出力
2. ✅ CLI で `git add/commit/push`
3. ✅ Commit メッセージで履歴管理
4. ✅ GitHub で永続保管・参照可能

---

## 💡 Tips

**Do:**
- ✅ 毎日 commit（1日1回、21:00）
- ✅ Commit メッセージは規則に従う
- ✅ GitHub history を参考にして改善

**Don't:**
- ❌ メッセージなしの commit
- ❌ 不完全なファイルの commit

---

**Status:** 🟢 Active  
**Last Updated:** 2026-03-16  
**Owner:** Alex (CEO) + Operations Team
