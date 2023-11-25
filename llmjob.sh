#!/bin/bash

# Variables
ISSUE_NUMBER=$1
REPO_NAME=justthoughts
REPO_OWNER=m-c-frank

echo "$ISSUE_NUMBER"
echo "$REPO_NAME"
echo "$REPO_OWNER"
echo "test"

ISSUE_URL="https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}"

echo "$ISSUE_URL"

# Authenticate with GitHub CLI using GH_PAT
echo "$GH_PAT" | gh auth login --with-token

# Fetch Issue Data
curl "https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}" > issue_details.json

python scripts/llmjob.py issue_data.json

