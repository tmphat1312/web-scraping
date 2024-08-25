import {
  Radical,
  insertRadicals,
  updateRadicalCharacterInSVG,
} from '@/drizzle/mutations/radicals';
import { getEmptyRadical } from '@/drizzle/queries/radicals';
import {
  scrapeRadical,
  scrapeRadicalCharacterInSVG,
} from '@/populating/scripts/radical';
import { scrapeSlugs } from '@/populating/scripts/slugs';
import { radicalAdapter } from '@/utils/adapters';
import { slugify } from '@/utils/slugify';
import { wait } from '@/utils/wait';
import { writeFile } from 'fs/promises';
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

  // Populate radicals with empty characters
  let emptyRadicals = await getEmptyRadical();
  let spinner = ora();

  for (let radical of emptyRadicals) {
    spinner.start(`Populating ${radical.name} SVG...`);
    let slug = slugify(radical.name);
    let svg = await scrapeRadicalCharacterInSVG(slug);

    if (svg) {
      await writeFile(`public/radicals/${slug}.svg`, svg);
      await updateRadicalCharacterInSVG(radical.id, `/radicals/${slug}.svg`);
      spinner.succeed(`Populated ${radical.name} SVG`);
      await wait(200);
    } else {
      spinner.fail(`Failed to populate ${radical.name} SVG`);
    }
  }
})();
