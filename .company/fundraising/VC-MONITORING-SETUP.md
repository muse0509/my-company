# VC監視システム セットアップガイド

## 🎯 目的
Solana/Web3 VCの最新動向をリアルタイムで追跡し、warm intro経路とイベント機会を発見する。

---

## 📋 優先度別VCリスト

### Tier 1（最優先・毎日チェック）
1. **Solana Ventures** (@solanaventures)
   - Solanaエコシステム公式ファンド
   - 新規投資・イベント告知頻繁
   - URL: https://x.com/solanaventures

2. **Multicoin Capital** (@multicoincap)
   - 活発なソーシャルプレゼンス
   - Podcast/AMA募集多い
   - URL: https://x.com/multicoincap

3. **Polychain Capital** (@polychainx)
   - 大手、warm intro済み（James Evans経由）
   - URL: https://x.com/polychainx

### Tier 2（週次チェック）
4. **Dragonfly Capital** (@dfly_cap)
5. **Jump Crypto** (@jump_)
6. **Wintermute Ventures** (@wintermute_t)

---

## 🛠️ 監視方法（3つの選択肢）

### Option A: X Lists（無料・即座に設定可能）

**手順:**
1. https://x.com/i/lists にアクセス
2. 「新しいリストを作成」
3. 名前: `Solana VCs`
4. 説明: `Solana/Web3 VCs for Axis fundraising`
5. 非公開に設定
6. 上記6つのVCアカウントを追加
7. リストを毎朝確認（5分）

**メリット:** 無料、設定5分、カスタマイズ可能  
**デメリット:** 手動チェック必要

---

### Option B: Lunarcrush（有料・自動監視）

**機能:**
- ソーシャルメンション追跡
- エンゲージメント分析
- アラート設定

**価格:** $49/月〜  
**URL:** https://lunarcrush.com

**セットアップ:**
1. アカウント作成
2. 「Influencers」でVC追跡設定
3. Discord/Slackアラート連携

**メリット:** 自動、詳細分析  
**デメリット:** 有料

---

### Option C: Notifi（Web3特化・無料プラン有）

**機能:**
- オンチェーン＋オフチェーン通知
- X mentions追跡
- Telegram/Discord連携

**価格:** 無料プラン有、Pro $29/月  
**URL:** https://notifi.network

**セットアップ:**
1. https://app.notifi.network でアカウント作成
2. 「Alerts」→「Social」で VCアカウント追跡
3. Telegram連携設定

**メリット:** Web3特化、無料プラン有、Telegram連携  
**デメリット:** 設定やや複雑

---

## 🎯 Alex推奨：段階的導入

### Phase 1（今日）
**X Lists作成（無料）**
- 5分で設定完了
- 毎朝7:30に5分チェック
- HEARTBEAT.mdに追加

### Phase 2（1週間後）
**Notifi導入（無料プラン）**
- Telegram自動通知
- 重要投稿のみアラート

### Phase 3（必要に応じて）
**Lunarcrush導入（有料）**
- 詳細分析が必要になったら
- VC戦略最適化

---

## 📊 期待される成果

### 短期（1週間）
- 新規投資発表の即時発見
- AMA/Podcast募集の見逃し防止

### 中期（1ヶ月）
- Warm intro経路の発見（共通投資先、イベント参加）
- VC投資パターンの理解

### 長期（3ヶ月）
- 最適なアプローチタイミングの特定
- VC関心領域とAxisの適合性分析

---

## 🔄 運用フロー

**毎朝7:30（Alexの自動チェック）:**
1. X List確認（5分）
2. 重要情報あれば：
   - `.company/fundraising/vc-updates/YYYY-MM-DD.md` に記録
   - GitHubコミット
   - 緊急度高ければMuseに報告（Telegram）
3. 通常情報：
   - ファイル記録のみ、Museへの報告なし

**週次レビュー（金曜18:00）:**
- 週間トレンド分析
- warm intro機会の評価
- 次週のアクションプラン

---

## 📝 記録フォーマット

```markdown
# VC Updates - YYYY-MM-DD

## Solana Ventures
- 13:45: 新規投資発表 - Tensor Labs ($20M Series A)
  - Lead: Solana Ventures
  - 関連性: NFT marketplace（Axisとは別領域）
  - アクション: なし

## Multicoin Capital
- 09:30: Podcast募集ツイート「Looking for DeFi founders building on Solana」
  - 期限: 2026-03-20
  - アクション: Alex申し込み済み（メール送信）
  - 優先度: 高

## 総括
- 重要度★★★: Multicoin Podcast機会
- warm intro可能性: Tensor Labs経由でSolana Ventures
```

---

## 🚀 今日のアクション（Alex実行）

1. ✅ X Lists作成（5分）
2. ✅ HEARTBEAT.mdに追加
3. ⏳ 明日朝7:30から運用開始

---

**Alex判断完了。実行に移ります。**
