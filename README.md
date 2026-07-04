# pixel-journey-marketing

**GitOps Content Engine + Internal Px Content Studio**

The single source of truth for all @PxJourney social presence across the Pixel Journey ecosystem on WAX.

This repository turns scattered posting into a programmable, versioned, anti-burnout system while keeping the friendly, educational, "pixel-perfect" voice.

**What this repo delivers**
- 6-pillar post database (Explore / Learn / Build / Play / Enjoy / Lore)
- Reusable LLM prompts for scaling content
- Standards extending `pixel-journey-standards` + design-system
- GitHub Actions that generate smart daily suggestions
- Beautiful self-contained internal **Px Content Studio** (`demo/index.html`)
- Live Pixal PFP randomizer from your exact on-chain template (781515)

Everything follows the same educational, zero-cost, hand-off-ready quality bar as gkniftyheads-tracker.

> Perfect for the Pixel Journey core team, future ambassadors, and AI agents. Generate on-brand posts in seconds while staying 100% consistent.

## Quick Start

```bash
git clone https://github.com/pixel-journey/pixel-journey-marketing.git
cd pixel-journey-marketing
```

### Use the Internal Px Content Studio (recommended first step)
Open `demo/index.html` in any browser. It works instantly with no setup.

### Enable daily automation
1. Go to **Actions** tab
2. Enable the `daily-content-sync.yml` workflow
3. (Optional) Run it manually once

All generated suggestions land in `data/daily-suggestions.json` and are versioned forever.

## Content Pillars

| Pillar   | Focus                              | Target Frequency | Example Use Case                          |
|----------|------------------------------------|------------------|-------------------------------------------|
| EXPLORE  | Discovery & Onboarding             | 2-3×/week        | New user paths, ecosystem maps, sneak peeks |
| LEARN    | WAX & Web3 Education               | 3-4×/week        | AtomicAssets, TX-memo verifiable randomness, IPFS |
| BUILD    | Technical & Shipping               | 1-2×/week        | PxPackages, PxWallet phases, design system usage |
| PLAY     | Gamified Experiences               | 2×/week         | Hot or Not, Pixal tiers, XP/streaks       |
| ENJOY    | Community & Memes                  | 3×/week         | Pixal showcases, community spotlights, fun memes |
| LORE     | Pixel Journey Universe & Vision    | 1×/week         | RWAs, multi-chain future, trustless storytelling |

## Architecture (GitOps Style)

```
.github/workflows/     # Daily smart suggestion generator
standards/             # Extends existing org standards
post-database/         # 6 JSON files - the heart of reusable content
prompts/               # LLM system prompts for scaling
scripts/               # generate-daily-suggestions.js + health calculator
 data/                 # Generated outputs (committed by Actions)
demo/                  # Internal Px Content Studio (self-contained HTML)
```

## The Internal Px Content Studio

`demo/index.html` is a production-grade internal tool featuring:
- Smart "INSPIRE ME" post picker (respects 21-day history, pillar balance)
- Live Pixal PFP randomizer from template 781515 (multi-node, retry)
- Retro CRT Canvas graphics engine with neon pixel frames + dynamic overlays
- One-click Copy + Download PNG
- Fully client-side (localStorage history)

This is **internal only** for now. The public polished PxMarketing Portal will live in a future dedicated `px-marketing` repo (following PxPortals pattern).

## Contributing

Pull requests that add high-quality posts to the database, improve prompts, or enhance the Content Studio are very welcome.

**License**: MIT — free for the WAX & Pixel Journey community.

Built with ❤️ for the Pixel Journey ecosystem.