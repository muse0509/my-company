# intro-hunter

LinkedIn共通コネクション発見、Warm intro経路発見実行スキル。

## Description

Fundraising Team実行層。LinkedIn共通コネクション発見、Warm intro経路特定、イントロ依頼メッセージ作成。Haiku modelで効率的に大量スキャン。

## When to Use

- VC 50社のWarm intro経路発見
- Specific VC Partnerへのイントロ経路
- イントロ依頼メッセージ作成
- 最適イントロ経路選定

## Process

### Step 1: ターゲット特定
- VC Partner名
- LinkedIn profile URL

### Step 2: 共通コネクション発見
- LinkedIn 2nd degree search
- Superteam JP network確認
- Portfolio company founders確認

### Step 3: 経路評価
- **Strong connection:** 頻繁にやりとり
- **Medium connection:** たまにやりとり
- **Weak connection:** ほぼやりとりなし

### Step 4: 最適経路選定
- 2nd degree > 3rd degree
- Strong > Medium > Weak
- 成功率予測

### Step 5: イントロ依頼作成
- Personalized message
- 1-pager添付
- シンプル・クリア

## Output Format

```
Target: Kyle Samani (Multicoin Capital)
Best Path: Jane Smith (2nd degree, Strong)
Alternative: Bob Wilson (2nd degree, Medium)
Success Rate: 70% (Strong connection)

Intro Request Message:
---
Hi Jane,

Hope you're doing well! I'm raising a $750K Pre-seed for Axis Pizza, 
a DeFi trading simplification tool on Solana. 127 users, MainNet live.

I noticed you know Kyle Samani at Multicoin Capital. Given their 
thesis on DeFi UX, I think we'd be a great fit.

Would you be open to making an intro? Happy to send you a brief 
overview to forward.

Thanks!
Muse
---
```

## Scripts

- `find-connections.js` - LinkedIn共通コネクション検索
- `evaluate-path.js` - イントロ経路評価
- `generate-message.js` - イントロ依頼メッセージ生成

## Model

Haiku（経路発見は大量スキャン、コスト効率重視）
