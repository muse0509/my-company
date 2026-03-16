#!/bin/bash
# 資金調達ダッシュボード自動更新スクリプト

DASHBOARD_DIR="/Users/yusukekikuta/.openclaw/workspace/my-company/fundraising/dashboard"
DATA_FILE="$DASHBOARD_DIR/data.json"

# 現在時刻
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%S+09:00")

# VCリストからVC数をカウント（存在する場合）
VC_CONTACTS=0
if [ -f "/Users/yusukekikuta/.openclaw/workspace/my-company/fundraising/vcs/vc-list.json" ]; then
    VC_CONTACTS=$(jq '[.vcs[]] | length' /Users/yusukekikuta/.openclaw/workspace/my-company/fundraising/vcs/vc-list.json 2>/dev/null || echo 0)
fi

# メール送信履歴からカウント（将来実装）
EMAILS_SENT=0
REPLY_RATE=0
MEETINGS=0

# data.json を更新
cat > "$DATA_FILE" << EOF
{
  "target": "\$500,000",
  "raised": "\$35,000",
  "remaining": "\$465,000",
  "percentage": "7%",
  "vcContacts": $VC_CONTACTS,
  "emailsSent": $EMAILS_SENT,
  "replyRate": $REPLY_RATE,
  "meetings": $MEETINGS,
  "lastUpdated": "$TIMESTAMP"
}
EOF

echo "Dashboard updated: $TIMESTAMP"
