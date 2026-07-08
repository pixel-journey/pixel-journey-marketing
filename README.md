# pixel-journey-marketing

**GitOps Content Engine + Internal Px Content Studio for the Pixel Journey ecosystem**

The single source of truth for consistent, high-quality @PxJourney social output across WAX and the broader Web3 journey.

This repository turns ad-hoc posting into a programmable, versioned, and scalable system while preserving the friendly, educational, retro-pixel-perfect voice that defines Pixel Journey.

**Built in the same spirit of excellence** as `pixel-journey-design-system` and `pixel-journey-standards` — educational, hand-off-ready, zero ongoing cost, and community/ambassador friendly.

## What This Repo Delivers

- **6 Content Pillars**: Explore, Learn, Build, Play, Enjoy, Lore — covering the full spectrum of Pixel Journey storytelling
- **Reusable Post Libraries** (JSON) — ready-to-post threads, hooks, and CTAs
- **LLM Prompts** — for scaling content while staying perfectly on-brand
- **Daily Smart Suggestion Engine** via GitHub Actions (free, versioned history)
- **Internal Px Content Studio** (`demo/index.html`) — beautiful retro CRT tool with live Pixal PFP randomizer + Canvas graphics

Everything is client-side where possible, leverages public WAX primitives (AtomicAssets), and follows Pixel Journey's core principles: trustless, verifiable, fun, and pixel-perfect.

> Hand this repo to any future contributor or AI agent and they can generate on-brand Pixel Journey content in seconds.

## Quick Start

```bash
git clone https://github.com/pixel-journey/pixel-journey-marketing.git
cd pixel-journey-marketing
```

**Best first step**: Open `demo/index.html` in any browser. It works instantly with zero setup and gives you production-ready posts + graphics in seconds.

**Enable daily automation** (recommended):
1. Go to the **Actions** tab
2. Enable the `daily-content-sync.yml` workflow
3. Run it manually once to seed the first suggestions

All outputs are committed to `data/` and permanently versioned.

## The 6 Content Pillars

| Pillar   | Focus                                      | Target Cadence | Pixel Journey Examples                                      | Success Signals                  |
|----------|--------------------------------------------|----------------|-------------------------------------------------------------|----------------------------------|
| **EXPLORE** | Discovery & New User Onboarding           | 2–3×/week    | First Pixal, PxWallet connect flow, ecosystem map           | Profile visits, new follows     |
| **LEARN**   | WAX & Web3 Education                      | 3–4×/week    | AtomicAssets deep dives, TX-memo verifiable randomness, IPFS, staking | Saves, thoughtful replies       |
| **BUILD**   | Technical Shipping & Architecture         | 1–2×/week    | PxPackages unification, PxWallet 26-phase god-mode, design-system usage | GitHub engagement               |
| **PLAY**    | Gamified Experiences & Rewards            | 2×/week      | Hot or Not voting arena, Pixal tiers, XP/streaks, verifiable pairing | On-chain participation spikes   |
| **ENJOY**   | Community, Memes & Vibes                  | 3×/week      | Pixal showcases, community spotlights, KitKat heist lore, "PIXAL EYES ONLY" | High engagement, reposts        |
| **LORE**    | Pixel Journey Universe & Long-term Vision | 1×/week      | RWAs, multi-chain future, why trustless on-chain matters    | Deep reads, meaningful discussion |

## Architecture (GitOps + Client-Side First)

```
.github/workflows/          # Free daily suggestion generator (no secrets needed)
standards/                   # Brand voice, social guidelines, visual rules
post-database/               # 6 JSON pillar files — the reusable content heart
prompts/                     # LLM system prompts for scaling (Antigravity / Claude / Grok)
scripts/                     # generate-daily-suggestions.js + future health scoring
 data/                       # Generated outputs (committed automatically)
demo/                        # Internal Px Content Studio (self-contained retro HTML)
```

## The Internal Px Content Studio (`demo/index.html`)

A production-grade internal tool featuring:

- **Smart "INSPIRE ME"** post picker (respects history via localStorage + pillar balance)
- **Live Pixal PFP Randomizer** from your exact on-chain template (`pixeljourney` / `pixals` / `781515`)
- **Retro CRT Canvas Graphics Engine** — neon pixel frames + crisp Pixal image + dynamic overlays ("PIXAL EYES ONLY", mint #, date)
- One-click **Copy Text** + high-quality **Download PNG**
- Fully client-side, keyboard-driven, beautiful dark retro aesthetic

This is **internal tooling** for the core team and future ambassadors. The public-facing PxMarketing Portal will live in a dedicated future repo under the PxPortals pattern.

## Contributing

We welcome PRs that:
- Add high-quality, on-brand posts to any pillar
- Improve LLM prompts or the Content Studio
- Enhance the daily suggestion logic

Please keep the friendly, educational, pixel-perfect tone.

**License**: MIT — open for the WAXFAMs & Pixel Journey community.

Built with ❤️ for the Pixel Journey ecosystem — Explore, Learn, Enjoy Web3.