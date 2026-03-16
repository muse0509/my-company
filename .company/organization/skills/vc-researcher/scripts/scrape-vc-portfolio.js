// scrape-vc-portfolio.js
// VC portfolio自動収集スクリプト（概念実装）

/**
 * Usage:
 * node scrape-vc-portfolio.js "Multicoin Capital"
 * 
 * Output:
 * {
 *   vc: "Multicoin Capital",
 *   portfolio: [
 *     { name: "Marginfi", amount: "$2M", stage: "Seed", date: "2023-06" },
 *     { name: "Helium", amount: "$10M", stage: "Series A", date: "2022-03" }
 *   ],
 *   solana_focus: true,
 *   defi_count: 5
 * }
 */

// Sources:
// 1. Crunchbase API（要API key）
// 2. VC website /portfolio page（scraping）
// 3. Pitchbook（要アクセス）

// Implementation notes:
// - Use puppeteer for website scraping
// - Respect rate limits
// - Cache results（avoid re-scraping）
// - Filter for Solana + DeFi
