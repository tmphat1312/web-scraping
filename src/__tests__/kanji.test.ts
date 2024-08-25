import {
  scrapeKanji,
  scrapeKanjiFoundInVocabulary,
  scrapeVisuallyKanji,
} from '../populating/scripts/kanji';

describe('scrape kanji', () => {
  it('should be the same kanji', async () => {
    let kanji = await scrapeKanji('ground');
    expect(kanji).toMatchSnapshot();
  });

  it('should be the same kanji found in vocabulary', async () => {
    let foundInVocabulary = await scrapeKanjiFoundInVocabulary('ground');
    expect(foundInVocabulary).toMatchSnapshot();
  });

  it('should be the same visually kanji', async () => {
    let visuallyKanji = await scrapeVisuallyKanji('ground');
    expect(visuallyKanji).toMatchSnapshot();
  });
});
