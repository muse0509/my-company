// evaluate-path.js
// イントロ経路評価スクリプト（概念実装）

/**
 * Usage:
 * node evaluate-path.js --target "Kyle Samani" --connections connections.json
 * 
 * Output:
 * {
 *   best_path: {
 *     connector: "Jane Smith",
 *     degree: "2nd",
 *     relation: "Strong",
 *     success_rate: 0.70,
 *     recommendation: "High priority - Strong relation, recent interaction"
 *   },
 *   alternatives: [
 *     {
 *       connector: "Bob Wilson",
 *       degree: "2nd",
 *       relation: "Medium",
 *       success_rate: 0.40,
 *       recommendation: "Backup option"
 *     }
 *   ]
 * }
 */

// Success rate formula:
// - 2nd degree Strong: 70%
// - 2nd degree Medium: 40%
// - 2nd degree Weak: 20%
// - 3rd degree Strong: 30%
// - 3rd degree Medium: 15%
// - Cold: 5%

// Evaluation criteria:
// 1. Degree (2nd > 3rd)
// 2. Relation strength (Strong > Medium > Weak)
// 3. Mutual connection count
// 4. Recent interaction (within 30 days = bonus)

// Recommendation logic:
// - If Strong 2nd degree exists: Use immediately
// - If only Medium/Weak: Build relation first (1-2 weeks)
// - If 3rd degree only: Find alternative path or go cold
