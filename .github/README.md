# .github/

This folder contains GitHub-specific configuration and automation for the Pixel Journey content engine.

## Workflows

### daily-content-sync.yml

**Purpose**: Runs every night (or on manual trigger) to generate fresh, balanced post suggestions.

**What it does**:
1. Checks out the repository
2. Sets up Node.js
3. Runs `scripts/generate-daily-suggestions.js`
4. Commits any changes to `data/daily-suggestions.json` and `data/used-history.json`

**Schedule**: Runs daily at a set time (configured in the workflow).

**Manual trigger**: You can also run it manually from the Actions tab.

**Why it exists**:
- Prevents content fatigue by enforcing history filtering
- Maintains pillar balance automatically
- Keeps suggestions fresh without manual daily effort

## Automation Philosophy

We follow a GitOps approach:
- All logic lives in version-controlled scripts
- Outputs are committed back to the repo
- No external services or paid tools required
- Fully transparent and auditable

## Related Files

- `scripts/generate-daily-suggestions.js` — The core suggestion engine
- `config.json` — Controls history window, max suggestions, and pillar weights
- `data/` — Generated outputs (do not edit manually)

## Maintenance

If the workflow fails:
- Check the Actions tab for logs
- Common issues are usually related to API rate limits on AtomicAssets fetches (rare for this workflow)
- The script is designed to be resilient

For changes to automation logic, edit the script and test locally with:
```bash
node scripts/generate-daily-suggestions.js
```

See the root `README.md` for overall repo usage.