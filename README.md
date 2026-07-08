# pixel-journey-marketing

**GitOps Content Engine + Internal Px Content Studio for the Pixel Journey ecosystem**

The single source of truth for consistent, high-quality @PxJourney social output across WAX and the broader Web3 journey.

This repository turns ad-hoc posting into a programmable, versioned, and scalable system while preserving the friendly, educational, retro-pixel-perfect voice that defines Pixel Journey.

**Built in the same spirit of excellence** as `pixel-journey-design-system` and `pixel-journey-standards` — educational, hand-off-ready, zero ongoing cost, and community/ambassador friendly.

## What This Repo Delivers

- **6 Content Pillars**: Explore, Learn, Build, Play, Enjoy, Lore
- **Reusable Post Libraries** (25+ high-quality entries and growing)
- **Smart Daily Suggestion Engine** with history filtering + pillar weighting
- **Internal Px Content Studio** (`demo/index.html`) — the daily command center
- **Standards** extending the org design-system

Everything is client-side where possible, leverages public WAX primitives (AtomicAssets), and follows Pixel Journey's core principles: trustless, verifiable, fun, and pixel-perfect.

## The Px Content Studio (v0.3)

Open `demo/index.html` — this is the main daily tool.

**Key features in v0.3**:
- Smart post inspirer with history-aware selection
- Full **History panel** with one-click re-use / mark as used
- **4 switchable graphic frame styles** for Pixal images (Neon, CRT, Pixel Border, Clean)
- Auto-includes relevant hashtags when copying posts
- Live pillar balance stats
- Significantly refined retro CRT + neon pixel aesthetic
- Keyboard shortcuts everywhere

This is **internal tooling** for the core team. The public PxMarketing experience will live in a future dedicated repo.

## Quick Start

```bash
git clone https://github.com/pixel-journey/pixel-journey-marketing.git
cd pixel-journey-marketing
```

**Daily workflow**:
1. Open `demo/index.html`
2. Hit **INSPIRE ME** or browse History
3. Generate a Pixal graphic with your preferred frame
4. Copy + post

**Enable automation**:
- Turn on the GitHub Action so fresh suggestions land in `data/daily-suggestions.json` every night.

## The 6 Content Pillars

| Pillar   | Focus                                      | Target | Example Topics                                      |
|----------|--------------------------------------------|--------|-----------------------------------------------------|
| **EXPLORE** | Discovery & Onboarding                    | 2-3×/wk | First Pixal, PxWallet, Hot or Not intro             |
| **LEARN**   | WAX & Web3 Education                      | 3-4×/wk | AtomicAssets, TX-memo seeds, WharfKit, IPFS         |
| **BUILD**   | Technical Shipping & Architecture         | 1-2×/wk | PxWallet phases, PxPackages, design-system          |
| **PLAY**    | Gamified Experiences & Rewards            | 2×/wk   | Hot or Not, surviving mint rank, XP/streaks, YEET   |
| **ENJOY**   | Community, Memes & Vibes                  | 3×/wk   | Random Pixals, KitKat lore, PIXAL EYES ONLY         |
| **LORE**    | Pixel Journey Universe & Long-term Vision | 1×/wk   | Multi-chain, RWAs, trustless + fun philosophy       |

## Architecture

```
post-database/          # Source of truth for all reusable posts
scripts/                # Smart daily generator (history + weighting)
data/                   # Generated suggestions + usage history
standards/              # Brand, visual, and contribution guidelines
demo/                   # Px Content Studio (the daily tool)
.github/workflows/      # Free nightly automation
```

## Contributing

See `CONTRIBUTING.md` for how to add new posts or improve the system.

**License**: MIT — open for the WAXFAMs & Pixel Journey community.

Built with ❤️ for the Pixel Journey ecosystem.