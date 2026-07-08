# pixel-journey-marketing

**GitOps Content Engine + Internal Px Content Studio** for the Pixel Journey ecosystem.

This repository is the single source of truth for consistent, high-quality, on-brand social content across the Pixel Journey ecosystem on WAX and beyond.

It turns ad-hoc posting into a programmable, versioned, scalable system while preserving the friendly, educational, retro-pixel-perfect voice that defines Pixel Journey.

Built in the same spirit of excellence as `pixel-journey-design-system` and `pixel-journey-standards` — educational, hand-off-ready, zero ongoing cost, and community/ambassador friendly.

## What This Repo Delivers

- **6 Content Pillars**: Explore, Learn, Build, Play, Enjoy, Lore
- **Reusable Post Libraries** (40+ high-quality entries and growing)
- **Smart Daily Suggestion Engine** with history filtering + pillar weighting
- **Internal Px Content Studio** (`demo/index.html`) — the daily command center
- **Standards** extending the org design-system
- **Free nightly automation** via GitHub Actions

Everything is client-side where possible, leverages public WAX primitives (AtomicAssets), and follows Pixel Journey's core principles: trustless, verifiable, fun, and pixel-perfect.

## The Px Content Studio (v0.3)

Open `demo/index.html` — this is the main daily tool for the team.

**Key features**:
- Smart post inspirer with history-aware + balanced selection
- Full **History panel** with one-click re-use and mark-as-used
- **4 switchable graphic frame styles** for Pixal images (Neon, CRT, Pixel Border, Clean)
- Auto-includes relevant hashtags when copying posts
- Live pillar balance stats
- Graceful loading of real daily suggestions from automation
- Significantly refined retro CRT + neon pixel aesthetic

This is **internal tooling** for the core team and ambassadors.

## Quick Start

```bash
git clone https://github.com/pixel-journey/pixel-journey-marketing.git
cd pixel-journey-marketing
```

**Daily workflow**:
1. Open `demo/index.html`
2. Hit **INSPIRE** or **BALANCED** (scale icon)
3. Generate a Pixal graphic with your preferred frame
4. Copy + post

**Enable automation** (recommended):
- Turn on the GitHub Action so fresh suggestions land in `data/daily-suggestions.json` every night.

## The 6 Content Pillars

| Pillar   | Focus                                      | Suggested Cadence | Example Topics                                      |
|----------|--------------------------------------------|-------------------|-----------------------------------------------------|
| **EXPLORE** | Discovery & Onboarding                    | 2-3×/week       | First Pixal, PxWallet, Hot or Not intro             |
| **LEARN**   | WAX & Web3 Education                      | 3-4×/week       | AtomicAssets, TX-memo seeds, WharfKit, IPFS         |
| **BUILD**   | Technical Shipping & Architecture         | 1-2×/week       | PxWallet phases, PxPackages, design-system          |
| **PLAY**    | Gamified Experiences & Rewards            | 2×/week         | Hot or Not, surviving mint rank, XP/streaks, YEET   |
| **ENJOY**   | Community, Memes & Vibes                  | 3×/week         | Random Pixals, KitKat lore, PIXAL EYES ONLY         |
| **LORE**    | Pixel Journey Universe & Long-term Vision | 1×/week         | Multi-chain, RWAs, trustless + fun philosophy       |

## Daily Automation (GitOps)

A GitHub Action runs nightly and generates smart post suggestions.

**How it works**:
- Loads all posts from `post-database/`
- Filters posts used in the last N days (configurable)
- Applies pillar weighting from `config.json`
- Selects balanced suggestions
- Writes results to `data/daily-suggestions.json`
- Updates usage history

**Files involved**:
- `.github/workflows/daily-content-sync.yml`
- `scripts/generate-daily-suggestions.js`
- `config.json`
- `data/daily-suggestions.json` + `used-history.json`

See `.github/README.md` for full automation documentation.

## Contributing

See `CONTRIBUTING.md` for how to add new posts or improve the system.

**License**: MIT — open for the WAXFAMs & Pixel Journey community.

Built with ❤️ for the Pixel Journey ecosystem.