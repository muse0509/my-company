// plan-podcast.js
// Podcast outline生成スクリプト（概念実装）

/**
 * Usage:
 * node plan-podcast.js --type guest --guest "Jupiter Founder" --duration 30
 * 
 * Output:
 * {
 *   type: "Guest Episode",
 *   title: "Building Solana DeFi: Lessons from Jupiter",
 *   guest: "Jupiter Founder",
 *   duration: "30 minutes",
 *   outline: {
 *     intro: {
 *       duration: "1 min",
 *       content: "Welcome to Axis Pizza Podcast! Today: Jupiter founder..."
 *     },
 *     main_topics: [
 *       {
 *         topic: "How Jupiter Started",
 *         duration: "8 min",
 *         questions: [
 *           "What was the initial problem you saw?",
 *           "How did you validate PMF?",
 *           "What surprised you in the first 6 months?"
 *         ]
 *       },
 *       {
 *         topic: "Scaling to 100K Users",
 *         duration: "10 min",
 *         questions: [
 *           "What were the biggest challenges?",
 *           "How did you prioritize features?",
 *           "Team building strategy?"
 *         ]
 *       },
 *       {
 *         topic: "Lessons for New Builders",
 *         duration: "10 min",
 *         questions: [
 *           "What would you do differently?",
 *           "Advice for Axis Pizza?",
 *           "What's next for Solana DeFi?"
 *         ]
 *       }
 *     ],
 *     outro: {
 *       duration: "1 min",
 *       content: "Thanks for joining! Find Jupiter at..."
 *     }
 *   },
 *   prep: {
 *     research: ["Jupiter history", "Recent updates", "Competitor landscape"],
 *     equipment: ["Mic test", "Recording software", "Backup recording"],
 *     promotion: ["X announcement 24h before", "Clip teasers", "Show notes"]
 *   }
 * }
 */

// Episode types:
// - Solo: Build in public, learnings
// - Guest: DeFi builders, investors
// - Panel: Multiple guests, debate

// Preparation:
// - Guest research (background, recent work)
// - Question list (10-15 questions)
// - Flow planning (intro → topics → outro)
// - Technical setup (mic, recording, backup)

// Implementation:
// - Generate question bank
// - Create episode outline with timestamps
// - Prepare show notes
// - Plan promotion strategy
