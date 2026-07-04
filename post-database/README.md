# post-database/

This is the heart of the content engine.

Each JSON file contains reusable, on-brand posts for one pillar.

**Schema**:
```json
{
  "id": "learn-atomicassets-003",
  "text": "Full ready-to-post text...",
  "hooks": ["Hook 1", "Hook 2"],
  "cta": "Try it live in Hot or Not →",
  "tags": ["WAX", "AtomicAssets"]
}
```

Add new posts freely. The daily generator and Content Studio will pick them up automatically.

**Goal**: 80–120 high-quality entries across all 6 pillars in v1.