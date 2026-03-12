#!/usr/bin/env node
// X API (OAuth 1.0a) 経由で投稿
const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

async function postTweet(text) {
  try {
    const tweet = await client.v2.tweet(text);
    console.log('✅ Tweet posted successfully!');
    console.log(`Tweet ID: ${tweet.data.id}`);
    console.log(`URL: https://x.com/muse_jp_sol/status/${tweet.data.id}`);
    return tweet;
  } catch (error) {
    console.error('❌ Error posting tweet:', error);
    throw error;
  }
}

// コマンドライン引数から投稿文を取得
const tweetText = process.argv[2];

if (!tweetText) {
  console.error('Usage: node post-to-x.js "Tweet text"');
  process.exit(1);
}

postTweet(tweetText);
