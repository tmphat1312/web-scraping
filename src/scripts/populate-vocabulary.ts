import { Vocabulary, insertVocabulary } from '@/data/mutations/vocabulary';
import { scrapeSlugs } from '@/scraping/slugs';
import { scrapeVocabulary } from '@/scraping/vocabulary';
import { vocabularyAdapter } from '@/utils/adapters';
import { wait } from '@/utils/wait';
import ora from 'ora';

(async function populate() {
  const fromLevel = 1;
  const toLevel = 1;

  for (let level = fromLevel; level <= toLevel; level++) {
    console.log(`== Level ${level} ==`);

    let spinner = ora();
    let slugs = await scrapeSlugs(level, 'vocabulary');
    let data: Vocabulary[] = [];

    for (let slug of slugs) {
      let decodedSlug = decodeURIComponent(slug);
      spinner.start(`Populating ${decodedSlug}...`);
      let vocabulary = await scrapeVocabulary(slug);

      data.push(vocabularyAdapter(vocabulary));
      await wait(200);
      spinner.succeed(`Populated ${decodedSlug}`);
    }

    if (data.length > 0) {
      await insertVocabulary(data);
      data = [];
    }
  }
})();
