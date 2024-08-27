import { fromURL } from 'cheerio';

export async function scrapeVocabulary(slug: string) {
  let $ = await fromURL(`https://www.wanikani.com/vocabulary/${slug}`);
  return $.extract({
    level: {
      selector: `[class$="icon--level"]`,
      value: (el) => Number($(el).text()),
    },
    character: `[class$="icon--vocabulary"]`,
    primaryMeaning: `.subject-section__meanings-items:first`,
    alternativeMeanings: {
      selector: `.subject-section__meanings:eq(1)`,
      value: (el) => {
        let title = $(el).find('.subject-section__meanings-title').text();
        let item = $(el)
          .find('.subject-section__meanings-items')
          .text()
          .split(', ');
        return title.includes('Alternative') ? item : undefined;
      },
    },
    wordTypes: {
      selector: `.subject-section__meanings:last`,
      value: (el) => {
        let title = $(el).find('.subject-section__meanings-title').text();
        let item = $(el)
          .find('.subject-section__meanings-items')
          .text()
          .split(', ');
        return title.includes('Word') ? item : undefined;
      },
    },
    meaningExplanation: [
      {
        selector: `#section-meaning .subject-section__text`,
        value: (el) => $(el).html(),
      },
    ],
    readingExplanation: [
      {
        selector: `#section-reading .subject-section__text`,
        value: (el) => $(el).html(),
      },
    ],
    contextSentences: [
      {
        selector: `#section-context .subject-section__text`,
        value: (el) => {
          return $(el).extract({
            jaSentence: `p:first`,
            enSentence: `p:last`,
          });
        },
      },
    ],
    readings: [
      {
        selector: `.reading-with-audio__audio-item`,
        value: (el) => {
          let readingEl = $(el).closest('.reading-with-audio');
          return {
            source: $(el).find('source').attr('src')!,
            actor: $(el).find(`[class$="voice-actor-name"]`).text(),
            reading: $(readingEl).find(`[lang="ja"]`).text(),
          };
        },
      },
    ],
    commonUsagePatterns: [
      {
        selector: `.subject-collocations__pattern-name`,
        value: (el) => {
          let targetID = $(el).attr('aria-controls');
          return {
            pattern: $(el).text(),
            sentences: $(`#${targetID}`).extract({
              sentences: [
                {
                  selector: `.context-sentences`,
                  value: (el) => {
                    return $(el).extract({
                      jaSentence: `p:first`,
                      enSentence: `p:last`,
                    });
                  },
                },
              ],
            }).sentences,
          };
        },
      },
    ],
  });
}
