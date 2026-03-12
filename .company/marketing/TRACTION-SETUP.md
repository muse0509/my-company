# Axisトラクション自動反映セットアップガイド

## 🎯 目的

AxisのDevNet統計（ユーザー数、ETF数）を自動取得し、X投稿に反映する。

---

## 📋 必要なもの

1. **Cloudflare Workers** アカウント
2. **Cloudflare D1 or KV** （既存のAxis DBへのアクセス）
3. **wrangler CLI** （Cloudflareデプロイ用）

---

## 🚀 Step 1: Cloudflare Workers に Stats API をデプロイ

### 1-1. wrangler CLIインストール

```bash
npm install -g wrangler
```

### 1-2. Cloudflareログイン

```bash
wrangler login
```

### 1-3. Workers作成

```bash
cd /Users/yusukekikuta/.openclaw/workspace/my-company/.company/marketing
wrangler init axis-stats-api
```

### 1-4. cloudflare-stats-api.js をコピー

```bash
cp cloudflare-stats-api.js axis-stats-api/src/index.js
```

### 1-5. wrangler.toml 編集

```toml
name = "axis-stats-api"
main = "src/index.js"
compatibility_date = "2024-01-01"

# D1バインディング（D1を使っている場合）
[[d1_databases]]
binding = "DB"
database_name = "axis-db"
database_id = "your-d1-database-id"  # ← 要確認

# または KVバインディング（KVを使っている場合）
# [[kv_namespaces]]
# binding = "KV"
# id = "your-kv-namespace-id"
```

**重要:** `database_id` や SQLクエリを実際のAxis DBスキーマに合わせて調整してください。

### 1-6. デプロイ

```bash
cd axis-stats-api
wrangler deploy
```

**デプロイされたURL:**
```
https://axis-stats-api.your-subdomain.workers.dev/stats
```

このURLをメモしてください。

---

## 🔧 Step 2: Marketing側のスクリプト設定

### 2-1. 環境変数設定

```bash
# ~/.zshrc または ~/.bashrc に追加
export AXIS_STATS_API="https://axis-stats-api.your-subdomain.workers.dev/stats"
```

または、スクリプト内で直接URLを指定:

```javascript
// get-axis-traction.js の3行目を編集
const STATS_API_ENDPOINT = 'https://axis-stats-api.your-subdomain.workers.dev/stats';
```

### 2-2. テスト実行

```bash
cd /Users/yusukekikuta/.openclaw/workspace/my-company/.company/marketing/scripts
node get-axis-traction.js
```

**期待される出力:**
```
📊 Fetching Axis traction data...

=== Traction Data ===
{
  "users": 127,
  "users_formatted": "127",
  "etfs": 8,
  "etfs_formatted": "8",
  "environment": "devnet",
  "updated_at": "2026-03-12T13:30:00.000Z"
}

=== Tweet Templates ===

MILESTONE_USERS:
Axis just hit 127 users on DevNet 🚀
8 Narrative ETFs created.
Building the future of prediction markets, one user at a time.

---

MILESTONE_ETFS:
8 Narrative ETFs created on Axis.
127 users already experimenting with the future of prediction markets.
This is just the beginning 💪

---
```

---

## 📊 Step 3: Cloudflare Workers APIの調整

### データベーススキーマの確認

**現在のAxis DBのスキーマを教えてください:**

1. **ユーザー数の取得方法**
   - テーブル名: `users`? `accounts`?
   - カラム名: `user_id`? `wallet_address`?

2. **ETF数の取得方法**
   - テーブル名: `etfs`? `narrative_etfs`?
   - ステータスカラム: `status`? `is_active`?

**例:**
```sql
-- ユーザー数
SELECT COUNT(DISTINCT wallet_address) FROM users;

-- ETF数（アクティブなもののみ）
SELECT COUNT(*) FROM etfs WHERE status = 'active';
```

この情報を元に `cloudflare-stats-api.js` のSQLクエリを調整します。

---

## 🔄 Step 4: Marketing統合

### 投稿生成時に自動反映

```bash
# トラクション取得
node get-axis-traction.js

# 出力されたテンプレートをコピー
# → X投稿に使用
```

### 自動化（Cron）

```bash
# 毎日1回トラクション更新
# wrangler cron trigger設定 or OpenClaw cron
```

---

## 🎯 トラブルシューティング

### API接続エラー

**症状:** `❌ API fetch error: Failed to fetch`

**解決:**
1. Workers URLが正しいか確認
2. CORS設定を確認（cloudflare-stats-api.jsに含まれている）
3. Workersがデプロイされているか確認: `wrangler deployments list`

### データベース接続エラー

**症状:** `500 Internal Server Error`

**解決:**
1. wrangler.toml の `database_id` を確認
2. SQLクエリがAxis DBスキーマに合っているか確認
3. Workers Logs確認: `wrangler tail`

### モックデータしか返ってこない

**症状:** 常に同じ数値（127ユーザー、8 ETF）

**解決:**
API未実装時のフォールバック動作です。Step 1を完了させてください。

---

## 📌 次のステップ

1. ✅ Cloudflare Workers デプロイ
2. ✅ Marketing スクリプトテスト
3. ⏭️ X投稿に統合
4. ⏭️ 自動化（Cron設定）
5. ⏭️ MCP統合（将来）

---

## 🔐 セキュリティノート

- Workers APIはpublic（認証なし）
- DevNet統計なので問題なし
- Mainnet移行時は認証追加推奨

---

**質問や問題があれば教えてください 💪**
