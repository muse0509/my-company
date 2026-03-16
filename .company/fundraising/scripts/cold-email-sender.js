#!/usr/bin/env node
/**
 * Cold Email Sender - Axis Protocol Fundraising
 * 
 * 目標: 毎日3-5件の Cold Email を Fit Score 70+ の投資家に送信
 * 
 * Usage:
 *   node cold-email-sender.js [--limit 5] [--dry-run]
 */

const fs = require('fs');
const path = require('path');

// Configuration
const VC_LIST_PATH = path.join(__dirname, '../vcs/vc-list.json');
const SEND_HISTORY_PATH = path.join(__dirname, '../history/email-send-history.json');
const TEMPLATE_PATH = path.join(__dirname, '../templates/cold-email-template.txt');

const DEFAULT_LIMIT = 5;
const MIN_FIT_SCORE = 70;

// Parse arguments
const args = process.argv.slice(2);
const limit = args.includes('--limit') ? parseInt(args[args.indexOf('--limit') + 1]) : DEFAULT_LIMIT;
const dryRun = args.includes('--dry-run');

// Load VC list
function loadVCList() {
  if (!fs.existsSync(VC_LIST_PATH)) {
    console.error('❌ VCリストが見つかりません:', VC_LIST_PATH);
    console.log('   まず VCリスト更新タスク (task-101) を実行してください。');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(VC_LIST_PATH, 'utf-8'));
}

// Load send history
function loadSendHistory() {
  if (!fs.existsSync(SEND_HISTORY_PATH)) {
    return { sent: [], lastSent: null };
  }
  return JSON.parse(fs.readFileSync(SEND_HISTORY_PATH, 'utf-8'));
}

// Save send history
function saveSendHistory(history) {
  const dir = path.dirname(SEND_HISTORY_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(SEND_HISTORY_PATH, JSON.stringify(history, null, 2));
}

// Load email template
function loadEmailTemplate() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    // Default template
    return `Subject: Axis Protocol - Solana Prediction Market Infrastructure ($500K Seed)

Hi {{name}},

I'm reaching out about Axis Protocol, a prediction market infrastructure built on Solana. We're raising a $500K seed round and believe {{vc_name}} would be a strong fit given your investments in {{relevant_portfolio}}.

**Traction:**
- SEZ Dubai Startup Supercup Finalist (2026)
- Jito Foundation Advisor backing
- Superteam DAO support
- Active development on Solana mainnet

**Ask:** $500K at $5M cap, 12-month runway

Would you be open to a brief call to discuss? Happy to share our pitch deck.

Best,
Yusuke Kikuta
Founder, Axis Protocol
https://axisprotocol.ai`;
  }
  return fs.readFileSync(TEMPLATE_PATH, 'utf-8');
}

// Filter VCs
function filterEligibleVCs(vcList, sendHistory) {
  const sentEmails = new Set(sendHistory.sent.map(s => s.email));
  
  return vcList.vcs
    .filter(vc => {
      // Must have Fit Score 70+
      if (!vc.fit_score || vc.fit_score < MIN_FIT_SCORE) return false;
      
      // Must have email
      if (!vc.email) return false;
      
      // Must not be already sent
      if (sentEmails.has(vc.email)) return false;
      
      return true;
    })
    .sort((a, b) => (b.fit_score || 0) - (a.fit_score || 0)); // Highest score first
}

// Personalize email
function personalizeEmail(template, vc) {
  return template
    .replace(/{{name}}/g, vc.contact_name || 'there')
    .replace(/{{vc_name}}/g, vc.name)
    .replace(/{{relevant_portfolio}}/g, vc.relevant_portfolio || 'Solana/DeFi portfolio');
}

// Send email (placeholder - integrate with actual email service)
async function sendEmail(vc, emailContent) {
  // TODO: Integrate with email service (Gmail API, SendGrid, etc.)
  console.log(`\n📧 Sending email to: ${vc.name} (${vc.email})`);
  console.log(`   Fit Score: ${vc.fit_score}`);
  console.log(`   Contact: ${vc.contact_name || 'N/A'}`);
  
  if (dryRun) {
    console.log('\n--- EMAIL CONTENT (DRY RUN) ---');
    console.log(emailContent);
    console.log('--- END EMAIL ---\n');
    return { success: true, messageId: 'dry-run-' + Date.now() };
  }
  
  // Actual email sending would go here
  // For now, return mock success
  return { success: true, messageId: 'mock-' + Date.now() };
}

// Main function
async function main() {
  console.log('🚀 Cold Email Sender - Axis Protocol Fundraising\n');
  
  const vcList = loadVCList();
  const sendHistory = loadSendHistory();
  const emailTemplate = loadEmailTemplate();
  
  console.log(`📋 Total VCs in list: ${vcList.vcs.length}`);
  console.log(`📧 Already sent: ${sendHistory.sent.length}`);
  
  const eligible = filterEligibleVCs(vcList, sendHistory);
  console.log(`✅ Eligible VCs (Fit Score ${MIN_FIT_SCORE}+): ${eligible.length}`);
  
  if (eligible.length === 0) {
    console.log('\n⚠️  No eligible VCs to email. Run VCリスト更新 to add more VCs.');
    return;
  }
  
  const toSend = eligible.slice(0, limit);
  console.log(`📤 Sending to ${toSend.length} VCs today...\n`);
  
  const results = [];
  
  for (const vc of toSend) {
    const emailContent = personalizeEmail(emailTemplate, vc);
    const result = await sendEmail(vc, emailContent);
    
    if (result.success) {
      results.push({
        vc_name: vc.name,
        email: vc.email,
        fit_score: vc.fit_score,
        sent_at: new Date().toISOString(),
        message_id: result.messageId
      });
    }
    
    // Rate limiting: wait 2 seconds between emails
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Update send history
  sendHistory.sent.push(...results);
  sendHistory.lastSent = new Date().toISOString();
  saveSendHistory(sendHistory);
  
  console.log(`\n✅ Sent ${results.length} emails successfully!`);
  console.log(`📊 Total sent to date: ${sendHistory.sent.length}`);
  console.log(`\nNext: Monitor replies and schedule follow-ups (task-106)`);
  
  if (dryRun) {
    console.log('\n⚠️  DRY RUN mode - no actual emails sent.');
  }
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
