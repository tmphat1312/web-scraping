import { fromURL } from 'cheerio';

export async function scrapeLevels() {
  let $ = await fromURL(`https://www.wanikani.com/kanji`);
  return $.extract({
    levels: [
      {
        selector: `.sitemap__group-header`,
        value: (el) => {
          let [jaName, enName] = $(el).text().split(' ');
          return {
            jaName,
            enName,
            minValue: Number($(el).next().find('a').first().text()),
            maxValue: Number($(el).next().find('a').last().text()),
          };
        },
      },
    ],
  }).levels;
}
