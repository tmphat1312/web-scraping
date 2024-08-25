import { getMultipleKanjiByCharacter } from '@/data/mutations/kanji';
import {
  KanjiRadicalComposition,
  insertKanjiRadicalCompositions,
} from '@/data/mutations/kanji-radical-compositions';
import { getRadicalByName } from '@/data/mutations/radicals';
import { scrapeRadicalFoundInKanji } from '@/scraping/radical';
import { scrapeSlugs } from '@/scraping/slugs';
import { wait } from '@/utils/wait';
import ora from 'ora';

(async function populate() {
  const fromLevel = 1;
  const toLevel = 1;

  for (let level = fromLevel; level <= toLevel; level++) {
    console.log(`== Level ${level} ==`);

    let spinner = ora();
    let slugs = await scrapeSlugs(level, 'kanji');
    let data: KanjiRadicalComposition[] = [];

    for (let slug of slugs) {
      spinner.start(`Populating ${slug} found in kanji...`);
      let foundInKanji = await scrapeRadicalFoundInKanji(slug);

      if (foundInKanji.found_in_kanji.length == 0) continue;
      if (!foundInKanji.radical_name) {
        console.log(`Radical ${slug} does not have a name!`);
        continue;
      }

      let [[radical], kanji] = await Promise.all([
        getRadicalByName(foundInKanji.radical_name),
        getMultipleKanjiByCharacter(foundInKanji.found_in_kanji),
      ]);

      let radicalCompositions = kanji.map((k) => ({
        radical_id: radical.id,
        kanji_id: k.id,
      }));
      data = data.concat(radicalCompositions);

      spinner.succeed(`Populated ${slug} found in kanji`);
      await wait(210);
    }

    if (data.length > 0) {
      await insertKanjiRadicalCompositions(data);
      data = [];
    }
  }
})();
