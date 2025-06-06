#!/bin/bash
set -euo pipefail

# Deploy Browser Wars to GitHub Pages
# Usage: ./deploy-github.sh [repository-name]

REPO_NAME="${1:-browser-wars}"

echo "🚀 Deploying Browser Wars to GitHub Pages..."

# Check if git remote exists
if ! git remote get-url origin >/dev/null 2>&1; then
    echo "❌ No git remote 'origin' found."
    echo "Please create a GitHub repository first and run:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/${REPO_NAME}.git"
    exit 1
fi

# Add all files and commit
echo "📦 Preparing files for deployment..."
git add .
git status

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "✅ No changes to commit, pushing existing commits..."
else
    echo "💾 Committing latest changes..."
    git commit -m "Prepare for GitHub Pages deployment

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
fi

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository: https://github.com/YOUR_USERNAME/${REPO_NAME}"
echo "2. Click Settings → Pages"
echo "3. Under 'Source', select 'Deploy from a branch'"
echo "4. Select 'main' branch and '/ (root)' folder"
echo "5. Click Save"
echo ""
echo "🌍 Your site will be available at:"
echo "https://YOUR_USERNAME.github.io/${REPO_NAME}"
echo ""
echo "⏱️  It may take a few minutes to go live after enabling Pages."