import { insertKanji } from '@/data/mutations';
import { scrapeKanji } from '@/scraping/kanji';
import { kanjiAdapter } from '@/utils/adapters';

import { populate } from './populate';

populate(3, 3, 'kanji', async (slug) => {
  let kanji = await scrapeKanji(slug);
  await insertKanji([kanjiAdapter(kanji)]);
});
