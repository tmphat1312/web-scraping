import { scrapeVocabulary } from '../vocabulary';

describe('scrape vocabulary', () => {
  it('should be the same vocabulary', async () => {
    let vocabulary = await scrapeVocabulary('日');
    expect(vocabulary).toMatchSnapshot();
  });
});
