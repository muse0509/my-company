# X自動投稿システム セットアップガイド

## 🎯 概要

**記事参考:** https://x.com/aiaircle34052/status/2026274243676344646

OpenClawの「情報の一元管理」手法を完全適用した、Muse専用のX自動投稿システムです。

### 特徴
- ✅ **GitHub Actions** で完全自動化
- ✅ **過去632件のデータ** から最適パターンを学習
- ✅ **Axisトラクション** をリアルタイム反映
- ✅ **毎朝7:00** に投稿自動生成
- ✅ **指定時刻** に自動投稿（JST 1:30, 3:00, 5:00, 7:00）
- ✅ **Telegram通知** で確認可能

---

## 📋 前提条件

### 必要なもの
1. GitHub repository (✅ 既にある: `muse0509/my-company`)
2. X Developer Account
3. Cloudflare Workers (Axisトラクション取得用)
4. Anthropic API Key (Claude)
5. Telegram Bot (通知用)

---

## 🚀 セットアップ手順

### Step 1: X Developer Portalでアプリ作成

1. https://developer.x.com/en/portal/dashboard にアクセス

2. **プロジェクト作成**
   - Project Name: `Axis X Automation`
   - Use Case: `Making a bot`

3. **App作成**
   - App Name: `Axis Auto Poster`
   - App Environment: `Production`

4. **App permissions設定**
   - Settings → User authentication settings
   - **Read and write** を選択（重要！）
   - OAuth 1.0a を有効化

5. **Keys取得**
   - API Key (Consumer Key)
   - API Secret (Consumer Secret)
   - Access Token
   - Access Token Secret
   
   **⚠️ 重要:** この4つを必ず保存してください

---

### Step 2: GitHub Secrets設定

GitHubリポジトリの Settings → Secrets and variables → Actions で以下を追加：

#### X API関連
```
TWITTER_API_KEY=your_api_key_here
TWITTER_API_SECRET=your_api_secret_here
TWITTER_ACCESS_TOKEN=your_access_token_here
TWITTER_ACCESS_SECRET=your_access_secret_here
```

#### Cloudflare Workers（トラクション取得）
```
AXIS_STATS_API=https://axis-stats-api.your-subdomain.workers.dev/stats
```

#### Anthropic API
```
ANTHROPIC_API_KEY=your_anthropic_key_here
```

#### Telegram通知
```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

---

### Step 3: Cloudflare Workers設定

（既に作成済みの `cloudflare-stats-api.js` をデプロイ）

1. `wrangler deploy`
2. デプロイされたURLをGitHub Secretsに追加

---

### Step 4: 動作確認

#### 手動でワークフローを実行

GitHub → Actions → `X Daily Posts Generation` → Run workflow

**期待される動作:**
1. Axisトラクション取得
2. 過去データ分析
3. 4投稿生成（Claude API）
4. `.company/marketing/scheduled-posts/YYYY-MM-DD/` に保存
5. GitHubにコミット
6. Telegramに通知

---

## 🔄 自動実行スケジュール

### 毎朝7:00（投稿生成）
```yaml
schedule:
  - cron: '0 22 * * *'  # UTC 22:00 = JST 7:00
```

### 投稿時刻（自動投稿）
```yaml
schedule:
  - cron: '30 16 * * *'  # JST 1:30
  - cron: '0 18 * * *'   # JST 3:00
  - cron: '0 20 * * *'   # JST 5:00
  - cron: '0 22 * * *'   # JST 7:00
```

### 毎時（トラクション同期）
```yaml
schedule:
  - cron: '0 * * * *'
```

---

## 📊 フロー全体像

```
毎朝7:00
↓
GitHub Actions起動
↓
1. Cloudflare Workers → Axisトラクション取得（users, etfs）
2. 過去632件の投稿データ分析
3. Claude API → 4投稿生成（実データ反映）
4. scheduled-posts/に保存
5. GitHubにコミット
6. Telegram通知「今日の投稿生成完了」
↓
Museが確認（Telegram）
↓
問題なければそのまま放置
↓
指定時刻（1:30, 3:00, 5:00, 7:00）
↓
GitHub Actions起動
↓
1. scheduled-posts/から該当ファイル読み込み
2. X API (OAuth 1.0a) → 投稿
3. post-log.txtに記録
4. GitHubにコミット
```

---

## 🎯 OpenClawとの統合

### OpenClawから直接操作

OpenClawのワークスペースを `/Users/yusukekikuta/.openclaw/workspace/my-company` に設定：

```bash
cd ~/.openclaw
ln -s /Users/yusukekikuta/.openclaw/workspace/my-company workspace
```

### MEMORY.mdに記載

```markdown
# X Auto Post System

- GitHub: muse0509/my-company
- 毎朝7:00に投稿生成
- 自動投稿: 1:30, 3:00, 5:00, 7:00
- Telegram通知で確認

## 修正方法
- 投稿変更: .company/marketing/scheduled-posts/YYYY-MM-DD/*.txt を編集
- 手動投稿: gh workflow run x-auto-post.yml
```

---

## 🔧 トラブルシューティング

### 投稿が生成されない
1. GitHub Actions → Logs確認
2. `ANTHROPIC_API_KEY` が正しいか確認
3. `AXIS_STATS_API` が応答しているか確認

### 投稿できない
1. X API Keysが正しいか確認
2. App permissionsが **Read and write** になっているか確認
3. OAuth 1.0aが有効になっているか確認

### トラクションが取得できない
1. Cloudflare Workersがデプロイされているか確認
2. `wrangler tail` でログ確認
3. DB接続が正しいか確認

---

## 🎯 次のステップ

### Phase 1: 基本自動化（今回）
- ✅ 毎朝投稿生成
- ✅ 指定時刻に自動投稿
- ✅ トラクション自動反映

### Phase 2: 学習と改善（1週間後）
- エンゲージメント追跡
- パターン自動改善
- A/Bテスト

### Phase 3: 完全自律（1ヶ月後）
- 投稿内容の自動最適化
- 投稿時刻の自動調整
- リプライ自動生成

---

## 📌 参考

- 元記事: https://x.com/aiaircle34052/status/2026274243676344646
- X API Docs: https://developer.x.com/en/docs
- GitHub Actions: https://docs.github.com/en/actions
- Anthropic API: https://docs.anthropic.com/

---

**これで「もう一人の自分」としてのOpenClawが、X運用を完全に任せられます 🚀**
