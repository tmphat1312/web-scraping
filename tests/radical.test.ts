import {
  scrapeRadical,
  scrapeRadicalFoundInKanji,
} from '../src/scraping/radical';

describe('scrape radicals', () => {
  it('should be the same radical', async () => {
    let radical = await scrapeRadical('ground');
    expect(radical).toMatchSnapshot();
  });

  it('should be the same radical found in kanji', async () => {
    let foundInKanji = await scrapeRadicalFoundInKanji('ground');
    expect(foundInKanji).toMatchSnapshot();
  });
});
