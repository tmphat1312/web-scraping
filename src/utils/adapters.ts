import {
  InsertCommonUsagePattern,
  InsertKanji,
  InsertRadical,
  InsertVoca,
} from '@/data/mutations';
import { scrapeKanji } from '@/scraping/kanji';
import { scrapeRadical } from '@/scraping/radical';
import { scrapeVocabulary } from '@/scraping/vocabulary';

export function kanjiAdapter(
  scrapedData: Awaited<ReturnType<typeof scrapeKanji>>,
): InsertKanji {
  return {
    level: scrapedData.level!,
    character: scrapedData.character!,
    primaryMeaning: scrapedData.primaryMeaning!,
    alternativeMeanings: scrapedData.alternativeMeanings,
    meaningMnemonic: scrapedData.meaningMnemonic,
    meaningHints: scrapedData.meaningHints,
    readingMnemonic: scrapedData.readingMnemonic,
    readingHints: scrapedData.readingHints,
    kunyomiReading: scrapedData.kunyomiReading,
    onyomiReading: scrapedData.onyomiReading,
    nanoriReading: scrapedData.nanoriReading,
  };
}

export function vocabularyAdapter(
  scrapedData: Awaited<ReturnType<typeof scrapeVocabulary>>,
): InsertVoca {
  return {
    level: scrapedData.level!,
    character: scrapedData.character!,
    primaryMeaning: scrapedData.primaryMeaning!,
    alternativeMeanings: scrapedData.alternativeMeanings,
    wordTypes: scrapedData.wordTypes || ['Unknown'],
    meaningExplanation: scrapedData.meaningExplanation,
    readingExplanation: scrapedData.readingExplanation,
    readings: scrapedData.readings,
    contextSentences: scrapedData.contextSentences,
  };
}

export function commonUsagePatternsAdapter(
  scrapedData: Awaited<ReturnType<typeof scrapeVocabulary>>,
  vocabularyId: InsertCommonUsagePattern['vocabularyId'],
): InsertCommonUsagePattern[] {
  return scrapedData.commonUsagePatterns.map((pattern) => ({
    vocabularyId,
    pattern: pattern.pattern,
    sentences: pattern.sentences,
  }));
}

export function radicalAdapter(
  scrapedData: Awaited<ReturnType<typeof scrapeRadical>>,
): InsertRadical {
  return {
    level: scrapedData.level!,
    character: scrapedData.character!,
    name: scrapedData.name!,
    mnemonic: scrapedData.mnemonic,
  };
}
