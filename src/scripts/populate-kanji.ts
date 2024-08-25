import { Kanji, insertKanji } from '@/drizzle/mutations/kanji';
import { scrapeKanji } from '@/scraping/kanji';
import { scrapeSlugs } from '@/scraping/slugs';
import { kanjiAdapter } from '@/utils/adapters';
import { wait } from '@/utils/wait';
import ora from 'ora';

(async function populate() {
  const fromLevel = 1;
  const toLevel = 60;

  for (let level = fromLevel; level <= toLevel; level++) {
    console.log(`== Level ${level} ==`);

    let spinner = ora();
    let slugs = await scrapeSlugs(level, 'kanji');
    let data: Kanji[] = [];

    for (let slug of slugs) {
      let decodedSlug = decodeURIComponent(slug);
      spinner.start(`Populating ${decodedSlug}...`);
      let kanji = await scrapeKanji(slug);
      data.push(kanjiAdapter(kanji));

      await wait(225);
      spinner.succeed(`Populated ${decodedSlug}`);
    }

    if (data.length > 0) {
      await insertKanji(data);
      data = [];
    }
  }
})();
