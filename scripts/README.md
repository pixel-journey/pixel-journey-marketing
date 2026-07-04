# scripts/

The brains of the GitOps content engine.

## generate-daily-suggestions.js

Reads all post-database/*.json files, applies smart filtering (history window + pillar balance from config.json), and writes fresh daily suggestions to data/daily-suggestions.json.

Run manually or via the daily workflow.

## Future scripts
- calculate-post-health.js (performance scoring when we import X analytics)
- variation-generator.js (template-based post variations)