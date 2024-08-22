import { Kanji } from '@/drizzle/mutations/kanji';

import { scrapeKanji } from '../scripts/kanji';

export function kanjiAdapter(
  scrapedData: Awaited<ReturnType<typeof scrapeKanji>>,
): Kanji {
  return {
    level: scrapedData.level!,
    character: scrapedData.character!,
    primary_meaning: scrapedData.primary_meaning!,
    alternative_meanings: scrapedData.alternative_meanings,
    meaning_mnemonic: scrapedData.meaning_mnemonic.join('\n'),
    meaning_hints: scrapedData.meaning_hints.join('\n'),
    reading_mnemonic: scrapedData.reading_mnemonic.join('\n'),
    reading_hints: scrapedData.reading_hints.join('\n'),
    kunyomi_reading: scrapedData.kunyomi_reading,
    onyomi_reading: scrapedData.onyomi_reading,
    nanori_reading: scrapedData.nanori_reading,
  };
}
