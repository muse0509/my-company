# content-creator

Medium記事、YouTube台本、Podcast準備実行スキル。

## Description

Marketing Team実行層。長文コンテンツ作成（Medium記事下書き、YouTube台本、Podcast準備）。Haiku modelで効率的に高品質長文生成。

## When to Use

- Medium記事下書き作成
- YouTube台本作成
- Podcast episode準備
- Technical deep dive記事
- User case study作成

## Process

### Medium記事下書き

**Step 1: トピック決定**
- Technical deep dive（DeFi, Solana）
- Build in public story
- User case study

**Step 2: 構成作成**
- Introduction（Hook）
- Body（3-5 sections）
- Conclusion（CTA）

**Step 3: 下書き作成**
- 1500-2500 words
- Technical but accessible
- Code snippets（if relevant）
- Screenshots/diagrams

### YouTube台本

**Step 1: フォーマット決定**
- Tutorial（How to use Axis Pizza）
- Explanation（How Perps work）
- Update（Weekly progress）

**Step 2: 台本作成**
- Intro（15 sec）
- Main content（3-5 min）
- Outro（15 sec, CTA）

**Step 3: Visual提案**
- Screen recording points
- B-roll suggestions
- Thumbnail ideas

### Podcast準備

**Step 1: エピソード計画**
- Solo episode（Build in public）
- Guest episode（DeFi builders）

**Step 2: Outline作成**
- Intro（1 min）
- Main topics（20-30 min）
- Outro（1 min）

**Step 3: 質問リスト**
- Guest backgroundゲスト背景）
- Technical questions
- Community questions

## Output Format

### Medium記事例:
```
Title: "How We Built Axis Pizza: Simplifying DeFi Trading on Solana"

Hook: Trading perpetuals on Solana should be simple. But it's not...

Section 1: The Problem (500 words)
- DeFi UX complexity
- User research insights

Section 2: Our Solution (700 words)
- 1-click trading
- Visual risk display

Section 3: Technical Implementation (500 words)
- Drift integration
- Auto risk management

Conclusion: (300 words)
- Results (127 users, 40% retention)
- What's next (Jupiter, Mobile)
- CTA: Try Axis Pizza

[Total: 2000 words, 8 min read]
```

## Scripts

- `draft-article.js` - Medium記事下書き生成
- `create-script.js` - YouTube台本生成
- `plan-podcast.js` - Podcast outline生成

## Model

Haiku（長文作成も軽量タスク、コスト効率重視）
