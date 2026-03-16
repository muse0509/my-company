// create-slide.js
// スライド自動生成スクリプト（概念実装）

/**
 * Usage:
 * node create-slide.js --template yc --output deck.pdf
 * 
 * Output:
 * - deck.pdf (10 slides)
 * - deck.pptx (editable)
 * - speaker-notes.md
 */

// Implementation:
// 1. Use template（YC standard）
// 2. Pull data from Notion/Airtable
//    - User count: 127
//    - Growth rate: +50/week
//    - Retention: 40%
// 3. Generate charts（Chart.js or similar）
// 4. Populate slides（reveal.js or similar）
// 5. Export PDF（puppeteer）

// Template structure:
// - Slide 1: Cover
// - Slide 2: Problem (3 pain points)
// - Slide 3: Solution (3 features)
// - Slide 4: Product (screenshot)
// - Slide 5: Market (pie chart)
// - Slide 6: Traction (line graph)
// - Slide 7: Business Model (revenue breakdown)
// - Slide 8: Team (photos + bios)
// - Slide 9: Competition (matrix table)
// - Slide 10: Ask (bar chart for use of funds)
