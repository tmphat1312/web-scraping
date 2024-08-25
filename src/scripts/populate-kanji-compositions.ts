import {
  VocabularyKanjiComposition,
  insertVocabularyKanjiCompositions,
} from '@/data/mutations/vocabulary-kanji-compositions';
import { getKanjiByCharacter } from '@/data/queries/kanji';
import { getMultipleVocabularyByCharacter } from '@/data/queries/vocabulary';
import { scrapeKanjiFoundInVocabulary } from '@/scraping/kanji';
import { scrapeSlugs } from '@/scraping/slugs';
import { wait } from '@/utils/wait';
import ora from 'ora';

(async function populate() {
  const fromLevel = 1;
  const toLevel = 60;

  for (let level = fromLevel; level <= toLevel; level++) {
    console.log(`== Level ${level} ==`);

    let spinner = ora();
    let slugs = await scrapeSlugs(level, 'kanji');
    let data: VocabularyKanjiComposition[] = [];

    for (let slug of slugs) {
      spinner.start(`Populating ${decodeURI(slug)} found in vocabulary...`);
      let foundInVocabulary = await scrapeKanjiFoundInVocabulary(slug);

      if (foundInVocabulary.vocabulary.length == 0) continue;
      if (!foundInVocabulary.kanji) {
        console.log(`Radical ${decodeURI(slug)} does not have a name!`);
        continue;
      }

      let [[kanji], vocabulary] = await Promise.all([
        getKanjiByCharacter(foundInVocabulary.kanji),
        getMultipleVocabularyByCharacter(foundInVocabulary.vocabulary),
      ]);

      let kanjiCompositions = vocabulary.map((v) => ({
        kanji_id: kanji.id,
        vocabulary_id: v.id,
      }));
      data = data.concat(kanjiCompositions);
      spinner.succeed(`Populated ${decodeURI(slug)} found in vocabulary`);
      await wait(210);
    }

    if (data.length > 0) {
      await insertVocabularyKanjiCompositions(data);
      data = [];
    }
  }
})();
