import { Vocabulary } from '@/drizzle/mutations/vocabulary';

import { scrapeVocabulary } from '../scripts/vocabulary';

export function vocabularyAdapter(
  scrapedData: Awaited<ReturnType<typeof scrapeVocabulary>>,
): Vocabulary {
  return {
    level: scrapedData.level!,
    character: scrapedData.character!,
    primary_meaning: scrapedData.primary_meaning!,
    alternative_meanings: scrapedData.alternative_meanings,
    word_types: scrapedData.word_types || 'Unknown',
    meaning_explanation: scrapedData.meaning_explanation.join('\n'),
    reading_explanation: scrapedData.reading_explanation.join('\n'),
  };
}
