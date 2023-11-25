#!/bin/bash

# Variables
ISSUE_NUMBER=$1
REPO_NAME=$(basename $(git remote get-url origin) .git)
REPO_OWNER=$(basename $(dirname $(git remote get-url origin)))

echo "$ISSUE_NUMBER"

ISSUE_URL="https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}"

echo "$ISSUE_URL"

# Authenticate with GitHub CLI using GH_PAT
echo "$GH_PAT" | gh auth login --with-token

# Fetch Issue Data
curl "https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}" > issue_details.json

python scripts/llm_issue_solver.py issue_data.json

