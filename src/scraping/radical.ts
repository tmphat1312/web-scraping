import { fromURL } from 'cheerio';
import puppeteer from 'puppeteer';

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
    radical_name: `.page-header__title-text`,
    found_in_kanji: ['.subject-character__characters'],
  });
}

export async function scrapeRadicalCharacterInSVG(slug: string) {
  let browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.goto(`https://www.wanikani.com/radicals/${slug}`);
  await page.waitForNetworkIdle();
  let svg = await page.evaluate(
    () => document.querySelector('.radical-image')?.shadowRoot?.innerHTML,
  );
  await page.close();
  await browser.close();
  return svg;
}
