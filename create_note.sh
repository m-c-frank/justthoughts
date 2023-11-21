#!/bin/bash

# Configuration
REPO_DIR=~/justthoughts    # Path to your Docusaurus project
BLOG_DIR=$REPO_DIR/blog    # Path to the blog directory
EDITOR=nvim 	# Your preferred text editor, e.g., nano, vim, etc.

# Generate a filename with the current date and time
FILENAME=$(date +"%Y-%m-%d-%H-%M-%S")-note.md

# Full path for the new file
FULL_PATH=$BLOG_DIR/$FILENAME

# Create a new blog post file with some initial content
echo "---" > $FULL_PATH
echo "title: New Note $(date +"%Y-%m-%d %H:%M:%S")" >> $FULL_PATH
echo "author: Your Name" >> $FULL_PATH
echo "author_title: Author's Title" >> $FULL_PATH
echo "author_url: https://github.com/yourusername" >> $FULL_PATH
echo "author_image_url: https://github.com/yourusername.png" >> $FULL_PATH
echo "tags: [note]" >> $FULL_PATH
echo "---" >> $FULL_PATH
echo "" >> $FULL_PATH
echo "Your note starts here..." >> $FULL_PATH

# Open the file in the editor
$EDITOR $FULL_PATH

# Navigate to the repo
cd $REPO_DIR

# Add, commit, and push changes
git add $FULL_PATH
git commit -m "Added new note: $FILENAME"
git push

npm run build

