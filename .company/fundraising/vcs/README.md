# VC Database - Solana Ecosystem

## Overview

This directory contains our curated list of venture capital firms actively investing in the Solana ecosystem. The database is updated daily to track new VCs, recent investments, and contact information.

## Files

- `solana-vcs-YYYY-MM-DD.json` - Daily snapshots of VC list with fit scores and contact info
- `README.md` - This file

## Fit Score Criteria

**Score Range: 0-100**

- **90-100**: Top-tier Solana-native VCs (e.g., Solana Ventures, Multicoin Capital)
  - Primary focus on Solana ecosystem
  - Multiple recent Solana investments
  - Active in community

- **80-89**: Strong Solana investors
  - Regular Solana investments
  - Web3/DeFi focus with Solana exposure
  - Good track record

- **70-79**: Crypto VCs with Solana activity
  - Multichain focus including Solana
  - Some portfolio companies on Solana
  - Open to Solana projects

- **Below 70**: Lower priority
  - Limited Solana activity
  - Inactive or restructuring
  - Wrong stage/focus

## Contact Priority

**Priority 1 (Fit Score 90+):**
- Solana Ventures
- Multicoin Capital
- Electric Capital
- Jump Crypto
- a16z crypto

**Priority 2 (Fit Score 80-89):**
- Framework Ventures
- Dragonfly Capital
- DeFiance Capital
- Hack VC
- Pantera Capital

**Priority 3 (Fit Score 70-79):**
- Coinbase Ventures
- Tribe Capital
- Lightspeed Venture Partners
- Spartan Group

## Daily Update Process

1. **Morning (09:00 JST)**: Check Twitter for overnight funding announcements
2. **Afternoon (15:00 JST)**: Review Crunchbase/AngelList for new rounds
3. **Evening (21:00 JST)**: Update JSON file with new VCs (target: 5-10 new entries)
4. **Night (03:00 JST)**: Final check, commit & push

## Data Sources

- **Crunchbase**: Latest funding rounds and VC activity
- **AngelList**: Early-stage Solana investments
- **DeFiLlama Raises**: Real-time Solana/DeFi funding data
- **Twitter**: @SolanaVentures, @multicoincap, #SolanaFunding
- **Ecosystem Sites**: Solana Foundation announcements, project Twitter accounts

## Contact Information Quality

- ✅ **Verified**: Official website + working email/Twitter
- ⚠️ **Unverified**: Public info, needs validation
- ❌ **Missing**: Need to research

## Next Steps

1. Set up automated Twitter monitoring for Solana VC keywords
2. Create outreach templates for each VC tier
3. Track response rates and update fit scores based on engagement
4. Build relationship scoring system (replied, interested, passed, etc.)

## Maintenance

- Review and update fit scores monthly based on activity
- Archive VCs that become inactive (move to separate file)
- Verify contact info quarterly
- Add new VCs within 24h of discovery

---

**Last Updated**: 2026-03-17
**Total VCs**: 15
**High-Priority VCs (90+)**: 5
