# X OAuth 1.0a セットアップ（15分で完了）

Alex作成：2026-03-13 11:22

**目標:** 今後は完全自動、Museは一切Xを触らない

**コスト:** $0/月（自分のアカウント = 無料）

---

## ✅ チェックリスト

### □ Step 1: X Developer Portalでアプリ作成（5分）

**URL:** https://developer.x.com/en/portal/dashboard

1. □ 「Projects & Apps」→「+ Create Project」
   - Project name: `Axis Auto Poster`
   - Use case: `Making a bot`

2. □ App作成
   - App name: `axis-auto-post`
   - Environment: `Production`

3. □ **重要：App permissions変更**
   - Settings → User authentication settings → 「Set up」
   - App permissions: **「Read and write」** ⚠️
   - Type of App: `Web App, Automated App or Bot`
   - Callback URL: `https://axis.pizza`
   - Website URL: `https://axis.pizza`
   - 「Save」

---

### □ Step 2: API Keys取得（3分）

**Keys and tokens タブ**

取得する4つのキー：

1. □ **API Key** (Consumer Key)
2. □ **API Key Secret** (Consumer Secret) → 「Regenerate」
3. □ **Access Token** → 「Generate」
4. □ **Access Token Secret** → 「Generate」

**⚠️ この4つを必ずメモ帳にコピー！**

---

### □ Step 3: GitHub Secretsに追加（3分）

**URL:** https://github.com/muse0509/my-company/settings/secrets/actions

「New repository secret」を4回：

```
Name: TWITTER_API_KEY
Value: (API Keyをペースト)

Name: TWITTER_API_SECRET
Value: (API Key Secretをペースト)

Name: TWITTER_ACCESS_TOKEN
Value: (Access Tokenをペースト)

Name: TWITTER_ACCESS_SECRET
Value: (Access Token Secretをペースト)
```

---

### □ Step 4: ローカルテスト（2分）

```bash
cd /Users/yusukekikuta/.openclaw/workspace/my-company/.company/marketing

# 環境変数設定
export TWITTER_API_KEY="your_api_key"
export TWITTER_API_SECRET="your_api_secret"
export TWITTER_ACCESS_TOKEN="your_access_token"
export TWITTER_ACCESS_SECRET="your_access_secret"

# テスト実行
node scripts/test-x-api.js
```

**期待される出力:**
```
✅ Authentication successful!
   Account: @muse_jp_sol
   ...
```

---

### □ Step 5: GitHub Actionsテスト（2分）

**URL:** https://github.com/muse0509/my-company/actions

1. □ 「X Auto Post (OAuth)」ワークフロー選択
2. □ 「Run workflow」クリック
3. □ 結果確認（緑チェック = 成功）

---

## 🎯 完了後の動作

### 毎日自動投稿（9回/日）

**今日の日中:**
- 11:00 JST
- 14:00 JST
- 17:00 JST
- 20:00 JST
- 22:00 JST

**明日の深夜:**
- 01:30 JST
- 03:00 JST
- 05:00 JST
- 07:00 JST

### 投稿生成方法

**毎朝7:00:** Alexが新しい投稿を生成
- `.company/marketing/scheduled-posts/YYYY-MM-DD-daytime-english/`
- GitHubにコミット

**指定時刻:** GitHub Actionsが自動投稿

---

## 🚨 トラブルシューティング

### エラー: 403 Forbidden

**原因:** App permissionsが「Read only」

**対策:**
1. https://developer.x.com/en/portal/dashboard
2. Settings → User authentication
3. 「Read and write」に変更
4. API Keysを再生成

---

### エラー: 401 Unauthorized

**原因:** API Keysが間違っている

**対策:**
1. X Developer Portalで再確認
2. GitHub Secretsを更新

---

## ✅ 完了確認

全てチェックしたら：

□ X Developer Portalでアプリ作成完了
□ API Keys 4つ取得済み
□ GitHub Secrets 4つ追加済み
□ ローカルテストで認証成功
□ GitHub Actionsテスト実行成功

**完了！今後は完全自動です 🎉**

---

## 📊 今後の運用

**Alexがやること:**
- 毎朝7:00に投稿生成（Claude API）
- GitHubにコミット

**GitHub Actionsがやること:**
- 指定時刻に自動投稿
- ログ記録

**Museがやること:**
- **何もしない ✅**

---

**所要時間:** 15分  
**コスト:** $0/月  
**メンテナンス:** 不要

**完全自動化達成 🚀**
