#!/bin/bash

# Usage check and directory existence check
[ "$#" -ne 1 ] || [ ! -d "$1" ] && echo "Usage: $0 path/to/directory" && exit 1

# Updating REPO_DIR in createnote.sh
sed -i "s|REPO_DIR=.*|REPO_DIR=$1|" createnote.sh

# Adding createnote.sh to the user's path
chmod +x createnote.sh
ln -s "$(pwd)/createnote.sh" "~/.local/bin/createnote"

echo "Setup complete. Use 'createnote' to create a new note."

