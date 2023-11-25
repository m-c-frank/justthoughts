#!/bin/bash

# Variables
ISSUE_NUMBER=$1
REPO_NAME=$(basename $(git remote get-url origin) .git)
REPO_OWNER=$(basename $(dirname $(git remote get-url origin)))

# Authenticate with GitHub CLI
echo "$GH_TOKEN" | gh auth login --with-token

# Fetch Issue Data
curl -H "https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}" \
     > issue_data.json

# Execute Python Script for LLM Processing
python scripts/llmjob.py issue_data.json

