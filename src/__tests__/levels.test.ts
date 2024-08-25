import { scrapeLevels } from '../populating/scripts/levels';

describe('scrape levels', () => {
  it('should be the same levels', async () => {
    let levels = await scrapeLevels();
    expect(levels).toMatchSnapshot();
  });
});
