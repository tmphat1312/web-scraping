import { Radical, insertRadicals } from '@/drizzle/mutations/radicals';
import { radicalAdapter } from '@/populating/adapters/radical-adapter';
import { scrapeRadical } from '@/populating/scripts/radical';
import { scrapeSlugs } from '@/populating/scripts/slugs';
import { wait } from '@/utils/wait';
import ora from 'ora';

(async function populate() {
  const fromLevel = 1;
  const toLevel = 60;

  for (let level = fromLevel; level <= toLevel; level++) {
    console.log(`== Level ${level} ==`);

    let spinner = ora();
    let slugs = await scrapeSlugs(level, 'radicals');
    let data: Radical[] = [];

    for (let slug of slugs) {
      spinner.start(`Populating ${slug}...`);
      let radical = await scrapeRadical(slug);
      data.push(radicalAdapter(radical));

      await wait(200);
      spinner.succeed(`Populated ${slug}`);
    }

    if (data.length > 0) {
      await insertRadicals(data);
      data = [];
    }
  }
})();
