import { Radical } from '@/drizzle/mutations/radicals';

import { scrapeRadical } from '../scripts/radical';

export function radicalAdapter(
  scrapedData: Awaited<ReturnType<typeof scrapeRadical>>,
): Radical {
  return {
    level: scrapedData.level!,
    character: scrapedData.character!,
    primary_meaning: scrapedData.primary_meaning!,
    alternative_meanings: scrapedData.alternative_meanings,
    mnemonic: scrapedData.mnemonic.join('\n'),
  };
}
