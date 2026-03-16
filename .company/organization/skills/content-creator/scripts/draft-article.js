// draft-article.js
// Medium記事下書き生成スクリプト（概念実装）

/**
 * Usage:
 * node draft-article.js --topic "How We Built Axis Pizza" --length 2000
 * 
 * Output:
 * {
 *   title: "How We Built Axis Pizza: Simplifying DeFi Trading on Solana",
 *   hook: "Trading perpetuals on Solana should be simple. But it's not...",
 *   sections: [
 *     { title: "The Problem", content: "...", word_count: 500 },
 *     { title: "Our Solution", content: "...", word_count: 700 },
 *     { title: "Technical Implementation", content: "...", word_count: 500 },
 *     { title: "Conclusion", content: "...", word_count: 300 }
 *   ],
 *   total_words: 2000,
 *   read_time: "8 min",
 *   seo_keywords: ["Solana DeFi", "Perpetuals", "Axis Pizza"],
 *   cta: "Try Axis Pizza at app.axispizza.io"
 * }
 */

// Article templates:
// 1. Technical Deep Dive
//    - Problem → Solution → Implementation → Results
// 2. Build in Public Story
//    - Journey → Challenges → Learnings → Next Steps
// 3. User Case Study
//    - User Background → Problem → Solution → Outcome

// Voice:
// - Technical but accessible
// - Personal (first-person OK)
// - Data-driven (127 users, 40% retention)
// - Authentic (failures + wins)

// Implementation:
// - Use Haiku with structured prompt
// - Section-by-section generation
// - Include code snippets (if technical)
// - Suggest images/diagrams
// - SEO optimization (keywords, meta description)
