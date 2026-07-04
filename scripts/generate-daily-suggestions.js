import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const POST_DB_DIR = path.join(process.cwd(), 'post-database');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function readJSON(p) {
  try { return JSON.parse(await fs.readFile(p, 'utf8')); } catch { return []; }
}

async function writeJSON(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function generateDailySuggestions() {
  console.log('🚀 Generating smart daily Px content suggestions...');

  const config = JSON.parse(await fs.readFile('config.json', 'utf8'));
  const historyWindow = config.historyWindowDays || 21;
  const maxSuggestions = config.maxDailySuggestions || 5;
  const pillarWeights = config.pillarWeights || {};

  // Load all posts from the 6 pillar files
  const pillars = ['explore', 'learn', 'build', 'play', 'enjoy', 'lore'];
  let allPosts = [];

  for (const pillar of pillars) {
    const file = path.join(POST_DB_DIR, `${pillar}.json`);
    const posts = await readJSON(file);
    allPosts = allPosts.concat(posts.map(p => ({ ...p, pillar })));
  }

  console.log(`Loaded ${allPosts.length} total posts across all pillars.`);

  // Simple smart filter (in real version we would check used-history.json)
  // For v1 we just do random weighted selection
  const suggestions = [];
  const usedIds = new Set();

  // Weighted random selection favoring under-represented pillars
  for (let i = 0; i < maxSuggestions; i++) {
    const eligible = allPosts.filter(p => !usedIds.has(p.id));
    if (eligible.length === 0) break;

    // Simple weighting
    const weighted = eligible.map(p => ({
      ...p,
      weight: (pillarWeights[p.pillar] || 1) * (Math.random() + 0.5)
    }));
    weighted.sort((a, b) => b.weight - a.weight);

    const chosen = weighted[0];
    suggestions.push({
      id: chosen.id,
      pillar: chosen.pillar,
      text: chosen.text,
      suggested_at: new Date().toISOString()
    });
    usedIds.add(chosen.id);
  }

  await writeJSON(path.join(DATA_DIR, 'daily-suggestions.json'), {
    generated_at: new Date().toISOString(),
    count: suggestions.length,
    suggestions
  });

  console.log(`✅ Generated ${suggestions.length} smart suggestions.`);
  console.log('   Saved to data/daily-suggestions.json');
}

generateDailySuggestions().catch(console.error);