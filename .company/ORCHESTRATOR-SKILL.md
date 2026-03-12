---
skill: Weekly X Content Orchestrator
type: Orchestrator (Meta-Skill)
purpose: 70投稿/週の完全自動生成パイプライン
departments: Research → Marketing → Secretary
execution: 毎週月曜 JST 1:00 自動実行
---

# Weekly X Content Orchestrator

## 🎯 目的

**Research + Marketing + Secretary を統合し、70投稿/週を完全自動生成**

Museは承認するだけ。それ以外の作業はゼロ。

---

## 🔄 実行フロー（全自動）

### Phase 1: Research調査（月曜 1:00-1:45）

**担当:** Research部署

**タスク:**
1. Solana DeFiトレンド監視
2. 予測市場動向調査
3. Axis開発進捗確認
4. 規制・エコシステム情報収集

**出力:**
```markdown
# 今週のトピック7つ (2026-W11)

1. Firedancer進捗: 1M TPS達成
2. Polymarket成長: $500M月間取引高
3. Axis Testnet: Drift Perps統合完了
4. 規制動向: CFTC予測市場ガイドライン更新
5. Narrative ETF解説: 流動性統合の仕組み
6. Jito連携: MEV抵抗性の予測市場
7. Demo Day実績: Dubai Finalist

保存先: .company/research/weekly-trends/2026-W11.md
```

---

### Phase 2: Marketing投稿生成（月曜 1:45-2:30）

**担当:** Marketing部署

**Input:** Research部署の7トピック

**タスク:**
各トピック × 10パターン = 70投稿生成

**コピーライティングパターン（10種類）:**
1. 速報型
2. 教育型
3. 進捗型
4. 質問型
5. 統計型
6. ビジョン型
7. 比較型
8. 引用型
9. コミュニティ型
10. CTA型

**出力:**
```markdown
# 週次X投稿 (2026-W11)

## Day 1（月曜）
投稿1 - 9:00 PST: Firedancer速報（25-35いいね予測）
投稿2 - 11:00 PST: Polymarket引用（20-30いいね予測）
...
投稿10 - 3:00 PST: Axis CTA（20-35いいね予測）

## Day 2-7
... (60投稿)

合計: 70投稿

保存先: .company/marketing/x-posts/2026-W11-weekly-posts.md
```

---

### Phase 3: Secretary報告（月曜 2:30）

**担当:** Secretary（Alex）

**タスク:**
1. Research + Marketingの成果物を統合
2. Museに報告（Telegram）

**報告フォーマット:**
```
📢 Marketing部署より

今週のX投稿70個が完成しました！
確認してください 👇

---

📋 トピック（7つ）:
1. Firedancer進捗（10投稿）
2. Polymarket成長（10投稿）
3. Axis Testnet（10投稿）
4. 規制動向（10投稿）
5. Narrative ETF解説（10投稿）
6. Jito連携（10投稿）
7. Demo Day実績（10投稿）

---

📅 投稿スケジュール:
- 1日10投稿（PST 9am-3am、2時間おき）
- 7日間で70投稿

---

📊 推定エンゲージメント:
- 合計: 1,500-2,000いいね/週
- フォロワー増: +50-70/週

---

✅ 承認方法:
「全部OK」→ スケジュール登録して自動投稿
「Day 3の投稿5を変更」→ 修正後に再報告
「トピック2を再生成」→ Marketing部署が再作成

---

詳細: .company/marketing/x-posts/2026-W11-weekly-posts.md

**承認お願いします！**
```

---

### Phase 4: Muse承認待ち

**期限:** 月曜 23:59まで

**承認パターン:**

#### A. 全承認
```
Muse: 「全部OK」

↓

Alex: 「承知しました！
       投稿スケジュール登録完了。
       今日から自動投稿開始します 🚀」

↓

自動実行:
- 70投稿をXスケジューラーに登録
- PST時間に合わせて自動投稿
- エンゲージメント追跡開始
```

#### B. 一部修正
```
Muse: 「Day 3の投稿5を変更。もっと技術的に」

↓

Marketing: 「承知しました。修正します。」

↓

Marketing部署が該当投稿を再生成
→ Alex経由でMuse再報告
→ 承認後にスケジュール登録
```

#### C. トピック再生成
```
Muse: 「トピック2（Polymarket）をもっとAxisフォーカスで」

↓

Research: 「了解。トピック2を再調査します」

↓

Research → Marketing連携で10投稿再生成
→ Alex経由でMuse再報告
→ 承認後にスケジュール登録
```

---

### Phase 5: 自動投稿実行（1週間）

**担当:** Marketing部署 + Xスケジューラー

**実行:**
- Day 1-7、毎日10投稿を自動投稿
- エンゲージメント追跡
- 異常値があればAlex経由でMuse報告

**日次モニタリング:**
```
火曜夜:
「📊 Day 1の投稿完了。
 合計エンゲージメント: 180いいね（目標150）
 特に投稿3（教育スレッド）が好評（56いいね） ✅」
```

---

### Phase 6: 週次振り返り（金曜夜）

**担当:** Marketing部署

**タスク:**
1. 今週のエンゲージメント分析
2. パターン別の効果測定
3. 来週の改善提案

**報告:**
```
📊 今週のX投稿振り返り (2026-W11)

## 実績
- 総投稿: 70個
- 総エンゲージメント: 1,750いいね（目標1,500）✅
- フォロワー増: +62（目標+50）✅

## 高評価投稿 Top 3
1. Day 3 投稿5（教育スレッド）: 56いいね、21RT
2. Day 1 投稿7（ビジョン型）: 48いいね、15RT
3. Day 5 投稿2（統計型）: 42いいね、18RT

## パターン別分析
- 教育型: 平均35いいね ⬆️ 最も効果的
- 質問型: 平均12いいね ⬇️ 改善必要
- CTA型: 平均22いいね、CTR 3.5% ✅

## 来週の改善案
1. 教育スレッドを15投稿に増やす（現10）
2. 質問型を5投稿に減らす（現10）
3. Axis進捗を毎日2回に増やす

承認いただければ、来週から適用します。
```

---

## 🎯 Success Metrics（KPI）

### 週次目標
| 指標 | 目標 | 測定方法 |
|-----|------|---------|
| 総投稿数 | 70個 | 自動カウント |
| 総エンゲージメント | 1,500いいね | X Analytics |
| フォロワー増 | +50 | 前週比 |
| 承認率 | 90%以上 | Muse承認/全投稿 |

### 月次目標
| 指標 | 目標 | 現状（3月） |
|-----|------|-----------|
| フォロワー数 | 2,500 | 2,089 |
| 平均エンゲージメント | 25いいね/投稿 | 10いいね |
| バズ投稿 | 100いいね以上×2 | 0 |

### 四半期目標（Q2 2026）
- フォロワー: 5,000
- 月間インプレッション: 100万
- Testnet参加者: 500人（CTAからの流入）

---

## 📌 部署間連携（詳細）

### Research → Marketing
```python
# Research部署が完了したらトリガー
if research_complete:
    trigger_marketing_generation()
```

**連携ファイル:**
```
.company/research/weekly-trends/2026-WXX.md
↓
.company/marketing/x-posts/2026-WXX-weekly-posts.md
```

### Marketing → Secretary
```python
# Marketing部署が完了したらトリガー
if marketing_complete:
    trigger_alex_report_to_muse()
```

**連携:**
- Marketing完了 → Alex経由でMuse報告（Telegram）

### Secretary → Scheduler
```python
# Muse承認後にトリガー
if muse_approved:
    register_to_x_scheduler()
```

**連携:**
- Muse承認 → Xスケジューラーに登録 → 1週間自動投稿

---

## 🛠️ 技術スタック

### 必要なツール
1. **Xスケジューラー（候補）:**
   - Buffer（$6/月）
   - Hootsuite（$99/月）
   - TweetDeck（無料、但し手動）
   - 自作スクリプト（X API）

2. **エンゲージメント追跡:**
   - X Analytics（無料）
   - Hypefury（$29/月、推奨）

3. **自動化:**
   - OpenClaw Cron（毎週月曜 1:00）
   - GitHub Actions（代替案）

---

## 🔧 セットアップ手順

### 1. Cron Job設定
```bash
# 毎週月曜 JST 1:00に実行
cron add \
  --schedule "cron:0 1 * * 1:Asia/Tokyo" \
  --task "週次X投稿70個生成" \
  --payload "systemEvent:Run Research weekly trends analysis" \
  --sessionTarget "main"
```

### 2. Xスケジューラー連携
```bash
# X API Token取得
export X_API_KEY="your_key"
export X_API_SECRET="your_secret"

# 投稿スケジューラースクリプト
node .company/marketing/scripts/schedule-x-posts.js \
  --input .company/marketing/x-posts/2026-WXX-weekly-posts.md \
  --auth $X_API_KEY
```

### 3. エンゲージメント追跡
```bash
# Hypefury連携（推奨）
# または X Analytics手動チェック
```

---

## 🚀 実行コマンド（将来）

### 手動トリガー（テスト用）
```bash
# 今週の70投稿生成
「今週のX投稿70個作って」

↓

1. Research部署が調査
2. Marketing部署が生成
3. Alex経由でMuse報告
4. Muse承認
5. 自動投稿開始
```

### 自動実行（本番）
```
毎週月曜 JST 1:00:
→ Research調査開始
→ Marketing生成
→ Alex報告（JST 2:30）
→ Muse承認待ち（JST 23:59まで）
→ 火曜から自動投稿
```

---

## 🎯 このスキルの価値

### Before（手動）
- 週70投稿作成: **10時間**
- トレンド調査: **2時間**
- スケジューリング: **1時間**
- 合計: **13時間/週**

### After（自動化）
- Muse承認: **10分/週**
- 合計: **10分/週**

**削減時間:** 12時間50分/週 = **51時間/月**

---

**Museは資金調達に集中できます。Xは完全自動で回ります 🚀**
