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
    name: `[class$="meanings-items"]:eq(0)`,
    mnemonic: [
      {
        selector: '.subject-section__text',
        value: (el) => $(el).html(),
      },
    ],
    foundInKanji: ['.subject-character__characters'],
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
