# X API OAuth 1.0a 完全セットアップガイド

**最終更新**: 2026-03-13  
**対象**: Muse X投稿自動化プロジェクト  
**難易度**: 初心者でもOK（手順通りに進めれば15分で完了）

---

## 📋 目次

1. [前提条件](#前提条件)
2. [X Developer Portalでのアプリ作成](#1-x-developer-portalでのアプリ作成)
3. [OAuth 1.0a設定](#2-oauth-10a設定)
4. [API Keys取得](#3-api-keys取得)
5. [ローカルテスト](#4-ローカルテスト)
6. [GitHub Secrets設定](#5-github-secrets設定)
7. [トラブルシューティング](#6-トラブルシューティング)

---

## 前提条件

- ✅ Xアカウント（@muse_jp_sol）
- ✅ X Developer Account（未登録でもOK、以下で説明）
- ✅ Node.js 18以上がインストール済み
- ✅ GitHubアカウント（CI/CD用）

---

## 1. X Developer Portalでのアプリ作成

### ステップ1.1: Developer Portalへアクセス

1. **[https://developer.x.com/](https://developer.x.com/)** にアクセス
2. 右上の **「Sign in」** をクリック
3. @muse_jp_sol でログイン

### ステップ1.2: Developer Accountの申請（初回のみ）

**既に登録済みの場合はスキップ**

1. ログイン後、**「Developer Portal」** → **「Sign up for Free Account」** をクリック
2. 利用目的を選択:
   - ☑️ **「Making a bot」** または **「Publish and curate content」** を選択
3. アプリ名を入力（例: `Muse Auto Poster`）
4. 使用目的を英語で記入（例）:
   ```
   I'm building an automated posting tool for my personal X account (@muse_jp_sol) 
   to share updates about my Solana DeFi project (Axis Pizza). 
   The bot will post tweets about development updates, AMAs, and community events.
   ```
5. **「Looks good!」** → 利用規約に同意 → **「Submit」**
6. メール認証を完了（届いたメールのリンクをクリック）

### ステップ1.3: アプリケーション（Project）の作成

1. Developer Portal ダッシュボードで **「+ Create Project」** をクリック
2. プロジェクト名を入力:
   - **Name**: `Muse X Automation`
3. 用途を選択:
   - **Use case**: 「Making a bot」
4. プロジェクト説明（任意だが記入推奨）:
   ```
   Automated posting for @muse_jp_sol - DeFi project updates and community engagement
   ```

### ステップ1.4: Appの作成

1. プロジェクト作成後、**「Create App」** ボタンが表示される
2. App名を入力:
   - **App name**: `MuseBot` または `AxisPizzaPoster`
   - ⚠️ **注意**: App名は後から変更できません
3. **「Complete」** をクリック

---

## 2. OAuth 1.0a設定

### ステップ2.1: App Settingsにアクセス

1. 作成したAppをクリック → 左メニューの **「Settings」** タブを開く
2. 下にスクロールして **「User authentication settings」** セクションを見つける
3. **「Set up」** ボタンをクリック

### ステップ2.2: 認証設定の構成

#### **App permissions**（重要！）
- ☑️ **「Read and write」** を選択
  - ⚠️ デフォルトは「Read」のみなので必ず変更すること
  - これを選ばないとツイート投稿ができません

#### **Type of App**
- ☑️ **「Web App, Automated App or Bot」** を選択

#### **App info**
以下の情報を入力:

- **Callback URI / Redirect URL**:
  ```
  http://localhost:3000/callback
  ```
  - ⚠️ ローカルテストのみの場合でも必須です
  - 本番環境がある場合は実際のURLに変更

- **Website URL**:
  ```
  https://axis.pizza
  ```
  または
  ```
  https://github.com/muse-jp/x-automation
  ```

- **Organization name** (任意):
  ```
  Axis Pizza
  ```

- **Organization URL** (任意):
  ```
  https://axis.pizza
  ```

- **Terms of service** (任意):
  ```
  https://axis.pizza/terms
  ```

- **Privacy policy** (任意):
  ```
  https://axis.pizza/privacy
  ```

#### **Client type**
- ☑️ **「Public」** を選択（個人用botの場合）

### ステップ2.3: 設定を保存

1. すべて入力したら **「Save」** をクリック
2. 確認画面が表示される → **「Yes」** をクリック
3. ✅ 「User authentication is set up」と表示されればOK

---

## 3. API Keys取得

### 必要な4つのキー

OAuth 1.0aでは以下の **4つの認証情報** が必要です:

1. **API Key** (Consumer Key)
2. **API Key Secret** (Consumer Secret)
3. **Access Token**
4. **Access Token Secret**

### ステップ3.1: API KeyとSecretの取得

1. App画面で **「Keys and tokens」** タブを開く
2. **「API Key and Secret」** セクションを確認
   - すでに生成されている場合はそのまま使用
   - 未生成の場合は **「Regenerate」** をクリック
3. 🔑 表示された値をコピー:
   ```
   API Key: xxxxxxxxxxxxxxxxxxxxxxxx
   API Secret Key: yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
   ```
4. ⚠️ **重要**: API Secretは一度しか表示されないので、必ずメモ/保存してください

### ステップ3.2: Access TokenとSecretの生成

1. 同じ画面の **「Access Token and Secret」** セクションまでスクロール
2. **「Generate」** ボタンをクリック
3. 🔑 表示された値をコピー:
   ```
   Access Token: 1234567890-zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
   Access Token Secret: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
   ```
4. ⚠️ **重要**: これらも一度しか表示されないので必ず保存

### ステップ3.3: 権限の確認

- Access Token生成時に **「Read and Write」** の権限が付与されているか確認
- もし「Read」のみの場合:
  1. Settings → User authentication settings に戻る
  2. Permissionsを「Read and write」に変更
  3. Access Tokenを **再生成** する（古いトークンは削除される）

---

## 4. ローカルテスト

### ステップ4.1: テスト用プロジェクトの作成

```bash
# 作業ディレクトリを作成
mkdir ~/x-api-test
cd ~/x-api-test

# Node.jsプロジェクトを初期化
npm init -y

# twitter-api-v2をインストール
npm install twitter-api-v2
npm install dotenv
```

### ステップ4.2: 環境変数ファイルの作成

`.env` ファイルを作成し、取得したキーを設定:

```bash
# .env
TWITTER_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
TWITTER_API_SECRET=yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
TWITTER_ACCESS_TOKEN=1234567890-zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
TWITTER_ACCESS_SECRET=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

⚠️ **重要**: `.env` ファイルは絶対にGitHubにコミットしないこと！

### ステップ4.3: テストスクリプトの作成

`test-tweet.js` を作成:

```javascript
require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

// OAuth 1.0a クライアントの初期化
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

// Read-Write権限のクライアント
const rwClient = client.readWrite;

async function testTweet() {
  try {
    console.log('🔐 認証情報を確認中...');
    
    // 自分のユーザー情報を取得
    const me = await rwClient.v2.me();
    console.log(`✅ 認証成功！ログイン中: @${me.data.username}`);
    
    // テストツイート（コメントアウトしておく）
    // const tweet = await rwClient.v2.tweet('テスト投稿 - X API OAuth 1.0a セットアップ完了！ 🎉');
    // console.log('✅ ツイート投稿成功！', tweet.data);
    
    console.log('\n✨ セットアップ完了！実際にツイートするには、上記のコメントアウトを外してください。');
    
  } catch (error) {
    console.error('❌ エラーが発生しました:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    if (error.code === 403) {
      console.error('\n💡 ヒント: 権限が不足している可能性があります。');
      console.error('   → Developer Portalで「Read and Write」権限を確認してください。');
      console.error('   → Access Tokenを再生成してみてください。');
    }
  }
}

testTweet();
```

### ステップ4.4: テスト実行

```bash
node test-tweet.js
```

**成功例:**
```
🔐 認証情報を確認中...
✅ 認証成功！ログイン中: @muse_jp_sol

✨ セットアップ完了！実際にツイートするには、上記のコメントアウトを外してください。
```

**エラーの場合**: [トラブルシューティング](#6-トラブルシューティング)を参照

### ステップ4.5: 実際にツイートをテスト（オプション）

1. `test-tweet.js` の以下の行のコメントアウトを外す:
   ```javascript
   const tweet = await rwClient.v2.tweet('テスト投稿 - X API OAuth 1.0a セットアップ完了！ 🎉');
   console.log('✅ ツイート投稿成功！', tweet.data);
   ```

2. 再度実行:
   ```bash
   node test-tweet.js
   ```

3. X（@muse_jp_sol）でツイートが投稿されているか確認

4. ✅ 投稿されていればセットアップ完了！

---

## 5. GitHub Secrets設定

### ステップ5.1: リポジトリのSecretsページにアクセス

1. GitHubで対象リポジトリを開く
2. **Settings** タブをクリック
3. 左メニューの **Secrets and variables** → **Actions** をクリック

### ステップ5.2: Secretsの追加

**「New repository secret」** ボタンをクリックして、以下の4つを追加:

#### Secret 1: TWITTER_API_KEY
- **Name**: `TWITTER_API_KEY`
- **Value**: `xxxxxxxxxxxxxxxxxxxxxxxx` (API Key)
- 「Add secret」をクリック

#### Secret 2: TWITTER_API_SECRET
- **Name**: `TWITTER_API_SECRET`
- **Value**: `yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy` (API Secret)
- 「Add secret」をクリック

#### Secret 3: TWITTER_ACCESS_TOKEN
- **Name**: `TWITTER_ACCESS_TOKEN`
- **Value**: `1234567890-zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz` (Access Token)
- 「Add secret」をクリック

#### Secret 4: TWITTER_ACCESS_SECRET
- **Name**: `TWITTER_ACCESS_SECRET`
- **Value**: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa` (Access Token Secret)
- 「Add secret」をクリック

### ステップ5.3: GitHub Actionsでの使用例

`.github/workflows/auto-tweet.yml`:

```yaml
name: Auto Tweet

on:
  schedule:
    - cron: '0 0 * * *'  # 毎日9:00 JST (0:00 UTC)
  workflow_dispatch:  # 手動実行も可能

jobs:
  tweet:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install twitter-api-v2
      
      - name: Post tweet
        env:
          TWITTER_API_KEY: ${{ secrets.TWITTER_API_KEY }}
          TWITTER_API_SECRET: ${{ secrets.TWITTER_API_SECRET }}
          TWITTER_ACCESS_TOKEN: ${{ secrets.TWITTER_ACCESS_TOKEN }}
          TWITTER_ACCESS_SECRET: ${{ secrets.TWITTER_ACCESS_SECRET }}
        run: node scripts/post-tweet.js
```

---

## 6. トラブルシューティング

### ❌ エラー: `403 Forbidden`

**原因**: 権限不足

**解決方法**:
1. Developer Portal → Settings → User authentication settings
2. Permissions を **「Read and write」** に変更
3. Keys and tokens → Access Token を **再生成**
4. 新しいAccess Token/Secretを `.env` に反映

---

### ❌ エラー: `401 Unauthorized` / `Invalid signature`

**原因**: 認証情報の不一致

**解決方法**:
1. `.env` ファイルの4つのキーを再確認
2. コピペ時に余計なスペースや改行が入っていないか確認
3. API KeyとAccess Tokenが同じAppのものか確認
4. 必要であれば全て再生成

---

### ❌ エラー: `429 Too Many Requests`

**原因**: API制限（レート制限）

**解決方法**:
1. 15分待ってから再試行
2. 自動投稿の頻度を下げる（1日3回以下推奨）
3. Free Tierの場合、月間制限に注意

**X API制限（Free Tier）**:
- ツイート投稿: 1500回/月
- 読み取り: 10,000リクエスト/月

---

### ❌ エラー: `Callback URL not approved`

**原因**: Callback URLが未設定

**解決方法**:
1. Settings → User authentication settings
2. Callback URL に `http://localhost:3000/callback` を追加
3. 保存して再テスト

---

### ❌ テストスクリプトで何も表示されない

**原因**: Node.jsのバージョンが古い可能性

**解決方法**:
```bash
node -v  # 18以上か確認
npm install twitter-api-v2@latest  # 最新版に更新
```

---

### ❌ GitHub Actionsでのみエラーが出る

**原因**: Secretsの設定ミス

**解決方法**:
1. GitHub Secrets名が **完全一致** しているか確認
   - `TWITTER_API_KEY`（`TWITTER_API_KEY`ではない）
2. Secretsに余計なスペースが入っていないか確認
3. ワークフローYAMLの `${{ secrets.TWITTER_API_KEY }}` 記述を確認

---

## 📚 参考リンク

- [X Developer Platform](https://developer.x.com/)
- [twitter-api-v2 公式ドキュメント](https://github.com/PLhery/node-twitter-api-v2)
- [OAuth 1.0a 仕様](https://oauth.net/core/1.0a/)

---

## ✅ セットアップ完了チェックリスト

- [ ] X Developer Accountを作成
- [ ] Appを作成（Read and write権限）
- [ ] 4つのキーを取得（API Key, Secret, Access Token, Access Secret）
- [ ] ローカルテストで認証成功
- [ ] テストツイートが投稿できた
- [ ] GitHub Secretsに4つのキーを設定
- [ ] GitHub Actionsでツイート成功

すべてチェックが付いたら完了です！🎉

---

**作成者**: Alex ✨  
**作成日**: 2026-03-13  
**対象プロジェクト**: Muse X自動投稿システム
