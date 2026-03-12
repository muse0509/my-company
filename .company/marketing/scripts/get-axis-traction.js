#!/usr/bin/env node
// Axisトラクション自動取得スクリプト
// Cloudflare Workers Stats API経由でDevNetの統計を取得

// === 設定 ===
const STATS_API_ENDPOINT = process.env.AXIS_STATS_API || 'https://api.axis-protocol.xyz/stats';
// または一時的にWorkers URLを直接指定:
// const STATS_API_ENDPOINT = 'https://axis-stats-api.your-subdomain.workers.dev/stats';

// === トラクション取得関数 ===

async function getAxisTraction() {
  // Cloudflare Workers Stats API経由で取得
  return await getTractionFromAPI();
}

// Cloudflare Stats API経由取得
async function getTractionFromAPI() {
  try {
    const response = await fetch(STATS_API_ENDPOINT);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    return {
      users: data.users || 0,
      etfs: data.etfs || 0,
      environment: data.environment || 'devnet',
      updated_at: data.updated_at || new Date().toISOString()
    };
  } catch (error) {
    console.error('❌ API fetch error:', error.message);
    console.error('Falling back to mock data...');
    return getMockTraction();
  }
}

// モックデータ（開発用・API未実装時）
function getMockTraction() {
  return {
    users: 127, // DevNet上のユーザー数
    etfs: 8,    // 作成されたETF数
    environment: 'devnet',
    updated_at: new Date().toISOString()
  };
}

// === フォーマット関数 ===

function formatTraction(traction) {
  return {
    users: traction.users,
    users_formatted: traction.users.toLocaleString(),
    etfs: traction.etfs,
    etfs_formatted: traction.etfs.toLocaleString(),
    environment: traction.environment,
    updated_at: traction.updated_at,
    // 成長率（TODO: 前日比を履歴から計算）
    user_growth: 'N/A',
    etf_growth: 'N/A'
  };
}

// === 投稿テンプレート生成（DevNet用） ===

function generateTweetTemplates(traction) {
  const formatted = formatTraction(traction);
  
  return {
    milestone_users: `Axis just hit ${formatted.users_formatted} users on DevNet 🚀

${formatted.etfs_formatted} Narrative ETFs created.

Building the future of prediction markets, one user at a time.`,

    milestone_etfs: `${formatted.etfs_formatted} Narrative ETFs created on Axis.

${formatted.users_formatted} users already experimenting with the future of prediction markets.

This is just the beginning 💪`,

    daily_stats: `📊 Axis DevNet Stats:

Users: ${formatted.users_formatted}
Narrative ETFs: ${formatted.etfs_formatted}
Environment: ${formatted.environment}

Testing in production 🔨`,

    growth: `Axis growth update:

${formatted.users_formatted} users testing our Narrative ETF Layer
${formatted.etfs_formatted} ETFs created
Building on Solana DevNet

Mainnet soon™`,

    personal: `20 y/o founder coded this from my bedroom.

Now: ${formatted.users_formatted} users, ${formatted.etfs_formatted} ETFs on DevNet.

Still broke, but the vision is working 💪

Mainnet coming 🚀`,

    technical: `Axis DevNet technical update:

Users: ${formatted.users_formatted}
Narrative ETFs: ${formatted.etfs_formatted}
Stack: Solana + Cloudflare + Rust

Prediction markets should be this composable.`,

    community: `Shoutout to our ${formatted.users_formatted} early testers on Axis DevNet 🙏

You're helping us build the Narrative ETF Layer for prediction markets.

${formatted.etfs_formatted} ETFs created and counting.

Mainnet soon™`,

    japanese: `Axisの進捗報告：

👥 ユーザー数: ${formatted.users_formatted}人
📊 作成されたETF: ${formatted.etfs_formatted}個
🌐 環境: DevNet

テストネットで検証を重ねています。
メインネットローンチまでもう少し 🚀`
  };
}

// === メイン実行 ===

async function main() {
  console.log('📊 Fetching Axis traction data...\n');
  
  const traction = await getAxisTraction();
  const templates = generateTweetTemplates(traction);
  
  console.log('=== Traction Data ===');
  console.log(JSON.stringify(formatTraction(traction), null, 2));
  console.log('\n=== Tweet Templates ===\n');
  
  Object.entries(templates).forEach(([name, text]) => {
    console.log(`${name.toUpperCase()}:`);
    console.log(text);
    console.log('---\n');
  });
  
  // JSON出力（Marketing部署用）
  const output = {
    traction: formatTraction(traction),
    templates: templates,
    generated_at: new Date().toISOString()
  };
  
  const fs = require('fs');
  const outputPath = '/Users/yusukekikuta/.openclaw/workspace/my-company/.company/marketing/data/current-traction.json';
  
  // ディレクトリ作成
  const dir = require('path').dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`✅ Saved to: ${outputPath}`);
}

// 実行
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { getAxisTraction, formatTraction, generateTweetTemplates };
