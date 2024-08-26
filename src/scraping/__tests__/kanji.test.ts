import { scrapeKanji } from '../kanji';

describe('scrape kanji', () => {
  it('should scrape kanji', async () => {
    let kanji = await scrapeKanji('大');
    expect(kanji).toMatchSnapshot();
  });
});
