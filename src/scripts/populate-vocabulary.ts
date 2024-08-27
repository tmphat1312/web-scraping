import { insertCommonUsagePatterns, insertVocabulary } from '@/data/mutations';
import { scrapeVocabulary } from '@/scraping/vocabulary';
import {
  commonUsagePatternsAdapter,
  vocabularyAdapter,
} from '@/utils/adapters';

import { populate } from './populate';

populate(1, 60, 'vocabulary', async (slug) => {
  let scrapedVoca = await scrapeVocabulary(slug);
  let [insertedVoca] = await insertVocabulary([vocabularyAdapter(scrapedVoca)]);

  if (scrapedVoca.commonUsagePatterns.length != 0) {
    await insertCommonUsagePatterns(
      commonUsagePatternsAdapter(scrapedVoca, insertedVoca.id),
    );
  }
});
