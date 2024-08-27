import {
  insertKanjiRadicalCompositions,
  insertRadicals,
} from '@/data/mutations';
import { getKanjiByCharacters } from '@/data/queries';
import { scrapeRadical } from '@/scraping/radical';
import { radicalAdapter } from '@/utils/adapters';

import { populate } from './populate';

populate(1, 60, 'radicals', async (slug) => {
  let radical = await scrapeRadical(slug);
  let [insertedRadical] = await insertRadicals([radicalAdapter(radical)]);
  let kanji = await getKanjiByCharacters(radical.foundInKanji);
  let radicalCompositions = kanji.map((k) => ({
    radicalId: insertedRadical.id,
    kanjiId: k.id,
  }));

  if (radicalCompositions.length > 0) {
    await insertKanjiRadicalCompositions(radicalCompositions);
  }
});
