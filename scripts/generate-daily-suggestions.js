import fs from 'fs/promises';
import path from 'path';

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data');
const POST_DB_DIR = path.join(ROOT, 'post-database');
const CONFIG_PATH = path.join(ROOT, 'config.json');
const USED_HISTORY_PATH = path.join(DATA_DIR, 'used-history.json');

const PILLARS = ['explore', 'learn', 'build', 'play', 'enjoy', 'lore'];

async function readJSON(filePath, fallback = null) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return JSON.parse(content);
  } catch {
    return fallback;
  }
}

async function writeJSON(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

function daysAgo(days) {
  return Date.now() - (days * 24 * 60 * 60 * 1000);
}

async function generateDailySuggestions() {
  console.log('\n\ud83d\ude80 [Px Content Engine] Generating smart daily suggestions...');

  // Load config
  const config = await readJSON(CONFIG_PATH, {
    historyWindowDays: 21,
    maxDailySuggestions: 5,
    pillarWeights: { explore: 1.2, learn: 1.5, build: 1.0, play: 1.3, enjoy: 1.4, lore: 0.9 }
  });

  const historyWindow = config.historyWindowDays || 21;
  const maxSuggestions = config.maxDailySuggestions || 5;
  const pillarWeights = config.pillarWeights || {};

  // Load all posts from post-database/
  let allPosts = [];
  for (const pillar of PILLARS) {
    const filePath = path.join(POST_DB_DIR, `${pillar}.json`);
    const posts = await readJSON(filePath, []);
    allPosts = allPosts.concat(posts.map(p => ({ ...p, pillar })));
  }
  console.log(`   Loaded ${allPosts.length} posts across ${PILLARS.length} pillars.`);

  // Load used history
  let usedHistory = await readJSON(USED_HISTORY_PATH, []);
  const cutoff = daysAgo(historyWindow);

  // Filter eligible posts (not used recently)
  const eligible = allPosts.filter(post => {
    const lastUsed = usedHistory.find(h => h.id === post.id)?.ts || 0;
    return lastUsed < cutoff;
  });

  console.log(`   ${eligible.length} posts eligible after ${historyWindow}-day history filter.`);

  if (eligible.length === 0) {
    console.log('   \u26a0\ufe0f No eligible posts. Relaxing filter...');
    // Fallback: use all posts if nothing is eligible
    eligible.push(...allPosts);
  }

  // Weighted selection
  const suggestions = [];
  const selectedIds = new Set();

  for (let i = 0; i < Math.min(maxSuggestions, eligible.length); i++) {
    // Calculate weights
    const weighted = eligible
      .filter(p => !selectedIds.has(p.id))
      .map(p => {
        const weight = (pillarWeights[p.pillar] || 1) * (0.8 + Math.random() * 0.6); // slight randomness
        return { ...p, _weight: weight };
      })
      .sort((a, b) => b._weight - a._weight);

    if (weighted.length === 0) break;

    const chosen = weighted[0];
    suggestions.push({
      id: chosen.id,
      pillar: chosen.pillar,
      text: chosen.text,
      hooks: chosen.hooks || [],
      cta: chosen.cta || '',
      suggested_at: new Date().toISOString()
    });
    selectedIds.add(chosen.id);

    // Record usage
    usedHistory = usedHistory.filter(h => h.id !== chosen.id);
    usedHistory.unshift({ id: chosen.id, ts: Date.now() });
  }

  // Trim history to reasonable size
  usedHistory = usedHistory.slice(0, 200);

  // Write outputs
  await writeJSON(path.join(DATA_DIR, 'daily-suggestions.json'), {
    generated_at: new Date().toISOString(),
    count: suggestions.length,
    history_window_days: historyWindow,
    suggestions
  });

  await writeJSON(USED_HISTORY_PATH, usedHistory);

  console.log(`\u2705 Generated ${suggestions.length} smart suggestions.`);
  console.log(`   Saved to data/daily-suggestions.json`);
  console.log(`   Updated used-history.json (${usedHistory.length} entries)`);
  if (suggestions.length > 0) {
    console.log('   Top suggestion:', suggestions[0].text.substring(0, 80) + '...');
  }
}

generateDailySuggestions().catch(err => {
  console.error('\u274c Error generating suggestions:', err);
  process.exit(1);
});