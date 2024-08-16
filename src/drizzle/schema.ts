import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core';

export const levels = sqliteTable('levels', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  jp_name: text('jp_name').notNull().unique(),
  en_name: text('en_name').notNull().unique(),
  min_value: integer('min_value').notNull().unique(),
  max_value: integer('max_value').notNull().unique(),
});

export const voice_actors = sqliteTable('voice_actors', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
  description: text('description').notNull(),
});

export const radicals = sqliteTable('radicals', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  level: integer('level').notNull(),
  character: text('character').notNull().unique(),
  primary_meaning: text('primary_meaning').notNull().unique(),
  alternative_meanings: text('alternative_meanings'),
  mnemonic: text('mnemonic').notNull(),
});

export const kanji = sqliteTable('kanji', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  level: integer('level').notNull(),
  character: text('character').notNull().unique(),
  primary_meaning: text('primary_meaning').notNull(),
  alternative_meanings: text('alternative_meanings'),
  meaning_mnemonic: text('meaning_mnemonic').notNull(),
  meaning_hints: text('meaning_hints'),
  kunyomi_reading: text('kunyomi_reading'),
  onyomi_reading: text('onyomi_reading'),
  nanori_reading: text('nanori_reading'),
  reading_mnemonic: text('reading_mnemonic').notNull(),
  reading_hints: text('reading_hints'),
});

export const kanji_radical_compositions = sqliteTable(
  'kanji_radical_compositions',
  {
    kanji_id: integer('kanji_id').references(() => kanji.id),
    radical_id: integer('radical_id').references(() => radicals.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.kanji_id, table.radical_id] }),
  }),
);

export const visually_similar_kanji = sqliteTable(
  'visually_similar_kanji',
  {
    kanji_src_id: integer('kanji_src_id').references(() => kanji.id),
    kanji_dst_id: integer('kanji_dst_id').references(() => kanji.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.kanji_src_id, table.kanji_dst_id] }),
  }),
);

export const vocabulary_kanji_compositions = sqliteTable(
  'vocabulary_kanji_compositions',
  {
    kanji_id: integer('kanji_id').references(() => kanji.id),
    vocabulary_id: integer('vocabulary_id').references(() => vocabulary.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.kanji_id, table.vocabulary_id] }),
  }),
);

export const vocabulary = sqliteTable('vocabulary', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  level: integer('level').notNull(),
  primary_meaning: text('primary_meaning').notNull(),
  alternative_meanings: text('alternative_meanings'),
  word_types: text('word_types').notNull(),
  meaning_explanation: text('meaning_explanation').notNull(),
  reading_explanation: text('reading_explanation'),
});

export const vocabulary_readings = sqliteTable(
  'vocabulary_readings',
  {
    vocabulary_id: integer('vocabulary_id').references(() => vocabulary.id),
    reading_number: integer('reading_number').notNull(),
    reading: text('reading').notNull(),
    actor_id: integer('actor_id').references(() => voice_actors.id),
    sources: text('sources').notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.vocabulary_id, table.reading_number] }),
  }),
);

export const context_patterns = sqliteTable(
  'context_patterns',
  {
    vocabulary_id: integer('vocabulary_id').references(() => vocabulary.id),
    pattern_number: integer('pattern_number').notNull(),
    pattern: text('pattern').notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.vocabulary_id, table.pattern_number] }),
  }),
);

export const context_pattern_sentences = sqliteTable(
  'context_pattern_sentences',
  {
    vocabulary_id: integer('vocabulary_id').references(() => vocabulary.id),
    pattern_number: integer('pattern_number').references(
      () => context_patterns.pattern_number,
    ),
    pattern_sentence_number: integer('pattern_sentence_number').notNull(),
    jp_sentence: text('jp_sentence').notNull(),
    en_sentence: text('en_sentence').notNull(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [
        table.vocabulary_id,
        table.pattern_number,
        table.pattern_sentence_number,
      ],
    }),
  }),
);
