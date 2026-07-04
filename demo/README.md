# demo/ — Internal Px Content Studio

This is the **beautiful, self-contained internal tool** for the Pixel Journey team.

Open `index.html` in any browser. No build step, no login, instant value.

Features:
- Smart post inspirer with history-aware randomization
- Live Pixal PFP randomizer from template 781515
- Retro CRT Canvas graphics engine (neon frames + dynamic overlays)
- One-click copy + high-quality PNG download

**This is internal tooling only.** The public PxMarketing Portal will be a separate future repo under the PxPortals pattern.

## Tech
- Tailwind via CDN
- Pure client-side JS + Canvas
- localStorage for used post history
- Multi-node AtomicAssets fetching with retry

Built to the same quality bar as the gkniftyheads-tracker demo.