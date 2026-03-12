---
skill: Weekly X Posts Generator
type: AgentSkill (Orchestrator)
purpose: 毎週月曜朝に1週間分のX投稿70個を一括生成
output: 70個の投稿文 + Figmaサムネイル指示
---

# 週次X投稿一括生成スキル

## 🎯 目標

**毎週月曜朝に70個のX投稿を一括生成**
- 1日10個 × 7日間 = 70個
- 英語投稿
- 米国時間（PST）最適化
- Figmaサムネイル指示付き

---

## 📋 実行フロー（オーケストレーター型）

### Step 1: リサーチスキル実行
**担当:** Research部署

**タスク:**
- Solana DeFi週次トレンド調査
- 予測市場動向
- Axis開発進捗確認
- 競合分析

**出力:**
```
今週のトピック7つ:
1. Firedancer進捗
2. Token Extensions採用
3. Polymarket成長
4. Axis Testnet準備
5. 予測市場規制動向
6. Narrative ETF解説
7. Solana DeFiエコシステム
```

---

### Step 2: コピーライティングスキル実行
**担当:** Marketing部署

**タスク:**
各トピックごとに10個のバリエーション作成

**フレームワーク:**
```
トピック1（例: Firedancer）の10投稿:

投稿1: トレンド速報型
「Firedancer just hit 1M TPS. This changes everything.」

投稿2: 教育型
「What is Firedancer? A thread on Solana's next-gen validator client 🧵」

投稿3: Axis関連型
「Firedancer's speed = Axis's opportunity. Narrative ETFs need fast settlement.」

投稿4: 質問型
「Will Firedancer make Solana the fastest L1? Let's discuss.」

投稿5: 統計型
「1M TPS vs Ethereum's 15 TPS. The gap is insane. 📊」

投稿6: ビジョン型
「Speed isn't just a spec. It's the foundation for next-gen DeFi.」

投稿7: 比較型
「Solana + Firedancer vs other L1s. It's not even close.」

投稿8: 引用型
「"Firedancer is the infrastructure upgrade Solana needs" - [Source]」

投稿9: コミュニティ型
「Firedancer hype is real. Who else is excited? 🙋」

投稿10: CTA型
「Want to build on the fastest chain? Firedancer + Solana = 🚀 Join us: [Link]」
```

**70投稿の構成:**
- トピック7つ × 各10投稿 = 70投稿

---

### Step 3: Figmaサムネイル指示生成
**担当:** Marketing部署

**各投稿にFigma指示:**
```
投稿1: Firedancer速報
Figma指示:
- テンプレート: "Breaking News"
- メインテキスト: "1M TPS"
- サブテキスト: "Firedancer Benchmark"
- カラー: Solana Purple (#9945FF)
- アイコン: 速度アイコン
```

**Figma自動生成（将来）:**
- Figma API連携
- テンプレートから自動生成
- 70枚のサムネイルを一括作成

---

### Step 4: 投稿スケジュール作成
**担当:** Marketing部署

**1日10投稿のタイミング:**
```
Day 1（月曜）:
- 9:00 PST (JST 2:00) - トピック1-1
- 11:00 PST (JST 4:00) - トピック2-1
- 13:00 PST (JST 6:00) - トピック3-1
- 15:00 PST (JST 8:00) - トピック4-1
- 17:00 PST (JST 10:00) - トピック5-1
- 19:00 PST (JST 12:00) - トピック6-1
- 21:00 PST (JST 14:00) - トピック7-1
- 23:00 PST (JST 16:00) - トピック1-2
- 1:00 PST (JST 18:00) - トピック2-2
- 3:00 PST (JST 20:00) - トピック3-2

Day 2-7: 同様のローテーション
```

---

## 📊 出力フォーマット

### ファイル: `marketing/x-posts/YYYY-WW-weekly-posts.md`

```markdown
# 週次X投稿 (2026-W11)

**生成日時:** 2026-03-17 月曜 9:00 JST  
**投稿期間:** 2026-03-17 - 2026-03-23  
**総投稿数:** 70個

---

## 📋 トピックサマリー

1. Firedancer進捗（10投稿）
2. Token Extensions採用（10投稿）
3. Polymarket成長（10投稿）
4. Axis Testnet準備（10投稿）
5. 予測市場規制動向（10投稿）
6. Narrative ETF解説（10投稿）
7. Solana DeFiエコシステム（10投稿）

---

## 📅 Day 1（月曜 3/17）

### 投稿1 - 9:00 PST
**カテゴリ:** Firedancer進捗  
**タイプ:** トレンド速報型

**本文:**
```
Firedancer just hit 1M TPS in benchmarks.

This isn't just speed—it's the infrastructure for next-gen DeFi.

At Axis, we're building Narrative ETFs on Solana to aggregate liquidity across prediction markets.

Speed + liquidity = 🚀
```

**Figma指示:**
- テンプレート: Breaking News
- メインテキスト: "1M TPS"
- サブテキスト: "Firedancer Benchmark"
- カラー: #9945FF
- アイコン: ⚡

**推定エンゲージメント:** 25-35いいね

---

### 投稿2 - 11:00 PST
... (70投稿すべて記載)

---

## 🎨 Figmaサムネイル一覧

### テンプレート必要数:
- Breaking News: 10枚
- Educational: 15枚
- Axis Progress: 12枚
- Question: 8枚
- Stats: 10枚
- Vision: 8枚
- Comparison: 7枚

**合計:** 70枚

---

## ✅ Muse承認フロー

**承認方法:**
1. 全承認: 「全部OK」
2. 一部修正: 「Day 3の投稿5を変更」
3. 再生成: 「トピック2をもっとAxisフォーカスで」

**承認後:**
- 投稿スケジューラーに登録
- Figmaサムネイル作成開始
- 自動投稿準備完了

---

**Marketing部署より**
```

---

## 🔄 実行コマンド（将来）

```bash
# Marketing部署に指示
「今週のX投稿70個作って」

# 自動で:
1. Research部署がトレンド調査
2. Marketing部署が70投稿生成
3. Figma指示作成
4. Museに報告

# Muse承認後:
5. 投稿スケジュール登録
6. Figma連携で自動サムネイル生成
7. 1週間自動投稿
```

---

## 🎯 Success Metrics

### 目標
- 生成時間: 30分以内
- 承認率: 90%以上
- エンゲージメント: 平均20いいね/投稿
- フォロワー増: +50/週

### 測定
- 週次で実績確認
- トピック別のエンゲージメント分析
- 次週の改善に反映

---

**このスキルを毎週月曜朝に自動実行します！**
