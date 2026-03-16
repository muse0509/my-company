// find-contact.js
// Partner連絡先発掘スクリプト（概念実装）

/**
 * Usage:
 * node find-contact.js "Multicoin Capital" "Kyle Samani"
 * 
 * Output:
 * {
 *   name: "Kyle Samani",
 *   title: "Managing Partner",
 *   linkedin: "linkedin.com/in/kylesamani",
 *   twitter: "@KyleSamani",
 *   email: "kyle@multicoin.capital" // pattern-based guess
 * }
 */

// Sources:
// 1. LinkedIn search
// 2. X search
// 3. Email pattern guessing（firstname@vc.com, etc.）
// 4. Hunter.io API（email verification）

// Implementation notes:
// - LinkedIn requires login（use headless browser）
// - Email patterns: [first]@vc, [first][last]@vc, [first].[last]@vc
// - Verify email with Hunter.io or similar
