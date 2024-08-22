import puppeteer from 'puppeteer';

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
