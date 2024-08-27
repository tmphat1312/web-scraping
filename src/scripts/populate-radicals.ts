import { insertRadicals } from '@/data/mutations';
import { scrapeRadical } from '@/scraping/radical';
import { radicalAdapter } from '@/utils/adapters';

import { populate } from './populate';

populate(3, 3, 'radicals', async (slug) => {
  let radical = await scrapeRadical(slug);
  await insertRadicals([radicalAdapter(radical)]);
});
