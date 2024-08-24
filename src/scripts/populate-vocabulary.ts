import { Vocabulary, insertVocabulary } from '@/drizzle/mutations/vocabulary';
import { vocabularyAdapter } from '@/populating/adapters/vocabulary-adapter';
import { scrapeSlugs } from '@/populating/scripts/slugs';
import { scrapeVocabulary } from '@/populating/scripts/vocabulary';
import { wait } from '@/utils/wait';
import ora from 'ora';

(async function populate() {
  const fromLevel = 31;
  const toLevel = 60;

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
