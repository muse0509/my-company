// find-connections.js
// LinkedIn共通コネクション検索スクリプト（概念実装）

/**
 * Usage:
 * node find-connections.js "Kyle Samani" "linkedin.com/in/kylesamani"
 * 
 * Output:
 * {
 *   target: "Kyle Samani",
 *   connections: [
 *     {
 *       name: "Jane Smith",
 *       degree: "2nd",
 *       profile: "linkedin.com/in/janesmith",
 *       mutual_count: 5,
 *       relation: "Strong" // based on interaction history
 *     },
 *     {
 *       name: "Bob Wilson",
 *       degree: "2nd",
 *       profile: "linkedin.com/in/bobwilson",
 *       mutual_count: 2,
 *       relation: "Medium"
 *     }
 *   ]
 * }
 */

// Data sources:
// 1. LinkedIn Sales Navigator（推奨）
// 2. LinkedIn standard search
// 3. Superteam JP member list
// 4. Portfolio company founder list

// Relation classification:
// - Strong: Messaged in last 30 days, or worked together
// - Medium: Connected >6 months, occasional interactions
// - Weak: Connected but no interactions

// Implementation:
// - Use puppeteer with LinkedIn session
// - Rate limit: 10-20 searches/hour
// - Cache results (24 hours)
