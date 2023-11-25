# Variables
ISSUE_NUMBER=$1
REPO_NAME=$(basename $(git remote get-url origin) .git)
REPO_OWNER=$(basename $(dirname $(git remote get-url origin)) | sed 's:.*/::')

# Validate Variables
if [ -z "$REPO_NAME" ] || [ -z "$REPO_OWNER" ]; then
    echo "Error: Repository name or owner not found."
    exit 1
fi

# GitHub API URL
ISSUE_URL="https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}"

# Fetch Issue Data
curl -H "Authorization: token $GH_TOKEN" "$ISSUE_URL" > issue_data.json

# Validate Issue Data
if [ ! -s issue_data.json ]; then
    echo "Error: Failed to fetch issue data or issue data is empty."
    exit 1
fi

