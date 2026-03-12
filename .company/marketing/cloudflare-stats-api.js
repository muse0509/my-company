// Cloudflare Workers - Axis Stats API
// このコードをCloudflare Workersにデプロイしてください

export default {
  async fetch(request, env) {
    // CORS設定
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };

    // OPTIONS（プリフライト）リクエスト対応
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // GET /stats エンドポイント
    if (request.method === 'GET' && new URL(request.url).pathname === '/stats') {
      try {
        // ===== Cloudflare D1の場合 =====
        // env.DB は wrangler.toml で設定したD1バインディング
        
        // ユーザー数取得
        const usersQuery = await env.DB.prepare(
          'SELECT COUNT(DISTINCT user_id) as count FROM users'
          // または wallet_address等、実際のカラム名に合わせて調整
        ).first();
        
        const userCount = usersQuery?.count || 0;

        // ETF数取得
        const etfsQuery = await env.DB.prepare(
          'SELECT COUNT(*) as count FROM etfs WHERE status = ?'
        ).bind('active').first(); // activeなETFのみカウント
        
        const etfCount = etfsQuery?.count || 0;

        // ===== または Cloudflare KVの場合 =====
        // const userCount = await env.KV.get('user_count', 'json') || 0;
        // const etfCount = await env.KV.get('etf_count', 'json') || 0;

        // レスポンス
        const stats = {
          users: userCount,
          etfs: etfCount,
          updated_at: new Date().toISOString(),
          environment: 'devnet'
        };

        return new Response(JSON.stringify(stats), {
          headers: corsHeaders
        });

      } catch (error) {
        return new Response(JSON.stringify({
          error: 'Failed to fetch stats',
          message: error.message
        }), {
          status: 500,
          headers: corsHeaders
        });
      }
    }

    // 404
    return new Response('Not Found', { status: 404 });
  }
};

// ===== wrangler.toml 設定例 =====
/*
name = "axis-stats-api"
main = "cloudflare-stats-api.js"
compatibility_date = "2024-01-01"

# D1バインディング（D1を使っている場合）
[[d1_databases]]
binding = "DB"
database_name = "axis-db"
database_id = "your-d1-database-id"

# KVバインディング（KVを使っている場合）
[[kv_namespaces]]
binding = "KV"
id = "your-kv-namespace-id"

# ルート設定
[routes]
pattern = "api.axis-protocol.xyz/stats"
zone_name = "axis-protocol.xyz"
*/
