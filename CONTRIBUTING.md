# Contributing to pixel-journey-marketing

Thank you for helping keep Pixel Journey content consistent, high-quality, and on-brand.

## How to Add New Posts

1. Choose the right pillar file in `post-database/`:
   - `explore.json`, `learn.json`, `build.json`, `play.json`, `enjoy.json`, `lore.json`

2. Add a new object with this structure:
```json
{
  "id": "unique-kebab-case-id",
  "text": "Full ready-to-post text here...",
  "hooks": ["Hook 1", "Hook 2"],
  "cta": "Clear call to action →",
  "tags": ["Relevant", "Tags"]
}
```

3. Keep the tone friendly, educational, retro-pixel, and slightly playful.
4. Prefer posts that reference verifiable on-chain mechanics when possible.
5. Run new posts through the Px Content Studio to test graphics pairing.

## Pull Request Process
- Keep PRs focused (one pillar or one improvement at a time)
- Update the embedded `postPool` in `demo/index.html` if adding many new posts
- The daily generator will automatically pick up new entries from the JSON files

## Questions?
Open an issue or ping the core team on X (@PxJourney).

We appreciate every contribution that helps the WAXFAMs community explore, learn, and enjoy Web3.