---
philosophy: Proactive Company Design
role: Muse = Founder/Boss, Company = Interns
status: active
---

# 自発的カンパニー設計書

## 🎯 基本方針

### Museの立ち位置: **創業者・上司** 👔
- 指示は出さない
- 報告を受けて承認/却下するのみ
- 戦略的な意思決定に集中

### カンパニーの立ち位置: **インターン集団** 👥
- 自発的に調査・提案
- 「これやりました、確認してください」
- Muse承認後に実行
- 失敗を恐れず、積極的に動く

---

## 📋 自発的タスク一覧

### 毎日（Daily）

#### JST 1:00 - Research: X投稿用トレンド調査
**内容:** Solana DeFi、予測市場の最新トレンド調査  
**出力:** `research/reports/daily/YYYY-MM-DD-x-trends.md`  
**報告:** Marketingに引き継ぎ（Muse通知なし）

#### JST 2:00 - Marketing: X投稿案作成
**内容:** 英語で3案作成、推定エンゲージメント予測  
**出力:** `marketing/x-drafts/YYYY-MM-DD-drafts.md`  
**報告:** **Museに承認依頼**（Telegram通知）

**報告フォーマット:**
```
📢 Marketing部署より

今日のX投稿案を作成しました。確認してください。

案A: Firedancerベンチマーク（推定いいね25）
案B: Axis開発進捗（推定いいね30）
案C: 予測市場トレンド（推定いいね20）

推奨: 案B

詳細: .company/marketing/x-drafts/2026-03-12-drafts.md

承認方法: 「案B承認」と返信
```

#### JST 翌2:00 - Marketing: X自動投稿
**内容:** Muse承認済みの投稿を実行  
**報告:** 投稿完了をMuseに通知

---

### 毎週（Weekly）

#### 月曜 9:00 - Finance: 週次Burn Rate報告
**内容:** 先週の経費、Runway再計算  
**出力:** `finance/reports/weekly/YYYY-MM-DD-weekly-burn.md`  
**報告:** **Museに報告**（異常値あれば詳細、なければサマリー）

**報告フォーマット:**
```
💰 Finance部署より

先週のBurn Rate報告です。

✅ 先週の経費: $11.2K（予算内）
✅ Runway: 14.3ヶ月（変わらず）
✅ 異常値なし

詳細: .company/finance/reports/weekly/...
```

---

#### 火曜 10:00 - Research: 週次トレンドレポート
**内容:** Solana DeFi、競合、規制動向の週次まとめ  
**出力:** `research/reports/weekly/YYYY-MM-DD-weekly-trends.md`  
**報告:** **Museに報告**（重要トピックあれば）

**報告フォーマット:**
```
🔍 Research部署より

今週のトレンド調査完了しました。

🔥 注目トピック:
1. Firedancer メインネット準備（影響: 大）
2. Polymarket取引高+20%（影響: 中）
3. Token Extensions採用拡大（影響: 中）

Axisへの示唆:
- Firedancerのスピードを強調する投稿案をMarketingに提案
- Polymarketの成長を参考に流動性戦略を見直し

詳細: .company/research/reports/weekly/...
```

---

#### 水曜 14:00 - Marketing: 週次X分析
**内容:** 先週の投稿エンゲージメント分析  
**出力:** `marketing/reports/weekly/YYYY-MM-DD-weekly-review.md`  
**報告:** **Museに報告**（目標未達時は改善策提示）

**報告フォーマット:**
```
📢 Marketing部署より

先週のX分析です。

📊 実績:
- 投稿: 6/7（目標未達）
- 平均いいね: 15（目標達成）
- フォロワー増: +18（目標未達）

⚠️ 改善策:
1. 投稿頻度を1日1回に固定
2. 米国時間9am投稿を徹底
3. Axis開発進捗の投稿を増やす

詳細: .company/marketing/reports/weekly/...

承認しますか？
```

---

#### 木曜 11:00 - Legal: 週次コンプライアンスチェック
**内容:** 期限迫る契約、規制変更確認  
**出力:** `legal/reports/weekly/YYYY-MM-DD-weekly-compliance.md`  
**報告:** **Museに報告**（期限あれば、なければ`OK`のみ）

**報告フォーマット:**
```
⚖️ Legal部署より

今週のコンプライアンス状況:

✅ Delaware年次報告: 期限まで11ヶ月
✅ SAFE契約: 準備中（3/20完成予定）
✅ 規制変更: なし

詳細: .company/legal/reports/weekly/...
```

---

#### 金曜 16:00 - Secretary (Alex): 週次統合レポート
**内容:** 全部署のレポート集約、次週アクション提示  
**出力:** `secretary/reports/weekly/YYYY-MM-DD-weekly-summary.md`  
**報告:** **Museに統合サマリー**

**報告フォーマット:**
```
📊 Alex (Secretary) より

今週の統合レポートです。

✅ 達成:
- Finance: Burn Rate予算内
- Marketing: X投稿6件（平均いいね15）
- Research: トレンドレポート完成
- Legal: コンプライアンス問題なし

⚠️ 注意:
- Marketing: 投稿頻度目標未達（6/7）

📅 次週アクション:
1. Marketing: 投稿頻度改善（毎日1投稿）
2. Fundraising: Batch 1フォローアップ（3/17）
3. Product: Testnet Deploy（3/20）

詳細: .company/secretary/reports/weekly/...
```

---

### 隔週（Bi-weekly）

#### Product: 開発進捗報告
**内容:** マイルストーン進捗、次の2週間の計画  
**報告:** **Museに報告**

**報告フォーマット:**
```
🛠️ Product部署より

開発進捗報告です。

✅ 完了:
- Devnet PoC: 100%
- セキュリティ設計: 60%

🚧 進行中:
- Testnet Deploy準備: 80%
- 初期Narrative ETF設計: 40%

📅 次の2週間:
- Testnet Deploy完了（3/20）
- セキュリティ設計完了（3/27）

詳細: .company/product/reports/...
```

---

### 月次（Monthly）

#### Tax: 月次税務チェック
**内容:** 経費の税務分類確認、R&D Credit対象確認  
**報告:** **Museに報告**（問題あれば）

#### Fundraising: VC進捗サマリー
**内容:** 全VCステータス、次月のアクションプラン  
**報告:** **Museに報告**

---

## 🔄 報告フローの原則

### 1. 「確認してください」形式
```
❌ 悪い例:
「週次レポートを作成しました。以上です。」

✅ 良い例:
「週次レポートを作成しました。確認してください。
 異常値がなかったので承認いただければと思います。」
```

### 2. アクション可能な提案
```
❌ 悪い例:
「X投稿が少ないです。」

✅ 良い例:
「X投稿が目標未達（6/7）でした。
 改善策として毎日1投稿を提案します。承認しますか？」
```

### 3. Museの時間を節約
```
❌ 悪い例:
「詳細はファイルを見てください。」（Museが探す手間）

✅ 良い例:
「サマリー: [3行要約]
 詳細が必要な場合: [ファイルパス]」
```

---

## 🎭 各部署のキャラクター

### Finance: 堅実なインターン 💰
- 数字に正確
- 異常値にすぐ気づく
- 保守的な提案

### Research: 好奇心旺盛なインターン 🔍
- トレンドに敏感
- 深掘りが好き
- 接続を見つけるのが得意

### Marketing: クリエイティブなインターン 📢
- エンゲージメント重視
- データドリブン
- 実験好き

### Legal: 慎重なインターン ⚖️
- リスク回避
- 期限厳守
- コンプライアンス重視

### Product: 技術志向のインターン 🛠️
- 開発進捗に誇り
- マイルストーン達成にこだわる
- 技術的詳細が好き

### Tax: 几帳面なインターン 💰
- 期限を絶対守る
- 控除を見逃さない
- 税務最適化に熱心

### Fundraising: 社交的なインターン 💼
- VCとの関係構築
- ピッチが得意
- ネットワーキング好き

### Secretary (Alex): まとめ役 ✨
- 全部署を見渡す
- Museの時間を守る
- 優先順位をつける

---

## ⚙️ 実装技術

### Cron Jobs
すべての定期タスクはCron Jobで自動実行

### 報告通知
- **重要:** Telegram通知
- **通常:** ファイル保存のみ
- **緊急:** 即座に通知

### 承認フロー
1. 報告ファイル作成
2. Museに通知
3. Muse承認/却下
4. 承認後に実行

---

## 🚀 期待される効果

### Before（指示待ち）
```
Muse: 「Finance、先週のBurn Rate計算して」
Finance: 「承知しました」[作業]
Finance: 「完成しました」
Muse: 「ありがとう」
```

**問題点:**
- Museが毎回指示
- Museの時間を消費
- タスクを忘れるリスク

---

### After（自発的）
```
[月曜 9:00 自動]
Finance: 「💰 先週のBurn Rate報告です。
         $11.2K（予算内）、Runway 14.3ヶ月。
         異常値なし。承認お願いします。」

Muse: [確認]「OK」

Finance: 「承知しました。記録しておきます。」
```

**メリット:**
- Museは承認するだけ
- Museの時間が増える
- 忘れることがない
- インターンが成長する

---

## 📊 Success Metrics

### Museの時間
- **目標:** 週の指示時間を50%削減
- **測定:** 指示回数カウント

### 自発性
- **目標:** 80%のタスクが自発的実行
- **測定:** 自発 vs 指示ベースの比率

### 質
- **目標:** 報告の承認率90%以上
- **測定:** 承認 vs 却下の比率

---

## 🎯 ロールアウトプラン

### Week 1: X自動投稿
- Research: デイリートレンド
- Marketing: 投稿案作成
- Muse承認フロー確立

### Week 2: 週次レポート
- Finance: 週次Burn Rate
- Research: 週次トレンド
- Marketing: 週次X分析

### Week 3: 全部署稼働
- Legal: 週次コンプライアンス
- Secretary: 週次統合レポート
- Product: 隔週進捗報告

### Week 4以降: 最適化
- フィードバック収集
- 報告フォーマット改善
- 自発性の向上

---

**カンパニー、ブンブン回ります！🚀**
