import { insertVisuallySimilarKanji } from '@/data/mutations';
import { getKanjiByCharacters } from '@/data/queries';
import { scrapeVisuallySimilarKanji } from '@/scraping/kanji';

import { populate } from './populate';

populate(1, 60, 'kanji', async (slug) => {
  let { kanji, similar_kanji } = await scrapeVisuallySimilarKanji(slug);

  if (!kanji || similar_kanji.length == 0) return;

  let [[srcKanji], dstKanji] = await Promise.all([
    getKanjiByCharacters([kanji]),
    getKanjiByCharacters(similar_kanji),
  ]);
  let visuallySimilarKanji = dstKanji.map((dst) => ({
    kanjiId: srcKanji.id,
    similarKanjiId: dst.id,
  }));

  if (visuallySimilarKanji.length > 0) {
    await insertVisuallySimilarKanji(visuallySimilarKanji);
  }
});
