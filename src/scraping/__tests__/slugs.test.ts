import { scrapeSlugs } from '../slugs';

describe('scrape slugs', () => {
  it('should be the same radical slugs', async () => {
    let slugs = await scrapeSlugs(1, 'radicals');
    expect(slugs).toMatchSnapshot();
  });

  it('should be the same kanji slugs', async () => {
    let slugs = await scrapeSlugs(1, 'kanji');
    expect(slugs).toMatchSnapshot();
  });

  it('should be the same vocabulary slugs', async () => {
    let slugs = await scrapeSlugs(1, 'vocabulary');
    expect(slugs).toMatchSnapshot();
  });
});
