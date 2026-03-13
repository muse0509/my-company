#!/bin/bash
# AlexがX投稿を生成（サブエージェント経由）

cd /Users/yusukekikuta/.openclaw/workspace/my-company

# トラクション読み込み
TRACTION=$(cat .company/marketing/data/current-traction.json)
TODAY=$(date +%Y-%m-%d)
OUTPUT_DIR=".company/marketing/scheduled-posts/$TODAY"

mkdir -p "$OUTPUT_DIR"

echo "📝 Alex: Generating daily X posts for $TODAY"
echo "Current traction: $TRACTION"

# OpenClaw sessions_spawnでサブエージェントに投稿生成を依頼
# （メインスクリプトから呼び出す想定）
echo "Ready for generation"
