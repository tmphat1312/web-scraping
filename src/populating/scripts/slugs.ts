import { fromURL } from 'cheerio';

// scrapeSlugs('radicals').then(console.log);

export async function scrapeSlugs(
  level: number,
  type: 'kanji' | 'radicals' | 'vocabulary',
) {
  const $ = await fromURL(`https://www.wanikani.com/level/${level}`);
  return $.extract({
    [type]: [
      {
        selector: `a[href^="https://www.wanikani.com/${type}"]`,
        value: (el) => $(el).attr('href')!.split('/').pop(),
      },
    ],
  })[type];
}
