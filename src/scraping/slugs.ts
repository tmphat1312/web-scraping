import { fromURL } from 'cheerio';

export async function scrapeSlugs(
  level: number,
  type: 'kanji' | 'radicals' | 'vocabulary',
) {
  let $ = await fromURL(`https://www.wanikani.com/level/${level}`);
  return $.extract({
    data: [
      {
        selector: `a[href^="https://www.wanikani.com/${type}"]`,
        value: (el) => $(el).attr('href')!.split('/').pop(),
      },
    ],
  }).data;
}
