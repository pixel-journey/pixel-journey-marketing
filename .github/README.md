# .github/ — GitHub Automation & Repository Health

This folder contains the configuration that makes the entire **GitOps Content Engine** work with zero ongoing cost.

GitHub Actions provides free daily compute that keeps fresh suggestions coming, while everything stays versioned in Git.

## Folder Contents

- `workflows/daily-content-sync.yml` — The production automation workflow.
- `README.md` — This file.

## The Daily Content Sync Workflow

Runs every night (or on manual trigger):

1. Checks out latest code.
2. Runs `node scripts/generate-daily-suggestions.js`.
3. Commits updated `data/daily-suggestions.json` + health report.
4. Pushes back to main.

The entire history of content evolution is permanently preserved.

## How to Enable

1. Go to **Actions** tab.
2. Find `daily-content-sync` workflow.
3. Click **Enable workflow**.
4. (Recommended) Run it manually once to verify.

You can edit the cron in the YAML if you want different frequency.

**No repository secrets required** for the basic pipeline.

## Why This Architecture Wins

- Zero server cost
- Fully transparent & auditable (every suggestion is a Git commit)
- Instant CDN delivery of generated suggestions
- Easy to extend with more pillars, performance scoring, or Discord notifications later

Part of pixel-journey-marketing — built for the Pixel Journey ecosystem.