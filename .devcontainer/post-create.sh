#!/bin/bash
set -e

CREDS_BACKUP="/workspaces/newsroom-ai-lab-toolkit/.claude-credentials"
if [ -d "$CREDS_BACKUP" ]; then
  mkdir -p "$HOME/.claude"
  cp -r "$CREDS_BACKUP/." "$HOME/.claude/"
  echo "Claude credentials restored."
fi

cd newsroom-ai-lab-toolkit-site && npm install
