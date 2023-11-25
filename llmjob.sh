# Variables
ISSUE_NUMBER=$1
REPO_NAME=$(basename $(git remote get-url origin) .git)
REPO_OWNER=$(basename $(dirname $(git remote get-url origin)) | sed 's:.*/::')

echo "$GH_PAT" | gh auth login --with-token

# GitHub API URL
curl "https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}" > issue_details.json

python scripts/llm_issue_solver.py issue_data.json

