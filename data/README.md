# data/

This folder contains generated outputs from the content engine.

- `daily-suggestions.json` — Fresh daily post recommendations (written by GitHub Actions)
- `used-history.json` — Track which posts have been used recently (for anti-fatigue filtering)

These files are versioned in Git so the whole team can see the evolution of suggested content over time.

**Do not edit manually** — they are managed by `scripts/generate-daily-suggestions.js`.