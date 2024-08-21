import { fromURL } from 'cheerio';

// TODO: deal with some radicals without a character in text format (svg or image)
export async function scrapeRadical(slug: string) {
  let $ = await fromURL(`https://www.wanikani.com/radicals/${slug}`);
  return $.extract({
    level: {
      selector: `[class$="icon--level"]`,
      value: (el) => Number($(el).text()),
    },
    character: `[class$="icon--radical"]`,
    primary_meaning: `[class$="__meanings-items"]:eq(0)`,
    alternative_meanings: `[class$="__meanings-items"]:eq(1)`,
    mnemonic: [
      {
        selector: '.subject-section__text',
        value: (el) => $(el).html(),
      },
    ],
  });
}

export async function scrapeRadicalFoundInKanji(slug: string) {
  let $ = await fromURL(`https://www.wanikani.com/radicals/${slug}`);
  return $.extract({
    radical_name: `[class$="icon--radical"]`,
    found_in_kanji: ['.subject-character__characters'],
  });
}
