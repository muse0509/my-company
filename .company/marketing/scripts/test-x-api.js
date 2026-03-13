#!/usr/bin/env node
// X API OAuth 1.0a テスト
const { TwitterApi } = require('twitter-api-v2');

// GitHub Secretsから読み込み（ローカルテストは環境変数）
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY || 'YOUR_API_KEY',
  appSecret: process.env.TWITTER_API_SECRET || 'YOUR_API_SECRET',
  accessToken: process.env.TWITTER_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN',
  accessSecret: process.env.TWITTER_ACCESS_SECRET || 'YOUR_ACCESS_SECRET',
});

async function testAPI() {
  console.log('🔐 Testing X API OAuth 1.0a...\n');

  try {
    // アカウント情報取得
    const me = await client.v2.me();
    console.log('✅ Authentication successful!');
    console.log(`   Account: @${me.data.username}`);
    console.log(`   Name: ${me.data.name}`);
    console.log(`   ID: ${me.data.id}\n`);

    // テスト投稿（Draft）
    console.log('📝 Test post (not actually posting):\n');
    const testText = `Test from Alex - Axis Protocol automation system check 🍕 [${new Date().toISOString()}]`;
    console.log(`"${testText}"\n`);

    console.log('⚠️  To actually post, uncomment the following line in the script:\n');
    console.log('   // const tweet = await client.v2.tweet(testText);\n');

    // 実際に投稿する場合はコメント解除
    // const tweet = await client.v2.tweet(testText);
    // console.log(`✅ Tweet posted! ID: ${tweet.data.id}`);

    console.log('✅ API test complete!\n');
    console.log('Next: Update GitHub workflow to use these credentials.');

  } catch (error) {
    console.error('❌ Error:', error);
    
    if (error.code === 403) {
      console.error('\n⚠️  403 Forbidden: Check App permissions');
      console.error('   Go to: https://developer.x.com/en/portal/dashboard');
      console.error('   Settings → User authentication → Read and write\n');
    } else if (error.code === 401) {
      console.error('\n⚠️  401 Unauthorized: Check API keys');
      console.error('   Make sure all 4 keys are correct\n');
    }
  }
}

testAPI();
