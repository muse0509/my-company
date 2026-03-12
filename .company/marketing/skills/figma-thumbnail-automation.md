---
skill: Figma Thumbnail Automation
type: Integration Skill
purpose: X投稿用のサムネイルを自動生成
api: Figma API
---

# Figmaサムネイル自動生成

## 🎯 目標

**70枚のXサムネイルを自動生成**
- Figma APIで自動化
- テンプレートベース
- 一括エクスポート

---

## 📋 必要な準備

### 1. Figma Setup
```
Figmaファイル構成:
axis-x-thumbnails/
├── templates/
│   ├── breaking-news.fig
│   ├── educational.fig
│   ├── axis-progress.fig
│   ├── question.fig
│   ├── stats.fig
│   ├── vision.fig
│   └── comparison.fig
└── generated/
    └── 2026-WW/
        ├── week-11-01.png
        ├── week-11-02.png
        └── ... (70枚)
```

### 2. Figma API Token取得
```bash
# Figma Settings → Personal Access Tokens
# https://www.figma.com/developers/api#authentication

export FIGMA_TOKEN="your_token_here"
```

### 3. テンプレート設計

**共通要素:**
- Axisロゴ（固定）
- 背景カラー（トピック別）
- メインテキスト（可変）
- サブテキスト（可変）
- アイコン（可変）

**テンプレート例（Breaking News）:**
```
┌─────────────────────────┐
│ [Axis Logo]             │
│                         │
│   1M TPS                │  ← メインテキスト（大）
│   Firedancer Benchmark  │  ← サブテキスト（小）
│                         │
│ ⚡ [アイコン]            │
│                         │
│ #Solana #DeFi           │  ← ハッシュタグ（固定）
└─────────────────────────┘
```

---

## 🔧 実装方法

### Option A: Figma API（推奨・完全自動）

**フロー:**
```javascript
// 1. テンプレート取得
const template = await figma.getFile(TEMPLATE_ID);

// 2. 70投稿分ループ
for (const post of posts) {
    // 3. テンプレート複製
    const newNode = await figma.duplicate(template);
    
    // 4. テキスト更新
    await figma.updateText(newNode, {
        mainText: post.mainText,
        subText: post.subText
    });
    
    // 5. 画像エクスポート
    const image = await figma.exportImage(newNode, {
        format: 'PNG',
        scale: 2
    });
    
    // 6. 保存
    fs.writeFileSync(`/generated/week-${post.id}.png`, image);
}
```

---

### Option B: Figma Plugin（半自動）

**Custom Plugin作成:**
```typescript
// figma-plugin.ts
figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate-thumbnails') {
    const posts = msg.posts; // 70投稿データ
    
    for (const post of posts) {
      // テンプレート複製
      const node = figma.currentPage.findOne(n => n.name === post.template);
      const copy = node.clone();
      
      // テキスト更新
      const textNodes = copy.findAll(n => n.type === 'TEXT');
      for (const text of textNodes) {
        await figma.loadFontAsync(text.fontName);
        if (text.name === 'MainText') {
          text.characters = post.mainText;
        }
        if (text.name === 'SubText') {
          text.characters = post.subText;
        }
      }
      
      // エクスポート
      const bytes = await copy.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: 2 } });
      figma.ui.postMessage({ type: 'export-complete', data: bytes });
    }
  }
};
```

---

### Option C: Canva API（代替案）

Figma APIが複雑な場合、Canva APIも選択肢

**メリット:**
- API使いやすい
- テンプレート豊富
- 自動化対応

**デメリット:**
- 有料プラン必要（Pro: $15/月）

---

## 📊 自動化フロー（完全版）

### 毎週月曜朝の実行

```bash
# Step 1: Research部署がトレンド調査
# → トピック7つ決定

# Step 2: Marketing部署が70投稿生成
# → 投稿文 + Figma指示作成

# Step 3: Figma自動生成
node generate-figma-thumbnails.js \
  --input marketing/x-posts/2026-W11-weekly-posts.md \
  --output marketing/x-posts/2026-W11-thumbnails/

# → 70枚のPNG生成

# Step 4: Museに報告
「📢 今週のX投稿70個 + サムネイル70枚完成。
 確認してください。
 承認いただければスケジュール登録します。」

# Step 5: Muse承認後
# → X投稿スケジューラーに登録（サムネイル付き）
```

---

## 🛠️ 実装スクリプト

### generate-figma-thumbnails.js

```javascript
const axios = require('axios');
const fs = require('fs');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = 'your-figma-file-key';

async function generateThumbnails(posts) {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    
    console.log(`Generating thumbnail ${i+1}/70: ${post.title}`);
    
    // Figma APIでテンプレート取得
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FILE_KEY}`,
      { headers: { 'X-Figma-Token': FIGMA_TOKEN } }
    );
    
    // テンプレート選択
    const template = response.data.document.children.find(
      c => c.name === post.figmaTemplate
    );
    
    // （省略: テキスト更新、エクスポート）
    
    // 画像保存
    fs.writeFileSync(
      `./thumbnails/week-${i+1}.png`,
      imageBuffer
    );
  }
  
  console.log('✅ 70枚のサムネイル生成完了');
}

// 実行
const posts = JSON.parse(fs.readFileSync('./posts.json'));
generateThumbnails(posts);
```

---

## 📋 テンプレート仕様

### カラーパレット（トピック別）

| トピック | メインカラー | アクセント |
|---------|-------------|-----------|
| Firedancer | #9945FF（Solana Purple） | #14F195 |
| Token Extensions | #00D4AA | #FF6B9D |
| Polymarket | #7C3AED | #F59E0B |
| Axis | #3B82F6 | #10B981 |
| 規制 | #EF4444 | #FCD34D |
| 教育 | #6366F1 | #A78BFA |
| エコシステム | #14F195 | #9945FF |

### フォント
- **メインテキスト:** Inter Bold, 48px
- **サブテキスト:** Inter Regular, 24px
- **ハッシュタグ:** Inter Medium, 16px

### サイズ
- **X推奨:** 1200×675px（16:9）
- **Export:** PNG, 2x（2400×1350px）

---

## 🎯 Success Metrics

### 目標
- 生成時間: 10分以内（70枚）
- エラー率: 0%
- 品質: デザインレビュー不要レベル

### 測定
- 生成時間ログ
- エラー発生時の原因分析
- エンゲージメント（サムネあり vs なし）

---

## 📌 次のステップ

### Phase 1: 手動テンプレート作成（今週）
- Figmaで7テンプレート作成
- 手動で10枚生成してテスト

### Phase 2: 半自動化（来週）
- Figma Plugin作成
- 一括生成スクリプト

### Phase 3: 完全自動化（2週間後）
- Figma API統合
- Marketing部署から自動実行

---

**Figma連携で、Xサムネイルを完全自動化します！**
