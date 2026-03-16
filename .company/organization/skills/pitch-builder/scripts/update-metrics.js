// update-metrics.js
// 最新データ更新スクリプト（概念実装）

/**
 * Usage:
 * node update-metrics.js --deck deck.pptx
 * 
 * Updates:
 * - User count (127 → 150)
 * - Growth rate (+50/week → +60/week)
 * - Retention (40% → 42%)
 * - Charts regenerated
 */

// Data sources:
// 1. Notion database（user metrics）
// 2. Analytics API（Axis Pizza backend）
// 3. Manual input（for specific metrics）

// Process:
// 1. Fetch latest data
// 2. Identify slides with data
// 3. Update text + charts
// 4. Re-export PDF

// Auto-update trigger:
// - Weekly (every Monday before investor meetings)
// - On-demand (before specific pitch)
