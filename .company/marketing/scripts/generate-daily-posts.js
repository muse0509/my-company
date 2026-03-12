#!/usr/bin/env node
// Claude APIで毎日のX投稿を生成
const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

async function generateDailyPosts() {
  console.log('📝 Generating daily X posts...');

  // トラクションデータ読み込み
  const tractionPath = path.join(__dirname, '../data/current-traction.json');
  const traction = JSON.parse(fs.readFileSync(tractionPath, 'utf8'));

  // 過去の投稿データ読み込み
  const pastTweetsPath = path.join(__dirname, '../past-tweets/muse-x-history.json');
  const pastTweets = JSON.parse(fs.readFileSync(pastTweetsPath, 'utf8'));

  // 高エンゲージメント投稿（Top 20）
  const top20 = pastTweets
    .sort((a, b) => b.engagement - a.engagement)
    .slice(0, 20)
    .map(t => ({ text: t.text, engagement: t.engagement }));

  // Claude APIで投稿生成
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4',
    max_tokens: 4000,
    messages: [{
      role: 'user',
      content: `You are an expert X (Twitter) content strategist for Muse (@muse_jp_sol), a 20-year-old founder building Axis Protocol.

## Current Traction (DevNet)
${JSON.stringify(traction, null, 2)}

## Historical Top 20 High-Engagement Posts
${JSON.stringify(top20, null, 2)}

## Task
Generate 4 X posts for today based on Muse's proven style:

1. **Post 1 (JST 1:30)** - Personal story + traction
2. **Post 2 (JST 3:00)** - Technical progress
3. **Post 3 (JST 5:00)** - Japanese community update
4. **Post 4 (JST 7:00)** - Reaction/surprise

## Muse's Proven Style (from 632 tweets analysis)
- Average 99 chars (but 100-200 performs best)
- Personal stories get 85% of high engagement
- No hashtags (0% in top 20)
- Exclamation marks in 45% of top posts
- Individual content in 50% of top posts
- Japanese posts get +28% engagement

## Output Format
Return JSON:
{
  "01-30": "tweet text here",
  "03-00": "tweet text here",
  "05-00": "tweet text here",
  "07-00": "tweet text here"
}

Make them authentic, using real traction numbers, and matching Muse's voice.`
    }]
  });

  const response = message.content[0].text;
  
  // JSONを抽出
  const jsonMatch = response.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Failed to parse JSON from Claude response');
  }

  const posts = JSON.parse(jsonMatch[0]);

  // 今日の日付でディレクトリ作成
  const today = new Date().toISOString().split('T')[0];
  const outputDir = path.join(__dirname, '../scheduled-posts', today);
  fs.mkdirSync(outputDir, { recursive: true });

  // 各投稿をファイルに保存
  for (const [time, text] of Object.entries(posts)) {
    const filePath = path.join(outputDir, `${time}.txt`);
    fs.writeFileSync(filePath, text, 'utf8');
    console.log(`✅ Generated post for ${time}`);
    console.log(`   ${text.substring(0, 60)}...`);
  }

  console.log(`\n📁 Saved to: ${outputDir}`);
}

generateDailyPosts().catch(console.error);
