import { insertLevels } from '@/drizzle/mutations/levels';
import { scrapeLevels } from '@/scraping/levels';
import ora from 'ora';

(async function populate() {
  let spinner = ora();

  spinner.start(`Populating levels...`);
  let data = await scrapeLevels();
  await insertLevels(data);
  spinner.succeed(`Populated levels`);
})();
