#!/usr/bin/env node
// Alex: X自動投稿（OAuth 1.0a）
const { TwitterApi } = require('twitter-api-v2');
const fs = require('fs');
const path = require('path');

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

// 今日の投稿リスト
const today = new Date().toISOString().split('T')[0];
const postsDir = path.join(__dirname, '../scheduled-posts');

async function postScheduledTweets() {
  console.log(`🚀 Alex: Posting scheduled tweets for ${today}\n`);

  try {
    // アカウント確認
    const me = await client.v2.me();
    console.log(`✅ Authenticated as @${me.data.username}\n`);

    // 今日の投稿を探す
    const todayDir = path.join(postsDir, `${today}-daytime-english`);
    const tomorrowDir = path.join(postsDir, `${today}-english`);

    let posted = 0;

    // 今日の日中投稿
    if (fs.existsSync(todayDir)) {
      const files = fs.readdirSync(todayDir).filter(f => f.endsWith('.txt'));
      
      for (const file of files) {
        const text = fs.readFileSync(path.join(todayDir, file), 'utf8');
        const time = file.replace('.txt', '');
        
        console.log(`📝 Posting ${time}...`);
        console.log(`   "${text.substring(0, 50)}..."`);

        const tweet = await client.v2.tweet(text);
        console.log(`✅ Posted! Tweet ID: ${tweet.data.id}\n`);
        
        posted++;
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2秒待機
      }
    }

    // 明日の深夜投稿（該当する場合）
    if (fs.existsSync(tomorrowDir)) {
      const files = fs.readdirSync(tomorrowDir).filter(f => f.endsWith('.txt'));
      
      for (const file of files) {
        const text = fs.readFileSync(path.join(tomorrowDir, file), 'utf8');
        const time = file.replace('.txt', '');
        
        console.log(`📝 Posting ${time}...`);
        console.log(`   "${text.substring(0, 50)}..."`);

        const tweet = await client.v2.tweet(text);
        console.log(`✅ Posted! Tweet ID: ${tweet.data.id}\n`);
        
        posted++;
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    console.log(`✅ Total posted: ${posted} tweets`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.code === 403) {
      console.error('\n⚠️  Check App permissions: Read and write required');
    }
    
    process.exit(1);
  }
}

postScheduledTweets();
