import { Kanji } from '@/drizzle/mutations/kanji';
import { Radical } from '@/drizzle/mutations/radicals';
import { Vocabulary } from '@/drizzle/mutations/vocabulary';
import { scrapeKanji } from '@/populating/scripts/kanji';
import { scrapeRadical } from '@/populating/scripts/radical';
import { scrapeVocabulary } from '@/populating/scripts/vocabulary';

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
