import { fromURL } from 'cheerio';

export async function scrapeKanji(slug: string) {
  let $ = await fromURL(`https://www.wanikani.com/kanji/${slug}`);
  return $.extract({
    level: {
      selector: `[class$="icon--level"]`,
      value: (el) => Number($(el).text()),
    },
    character: `[class$="icon--kanji"]`,
    primaryMeaning: `[class$="meanings-items"]:eq(0)`,
    alternativeMeanings: {
      selector: `[class$="meanings-items"]:eq(1)`,
      value: (el) => $(el).text().split(', '),
    },
    meaningHints: [
      {
        selector: `#section-meaning .subject-hint__text`,
        value: (el) => $(el).html(),
      },
    ],
    meaningMnemonic: [
      {
        selector: `#section-meaning .subject-section__text`,
        value: (el) => $(el).html(),
      },
    ],
    onyomiReading: {
      selector: `.subject-readings__reading-items:eq(0)`,
      value: (el) => $(el).text().trim(),
    },
    kunyomiReading: {
      selector: `.subject-readings__reading-items:eq(1)`,
      value: (el) => $(el).text().trim(),
    },
    nanoriReading: {
      selector: `.subject-readings__reading-items:eq(2)`,
      value: (el) => $(el).text().trim(),
    },
    readingHints: [
      {
        selector: `#section-reading .subject-hint__text`,
        value: (el) => $(el).html(),
      },
    ],
    readingMnemonic: [
      {
        selector: `#section-reading .subject-section__text`,
        value: (el) => $(el).html(),
      },
    ],
    foundInVocabulary: [
      '#section-amalgamations .subject-character__characters',
    ],
  });
}

export async function scrapeVisuallySimilarKanji(slug: string) {
  let $ = await fromURL(`https://www.wanikani.com/kanji/${slug}`);
  return $.extract({
    kanji: `[class$="icon--kanji"]`,
    similar_kanji: ['#section-similar-subjects .subject-character__characters'],
  });
}
