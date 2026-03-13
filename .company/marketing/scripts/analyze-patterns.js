#!/usr/bin/env node
// 過去632件のツイートデータから高エンゲージメントパターンを抽出
const fs = require('fs');
const path = require('path');

function analyzePatterns() {
  console.log('📊 Analyzing 632 past tweets for engagement patterns...');

  // 過去の投稿データ読み込み
  const pastTweetsPath = path.join(__dirname, '../past-tweets/muse-x-history.json');
  
  if (!fs.existsSync(pastTweetsPath)) {
    console.error('❌ Error: muse-x-history.json not found');
    process.exit(1);
  }

  const pastTweets = JSON.parse(fs.readFileSync(pastTweetsPath, 'utf8'));
  console.log(`✅ Loaded ${pastTweets.length} tweets`);

  // エンゲージメント率を計算してソート
  const tweetsWithEngagement = pastTweets.map(tweet => {
    const engagement = tweet.likes + tweet.retweets + tweet.replies + tweet.quotes;
    const engagementRate = tweet.impressions > 0 ? (engagement / tweet.impressions) * 100 : 0;
    
    return {
      text: tweet.text,
      likes: tweet.likes,
      retweets: tweet.retweets,
      replies: tweet.replies,
      quotes: tweet.quotes,
      impressions: tweet.impressions,
      engagement: engagement,
      engagementRate: engagementRate.toFixed(2),
      date: tweet.date,
      url: tweet.url,
      has_media: tweet.has_media || false,
      length: tweet.text.length
    };
  }).sort((a, b) => b.engagement - a.engagement);

  // Top 20を抽出
  const top20 = tweetsWithEngagement.slice(0, 20);

  // パターン分析
  const analysis = {
    topTweets: top20,
    insights: {
      avgLength: Math.round(top20.reduce((sum, t) => sum + t.length, 0) / top20.length),
      avgEngagement: Math.round(top20.reduce((sum, t) => sum + t.engagement, 0) / top20.length),
      avgLikes: Math.round(top20.reduce((sum, t) => sum + t.likes, 0) / top20.length),
      avgRetweets: Math.round(top20.reduce((sum, t) => sum + t.retweets, 0) / top20.length),
      withMedia: top20.filter(t => t.has_media).length,
      mediaPercentage: ((top20.filter(t => t.has_media).length / 20) * 100).toFixed(1),
      avgImpressions: Math.round(top20.reduce((sum, t) => sum + t.impressions, 0) / top20.length),
      avgEngagementRate: (top20.reduce((sum, t) => sum + parseFloat(t.engagementRate), 0) / 20).toFixed(2)
    },
    commonPatterns: {
      hasExclamation: top20.filter(t => t.text.includes('!')).length,
      hasQuestion: top20.filter(t => t.text.includes('?')).length,
      hasEmoji: top20.filter(t => /[\u{1F300}-\u{1F9FF}]/u.test(t.text)).length,
      hasUrl: top20.filter(t => t.text.includes('http')).length,
      hasMention: top20.filter(t => t.text.includes('@')).length,
      hasHashtag: top20.filter(t => t.text.includes('#')).length
    }
  };

  // 結果を出力
  const outputDir = path.join(__dirname, '../data');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, 'high-engagement-patterns.json');
  fs.writeFileSync(outputPath, JSON.stringify(analysis, null, 2), 'utf8');

  console.log('\n📈 Top 20 High-Engagement Tweets Analysis:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`Average Length: ${analysis.insights.avgLength} chars`);
  console.log(`Average Engagement: ${analysis.insights.avgEngagement} (likes+RT+replies+quotes)`);
  console.log(`Average Likes: ${analysis.insights.avgLikes}`);
  console.log(`Average Retweets: ${analysis.insights.avgRetweets}`);
  console.log(`With Media: ${analysis.insights.withMedia}/20 (${analysis.insights.mediaPercentage}%)`);
  console.log(`Average Impressions: ${analysis.insights.avgImpressions}`);
  console.log(`Average Engagement Rate: ${analysis.insights.avgEngagementRate}%`);
  console.log('\n📝 Common Patterns:');
  console.log(`  ! (Exclamation): ${analysis.commonPatterns.hasExclamation}/20`);
  console.log(`  ? (Question): ${analysis.commonPatterns.hasQuestion}/20`);
  console.log(`  😊 (Emoji): ${analysis.commonPatterns.hasEmoji}/20`);
  console.log(`  🔗 (URL): ${analysis.commonPatterns.hasUrl}/20`);
  console.log(`  @ (Mention): ${analysis.commonPatterns.hasMention}/20`);
  console.log(`  # (Hashtag): ${analysis.commonPatterns.hasHashtag}/20`);
  console.log('\n🔝 Top 5 Tweets:');
  top20.slice(0, 5).forEach((tweet, i) => {
    console.log(`\n${i + 1}. [${tweet.engagement} engagement, ${tweet.length} chars]`);
    console.log(`   ${tweet.text.substring(0, 80)}${tweet.text.length > 80 ? '...' : ''}`);
    console.log(`   ${tweet.url}`);
  });

  console.log(`\n✅ Analysis saved to: ${outputPath}`);
  
  return analysis;
}

if (require.main === module) {
  analyzePatterns();
}

module.exports = { analyzePatterns };
