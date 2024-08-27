import { insertKanji, insertVocaKanjiCompositions } from '@/data/mutations';
import { getVocabularyByCharacters } from '@/data/queries';
import { scrapeKanji } from '@/scraping/kanji';
import { kanjiAdapter } from '@/utils/adapters';

import { populate } from './populate';

populate(1, 60, 'kanji', async (slug) => {
  let kanji = await scrapeKanji(slug);
  let [insertedKanji] = await insertKanji([kanjiAdapter(kanji)]);
  let vocabulary = await getVocabularyByCharacters(kanji.foundInVocabulary);
  let kanjiCompositions = vocabulary.map((voca) => ({
    kanji_id: insertedKanji.id,
    voca_id: voca.id,
  }));

  if (kanjiCompositions.length > 0) {
    await insertVocaKanjiCompositions(kanjiCompositions);
  }
});
