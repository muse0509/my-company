// analyze-performance.js
// 過去投稿パフォーマンス分析スクリプト（概念実装）

/**
 * Usage:
 * node analyze-performance.js --period "last-7-days"
 * 
 * Output:
 * {
 *   period: "2025-03-03 to 2025-03-10",
 *   total_posts: 14,
 *   avg_likes: 11,
 *   avg_rts: 7,
 *   top_post: {
 *     text: "AMA tomorrow 15:00 JST! Talking about Axis Pizza + DeFi UX. Join us!",
 *     likes: 48,
 *     rts: 25,
 *     time: "15:00 JST",
 *     topic: "AMA announcement"
 *   },
 *   insights: [
 *     "AMA announcements perform best (48 likes vs 11 avg)",
 *     "Afternoon posts 2x better than morning",
 *     "Personal stories 85% better than product updates"
 *   ],
 *   recommendations: [
 *     "Increase AMA frequency (monthly → bi-weekly)",
 *     "More personal stories (20% → 30%)",
 *     "Consistent 15:00 JST posting"
 *   ]
 * }
 */

// Data sources:
// - X Analytics API
// - Manual tracking (Notion/Airtable)

// Metrics tracked:
// - Likes, RTs, replies, impressions
// - Engagement rate (likes+rts / impressions)
// - Best performing topics, times, formats

// Analysis:
// - Compare to 632-tweet baseline
// - Identify trends (improving/declining)
// - Extract actionable insights
// - Update strategy recommendations
