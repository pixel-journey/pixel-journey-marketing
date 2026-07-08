# scripts/

The brains of the GitOps content engine. All scripts are intentionally lightweight so they run reliably in GitHub Actions.

## generate-daily-suggestions.js

**Purpose**: Generates smart daily post recommendations from the post-database.

**How it works**:
1. Loads all posts from the 6 pillar JSON files
2. Filters out posts used within the `historyWindowDays` window (from `config.json`)
3. Applies pillar weighting for balanced output
4. Selects the best suggestions using weighted random
5. Records usage in `used-history.json`
6. Writes fresh suggestions to `daily-suggestions.json`

**Key features**:
- Respects history to prevent repetition
- Pillar balancing via config weights
- Fully automatic via GitHub Actions
- Versioned history of every suggestion

Run it manually with:
```bash
node scripts/generate-daily-suggestions.js
```

## Future Improvements
- Performance scoring when we import X analytics
- Automatic thread generation from patch notes
- Integration with the Px Content Studio for one-click use

This script is the engine that keeps our output consistent and fresh without manual effort.