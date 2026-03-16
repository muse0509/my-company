# pitch-builder

Pitch Deckスライド作成（YCテンプレート）実行スキル。

## Description

Fundraising Team実行層。スライド作成、データ可視化、ストーリーテリング。Haiku modelで効率的に高品質スライド生成。

## When to Use

- Pitch Deck新規作成
- VCカスタマイズ版作成
- データ更新（metrics変更時）
- デザイン改善

## Process

### Step 1: テンプレート選択
- YC standard（10 slides）
- Custom（VC thesis別）

### Step 2: コンテンツ作成
- Slide 1: Cover（Logo, Tagline）
- Slide 2: Problem（痛み、データ）
- Slide 3: Solution（差別化）
- Slide 4: Product（スクリーンショット）
- Slide 5: Market（TAM, SAM, SOM）
- Slide 6: Traction（127 users, growth）
- Slide 7: Business Model（Revenue）
- Slide 8: Team（Muse, Advisors）
- Slide 9: Competition（比較表）
- Slide 10: Ask（$750K, Use of Funds）

### Step 3: データ可視化
- User growth chart
- Retention cohort
- Market size pie chart
- Competitive matrix

### Step 4: ストーリーテリング
- VCカスタマイズ（thesis fit強調）
- Portfolio引用
- ナラティブ調整

### Step 5: デザイン
- Clean, minimal
- 1 idea per slide
- Visual > Text

## Output Format

- **PDF:** Final deck（送付用）
- **Figma/Canva:** Editable source
- **Speaker notes:** 各スライド説明

## Scripts

- `create-slide.js` - スライド自動生成
- `update-metrics.js` - 最新データ更新
- `customize-vc.js` - VC別カスタマイズ

## Model

Haiku（スライド作成は軽量タスク、コスト効率重視）
