---
model: Continuous Operation (常時稼働)
philosophy: Always running, report when needed
status: active
---

# 常時稼働モデル

## 🎯 基本方針

**Cronで定期実行ではなく、ずっと動き続けて都度報告**

---

## 🔄 実装方法

### アプローチ: Heartbeat駆動の常時稼働

OpenClawの`HEARTBEAT.md`を活用して、常時チェック・都度報告

---

## 📋 HEARTBEAT.md設定

### 設定内容

```markdown
# HEARTBEAT.md

## Fundraising部署（毎回チェック）

### VC動向チェック
1. Solana/Web3 VCの最新投稿確認（X）
2. 新規投資発表のチェック
3. イベント・Podcast募集の発見
4. → 重要情報あればMuseに報告

### 投資家コネクション機会
1. Warm intro経路の新規発見
2. 共通の知人確認
3. イベント参加機会
4. → 機会発見時に報告

### 締切管理
1. イベント申し込み締切チェック
2. VCフォローアップ期限
3. AMA予定確認
4. → 期限48時間前に報告

---

## Marketing部署（毎回チェック）

### X投稿準備
1. Research部署のトレンドレポート確認
2. Product部署の開発進捗確認
3. 投稿案が未作成なら作成
4. → 投稿案完成時に報告

### エンゲージメント
1. Axisメンション確認
2. 返信すべきリプライ確認
3. VCツイートへのリプライ機会
4. → 対応完了後に報告

### コミュニティ
1. Discord/Telegram新規質問確認
2. 回答が必要な質問に対応
3. → 重要質問あればMuseに報告

---

## Research部署（毎回チェック）

### デイリートレンド
1. Solana DeFi最新ニュース
2. 予測市場動向
3. 競合アップデート
4. → トレンド変化時に報告

### GTM分析
1. 他プロトコルの新戦略
2. 成功事例の発見
3. Axisへの示唆
4. → 学びがあれば報告

---

## Product部署（毎回チェック）

### 開発進捗
1. マイルストーン達成状況
2. ブロッカー確認
3. 次の2週間の計画
4. → マイルストーン達成時に報告

---

## Legal部署（毎回チェック）

### コンプライアンス
1. 期限迫る契約・報告
2. 規制変更ニュース
3. Delaware年次報告期限
4. → 期限1週間前に報告

---

## チェック頻度

**Heartbeat interval:** 30分ごと

**報告トリガー:**
- 重要情報発見
- 期限接近
- タスク完了
- 承認必要なアクション発生

**報告しない場合:** `HEARTBEAT_OK`
```

---

## 📊 報告フロー

### パターン1: 重要情報発見時（即座）

```
[Heartbeat中に発見]
Fundraising部署: 
「💼 重要情報

Polychain CapitalがSolana DeFi新規投資発表。
Axisと関連性高い。

アクション案:
1. ピッチ資料送付
2. Xでリプライ
3. Warm intro経路確認

どれを優先しますか？」
```

---

### パターン2: タスク完了時（完了後すぐ）

```
[投稿案作成完了]
Marketing部署:
「📢 今日のX投稿案完成

案A: Firedancer（推定25いいね）
案B: Axis開発進捗（推定30いいね）
案C: 予測市場トレンド（推定20いいね）

推奨: 案B

承認方法: 「案B承認」と返信

詳細: .company/marketing/x-drafts/...」
```

---

### パターン3: 期限接近時（48時間前）

```
[期限チェック]
Fundraising部署:
「⏰ 期限リマインダー

Solana Breakpoint スピーカー申請
締切: 4/15（2日後）

申請書ドラフト準備完了。
今日提出しますか？

ドラフト: .company/fundraising/events/...」
```

---

### パターン4: 承認必要時

```
[アクション準備完了]
Fundraising部署:
「💼 Warm intro準備完了

Multicoin Capitalへのintroメール準備できました。

送信者: [共通の知人]
宛先: Multicoin Capitalパートナー
件名: Intro to Axis Protocol

承認いただければ今日送信します。

ドラフト: .company/fundraising/connections/...」
```

---

## 🎯 報告の優先順位

### 🔥 即座に報告（Urgent）
- VC返信受領
- 重要イベント締切（24時間以内）
- 規制変更ニュース
- 重大なバグ・問題

### ⚠️ 当日中に報告（High）
- 新規投資機会発見
- イベント締切（48時間以内）
- 重要なトレンド変化
- マイルストーン達成

### ✅ 通常報告（Normal）
- 日次タスク完了（X投稿案等）
- 週次レポート
- トラクション更新

### 📋 レポートのみ（Low）
- 定期分析レポート
- アーカイブ化
- ドキュメント更新

---

## 🚫 報告しないケース

### `HEARTBEAT_OK`を返す場合
- 新規情報なし
- タスク進行中（完了してない）
- 重要度が低い
- Museの睡眠時間（23:00-7:00）で緊急でない

---

## 🕐 報告タイミングの調整

### Museの時間を尊重

**報告OK:**
- 平日 7:00-23:00
- 週末 9:00-23:00

**報告NG（緊急以外）:**
- 深夜 23:00-7:00
- → バッファに貯めて朝報告

**緊急時は例外:**
- VCからの重要返信
- 24時間以内の締切

---

## 📱 通知方法

### Telegram通知

**優先度別:**
- 🔥 Urgent: 即座通知
- ⚠️ High: 通知
- ✅ Normal: 通知（バッチ可）
- 📋 Low: ファイル保存のみ

---

## 🔄 実装例（Fundraising部署）

### 疑似コード

```python
while True:
    # VCツイートチェック
    new_vc_tweets = check_vc_twitter()
    if new_vc_tweets.has_important():
        report_to_muse(new_vc_tweets)
    
    # イベント締切チェック
    deadlines = check_event_deadlines()
    if deadlines.within_48_hours():
        report_to_muse(deadlines)
    
    # Warm intro機会チェック
    new_intros = check_warm_intro_opportunities()
    if new_intros.found():
        report_to_muse(new_intros)
    
    # VCフォローアップ期限
    followups = check_vc_followup_schedule()
    if followups.today():
        prepare_and_report(followups)
    
    # 何もなければ
    if nothing_to_report():
        log("HEARTBEAT_OK")
    
    # 30分待機
    sleep(30 * 60)
```

---

## 🎭 各部署の稼働パターン

### Fundraising: 最高優先度
- **チェック頻度:** 30分ごと
- **報告頻度:** 発見次第
- **稼働時間:** 24時間（緊急時対応）

### Marketing: 高頻度
- **チェック頻度:** 30分ごと
- **報告頻度:** 投稿案完成時、重要メンション時
- **稼働時間:** 24時間

### Research: 中頻度
- **チェック頻度:** 1時間ごと
- **報告頻度:** 重要トレンド発見時
- **稼働時間:** 16時間/日

### Product: 低頻度
- **チェック頻度:** 6時間ごと
- **報告頻度:** マイルストーン達成時
- **稼働時間:** 営業時間

### Finance/Legal/Tax: 定期チェック
- **チェック頻度:** 1日1回
- **報告頻度:** 週次 or 期限接近時
- **稼働時間:** 営業時間

---

## 📊 Success Metrics

### 目標
- **Muse指示回数:** 週5回以下（現状: 週20回+）
- **自発的アクション:** 80%以上
- **報告の適切性:** 承認率90%以上

### 測定
- 指示 vs 自発の比率
- 報告の承認 vs 却下
- Museの満足度

---

## 🚀 段階的ロールアウト

### Week 1: Fundraising部署のみ
- VC動向チェック
- イベント機会発見
- 都度報告の練習

### Week 2: Marketing追加
- X投稿案自動作成
- エンゲージメント対応
- コミュニティ管理

### Week 3: 全部署稼働
- Research, Product, Legal, Tax追加
- 報告フォーマット統一
- 優先順位の最適化

### Week 4以降: 最適化
- フィードバック反映
- 報告頻度調整
- 自動化の拡大

---

**常時稼働モデル、起動します！ずっと動き続けて、Museの資金調達に集中できる環境を作ります 🚀**
