import {
  SQLiteColumn,
  int,
  primaryKey,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core';

export const levels = sqliteTable('levels', {
  id: id(),
  minValue: int('min_value').notNull().unique(),
  maxValue: int('max_value').notNull().unique(),
  jaName: text('ja_name').notNull().unique(),
  enName: text('en_name').notNull().unique(),
});

export const radicals = sqliteTable('radicals', {
  id: id(),
  level: level(),
  character: character(),
  name: text('name').notNull(),
  mnemonic: json<string[]>('mnemonic').notNull(),
});

export const kanji = sqliteTable('kanji', {
  id: id(),
  level: level(),
  character: character().unique(),
  primaryMeaning: text('primary_meaning').notNull(),
  alternativeMeanings: json<string[]>('alternative_meanings'),
  meaningMnemonic: json<string[]>('meaning_mnemonic').notNull(),
  meaningHints: json<string[]>('meaning_hints'),
  kunyomiReading: text('kunyomi_reading'),
  onyomiReading: text('onyomi_reading'),
  nanoriReading: text('nanori_reading'),
  readingMnemonic: json<string[]>('reading_mnemonic').notNull(),
  readingHints: json<string[]>('reading_hints'),
});

export const vocabulary = sqliteTable('vocabulary', {
  id: id(),
  level: level(),
  character: character(),
  primaryMeaning: text('primary_meaning').notNull(),
  alternativeMeanings: json<string[]>('alternative_meanings'),
  wordTypes: json<string[]>('word_types').notNull(),
  meaningExplanation: json<string[]>('meaning_explanation').notNull(),
  readingExplanation: json<string[]>('reading_explanation').notNull(),
  readings: json<Reading[]>('readings').notNull(),
  contextSentences: json<BilingualSentence[]>('context_sentences').notNull(),
});

export const commonUsagePatterns = sqliteTable('common_usage_patterns', {
  id: id(),
  vocabularyId: fk('vocabulary_id', vocabulary.id),
  pattern: text('pattern').notNull(),
  sentences: json<BilingualSentence[]>('sentences').notNull(),
});

export const kanjiRadicalCompositions = sqliteTable(
  'kanji_radical_compositions',
  {
    radical_id: fk('radical_id', radicals.id),
    kanji_id: fk('kanji_id', kanji.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.radical_id, table.kanji_id] }),
  }),
);

export const vocaKanjiCompositions = sqliteTable(
  'voca_kanji_compositions',
  {
    kanji_id: fk('kanji_id', kanji.id),
    voca_id: fk('voca_id', vocabulary.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.kanji_id, table.voca_id] }),
  }),
);

type BilingualSentence = {
  enSentence?: string;
  jaSentence?: string;
};

type Reading = {
  reading: string;
  source: string;
  actor: string;
};

function id(name: string = 'id') {
  return int(name).primaryKey({ autoIncrement: true });
}
function fk(name: `${string}_id`, column: SQLiteColumn) {
  return int(name)
    .notNull()
    .references(() => column);
}
function level(name: string = 'level') {
  return int(name).notNull();
}
function character(name: string = 'character') {
  return text(name).notNull();
}
function json<T>(name: string) {
  return text(name, { mode: 'json' }).$type<T>();
}
