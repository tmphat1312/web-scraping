import { getMultipleKanjiByCharacter } from '@/drizzle/mutations/kanji';
import {
  VisuallySimilarKanji,
  insertVisuallySimilarKanji,
} from '@/drizzle/mutations/visually-similar-kanji';
import { scrapeVisuallyKanji } from '@/populating/scripts/kanji';
import { scrapeSlugs } from '@/populating/scripts/slugs';
import { wait } from '@/utils/wait';
import ora from 'ora';

(async function populate() {
  const fromLevel = 1;
  const toLevel = 60;

  for (let level = fromLevel; level <= toLevel; level++) {
    console.log(`== Level ${level} ==`);

    let spinner = ora();
    let slugs = await scrapeSlugs(level, 'kanji');
    let data: VisuallySimilarKanji[] = [];

    for (let slug of slugs) {
      let decodedSlug = decodeURIComponent(slug);
      spinner.start(`Populating visually similar ${decodedSlug}...`);

      let scraped = await scrapeVisuallyKanji(slug);

      if (!scraped.kanji) {
        console.log(`No kanji found for ${decodedSlug}`);
        continue;
      }
      if (scraped.kanji?.length == 0) continue;

      let [[kanjiSrc], kanjiDsts] = await Promise.all([
        getMultipleKanjiByCharacter([scraped.kanji]),
        getMultipleKanjiByCharacter(scraped.similar_kanji),
      ]);

      let visuallySimilarKanji = kanjiDsts.map((kanjiDst) => ({
        kanji_src_id: kanjiSrc.id,
        kanji_dst_id: kanjiDst.id,
      }));

      data = data.concat(visuallySimilarKanji);
      await wait(225);
      spinner.succeed(`Populated visually similar ${decodedSlug}`);
    }

    if (data.length > 0) {
      await insertVisuallySimilarKanji(data);
      data = [];
    }
  }
})();
