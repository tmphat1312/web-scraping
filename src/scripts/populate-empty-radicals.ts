import { updateRadicalCharacterInSVG } from '@/drizzle/mutations/radicals';
import { getEmptyRadical } from '@/drizzle/queries/radicals';
import { scrapeRadicalCharacterInSVG } from '@/populating/scripts/empty-radical';
import { wait } from '@/utils/wait';
import { writeFile } from 'fs/promises';
import ora from 'ora';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

(async function populate() {
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
