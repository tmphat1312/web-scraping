import { scrapeSlugs } from '@/scraping/slugs';
import { wait } from '@/utils/wait';
import ora from 'ora';

export async function populate(
  fromLevel: number,
  toLevel: number,
  type: Parameters<typeof scrapeSlugs>[1],
  fn: (slug: string) => Promise<void>,
) {
  let spinner = ora();

  for (let level = fromLevel; level <= toLevel; level++) {
    spinner.start(`Populating level ${level}...`);
    let slugs = await scrapeSlugs(level, type);

    for (let slug of slugs) {
      try {
        await fn(slug);
      } catch (error) {
        spinner.fail(`Failed to populate ${decodeURIComponent(slug)}`);
        console.error(error);
      } finally {
        await wait(200);
      }
    }

    spinner.succeed(`Populated level ${level}`);
  }
}
