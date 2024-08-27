import { scrapeRadical } from '../radical';

describe('scrape radicals', () => {
  it('should be the same ground radical', async () => {
    let radical = await scrapeRadical('ground');
    expect(radical).toMatchSnapshot();
  });

  it('should be the same sun radical', async () => {
    let radical = await scrapeRadical('sun');
    expect(radical).toMatchSnapshot();
  });
});
