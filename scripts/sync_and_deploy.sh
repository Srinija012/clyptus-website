#!/bin/bash
# Clyptus Website Automated 15-Minute Sync & Vercel Deploy Script
# Scoped strictly to: /Users/nani/Downloads/clyptus/clyptus-web

PROJECT_DIR="/Users/nani/Downloads/clyptus/clyptus-web"
LOG_FILE="$PROJECT_DIR/sync_deploy.log"

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
  echo "$1"
}

cd "$PROJECT_DIR" || {
  log "ERROR: Could not change directory to $PROJECT_DIR"
  exit 1
}

# Check for modified or untracked files
CHANGED_FILES=$(git status --porcelain)
UNPUSHED_COMMITS=$(git log origin/main..main 2>/dev/null)

if [ -n "$CHANGED_FILES" ]; then
  log "Detected changes in clyptus-web. Starting verification pipeline..."
  
  # 1. Typecheck
  log "Running typecheck (npm run typecheck)..."
  if ! npm run typecheck >> "$LOG_FILE" 2>&1; then
    log "TYPECHECK FAILED: Aborting commit and push to prevent broken deployment."
    exit 1
  fi
  log "Typecheck passed."

  # 2. Automated Test Suite
  log "Running test suite (npm run test)..."
  if ! npm run test >> "$LOG_FILE" 2>&1; then
    log "TEST SUITE FAILED: Aborting commit and push to prevent broken deployment."
    exit 1
  fi
  log "All tests passed."

  # 3. Stage and commit
  git add .
  COMMIT_MSG="chore(sync): automated project update [$(date '+%Y-%m-%d %H:%M:%S')]"
  git commit -m "$COMMIT_MSG" >> "$LOG_FILE" 2>&1
  log "Created commit: $COMMIT_MSG"

  # 4. Push to GitHub
  log "Pushing updates to https://github.com/Vamshidathrika/clyptus-website..."
  if git push origin main >> "$LOG_FILE" 2>&1; then
    log "Successfully pushed to GitHub repository."
  else
    log "ERROR: git push failed. Check network or credentials."
    exit 1
  fi

  # 5. Production deploy to Vercel
  log "Triggering Vercel production deployment..."
  if npx vercel --prod --yes >> "$LOG_FILE" 2>&1; then
    log "Vercel production deployment succeeded: https://clyptus-web.vercel.app"
  else
    log "WARNING: npx vercel --prod returned non-zero code. Check logs."
  fi

elif [ -n "$UNPUSHED_COMMITS" ]; then
  log "Found unpushed commits on main. Pushing to GitHub and deploying to Vercel..."
  git push origin main >> "$LOG_FILE" 2>&1
  npx vercel --prod --yes >> "$LOG_FILE" 2>&1
  log "Pushed and deployed."
else
  log "No updates detected in clyptus-web. Repository is in sync."
fi
