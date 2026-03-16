// generate-message.js
// イントロ依頼メッセージ生成スクリプト（概念実装）

/**
 * Usage:
 * node generate-message.js --connector "Jane Smith" --target "Kyle Samani" --vc "Multicoin"
 * 
 * Output:
 * {
 *   subject: "Intro Request - Axis Pizza (DeFi on Solana)",
 *   body: "Hi Jane,\n\nHope you're doing well!...",
 *   tone: "Professional but friendly",
 *   length: "Short (150 words)"
 * }
 */

// Message templates:

// Strong connection:
// """
// Hi [Name],
// 
// Hope you're doing well!
// 
// I'm raising a $750K Pre-seed for Axis Pizza, a DeFi trading 
// simplification tool on Solana. We've got 127 users and are MainNet live.
// 
// I noticed you know [VC Partner] at [VC Name]. Given their thesis 
// on DeFi UX, I think we'd be a great fit.
// 
// Would you be open to making an intro? Happy to send you a brief 
// overview to forward.
// 
// Thanks!
// Muse
// """

// Medium connection:
// """
// Hi [Name],
// 
// I saw you're connected to [VC Partner] at [VC Name] on LinkedIn.
// 
// We're raising Pre-seed for Axis Pizza (simplifying DeFi trading on Solana). 
// 127 users, MainNet live, strong PMF signals.
// 
// [VC Name] invested in [Similar Company], so we think we're a good fit.
// 
// Would you be comfortable making an intro? I can send you a 1-pager to forward.
// 
// Cheers,
// Muse
// """

// Customization:
// - Insert connector name
// - Insert target VC + Partner
// - Insert relevant portfolio company
// - Adjust tone based on relation strength
